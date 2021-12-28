import React from 'react'
import { CategoryItem } from 'component/CategoryItem'
import { HomeOption } from 'models/generalTypes'
import { homeOptions } from 'utils/hooks/constants'
import { ItemGrid } from 'theme/common.styles'
import Wrapper from 'component/Wrapper'
import { DrawerWrapper } from 'navigation/DrawerWrapper'

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
