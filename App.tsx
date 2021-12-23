import React from 'react'
import 'react-native-gesture-handler'
import { store } from 'store'
import Routes from 'navigation/routes'
import { DarkThemeProvider } from 'DarkThemeProvider'
import { Text } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const text = Text as any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
text.defaultProps = (Text as any).defaultProps || {}
text.defaultProps.allowFontScaling = false

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <DarkThemeProvider>
          <Routes />
        </DarkThemeProvider>
      </PaperProvider>
    </Provider>
  )
}
export default App
