import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { theme } from './config'
import { Navigation } from './ref'
import { MainTab } from './tabs'

export const Navigator = () => {
  return (
    <NavigationContainer ref={Navigation.ref} theme={theme}>
      <MainTab />
    </NavigationContainer>
  )
}
