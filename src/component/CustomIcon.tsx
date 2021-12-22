import React from 'react'
import { View, Text, ViewStyle, TextStyle } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useSettings } from 'utils/hooks'

export type Props = {
  name: any
  type?: string
  size?: number
  color?: string
  style?: TextStyle | ViewStyle[]
}

export const CustomIcon: React.FC<Props> = ({ name, size, color, type, style }) => {
  const { appTheme } = useSettings()

  return (
    <Ionicons
      name={name}
      type={type}
      // color={`${color ? color : getCurrentTheme(appTheme).navColor}`}
      size={size ? size : 20}
      style={[{ alignSelf: 'flex-end', opacity: 1 }, style]}
    />
  )
}
