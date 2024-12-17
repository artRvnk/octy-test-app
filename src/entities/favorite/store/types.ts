import { TCoin } from '@/entities/coin'

export type TInitialState = {
  loading: boolean
  favorites: TCoin[]
}
