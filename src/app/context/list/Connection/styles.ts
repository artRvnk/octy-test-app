import { Animated } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'

export const Container = styled(Animated.View)`
  background-color: ${EColors.primary_400};
  width: 100%;
  height: 200px;
  position: absolute;
  z-index: 1000;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
  left: 0px;
  top: 0px;
`
