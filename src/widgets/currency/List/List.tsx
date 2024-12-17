import React, { useEffect } from 'react'
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  RefreshControl,
} from 'react-native'

import { useTranslation } from 'react-i18next'

import { useTypedSelector } from '@/app/store'

import { TAB_HEIGHT } from '@/widgets/tab/Bottom'

// import { NoteFeature } from '@/features/note'
// import { NoteEntity, TNote, useGetNotes } from '@/entities/note'
// import { getUserSelector } from '@/entities/user'

import { FavoriteFeature } from '@/features/favorite'

import {
  CurrencyEntity,
  TCurrency,
  useGetCurrencies,
} from '@/entities/currency'

import { EColors } from '@/shared/lib'
import { Icon } from '@/shared/ui'
import { Divider, FlexWrapper, Typography } from '@/shared/ui/styled'

import { EmptyWrapper, styles } from './styles'

export const List = () => {
  const { t } = useTranslation()

  const { data, getFirstPage, isFirstLoad, refresh, refreshing } =
    useGetCurrencies()

  useEffect(() => {
    getFirstPage?.()
  }, [])

  const renderItem: ListRenderItem<TCurrency> = ({ item }) => {
    return (
      <CurrencyEntity.Card
        {...{ item }}
        favoriteAction={<FavoriteFeature.Button {...{ item }} />}
      />
    )
  }

  const renderLoader = () => {
    return <Divider height={TAB_HEIGHT * 1.35} />
  }

  const renderEmpty = () => {
    if (!isFirstLoad)
      return (
        <EmptyWrapper>
          <FlexWrapper flexDirection="column">
            <Icon name="Currency" size={100} />

            <Typography.Body1R mTop="24px" align="center" color={EColors.gray}>
              {t('coins.empty_list')}
            </Typography.Body1R>
          </FlexWrapper>
        </EmptyWrapper>
      )

    return (
      <EmptyWrapper>
        <ActivityIndicator size={'large'} color={EColors.primary_300} />
      </EmptyWrapper>
    )
  }

  return (
    <>
      <FlatList
        data={data.slice(0, 7)}
        renderItem={renderItem}
        keyExtractor={item => item.symbol}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderLoader}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Divider height={12} />}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl
            onRefresh={refresh}
            refreshing={!!refreshing}
            tintColor={EColors.primary_300}
          />
        }
      />
    </>
  )
}
