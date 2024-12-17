import { combineReducers } from '@reduxjs/toolkit'

import { coinReducer } from '@/entities/coin'
import { favoriteReducer } from '@/entities/favorite'

import { EStoreReducer } from './types'

export default combineReducers({
  [EStoreReducer.favorite]: favoriteReducer,
  [EStoreReducer.coin]: coinReducer,
})
