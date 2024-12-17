import { TData } from '@/shared/lib'

import { TCoin } from '../models'

export type TInitialState = {
  loading: boolean

  fiatData: TData[]
  coins: TCoin[]
}
