import { useState } from 'react'

import { captureException } from '@sentry/react-native'

import { CryptoData, TCoin } from '../models'
import { CoinService } from '../services'

import { usePagination } from './usePagination'

const convertDataToArray = (data: CryptoData): TCoin[] => {
  return Object.values(data)
}

export const useGetCoins = () => {
  const [currencies, setCoins] = useState<TCoin[]>([])
  const [loading, setLoading] = useState(false)

  const getCoins = async () => {
    setLoading(true)

    try {
      const response = await CoinService.getCoins({})

      //   console.log('CoinService.getCoins', response)

      const data = response.data

      const cryptoData = convertDataToArray(data.crypto)
      console.log('CoinService.cryptoData', cryptoData)

      setCoins(cryptoData)
    } catch (e) {
      captureException(e)
    }

    setLoading(false)
  }

  const paginationProps = usePagination({
    loading,
    getAction: getCoins,
    items: currencies,
  })

  return {
    data: currencies,
    ...paginationProps,
  }
}
