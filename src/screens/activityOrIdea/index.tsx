import { CategoryItem } from 'component/CategoryItem'
import Wrapper from 'component/Wrapper'
import { HomeOption } from 'models/generalTypes'
import React from 'react'
import { ItemGrid } from 'theme/common.styles'
import { activityOrIdea } from 'utils/hooks/constants'

export const ActivityOrIdea = () => {
  return (
    <Wrapper>
      <ItemGrid>
        {activityOrIdea.map((option: HomeOption) => (
          <CategoryItem data={option} key={option.title} />
        ))}
      </ItemGrid>
    </Wrapper>
  )
}
