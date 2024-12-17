import React, { useContext } from 'react'
import { Image } from 'react-native'

import { ConnectionContext } from '@/app/context'
import { EScreens, EStacks } from '@/app/navigation'

import { useNavigation } from '@/shared/lib'
import { Row, Typography } from '@/shared/ui/styled'

import { TCoin } from '../../models'

import * as S from './styles'

type TCardProps = {
  item: TCoin
  favoriteAction: React.ReactElement
  isFavorite?: boolean
}

export const Card = ({ item, favoriteAction, isFavorite }: TCardProps) => {
  const { navigate } = useNavigation()

  const { connected } = useContext(ConnectionContext)

  const onNavigate = () => {
    if (!connected) return

    if (isFavorite) {
      navigate(EStacks.Home, {
        screen: EScreens.HomeSingle,
        params: {
          coin: item,
        },
      })
      return
    }

    navigate(EScreens.HomeSingle, { coin: item })
  }

  return (
    <S.Wrapper onPress={onNavigate}>
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
  )
}
