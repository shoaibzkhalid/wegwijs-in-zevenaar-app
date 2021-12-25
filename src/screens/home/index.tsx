import React from 'react'
import { CategoryItem } from 'component/CategoryItem'
import { HomeOption } from 'models/generalTypes'
import { ScrollView } from 'react-native'
import { homeOptions } from 'utils/hooks/constants'
import { ItemGrid } from 'theme/common.styles'
import Wrapper from 'component/Wrapper'
import { Footer } from 'component/Footer'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

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
