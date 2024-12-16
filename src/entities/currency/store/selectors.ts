import { EStoreReducer, TRootState } from '@/app/store'

export const getCurrencySelector = (state: TRootState) =>
  state[EStoreReducer.currency]
