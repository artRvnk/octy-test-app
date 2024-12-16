import { combineReducers } from '@reduxjs/toolkit'

import { currencyReducer } from '@/entities/currency'
import { userReducer } from '@/entities/user'

import { EStoreReducer } from './types'

export default combineReducers({
  [EStoreReducer.user]: userReducer,
  [EStoreReducer.currency]: currencyReducer,
})
