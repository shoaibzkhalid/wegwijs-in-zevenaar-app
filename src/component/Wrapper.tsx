import React, { ReactElement } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Footer } from './Footer'
import { Header } from './Header'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useRoute } from '@react-navigation/native'

type Props = {
  children: ReactElement | ReactElement[]
}

const Wrapper: React.FC<Props> = ({ children }) => {
  const isHome = useRoute().name === 'Home'

  return (
    <SafeAreaView>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: hp(30) }}>{children}</ScrollView>

      {isHome && <Footer />}
    </SafeAreaView>
  )
}

export default Wrapper
