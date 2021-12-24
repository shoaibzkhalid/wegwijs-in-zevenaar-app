import { useRoute } from '@react-navigation/native'
import Wrapper from 'component/Wrapper'
import { Subject } from 'models/generalTypes'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Headline, Subheading } from 'react-native-paper'
import styled from 'styled-components/native'
import { COLORS } from 'theme'
import { useCategories } from 'utils/hooks'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'

export const SubjectList = () => {
  const subject = useRoute().params
  const { title, description, id } = subject as Subject
  const { navigation } = useAppNavigation()

  const { selectedCategories } = useCategories(id)
  // console.log('data', selectedCategories)

  return (
    <Wrapper>
      <HugeText>{title}</HugeText>
      <MediumText>{description}</MediumText>

      {selectedCategories &&
      selectedCategories.attributes &&
      selectedCategories.attributes.children
        ? selectedCategories.attributes.children.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('SubjectCategoryList', {
                  category,
                  subject,
                })
              }
            >
              <NewsCard>
                <PostTitle>{category.name}</PostTitle>
              </NewsCard>
            </TouchableOpacity>
          ))
        : null}
    </Wrapper>
  )
}

const NewsCard = styled.View`
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: ${COLORS.white};
  padding: 10px;
  margin: 10px;
`

const PostTitle = styled.Text`
  color: #494c23;
  font-weight: bold;
  font-size: 18px;
`

const HugeText = styled(Headline)`
  padding: 15px 0px 5px 5px;
  color: white;
`

const MediumText = styled(Subheading)`
  padding: 0px 5px;
  color: white;
`
