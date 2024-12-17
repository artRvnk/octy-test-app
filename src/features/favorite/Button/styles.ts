import styled from 'styled-components'

import { EColors } from '@/shared/lib'
import { Touchable } from '@/shared/ui/styled'

export const Touch = styled(Touchable)`
  padding: 6px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${EColors.neutral_300};
`
