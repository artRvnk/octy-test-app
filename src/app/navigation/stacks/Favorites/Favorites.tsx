import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { FavoritesScreens } from '@/screens/Favorites'

import { EScreens } from '../../screens'

import { ScreenNavigationOptions } from '../options'

import { TFavoritesStack } from './types'

const Stack = createNativeStackNavigator<TFavoritesStack>()

export const FavoritesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.FavoritesMain}
      screenOptions={ScreenNavigationOptions}>
      <Stack.Screen
        name={EScreens.FavoritesMain}
        component={FavoritesScreens.Main}
      />
    </Stack.Navigator>
  )
}
