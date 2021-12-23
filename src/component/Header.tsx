import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { IMAGES } from 'theme'
import { TouchRowContainer } from 'theme/common.styles'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'
import { CustomIcon } from './CustomIcon'

export const Header = () => {
  const { navigation } = useAppNavigation()

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <HeaderView>
        <HeaderLeft>
          <CustomIcon name="menu" size={40} />
        </HeaderLeft>

        {navigation.canGoBack() && (
          <TouchRowContainer onPress={() => navigation.goBack()}>
            <CustomIcon name="arrow-back" size={40} />
            <BackText>Vorig</BackText>
          </TouchRowContainer>
        )}

        <LogoImage source={IMAGES.logo} />
      </HeaderView>
    </SafeAreaView>
  )
}

const HeaderView = styled.View`
  height: 70px;
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
  font-size: 38px;
`

const LogoImage = styled.Image`
  width: 160px;
  height: 50px;
`

const BackText = styled.Text`
  font-size: 25px;
  /* font-weight: 600px; */
  padding-top: 5px;
  color: #4a4b28;
  margin: 0;
`
