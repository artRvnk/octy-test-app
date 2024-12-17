import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Reducers } from '@/app/store/tools'
import { EStoreReducer } from '@/app/store/types'

import { TData } from '@/shared/lib'

import { TInitialState } from './types'

const initialState: TInitialState = {
  loading: false,

  fiatData: [],
}

export const slice = createSlice({
  name: EStoreReducer.coin,
  initialState,
  reducers: {
    setState: Reducers.setState<TInitialState>(),
    clearState: Reducers.clearState<TInitialState>(initialState),

    setFiatData: (state, { payload }: PayloadAction<TData[]>) => {
      state.fiatData = payload
    },
    clearFiatData: state => {
      state.fiatData = []
    },
  },
})

export const sliceActions = slice.actions

export default slice.reducer
