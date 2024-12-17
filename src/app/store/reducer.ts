import { combineReducers } from '@reduxjs/toolkit'

import { currencyReducer } from '@/entities/currency'
import { favoriteReducer } from '@/entities/favorite'

import { EStoreReducer } from './types'

export default combineReducers({
  [EStoreReducer.favorite]: favoriteReducer,
  [EStoreReducer.currency]: currencyReducer,
})
