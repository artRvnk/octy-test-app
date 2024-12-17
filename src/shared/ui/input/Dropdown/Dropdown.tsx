import React, { SetStateAction } from 'react'

import { SelectList } from 'react-native-dropdown-select-list'

import { EColors, EFonts, TData } from '@/shared/lib'

import { Icon } from '../../Icon'

import { Container, styles } from './styles'
import { TDropdownProps } from './types'

export const Dropdown = ({ data, onChange }: TDropdownProps) => {
  const defaultOption: TData = {
    key: 'USD',
    value: 'United States Dollar',
  }

  return (
    <>
      <Container>
        <SelectList
          setSelected={(val: SetStateAction<string>) => {
            onChange(val)
          }}
          data={data}
          save={'key'}
          defaultOption={defaultOption}
          boxStyles={styles.box}
          inputStyles={styles.input}
          dropdownStyles={styles.dropdown}
          dropdownItemStyles={styles.dropdownItem}
          dropdownTextStyles={styles.dropdownText}
          arrowicon={
            <Icon name={'ArrowDown'} size={20} fill={EColors.neutral_500} />
          }
          fontFamily={EFonts.regular}
          search={false}
          notFoundText={''}
        />
      </Container>
    </>
  )
}
