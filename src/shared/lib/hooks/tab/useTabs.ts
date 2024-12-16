import { EStacks } from '@/app/navigation'

import { TStacksKeys, TUseTabs } from '@/widgets/tab/Bottom'

import { EColors } from '../../constants'

export const useTabs = () => {
  const tabs: Record<TStacksKeys, TUseTabs> = {
    [EStacks.Home]: {
      icon: 'ArrowDown',
      active: EColors.primary_400,
      inactive: EColors.gray,
    },
    [EStacks.Favorites]: {
      icon: 'ArrowUp',
      active: EColors.primary_400,
      inactive: EColors.gray,
    },
  }

  return { tabs }
}
