import React from 'react'
import { View, Text } from 'react-native'

import { useTranslation } from 'react-i18next'

import { CoinWidget } from '@/widgets/coin'
import { Header } from '@/widgets/header'

export const Main = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header.Standard
        title={t('coins.title')}
        canGoBack={false}
        // icon="Logout"
        // onPress={callAlert}
      />

      <CoinWidget.List />
    </>
  )
}
