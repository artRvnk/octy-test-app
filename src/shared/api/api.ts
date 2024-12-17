import { API_KEY, BASE_API } from '@env'
import NetInfo from '@react-native-community/netinfo'
import axios from 'axios'

const checkInternetConnection = async () => {
  const networkState = await NetInfo.fetch()

  if (!networkState?.isInternetReachable) {
    throw new axios.Cancel('No Internet Connection!')
  }
}

const privateInstance = axios.create({
  baseURL: BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

privateInstance.interceptors.request.use(
  async config => {
    try {
      await checkInternetConnection()

      const accessKey = API_KEY

      config.params = {
        ...(config.params || {}),
        access_key: accessKey,
      }

      return config
    } catch (error) {
      if (axios.isCancel(error)) {
        return Promise.reject(
          new Error('Request canceled due to no internet connection.'),
        )
      }

      return Promise.reject(error)
    }
  },
  error => {
    return Promise.reject(error)
  },
)

privateInstance.interceptors.response.use(
  response => {
    // console.log('ApiProvider-RESPONSE', response?.request?.__sentry_xhr_v3__)

    return response
  },
  async error => {
    return Promise.reject(error)
  },
)

export const apiPrivate = privateInstance
