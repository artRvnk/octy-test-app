import {
  NavigatorScreenParams,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native'

import type { TMarketsStack } from './stacks'
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

// TMainTab optional
export type TScreens = TMarketsStack

/**
 * Description: use for Screens props
 * @param Screen - Screen name. For this param use EScreens
 * @return Return types for screen params
 */
export type TScreenProps<Screen extends keyof TScreens> =
  NativeStackScreenProps<TScreens, Screen>

/**
 * Description: use for useRoute hook
 * @param Screen - Screen name. For this param use EScreens
 * @return Return types for useRoute hook
 */
export type TScreenQueryProps<Screen extends keyof TScreens> = RouteProp<
  TScreens,
  Screen
>

export type TScreenNavigation<Screen extends keyof TScreens> =
  NativeStackNavigationProp<TScreens, Screen>

export type TNavigatorScreenParams<
  TStack extends ParamListBase,
  TStackParams = undefined,
> = NavigatorScreenParams<TStack> | TStackParams
