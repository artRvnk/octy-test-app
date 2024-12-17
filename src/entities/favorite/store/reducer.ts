import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Reducers } from '@/app/store/tools'
import { EStoreReducer } from '@/app/store/types'

import { TCurrency } from '@/entities/currency'

import { TInitialState } from './types'

const initialState: TInitialState = {
  loading: false,
  favorites: [],
}

export const slice = createSlice({
  name: EStoreReducer.favorite,
  initialState,
  reducers: {
    setState: Reducers.setState<TInitialState>(),
    clearState: Reducers.clearState<TInitialState>(initialState),

    addFavorite: (state, { payload }: PayloadAction<TCurrency>) => {
      state.favorites = [payload, ...state.favorites]
    },
    deleteFavorite: (state, { payload }: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(el => el.symbol !== payload)
    },
    clearFavorites: state => {
      state.favorites = []
    },
  },
})

export const sliceActions = slice.actions

export default slice.reducer
