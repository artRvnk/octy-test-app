import React from 'react'
import { View, Text } from 'react-native'

import { useTranslation } from 'react-i18next'

import { FavoriteWidget } from '@/widgets/favorite'
import { Header } from '@/widgets/header'

export const Main = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header.Standard
        title={t('favorites.title')}
        canGoBack={false}
        // icon="Logout"
        // onPress={callAlert}
      />

      <FavoriteWidget.List />
    </>
  )
}
