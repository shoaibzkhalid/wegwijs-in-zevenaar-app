import React from 'react'
import styled from 'styled-components/native'
import { IMAGES } from 'theme'

export const Footer = () => {
  return (
    <SearchBar>
      <SearchBarInput placeholder="Zoeken op onderwerp & organisaties" />
      <SearchIcon source={IMAGES.searchIcon} />
    </SearchBar>
  )
}

const SearchBar = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 10px;
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
