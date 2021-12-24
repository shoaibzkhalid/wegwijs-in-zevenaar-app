import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AppLoading from 'expo-app-loading'
import { useSettings } from 'utils/hooks'
import { darkTheme, lightTheme } from 'theme/theme'
import { RootStackParamList } from 'models/navigation'
import { stackOptions } from 'utils'
import { Home, SubjectList, NewsList, SubjectCategoryList, OrganizationsList } from 'screens'
import { useExpoFonts } from 'utils/hooks/useExpoFonts'
import { OrganizationDetail } from 'screens/organizationDetail'

const Routes = () => {
  const Stack = createStackNavigator<RootStackParamList>()
  const [fontsLoaded] = useExpoFonts()
  const { appTheme } = useSettings()

  if (!fontsLoaded) return <AppLoading />

  console.log('appTheme', appTheme)

  return (
    <NavigationContainer theme={appTheme ? darkTheme : lightTheme}>
      <Stack.Navigator screenOptions={stackOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewsList" component={NewsList} />
        <Stack.Screen name="SubjectList" component={SubjectList} />
        <Stack.Screen name="SubjectCategoryList" component={SubjectCategoryList} />
        <Stack.Screen name="OrganizationDetail" component={OrganizationDetail} />
        <Stack.Screen name="OrganizationsList" component={OrganizationsList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
