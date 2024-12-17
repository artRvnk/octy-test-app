import { TPayload, TQueryErrorData } from '@/shared/api'

import { TLiveRate } from '../../models'

export type TGetLiveRatePayload = TPayload<TRequest, TResponse>

type TRequest = {
  target: string
  symbols: string
}

type TResponse = TLiveRate & Partial<TQueryErrorData>
