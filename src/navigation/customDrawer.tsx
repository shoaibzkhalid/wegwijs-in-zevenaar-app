/* eslint-disable react/prop-types */
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Header } from 'component/Header'
import { drawerOpts } from 'utils/hooks/constants'
import { Image } from 'react-native'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'
import { COLORS } from 'theme'
import { TextMedium, TextNormal } from 'theme/common.styles'
import { useRoute } from '@react-navigation/native'

export const CustomDrawerContent = (props) => {
  const { navigation } = useAppNavigation()

  const { routes, index } = props.state
  const focusedRoute = routes[index].name // this is the active route
  console.log('props', props, focusedRoute)

  return (
    <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
      <Header navigation={props.navigation} />
      <DrawerItemList {...props} />

      {drawerOpts.map((o) => (
        <DrawerItem
          {...props}
          key={o.title}
          focused={false}
          label={({ focused }) => (
            <TextNormal color={focused ? 'white' : COLORS.primary}>{o.title}</TextNormal>
          )}
          onPress={() => navigation.navigate(o.screenName as any, { subject: o.subject })}
          icon={() => <Image source={o.icon} style={{ width: 30, height: 30 }} />}
          drawerInactiveTintColor={'red'}
          drawerInactiveBackgroundColor={'red'}
        />
      ))}
    </DrawerContentScrollView>
  )
}
