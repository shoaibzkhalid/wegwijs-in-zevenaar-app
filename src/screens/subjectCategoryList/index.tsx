import { useRoute } from '@react-navigation/native'
import Wrapper from 'component/Wrapper'
import React, { Fragment } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { COLORS } from 'theme'
import { Heading, SubHeading, TextMedium, TextNormal } from 'theme/common.styles'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useData } from 'utils/hooks'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'
import { useGetOrganizationsQuery } from 'store/api'
import { CustomList } from 'component/CustomList'

export const SubjectCategoryList = () => {
  const { navigation } = useAppNavigation()
  const { category, subject } = useRoute().params as any
  const { items, isLoading, lp, isFetching } = useData(useGetOrganizationsQuery, category.id)
  const { name, short_description, children } = category

  return (
    <Wrapper>
      <CustomList
        data={items}
        isLoading={isLoading}
        isFetching={isFetching}
        lastPage={lp}
        ListHeaderComponent={() => (
          <Fragment>
            <Heading>
              {name} - {subject.title}
            </Heading>
            {short_description && <SubHeading>{short_description}</SubHeading>}

            <Tags>
              {children.length > 0 &&
                children.map((tag, index) => (
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
                      <TextNormal numberOfLines={2}>{tag.name}</TextNormal>
                    </TagCard>
                  </TouchableOpacity>
                ))}
            </Tags>
            <Heading style={{ padding: 10, paddingBottom: 0 }}>Organisaties</Heading>
          </Fragment>
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
