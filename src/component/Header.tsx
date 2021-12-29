import { useRoute } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { IMAGES } from 'theme'
import { TouchRowContainer } from 'theme/common.styles'
import { useDrawer } from 'utils/hooks'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'
import { CustomIcon } from './CustomIcon'

type Props = {
  noBack?: boolean
}

export const Header = ({ noBack }: Props) => {
  const { navigation } = useAppNavigation()
  const { toggleDrawer } = useDrawer()
  const route = useRoute()

  return (
    <SafeAreaView>
      <HeaderView>
        <HeaderLeft onPress={() => toggleDrawer()}>
          <CustomIcon name="menu" size={40} />
        </HeaderLeft>

        {route.name !== 'Home' && !noBack ? (
          <TouchRowContainer onPress={() => navigation.goBack()}>
            <CustomIcon name="arrow-back" size={40} />
            <BackText>Vorig</BackText>
          </TouchRowContainer>
        ) : null}

        <LogoImage source={IMAGES.logo} />
      </HeaderView>
    </SafeAreaView>
  )
}

const HeaderView = styled.View`
  height: 55px;
  background-color: white;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

const HeaderLeft = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

const LogoImage = styled.Image`
  width: 160px;
  height: 50px;
`

const BackText = styled.Text`
  font-size: 25px;
  padding-top: 5px;
  color: #4a4b28;
  margin: 0;
`
