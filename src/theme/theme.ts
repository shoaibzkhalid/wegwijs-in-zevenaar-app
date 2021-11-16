import { DefaultTheme } from 'styled-components/native'
import { COLORS } from 'theme'

export const darkTheme = {
  bgColor: '#303030',
  txtColor: COLORS.white,
  navTxtColor: COLORS.white,
  shadowColor: COLORS.black,
  navColor: COLORS.white,

  dark: true,
  colors: {
    primary: COLORS.primary,
    background: COLORS.screenBgColorDark,
    card: COLORS.screenBgColorDark,
    text: COLORS.white,
    border: COLORS.screenBgColorDark,
    notification: COLORS.screenBgColorDark,
  },
}
export const lightTheme: DefaultTheme = {
  txtColor: COLORS.white,
  bgColor: COLORS.white,
  shadowColor: COLORS.shadowColor,
  navColor: COLORS.black,

  dark: false,
  colors: {
    primary: COLORS.primary,
    background: COLORS.screenBgColor,
    card: COLORS.white,
    text: COLORS.black,
    border: COLORS.white,
    notification: COLORS.white,
  },
}
