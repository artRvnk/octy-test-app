import { EScreens, TScreenQueryProps } from '@/app/navigation'

import { TCoin } from '@/entities/coin'

export type THomeStackSingleParams = {
  coin: TCoin
}

export type TRouteProps = TScreenQueryProps<EScreens.HomeSingle>
