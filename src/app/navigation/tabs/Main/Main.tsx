import React from 'react'

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import { Tab as TabComponent } from '@/widgets/tab'

import { EStacks, HomeStack, FavoritesStack } from '../../stacks'
import { ScreenTabOptions } from '../options'

import { TMainTab } from './types'

const Tab = createBottomTabNavigator<TMainTab>()

const tabBar = (props: BottomTabBarProps) => {
  return <TabComponent.Bottom {...props} />
}

export const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={ScreenTabOptions} tabBar={tabBar}>
      <Tab.Screen component={HomeStack} name={EStacks.Home} />
      <Tab.Screen component={FavoritesStack} name={EStacks.Favorites} />
    </Tab.Navigator>
  )
}
