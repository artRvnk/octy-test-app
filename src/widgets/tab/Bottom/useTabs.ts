import { EStacks } from '@/app/navigation'

import { TStacksKeys, TUseTabs } from '@/widgets/tab/Bottom'

import { EColors } from '@/shared/lib'

export const useTabs = () => {
  const tabs: Record<TStacksKeys, TUseTabs> = {
    [EStacks.Home]: {
      icon: 'Home',
      active: EColors.primary_400,
      inactive: EColors.gray,
    },
    [EStacks.Favorites]: {
      icon: 'Heart',
      active: EColors.primary_400,
      inactive: EColors.gray,
    },
  }

  return { tabs }
}
