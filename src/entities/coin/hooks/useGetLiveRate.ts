import { useState, useEffect } from 'react'

import { captureException } from '@sentry/react-native'
import { isAxiosError } from 'axios'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@/app/store'

import { TData, usePagination, useToast } from '@/shared/lib'

import { CryptoData, FiatData, TCoin, TFiat, TLiveRate } from '../models'
import { CoinService } from '../services'
import { coinActions, getCoinSelector } from '../store'

export const useGetLiveRate = ({
  target = 'USD',
  symbols,
}: {
  target?: string
  symbols: string
}) => {
  const { t } = useTranslation()

  const [fiat, setFiat] = useState<TLiveRate>()
  const [loading, setLoading] = useState(false)

  const { callToast } = useToast()

  const getLiveRate = async () => {
    setLoading(true)

    try {
      const response = await CoinService.getLiveRate({ target, symbols })
      // console.log('CoinService.getLiveRate', response)

      const data = response.data
      // console.log('CoinService.getLiveRate', data)

      setFiat(data)

      if (!data.success && !!data?.error) {
        callToast({ message: data?.error?.info })
      }
    } catch (e) {
      // console.log('CoinService.getLiveRate e', e)

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

  useEffect(() => {
    getLiveRate()
  }, [target, symbols])

  return {
    fiat,
    loading,
  }
}
