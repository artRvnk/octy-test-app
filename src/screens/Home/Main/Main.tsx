import React from 'react'

import { Alert } from 'react-native'

import { useTranslation } from 'react-i18next'

import { useDispatch } from 'react-redux'

import { CoinWidget } from '@/widgets/coin'
import { Header } from '@/widgets/header'

import { coinActions } from '@/entities/coin'

import { EColors } from '@/shared/lib'

export const Main = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const callAlert = () => {
    Alert.alert(
      t('warning'),
      t('coins.clear'),
      [
        {
          text: t('no'),
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: t('yes'),
          onPress: () => {
            dispatch(coinActions.clearFiatData())
            dispatch(coinActions.clearCoins())
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
        title={t('coins.title')}
        canGoBack={false}
        icon="Bin"
        iconProps={{ fill: EColors.primary_400 }}
        onPress={callAlert}
      />

      <CoinWidget.List />
    </>
  )
}
