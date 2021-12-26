import React from 'react'
import { TouchableOpacity, SafeAreaView } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import styled from 'styled-components/native'
import { COLORS, IMAGES } from 'theme'
import { TextMedium } from 'theme/common.styles'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'

export const DummyFooter = () => {
  const { navigation } = useAppNavigation()

  return (
    <SafeAreaView>
      <SearchBar onPress={() => navigation.navigate('OrganizationsList')}>
        <SearchBarInputView>
          <TextMedium color={COLORS.secondary}>Zoeken op onderwerp & organisaties</TextMedium>
        </SearchBarInputView>

        <TouchableOpacity>
          <SearchIcon source={IMAGES.searchIcon} />
        </TouchableOpacity>
      </SearchBar>
    </SafeAreaView>
  )
}

const SearchBar = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  z-index: 1000;

  left: 0;
  right: 0;
  padding: 10px;
  z-index: 1000;

  position: absolute;
  bottom: ${heightPercentageToDP(12)}px;
`
const SearchBarInputView = styled.View`
  background-color: white;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding: 15px;
`

const SearchIcon = styled.Image`
  width: 50px;
  height: 50px;
`
