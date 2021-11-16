import React from 'react'
import 'react-native-gesture-handler'
import { persistor, store } from 'store'
import Toast from 'react-native-toast-message'
import Routes from 'navigation/routes'
import { toastConfig } from 'utils/toast'
import { DarkThemeProvider } from 'DarkThemeProvider'
import { Text } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const text = Text as any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
text.defaultProps = (Text as any).defaultProps || {}
text.defaultProps.allowFontScaling = false

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <DarkThemeProvider>
            <Routes />
          </DarkThemeProvider>
          {/* <Toast ref={(ref) => Toast.setRef(ref)} config={toastConfig} /> */}
        </PaperProvider>
      </PersistGate>
    </Provider>
  )
}
export default App
