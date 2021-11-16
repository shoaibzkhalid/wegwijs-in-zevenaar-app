import React from 'react'
import { darkTheme, lightTheme } from 'theme/theme'
import { ThemeProvider } from 'styled-components/native'
import { useSettings } from 'utils/hooks'

// eslint-disable-next-line react/prop-types
export const DarkThemeProvider = ({ children }) => {
  const { appTheme } = useSettings()

  return <ThemeProvider theme={appTheme ? darkTheme : lightTheme}>{children}</ThemeProvider>
}
