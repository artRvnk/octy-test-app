import { TPayload } from '@/shared/api'

import { CryptoData, FiatData } from '../../models'

export type TGetCurrenciesPayload = TPayload<TRequest, TResponse>

type TRequest = {}

type TResponse = {
  success: boolean
  crypto: CryptoData
  fiat: FiatData
}
