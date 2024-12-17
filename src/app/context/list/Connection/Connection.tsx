import React, {
  createContext,
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react'
import { Animated } from 'react-native'

import NetInfo from '@react-native-community/netinfo'
import _ from 'lodash'
import { useTranslation } from 'react-i18next'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { EColors } from '@/shared/lib'
import { Icon } from '@/shared/ui'

import { Divider, Typography } from '@/shared/ui/styled'

import { TChildrenContext } from '../types'

import { Container } from './styles'
import { TConnectionProvider } from './types'

export const ConnectionContext = createContext<TConnectionProvider>({
  connected: false,
})

export const ConnectionProvider = ({ children }: TChildrenContext) => {
  const [connected, setConnected] = useState(true)
  const animHeight = useRef(new Animated.Value(0)).current
  const animColor = useRef(new Animated.Value(connected ? 0 : 1)).current

  const value = useMemo(() => ({ connected }), [connected])

  const { t } = useTranslation()
  const { top } = useSafeAreaInsets()

  const changeConnectionStatus = _.debounce((status: boolean) => {
    setConnected(status)
  }, 1500)

  useEffect(() => {
    NetInfo.addEventListener(networkState => {
      changeConnectionStatus(networkState?.isInternetReachable ?? true)
    })
  }, [])

  useEffect(() => {
    Animated.timing(animColor, {
      toValue: connected ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start()

    if (connected) {
      Animated.parallel([
        Animated.timing(animHeight, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start()
    } else {
      Animated.parallel([
        Animated.timing(animHeight, {
          toValue: top + 8,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start()
    }
  }, [connected])

  const backgroundColor = animColor.interpolate({
    inputRange: [0, 1],
    outputRange: [EColors.transparent, EColors.primary_400], // Replace with actual colors
  })

  return (
    <ConnectionContext.Provider value={value}>
      <Container
        style={{
          height: animHeight,
          backgroundColor: backgroundColor,
        }}>
        <Icon name="WifiOff" fill={EColors.white} size={20} />

        <Divider width={10} />

        <Typography.CaptionSB color={EColors.white} mBottom="2px">
          {t('no_wifi')}
        </Typography.CaptionSB>
      </Container>

      {children}
    </ConnectionContext.Provider>
  )
}
