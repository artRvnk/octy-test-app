import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Reducers } from '@/app/store/tools'
import { EStoreReducer } from '@/app/store/types'

import { TInitialState } from './types'

const initialState: TInitialState = {
  loading: false,
}

export const slice = createSlice({
  name: EStoreReducer.coin,
  initialState,
  reducers: {
    setState: Reducers.setState<TInitialState>(),
    clearState: Reducers.clearState<TInitialState>(initialState),
  },
})

export const sliceActions = slice.actions

export default slice.reducer
