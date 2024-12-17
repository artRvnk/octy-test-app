import { useContext, useState } from 'react'

import { captureException } from '@sentry/react-native'
import { isAxiosError } from 'axios'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { ConnectionContext } from '@/app/context'
import { useTypedSelector } from '@/app/store'

import { TData, usePagination, useToast } from '@/shared/lib'

import { CryptoData, FiatData, TCoin } from '../models'
import { CoinService } from '../services'
import { coinActions, getCoinSelector } from '../store'

const convertCoins = (data: CryptoData): TCoin[] => {
  return Object.values(data)
}

const convertFiat = (data: FiatData): TData[] => {
  return Object.entries(data).map(([code, name]) => ({
    key: code,
    value: name,
  }))
}

export const useGetCoins = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { connected } = useContext(ConnectionContext)

  const [currencies, setCoins] = useState<TCoin[]>([])
  const [loading, setLoading] = useState(false)

  const { callToast } = useToast()

  const { fiatData, coins } = useTypedSelector(getCoinSelector)

  const getCoins = async () => {
    setLoading(true)

    try {
      const response = await CoinService.getCoins({})
      // console.log('CoinService.getCoins', response)

      const data = response.data

      if (data.success) {
        if (!!data.crypto) {
          const cryptoData = convertCoins(data.crypto)
          // console.log('CoinService.cryptoData', cryptoData)

          setCoins(cryptoData)

          if (!coins.length) {
            dispatch(coinActions.setCoins(cryptoData))
          }
        }

        if (!!data.fiat && !fiatData.length) {
          const dataFiat = convertFiat(data.fiat)
          // console.log('CoinService.dataFiat', dataFiat)

          dispatch(coinActions.setFiatData(dataFiat))
        }
      }

      if (!data.success && !!data?.error) {
        callToast({ message: data?.error?.info })
      }
    } catch (e) {
      // console.log('CoinService.getCoins e', e)

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
    data: connected ? currencies : coins,
    ...paginationProps,
  }
}
