import React from 'react'
import { View, Text } from 'react-native'

export const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{ color: 'black' }}>Main</Text>
    </View>
  )
}
