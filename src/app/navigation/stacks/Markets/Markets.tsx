import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MarketsScreens } from '@/screens/Markets'

import { EScreens } from '../../screens'

import { ScreenNavigationOptions } from '../options'

import { TMarketsStack } from './types'

const Stack = createNativeStackNavigator<TMarketsStack>()

export const MarketsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.MarketsMain}
      screenOptions={ScreenNavigationOptions}>
      <Stack.Screen
        name={EScreens.MarketsMain}
        component={MarketsScreens.Main}
      />

      <Stack.Screen
        name={EScreens.MarketsSingle}
        component={MarketsScreens.Single}
      />
    </Stack.Navigator>
  )
}
