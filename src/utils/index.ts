import { StackNavigationOptions } from '@react-navigation/stack'

export const stackOptions: StackNavigationOptions = {
  headerShown: false,
  // animationEnabled: false,
  animationTypeForReplace: 'push',
}

export const getSubString = (txt) => {
  const LIMIT = 150
  if (txt.length > LIMIT) return txt.substring(0, LIMIT) + '...'
  else return txt
}
