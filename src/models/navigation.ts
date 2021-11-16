import { NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

// export const navigation = useNavigation<NativeStackNavigationProp<any, any>>()

export type RootStackParamList = {
  // Root: NavigatorScreenParams<RootStackParamList> | undefined
  //   Home: { screen: any; promotion?: any; params: any }
  Home: undefined
}

export type Props = StackScreenProps<RootStackParamList, 'Home'>

export type NavigationProp = Props['navigation']
