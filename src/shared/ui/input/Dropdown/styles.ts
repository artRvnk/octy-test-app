import { StyleSheet, View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'

export const Container = styled(View)`
  z-index: 3;
`

export const styles = StyleSheet.create({
  box: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: EColors.neutral_400,
    backgroundColor: EColors.neutral_500,
  },
  input: {
    fontSize: 14,
    color: EColors.white,
  },
  dropdown: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: EColors.neutral_400,
    backgroundColor: EColors.neutral_500,
  },
  dropdownItem: {},
  dropdownText: {
    color: EColors.white,
    fontSize: 14,
  },
})
