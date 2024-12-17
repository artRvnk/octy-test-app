import React from 'react'
import { Alert } from 'react-native'

import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { FavoriteWidget } from '@/widgets/favorite'
import { Header } from '@/widgets/header'

import { favoriteActions } from '@/entities/favorite'

import { EColors } from '@/shared/lib'

export const Main = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const callAlert = () => {
    Alert.alert(
      t('warning'),
      t('favorites.clear'),
      [
        {
          text: t('no'),
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: t('yes'),
          onPress: () => {
            dispatch(favoriteActions.clearFavorites())
          },
        },
      ],
      {
        cancelable: false,
        userInterfaceStyle: 'dark',
      },
    )
  }

  return (
    <>
      <Header.Standard
        title={t('favorites.title')}
        canGoBack={false}
        icon="Bin"
        iconProps={{ fill: EColors.primary_400 }}
        onPress={callAlert}
      />

      <FavoriteWidget.List />
    </>
  )
}
