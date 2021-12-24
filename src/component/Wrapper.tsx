import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = {
  children: ReactElement | ReactElement[]
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <View>
      <Header />
      {children}
    </View>
  )
}

export default Wrapper
