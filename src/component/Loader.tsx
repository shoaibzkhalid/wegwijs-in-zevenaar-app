import { COLORS } from 'theme/colors'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const Loader = ({
  style,
  color,
  size,
}: {
  style?: any
  color?: string
  size?: any
}) => {
  const LoadingContainer = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height: ${hp(80)}px;
  `

  return (
    <LoadingContainer style={{ ...style }}>
      <ActivityIndicator size={size ? size : 'large'} color={color ? color : COLORS.primary} />
    </LoadingContainer>
  )
}
