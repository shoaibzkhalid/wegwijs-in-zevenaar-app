import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useGetOrgBySearchValQuery } from 'store/api'
import styled from 'styled-components/native'
import { IMAGES } from 'theme'
import { TextMedium, TouchCard } from 'theme/common.styles'
import { useData } from 'utils/hooks'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'
import { CustomList } from './CustomList'

export const Footer = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchClicked, setSearchClicked] = useState(false)

  const value = searchClicked ? searchValue : ''

  const { items, isLoading, lp, isFetching } = useData(useGetOrgBySearchValQuery, value)

  const { navigation } = useAppNavigation()

  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    inputRef?.current.focus()
  }, [])

  // console.log('searchValue', searchValue)

  return (
    <CustomList
      data={items}
      ListHeaderComponent={React.useCallback(
        () => (
          <SearchBar onPress={() => navigation.navigate('OrganizationsList')}>
            <SearchBarInput
              placeholder="Zoeken op onderwerp & organisaties"
              ref={inputRef as any}
              onChange={(e) => {
                setSearchClicked(false)
                setSearchValue(e.nativeEvent.text)
              }}
              autoCapitalize="none"
            />

            <TouchableOpacity onPress={() => setSearchClicked(true)}>
              <SearchIcon source={IMAGES.searchIcon} />
            </TouchableOpacity>
          </SearchBar>
        ),
        []
      )}
      isLoading={Boolean(isLoading && !searchValue)}
      isFetching={isFetching}
      lastPage={lp}
      renderItem={({ item }) => {
        const { attributes, id } = item
        const { name } = attributes

        return (
          <TouchCard
            key={id}
            onPress={() =>
              navigation.navigate('OrganizationDetail', {
                organization: item,
              })
            }
          >
            <TextMedium>{name}</TextMedium>
          </TouchCard>
        )
      }}
    />
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
