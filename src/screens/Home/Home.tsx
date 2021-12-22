import { Header } from 'component/Header'
import React, { useRef } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native'

export const Home = () => {
  return (
    <View>
      <Header />
      <Text>Home here</Text>
    </View>
  )
}
