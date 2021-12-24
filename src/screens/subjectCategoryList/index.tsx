import { useRoute } from '@react-navigation/native'
import Wrapper from 'component/Wrapper'
import React, { Fragment } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { COLORS } from 'theme'
import { Heading, TextHuge, TextMedium } from 'theme/common.styles'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useOrganizations } from 'utils/hooks'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'
import { ScrollView } from 'react-native-gesture-handler'

export const SubjectCategoryList = () => {
  const { navigation } = useAppNavigation()

  const { category, subject } = useRoute().params as any
  const { organizations } = useOrganizations(category.id)

  return (
    <Wrapper>
      <ScrollView style={{ marginBottom: hp(15) }}>
        <Heading>
          {category.name} - {subject.title}
        </Heading>
        {category.short_description && (
          <TextMedium style={{ padding: 10, color: 'white' }}>
            {category.short_description}
          </TextMedium>
        )}

        <Tags>
          {category.children.length > 0 &&
            category.children.map((tag, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('SubjectCategoryTagList', {
                    tag,
                    subject,
                    category,
                  })
                }
              >
                <TagCard>
                  <TextMedium>{tag.name}</TextMedium>
                </TagCard>
              </TouchableOpacity>
            ))}
        </Tags>

        <View>
          <Heading style={{ padding: 10, paddingBottom: 0 }}>Organisaties</Heading>

          {organizations.length > 0 ? (
            <Fragment>
              {organizations.map((organization, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate('OrganizationDetail', {
                      organization,
                    })
                  }
                >
                  <NewsCard>
                    <TextMedium>{organization.attributes.name}</TextMedium>
                  </NewsCard>
                </TouchableOpacity>
              ))}
            </Fragment>
          ) : null}
        </View>
      </ScrollView>
    </Wrapper>
  )
}

const Tags = styled.View`
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
`

const TagCard = styled.View`
  background-color: ${COLORS.white};
  padding: 10px 10px;
  width: ${wp(45)}px;
  height: ${hp(7)}px;
  margin: 5px;
`

const NewsCard = styled.View`
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: white;
  padding: 10px;
  margin: 10px;
`
