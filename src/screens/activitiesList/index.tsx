import { useRoute } from '@react-navigation/native'
import Wrapper from 'component/Wrapper'
import React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { BoldText, Heading, NewsCard, ParaText } from 'theme/common.styles'
import { getSubString } from 'utils'
import { useActivities } from 'utils/hooks'

export const ActivitiesList = () => {
  const { target } = useRoute().params as any
  const { activities } = useActivities(target.targetGroup)

  const patchedActivities = {
    item: {
      id: '1',
      title: 'Activiteiten',
      description: '',
    },
    targetGroup: null,
    activities: [],
  }

  return (
    <Wrapper>
      <ScrollView style={{ marginBottom: hp(15) }}>
        <Heading>Activiteiten</Heading>
        <ParaText>{target.targetGroupText}</ParaText>

        {activities.map((activity, index) => {
          const { attributes } = activity
          const {
            name,
            start_date,
            start_time,
            end_time,
            short_description,
            street,
            house_number,
            city,
          } = attributes
          return (
            <NewsCard key={index}>
              <BoldText>{name}</BoldText>
              <Text>
                Op {start_date} van {start_time} tot {end_time}
              </Text>
              <Text>{getSubString(short_description)}</Text>

              <Text>
                Adres: {street} {house_number} {city}
              </Text>
            </NewsCard>
          )
        })}
      </ScrollView>
    </Wrapper>
  )
}
