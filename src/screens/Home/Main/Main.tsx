import React from 'react'
import { View, Text } from 'react-native'

import { useTranslation } from 'react-i18next'

import { CurrencyWidget } from '@/widgets/currency'
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

      <CurrencyWidget.List />
    </>
  )
}
