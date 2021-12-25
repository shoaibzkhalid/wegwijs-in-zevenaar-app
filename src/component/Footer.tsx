import { useRoute } from '@react-navigation/native'
import React, { Fragment, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import styled from 'styled-components/native'
import { COLORS, IMAGES } from 'theme'
import { NewsCard, TextMedium, TouchCard } from 'theme/common.styles'
import { useOrganizationsBySearchVal } from 'utils/hooks'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'
import { Loader } from './Loader'

export const Footer = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchClicked, setSearchClicked] = useState(false)
  const { organizations, isLoading } = useOrganizationsBySearchVal(
    searchClicked ? searchValue : ''
  )
  const { navigation } = useAppNavigation()
  const isHome = useRoute().name === 'Home'

  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (isHome) return
    inputRef?.current.focus()
  }, [])

  console.log('Footer', organizations, isLoading)

  return (
    <>
      <SearchBar onPress={() => navigation.navigate('OrganizationsList')} isHome={isHome}>
        {isHome ? (
          <SearchBarInputView>
            <TextMedium color={COLORS.secondary}>
              Zoeken op onderwerp & organisaties
            </TextMedium>
          </SearchBarInputView>
        ) : (
          <SearchBarInput
            placeholder="Zoeken op onderwerp & organisaties"
            ref={inputRef as any}
            onChange={(e) => {
              setSearchClicked(false)
              setSearchValue(e.nativeEvent.text)
            }}
          />
        )}
        <TouchableOpacity onPress={() => setSearchClicked(true)}>
          <SearchIcon source={IMAGES.searchIcon} />
        </TouchableOpacity>
      </SearchBar>

      {!isLoading ? (
        <Fragment>
          {organizations.map((organization) => {
            const { attributes, id } = organization
            const { name } = attributes
            return (
              <TouchCard
                key={id}
                onPress={() =>
                  navigation.navigate('OrganizationDetail', {
                    organization,
                  })
                }
              >
                <TextMedium>{name}</TextMedium>
              </TouchCard>
            )
          })}
        </Fragment>
      ) : (
        <Loader />
      )}
    </>
  )
}

type SearchBarProps = {
  isHome: boolean
}

const SearchBar = styled.TouchableOpacity<SearchBarProps>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  z-index: 1000;

  left: 0;
  right: 0;
  padding: 10px;
  z-index: 1000;

  ${({ isHome }) =>
    isHome &&
    `position: absolute;
  bottom: ${heightPercentageToDP(12)}px;`};
`
const SearchBarInputView = styled.View`
  /* flex: 1; */
  /* height: 50px; */
  background-color: white;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding: 15px;
`
const SearchBarInput = styled.TextInput`
  flex: 1;
  height: 50px;
  background-color: white;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
`

const SearchIcon = styled.Image`
  width: 50px;
  height: 50px;
`
