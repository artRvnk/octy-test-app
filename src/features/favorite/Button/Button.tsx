import React from 'react'

import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@/app/store'

import { favoriteActions, getFavoriteSelector } from '@/entities/favorite'

import { EColors } from '@/shared/lib'
import { Icon } from '@/shared/ui'

import * as S from './styles'
import { TButtonProps } from './types'

export const Button = ({ item, favSymbol }: TButtonProps) => {
  const dispatch = useDispatch()

  const { favorites } = useTypedSelector(getFavoriteSelector)

  const favoriteId = favSymbol || item.symbol

  const isFavorite =
    !!favSymbol || favorites.some(el => el.symbol === favoriteId)

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(favoriteActions.deleteFavorite(favoriteId))
    } else {
      dispatch(favoriteActions.addFavorite(item))
    }
  }

  return (
    <S.Touch onPress={handleFavorite}>
      <Icon
        name={isFavorite ? 'HeartFilled' : 'HeartEmpty'}
        fill={isFavorite ? EColors.primary_400 : EColors.white}
        size={16}
      />
    </S.Touch>
  )
}
