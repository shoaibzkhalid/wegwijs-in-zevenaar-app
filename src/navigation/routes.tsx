import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AppLoading from 'expo-app-loading'
import { useSettings } from 'utils/hooks'
import { darkTheme, lightTheme } from 'theme/theme'
import { RootStackParamList } from 'models/navigation'
import { stackOptions } from 'utils'
import {
  Home,
  SubjectList,
  NewsList,
  SubjectCategoryList,
  OrganizationsList,
  ActivityOrIdea,
  IdeasList,
  ActivityChoose,
  ActivityDetail,
  IdeaDetail,
  Contact,
  SubjectCategoryTagList,
  ActivitiesList,
  ActivityCalendar,
  OrganizationDetail,
} from 'screens'
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
        <Stack.Screen name="NewsList" component={NewsList} />
        <Stack.Screen name="SubjectList" component={SubjectList} />
        <Stack.Screen name="SubjectCategoryList" component={SubjectCategoryList} />
        <Stack.Screen name="OrganizationDetail" component={OrganizationDetail} />
        <Stack.Screen name="OrganizationsList" component={OrganizationsList} />
        <Stack.Screen name="ActivityOrIdea" component={ActivityOrIdea} />
        <Stack.Screen name="IdeasList" component={IdeasList} />
        <Stack.Screen name="ActivityChoose" component={ActivityChoose} />
        <Stack.Screen name="ActivityDetail" component={ActivityDetail} />
        <Stack.Screen name="IdeaDetail" component={IdeaDetail} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="SubjectCategoryTagList" component={SubjectCategoryTagList} />
        <Stack.Screen name="ActivityCalendar" component={ActivityCalendar} />
        <Stack.Screen name="ActivitiesList" component={ActivitiesList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
