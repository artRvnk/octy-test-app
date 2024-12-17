import { StyleSheet } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'
import { WP } from '@/shared/tools'
import { Touchable } from '@/shared/ui/styled'

export const Wrapper = styled(Touchable)`
  background-color: ${EColors.neutral_400};
  padding: 12px;
  border-radius: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    aspectRatio: 1,
    height: WP(10),
    backgroundColor: EColors.neutral_300,
  },
  text: {
    maxWidth: '82.5%',
  },
  row: {
    flex: 1,
    // backgroundColor: 'red',
  },
})
