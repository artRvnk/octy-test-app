import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreens } from '@/screens/Home'

import { EScreens } from '../../screens'

import { ScreenNavigationOptions } from '../options'

import { THomeStack } from './types'

const Stack = createNativeStackNavigator<THomeStack>()

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.HomeMain}
      screenOptions={ScreenNavigationOptions}>
      <Stack.Screen name={EScreens.HomeMain} component={HomeScreens.Main} />

      <Stack.Screen name={EScreens.HomeSingle} component={HomeScreens.Single} />
    </Stack.Navigator>
  )
}
