import { all } from 'redux-saga/effects'

import { coinWatcher } from '@/entities/coin'
import { favoriteWatcher } from '@/entities/favorite'

function* rootSaga() {
  yield all([favoriteWatcher(), coinWatcher()])
}

export default rootSaga
