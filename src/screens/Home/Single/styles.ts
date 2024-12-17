import { StyleSheet, View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'
import { WP } from '@/shared/tools'
import { Typography } from '@/shared/ui/styled'

export const Wrapper = styled(View)`
  margin-left: 16px;
`

export const Bottom = styled(View)`
  margin-top: auto;
`

export const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    aspectRatio: 1,
    height: WP(35),
    backgroundColor: EColors.neutral_300,
  },
})

export const ButtonText = styled(Typography.Body2R).attrs({})`
  text-decoration: underline;
  text-decoration-color: ${EColors.white};
`
