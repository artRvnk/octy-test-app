import { all } from 'redux-saga/effects'

import { currencyWatcher } from '@/entities/currency'
import { userWatcher } from '@/entities/user'

function* rootSaga() {
  yield all([userWatcher(), currencyWatcher()])
}

export default rootSaga
