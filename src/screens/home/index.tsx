import React from 'react'
import { CategoryItem } from 'component/CategoryItem'
import { Header } from 'component/Header'
import { HomeOption } from 'models/generalTypes'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { homeOptions } from 'utils/hooks/constants'

export const Home = () => {
  return (
    <View>
      <Header />
      <ItemGrid>
        {homeOptions.map((option: HomeOption) => (
          <CategoryItem data={option} key={option.title} />
        ))}
      </ItemGrid>
    </View>
  )
}

const ItemGrid = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 30px;
`
