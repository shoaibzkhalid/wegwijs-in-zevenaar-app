import { useNavigation } from '@react-navigation/core'
import { NavigationProp } from 'models/navigation'

export const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp>()

  const goBack = () => navigation.goBack()

  return { navigation, goBack }
}
