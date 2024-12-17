import { PayloadAction } from '@reduxjs/toolkit'
import { captureException } from '@sentry/react-native'
import { call, put, takeLatest } from 'redux-saga/effects'

import { TSagaResponse } from '@/app/store'

import { CoinService, TGetCoinsPayload } from '../services'

import { coinActions } from './actions'
import { ActionsTypes } from './constants'

export function* coinWatcher() {}
