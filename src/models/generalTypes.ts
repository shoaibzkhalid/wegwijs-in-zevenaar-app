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
