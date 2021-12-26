import * as Linking from 'expo-linking'
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

export const linkMap = (addressObj) => {
  const { street, house_number, house_number_addition } = addressObj
  const { postal_code, city } = addressObj

  const address =
    street +
    ' ' +
    house_number +
    (house_number_addition ? house_number_addition : '') +
    ', ' +
    (postal_code ? postal_code + ' ' : '') +
    (city ? city : '')

  Linking.openURL('https://maps.google.com/?q=' + address)
}
