import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from './Header'
import { DrawerWrapper } from 'navigation/DrawerWrapper'

type Props = {
  children: ReactElement | ReactElement[]
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <DrawerWrapper>
      <SafeAreaView>
        <Header />
        {children}
      </SafeAreaView>
    </DrawerWrapper>
  )
}

export default Wrapper
