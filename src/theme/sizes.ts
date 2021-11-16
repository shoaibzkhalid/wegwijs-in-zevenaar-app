import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

export const SIZES = {
  radius: Platform.OS === 'ios' ? 12 : 13,
  radiusTiny: 8,

  padding: 10,
  paddingBig: 8,
  paddingTiny: 1,

  // app dimensions
  width,
  height,

  tabBarIconTiny: 14,
  tabBarIconSmall: 20,
  tabBarIcon: 24,
  tabBarIconBig: 34,
}
