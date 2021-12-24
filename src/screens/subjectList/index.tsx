import { useRoute } from '@react-navigation/native'
import { Loader } from 'component/Loader'
import Wrapper from 'component/Wrapper'
import { Subject } from 'models/generalTypes'
import React, { Fragment } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Headline, Subheading } from 'react-native-paper'
import styled from 'styled-components/native'
import { COLORS } from 'theme'
import { Heading } from 'theme/common.styles'
import { useCategories } from 'utils/hooks'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'

export const SubjectList = () => {
  const { subject } = useRoute().params as any
  const { title, description, id } = subject as Subject
  const { navigation } = useAppNavigation()

  const { selectedCategories, isLoading } = useCategories(id)
  // console.log('data', selectedCategories)

  const renderContent = () => {
    if (isLoading) return <Loader color="red" />

    return (
      <Fragment>
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
        <MediumText>{description}</MediumText>
      </Fragment>
    )
  }

  return (
    <Wrapper>
      <Heading>{title}</Heading>
      {renderContent()}
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
