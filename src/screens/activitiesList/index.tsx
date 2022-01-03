import { useRoute } from '@react-navigation/native'
import Wrapper from 'component/Wrapper'
import dayjs from 'dayjs'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useGetActivitiesByTargetGrpQuery } from 'store/api'
import { COLORS } from 'theme'
import { Heading, NewsCard, ParaText, TextMedium, TextNormal } from 'theme/common.styles'
import { getSubString } from 'utils'
import { useData } from 'utils/hooks'

export const ActivitiesList = () => {
  const { target } = useRoute().params as any
  const [page, setPage] = React.useState(1)

  const params = {
    group: target.targetGroup,
    page,
  }

  const { activities } = useData(useGetActivitiesByTargetGrpQuery, params)

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
          const { name, start_date, start_time, end_time } = attributes
          const { short_description, street, house_number, city } = attributes

          return (
            <NewsCard key={index}>
              <TextMedium style={{ paddingBottom: 5 }}>{name}</TextMedium>
              <TextMedium style={{ color: COLORS.lightPrimary }}>
                Op {dayjs(start_date).format('DD-MM-YYYY')} van{' '}
                {dayjs(start_time).format('HH:mm')} tot {dayjs(end_time).format('HH:mm')}
              </TextMedium>
              <TextMedium style={{ color: COLORS.lightPrimary }}>
                Adres: {street} {house_number} {city}
              </TextMedium>

              <TextNormal style={{ fontFamily: 'Roboto_400Regular', paddingTop: 10 }}>
                {getSubString(short_description)}
              </TextNormal>
            </NewsCard>
          )
        })}
      </ScrollView>
    </Wrapper>
  )
}
