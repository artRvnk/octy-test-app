import { EStacks, THomeStack, TFavoritesStack } from '../../stacks'
import { TNavigatorScreenParams } from '../../types'

export type TMainTab = {
  [EStacks.Home]: TNavigatorScreenParams<THomeStack>
  [EStacks.Favorites]: TNavigatorScreenParams<TFavoritesStack>
}
