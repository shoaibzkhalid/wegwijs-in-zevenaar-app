import React, { Fragment } from 'react'
import { DrawerContainer, TouchRowContainer } from 'theme/common.styles'
import * as Linking from 'expo-linking'

import { Image, ScrollView, Text } from 'react-native'
import { Header } from 'component/Header'
import { drawerOpts } from 'utils/hooks/constants'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'
import { useDrawer } from 'utils/hooks'

export const DrawerContent = () => {
  const { navigation } = useAppNavigation()
  const { closeDrawer } = useDrawer()

  return (
    <DrawerContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header noBack />
        {drawerOpts.map((opt) => (
          <TouchRowContainer
            onPress={() => {
              closeDrawer()
              if (opt.id === 10) {
                Linking.openURL('https://www.vrijwilligerswerk.nl/privacyverklaring')
                return
              }
              navigation.navigate(opt.screenName as any, { subject: opt.subject })
            }}
            key={opt.title}
            style={{ alignItems: 'center' }}
          >
            <Image source={opt.icon} style={{ height: 30, width: 30, margin: 10 }} />
            <Text>{opt.title}</Text>
          </TouchRowContainer>
        ))}
      </ScrollView>
    </DrawerContainer>
  )
}
