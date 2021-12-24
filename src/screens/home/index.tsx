import React from 'react'
import { CategoryItem } from 'component/CategoryItem'
import { Header } from 'component/Header'
import { HomeOption } from 'models/generalTypes'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { homeOptions } from 'utils/hooks/constants'
import { ItemGrid } from 'theme/common.styles'
import Wrapper from 'component/Wrapper'

export const Home = () => {
  return (
    <Wrapper>
      <ItemGrid>
        {homeOptions.map((option: HomeOption) => (
          <CategoryItem data={option} key={option.title} />
        ))}
      </ItemGrid>
    </Wrapper>
  )
}
