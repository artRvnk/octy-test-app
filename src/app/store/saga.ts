import { all } from 'redux-saga/effects'

import { currencyWatcher } from '@/entities/currency'
import { favoriteWatcher } from '@/entities/favorite'

function* rootSaga() {
  yield all([favoriteWatcher(), currencyWatcher()])
}

export default rootSaga
