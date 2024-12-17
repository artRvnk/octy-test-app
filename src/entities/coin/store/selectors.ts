import { EStoreReducer, TRootState } from '@/app/store'

export const getCoinSelector = (state: TRootState) => state[EStoreReducer.coin]
