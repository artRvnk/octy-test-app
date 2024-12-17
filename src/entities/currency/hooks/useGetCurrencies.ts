import { useState } from 'react'

import { captureException } from '@sentry/react-native'

import { CryptoData, TCurrency } from '../models'
import { CurrencyService } from '../services'

import { usePagination } from './usePagination'

const convertDataToArray = (data: CryptoData): TCurrency[] => {
  return Object.values(data)
}

export const useGetCurrencies = () => {
  const [currencies, setCurrencies] = useState<TCurrency[]>([])
  const [loading, setLoading] = useState(false)

  const getCurrencies = async () => {
    setLoading(true)

    try {
      const response = await CurrencyService.getCurrencies({})

      //   console.log('CurrencyService.getCurrencies', response)

      const data = response.data

      const cryptoData = convertDataToArray(data.crypto)
      console.log('CurrencyService.cryptoData', cryptoData)

      setCurrencies(cryptoData)
    } catch (e) {
      captureException(e)
    }

    setLoading(false)
  }

  const paginationProps = usePagination({
    loading,
    getAction: getCurrencies,
    items: currencies,
  })

  return {
    data: currencies,
    ...paginationProps,
  }
}
