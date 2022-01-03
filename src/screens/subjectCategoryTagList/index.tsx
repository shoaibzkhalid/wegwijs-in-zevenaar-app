import { useRoute } from '@react-navigation/native'
import Wrapper from 'component/Wrapper'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Heading, NewsCard, TextMedium } from 'theme/common.styles'
import { useData } from 'utils/hooks'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'
import { CustomList } from 'component/CustomList'
import { useGetOrganizationsQuery } from 'store/api'

export const SubjectCategoryTagList = () => {
  const { navigation } = useAppNavigation()

  const { category, subject, tag } = useRoute().params as any

  const { items, isLoading, lp, isFetching } = useData(useGetOrganizationsQuery, category.id)

  return (
    <Wrapper>
      <CustomList
        data={items}
        isLoading={isLoading}
        isFetching={isFetching}
        lastPage={lp}
        ListHeaderComponent={() => (
          <Heading>
            {subject.title} - {category.name} - {tag.name}
          </Heading>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('OrganizationDetail', {
                organization: item,
              })
            }
          >
            <NewsCard>
              <TextMedium>{item.attributes.name}</TextMedium>
            </NewsCard>
          </TouchableOpacity>
        )}
      />
    </Wrapper>
  )
}
