import { TCurrency } from '@/entities/currency'

export type TInitialState = {
  loading: boolean
  favorites: TCurrency[]
}
