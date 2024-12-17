import { SetStateAction } from 'react'

export type TDropdownProps = {
  data: object[]
  onChange: (val: SetStateAction<string>) => void
}
