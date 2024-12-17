import React from 'react'
import { Image } from 'react-native'

import { Row, Typography } from '@/shared/ui/styled'

import { TCoin } from '../../models'

import * as S from './styles'

export const Card = ({
  item,
  favoriteAction,
}: {
  item: TCoin
  favoriteAction: React.ReactElement
}) => {
  return (
    <>
      <S.Wrapper>
        <Row style={S.styles.row}>
          <Image source={{ uri: item.icon_url }} style={S.styles.image} />

          <Typography.Body1SB
            mLeft="12px"
            numberOfLines={1}
            style={S.styles.text}>
            {item.name}
          </Typography.Body1SB>
        </Row>
        {favoriteAction}
      </S.Wrapper>
    </>
  )
}
