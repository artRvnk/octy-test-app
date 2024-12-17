import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'

import * as Sentry from '@sentry/react-native'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Context } from './context'
import { Navigator } from './navigation'
import { persistor, store } from './store'

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1500)
  }, [])

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Context>
            <Navigator />
          </Context>
        </PersistGate>
      </Provider>
    </>
  )
}

export default Sentry.wrap(App)
