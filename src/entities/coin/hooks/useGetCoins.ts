import { useState } from 'react'

import { captureException } from '@sentry/react-native'

import { isAxiosError } from 'axios'

import { useTranslation } from 'react-i18next'

import { usePagination, useToast } from '@/shared/lib'

import { CryptoData, TCoin } from '../models'
import { CoinService } from '../services'

const convertDataToArray = (data: CryptoData): TCoin[] => {
  return Object.values(data)
}

export const useGetCoins = () => {
  const { t } = useTranslation()

  const [currencies, setCoins] = useState<TCoin[]>([])
  const [loading, setLoading] = useState(false)

  const { callToast } = useToast()

  const getCoins = async () => {
    setLoading(true)

    try {
      const response = await CoinService.getCoins({})

      // console.log('CoinService.getCoins', response)

      const data = response.data

      const cryptoData = convertDataToArray(data.crypto)
      // console.log('CoinService.cryptoData', cryptoData)

      setCoins(cryptoData)
    } catch (e) {
      if (isAxiosError(e)) {
        if (e.code === 'ERR_NETWORK') {
          callToast({ message: t('no_wifi') })
          return
        }

        callToast({ message: e?.message })
        return
      }

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
