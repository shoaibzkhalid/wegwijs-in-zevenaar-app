import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { IMAGES } from 'theme'
import { CustomIcon } from './CustomIcon'

export const Header = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <HeaderView>
        <HeaderLeft>
          <CustomIcon name="menu" size={40} />
        </HeaderLeft>

        <LogoImage source={IMAGES.logo} />
      </HeaderView>
    </SafeAreaView>
  )
}

const HeaderView = styled.View`
  height: 70;
  background-color: white;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

const HeaderLeft = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const HeaderIcon = styled.Image`
  color: #4a4b28;
  font-size: 38;
`

const LogoImage = styled.Image`
  width: 160;
  height: 50;
`

const BackButton = styled.View`
  display: flex;
  align-items: center;
`

const BackText = styled.Text`
  font-size: 25;
  font-weight: 600;
  padding-top: 5;
  color: #4a4b28;
  margin: 0;
`
