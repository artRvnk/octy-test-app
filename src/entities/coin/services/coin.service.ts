import { TResponse, apiPrivate } from '@/shared/api'

import type * as Types from './types'

export class CoinService {
  public static async getCoins(
    params: Types.TGetCoinsPayload['request'],
  ): TResponse<Types.TGetCoinsPayload['response']> {
    return apiPrivate.get('/list', { params })
  }

  public static async getLiveRate(
    params: Types.TGetLiveRatePayload['request'],
  ): TResponse<Types.TGetLiveRatePayload['response']> {
    return apiPrivate.get('/live', { params })
  }
}
