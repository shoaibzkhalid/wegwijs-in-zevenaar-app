import { NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { Subject } from './generalTypes'

// export const navigation = useNavigation<NativeStackNavigationProp<any, any>>()

export type RootStackParamList = {
  // Root: NavigatorScreenParams<RootStackParamList> | undefined
  //   Home: { screen: any; promotion?: any; params: any }
  Home: undefined
  NewsList: undefined
  SubjectList: Subject
  SubjectCategoryList: any
  OrganizationsList: any
  OrganizationDetail: any

  IdeasList: any
  ActivityOrIdea: any
  SubjectCategoryTagList: any
  Contact: any
  IdeaDetail: any
  ActivityDetail: any
  ActivityChoose: any
  ActivitiesList: any
  ActivityCalendar: any
  Welcome: any
}

export type Props = StackScreenProps<RootStackParamList, 'Home'>
export type DrawerProps = DrawerScreenProps<RootStackParamList, 'Home'>

export type NavigationProp = Props['navigation']
export type DrawerNavigationProp = DrawerProps['navigation']
