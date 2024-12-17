import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import { useTranslation } from 'react-i18next'

import { useTypedSelector } from '@/app/store'

import { TAB_HEIGHT } from '@/widgets/tab/Bottom'

import { FavoriteFeature } from '@/features/favorite'

import { CoinEntity, TCoin } from '@/entities/coin'
import { getFavoriteSelector } from '@/entities/favorite'

import { EColors } from '@/shared/lib'
import { Icon } from '@/shared/ui'
import { Divider, FlexWrapper, Typography } from '@/shared/ui/styled'

import { EmptyWrapper, styles } from './styles'

export const List = () => {
  const { t } = useTranslation()

  const { favorites } = useTypedSelector(getFavoriteSelector)

  const renderItem: ListRenderItem<TCoin> = ({ item }) => {
    return (
      <CoinEntity.Card
        {...{ item }}
        isFavorite
        favoriteAction={
          <FavoriteFeature.Button {...{ item }} favSymbol={item.symbol} />
        }
      />
    )
  }

  const renderLoader = () => {
    return <Divider height={TAB_HEIGHT * 1.35} />
  }

  const renderEmpty = () => {
    return (
      <EmptyWrapper>
        <FlexWrapper flexDirection="column">
          <Icon name="Coin" size={100} />

          <Typography.Body1R mTop="24px" align="center" color={EColors.gray}>
            {t('favorites.empty_list')}
          </Typography.Body1R>
        </FlexWrapper>
      </EmptyWrapper>
    )
  }

  return (
    <FlatList
      data={favorites}
      renderItem={renderItem}
      keyExtractor={item => item.symbol}
      ListEmptyComponent={renderEmpty}
      ListFooterComponent={renderLoader}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <Divider height={12} />}
      contentContainerStyle={styles.list}
    />
  )
}
