import React, { Fragment, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { IMAGES } from 'theme'
import { TextMedium, TouchCard } from 'theme/common.styles'
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

  const inputRef = React.useRef<HTMLInputElement>(null)

  console.log('isLoading', isLoading, searchValue)

  React.useEffect(() => {
    inputRef?.current.focus()
  }, [])

  return (
    <>
      <SearchBar onPress={() => navigation.navigate('OrganizationsList')}>
        <SearchBarInput
          placeholder="Zoeken op onderwerp & organisaties"
          ref={inputRef as any}
          onChange={(e) => {
            setSearchClicked(false)
            setSearchValue(e.nativeEvent.text)
          }}
        />

        <TouchableOpacity onPress={() => setSearchClicked(true)}>
          <SearchIcon source={IMAGES.searchIcon} />
        </TouchableOpacity>
      </SearchBar>

      {isLoading && searchValue ? (
        <Loader />
      ) : (
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
      )}
    </>
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
