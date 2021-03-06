import React, { ReactElement } from 'react'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'
import { useDrawer } from 'utils/hooks'
import { SIZES } from 'theme'
import { DrawerContent } from './DrawerContent'

export type Props = {
  children: ReactElement | ReactElement[]
}

export const DrawerWrapper: React.FC<Props> = ({ children }) => {
  let drawer
  const { drawerStatus } = useDrawer()

  React.useEffect(() => {
    if (drawerStatus) {
      drawer.openDrawer()
      return
    }
    drawer.closeDrawer()
  }, [drawerStatus])

  return (
    <DrawerLayout
      ref={(d) => {
        drawer = d
      }}
      drawerType="front"
      renderNavigationView={() => <DrawerContent />}
      drawerWidth={SIZES.width - 100}
      drawerPosition={'left'}
    >
      {children}
    </DrawerLayout>
  )
}
