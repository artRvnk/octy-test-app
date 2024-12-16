import { API_KEY, BASE_API } from '@env'
import axios from 'axios'

import { store } from '@/app/store'

// import { FirebaseService, userActions } from '@/entities/user'

const privateInstance = axios.create({
  baseURL: BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

privateInstance.interceptors.request.use(
  async config => {
    const accessKey = API_KEY

    // const token = await FirebaseService.getToken()

    // if (token && config.headers) {
    //   config.headers.Authorization = 'Bearer ' + token
    // }
    // console.log('config: ', config)
    // console.log('token: ', token)

    config.params = {
      ...(config.params || {}),
      access_key: accessKey,
    }

    return config
  },
  error => {
    return Promise.reject(error)
  },
)

privateInstance.interceptors.response.use(
  response => {
    console.log('ApiProvider-RESPONSE', response?.request?.__sentry_xhr_v3__)

    return response
  },
  async error => {
    if (
      error?.response?.status === 401 ||
      error.response?.data?.statusCode === 401
    ) {
      // store.dispatch(userActions.logOut())
    }

    return Promise.reject(error)
  },
)

export const apiPrivate = privateInstance
