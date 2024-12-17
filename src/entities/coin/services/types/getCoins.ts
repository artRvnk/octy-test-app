import { TPayload } from '@/shared/api'

import { CryptoData, FiatData } from '../../models'

export type TGetCoinsPayload = TPayload<TRequest, TResponse>

type TRequest = {}

type TResponse = {
  success: boolean
  crypto: CryptoData
  fiat: FiatData
}
