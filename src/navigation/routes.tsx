import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AppLoading from 'expo-app-loading'
import { useSettings } from 'utils/hooks'
import { darkTheme, lightTheme } from 'theme/theme'
import { RootStackParamList } from 'models/navigation'
import { stackOptions } from 'utils'
import { Home } from 'screens'
import { useExpoFonts } from 'utils/hooks/useExpoFonts'

const Routes = () => {
  const Stack = createStackNavigator<RootStackParamList>()
  const [fontsLoaded] = useExpoFonts()
  const { appTheme } = useSettings()

  if (!fontsLoaded) return <AppLoading />

  return (
    <NavigationContainer theme={appTheme ? darkTheme : lightTheme}>
      <Stack.Navigator screenOptions={stackOptions}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
