import { NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { Subject } from './generalTypes'

// export const navigation = useNavigation<NativeStackNavigationProp<any, any>>()

export type RootStackParamList = {
  // Root: NavigatorScreenParams<RootStackParamList> | undefined
  //   Home: { screen: any; promotion?: any; params: any }
  Home: undefined
  NewsList: undefined
  SubjectList: Subject
}

export type Props = StackScreenProps<RootStackParamList, 'Home'>

export type NavigationProp = Props['navigation']
