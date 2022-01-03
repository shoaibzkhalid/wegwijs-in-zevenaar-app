import React from 'react'
import { CategoryItem } from 'component/CategoryItem'
import { HomeOption } from 'models/generalTypes'
import { homeOptions } from 'utils/hooks/constants'
import { ItemGrid } from 'theme/common.styles'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { DrawerWrapper } from 'navigation/DrawerWrapper'
import { SafeAreaView, ScrollView } from 'react-native'
import { Header } from 'component/Header'
import { DummyFooter } from 'component/DummyFooter'

export const Home = () => {
  return (
    <DrawerWrapper>
      <SafeAreaView>
        <Header />
        <ScrollView contentContainerStyle={{ paddingBottom: hp(30) }}>
          <ItemGrid>
            {homeOptions.map((option: HomeOption) => (
              <CategoryItem data={option} key={option.title} />
            ))}
          </ItemGrid>
        </ScrollView>
        <DummyFooter />
      </SafeAreaView>
    </DrawerWrapper>
  )
}
