import { TResponse, apiPrivate } from '@/shared/api'

import type * as Types from './types'

export class CurrencyService {
  public static async getCurrencies(
    params: Types.TGetCurrenciesPayload['request'],
  ): TResponse<Types.TGetCurrenciesPayload['response']> {
    return apiPrivate.get('/api/list', { params })
  }
}
