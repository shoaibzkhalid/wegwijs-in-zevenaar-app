import { ImageSourcePropType } from 'react-native'
import { RootStackParamList } from './navigation'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    txtColor: string
    bgColor: string
    shadowColor: string
    navColor: string

    dark: boolean
    colors: {
      primary: string
      background: string
      card: string
      text: string
      border: string
      notification: string
    }
  }
}

export interface Subject {
  id: string
  title: string
  description: string
  post: any
}

export interface HomeOption {
  id: string
  title: string
  icon: ImageSourcePropType
  activeIcon: string
  screenName: keyof RootStackParamList
  subject: Subject
  url?: string
}
