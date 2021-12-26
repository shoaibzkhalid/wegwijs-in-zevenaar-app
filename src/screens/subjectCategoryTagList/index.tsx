import { useRoute } from '@react-navigation/native'
import Wrapper from 'component/Wrapper'
import React, { Fragment } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Heading, NewsCard, TextMedium } from 'theme/common.styles'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useOrganizations } from 'utils/hooks'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'
import { ScrollView } from 'react-native'
import { Loader } from 'component/Loader'

export const SubjectCategoryTagList = () => {
  const { navigation } = useAppNavigation()

  const { category, subject, tag } = useRoute().params as any
  const { organizations, isLoading } = useOrganizations(category.id)

  return (
    <Wrapper>
      <ScrollView style={{ marginBottom: hp(15) }}>
        <Heading>
          {subject.title} - {category.name} - {tag.name}
        </Heading>
        <View>
          {!isLoading ? (
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
          ) : (
            <Loader />
          )}
        </View>
      </ScrollView>
    </Wrapper>
  )
}
