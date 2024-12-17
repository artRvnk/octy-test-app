import { THomeStackSingleParams } from '@/screens/Home/Single'

import { EScreens } from '../../screens'

export type THomeStack = {
  [EScreens.HomeMain]: undefined
  [EScreens.HomeSingle]: THomeStackSingleParams
}
