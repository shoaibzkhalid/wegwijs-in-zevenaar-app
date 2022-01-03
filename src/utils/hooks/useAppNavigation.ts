import { useNavigation } from '@react-navigation/core'
import { DrawerNavigationProp, NavigationProp } from 'models/navigation'

export const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp>()
  const drawerNav = useNavigation<DrawerNavigationProp>()
  const goBack = () => navigation.goBack()

  return { navigation, goBack, drawerNav }
}
