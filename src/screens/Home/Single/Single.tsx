import React, { useState } from 'react'
import { Image, Linking } from 'react-native'

import { useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { useTypedSelector } from '@/app/store'

import { Header } from '@/widgets/header'

import { getCoinSelector, useGetLiveRate } from '@/entities/coin'

import { BottomBar } from '@/shared/ui'
import { Background } from '@/shared/ui/background'
import { Input } from '@/shared/ui/input'
import { Modal } from '@/shared/ui/modal'
import { Row, Typography } from '@/shared/ui/styled'

import * as S from './styles'
import { TRouteProps } from './types'

export const Single = () => {
  const { params } = useRoute<TRouteProps>()
  const { coin } = params

  const { t } = useTranslation()

  const { fiatData, loading } = useTypedSelector(getCoinSelector)

  const [selectedFiat, setSelectedFiat] = useState('USD')

  const { fiat } = useGetLiveRate({
    symbols: coin.symbol,
    target: selectedFiat,
  })

  const openUrl = async (url?: string) => {
    if (!url) return

    await Linking.openURL(url)
  }

  return (
    <>
      {loading && <Modal.Loader />}

      <Header.Standard title={coin.name} />

      <Background.Standard>
        <Row align="flex-start" mTop="24px" mBottom="16px">
          <Image source={{ uri: coin.icon_url }} style={S.styles.image} />

          <S.Wrapper>
            <Typography.H2 mBottom="12px">{coin.symbol}</Typography.H2>

            <Typography.Body1SB mBottom="12px">
              {coin.name_full}
            </Typography.Body1SB>

            <Typography.Body1SB numberOfLines={1}>
              {t('max_supply')}: {Math.floor(coin.max_supply / 1000)}k
            </Typography.Body1SB>
          </S.Wrapper>
        </Row>

        <Typography.Body1SB mBottom="12px">
          {t('live_rate', {
            symbol: coin.symbol,
            fiat: selectedFiat,
            rate: fiat?.rates?.[coin.symbol],
          })}
        </Typography.Body1SB>

        <Input.Dropdown data={fiatData} onChange={setSelectedFiat} />
      </Background.Standard>

      <BottomBar>
        <S.ButtonText onPress={() => openUrl(fiat?.privacy)}>
          {t('privacy_policy')}
        </S.ButtonText>

        <S.ButtonText onPress={() => openUrl(fiat?.terms)}>
          {t('terms_and_conditions')}
        </S.ButtonText>
      </BottomBar>
    </>
  )
}
