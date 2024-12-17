import { TPayload } from '@/shared/api'

import { RateData } from '../../models'

export type TGetLiveRatePayload = TPayload<TRequest, TResponse>

type TRequest = {
  target: string
  symbols: string
  // target = GBP
  // symbols = BTC,ETH
}

type TResponse = {
  success: boolean
  terms: string
  privacy: string
  timestamp: number
  target: string
  rates: RateData
}
