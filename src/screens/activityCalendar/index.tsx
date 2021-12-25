import Wrapper from 'component/Wrapper'
import dayjs from 'dayjs'
import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import { Calendar, CalendarList } from 'react-native-calendars'
import { ScrollView } from 'react-native-gesture-handler'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { COLORS } from 'theme'
import { Heading, NewsCard, TextMedium, TouchCard } from 'theme/common.styles'
import { useActivitiesByDate, useCalenderLocales } from 'utils/hooks'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'

export const ActivityCalendar = () => {
  useCalenderLocales()
  const { navigation } = useAppNavigation()

  const [selectedDate, setSelectedDate] = React.useState('')
  const { activities } = useActivitiesByDate(selectedDate)
  console.log('selectedDate', selectedDate, activities)

  const getMarkedDates = (date) => {
    return { [date]: { selected: true, selectedColor: 'blue' } }
  }

  return (
    <Wrapper>
      <ScrollView style={{ marginBottom: heightPercentageToDP(15) }}>
        <Heading>Activiteiten</Heading>

        <Calendar
          style={{ margin: 10 }}
          onDayPress={(date) => setSelectedDate(date.dateString)}
          current={selectedDate}
          markedDates={getMarkedDates(selectedDate)}
        />
        {selectedDate ? (
          <NewsCard style={{ backgroundColor: '#494c23' }}>
            <TextMedium color="white" style={{ textAlign: 'center' }}>
              {dayjs(selectedDate).format('DD-MM-YYYY')}
            </TextMedium>
          </NewsCard>
        ) : (
          <NewsCard>
            <Text>Selecteer een datum</Text>
          </NewsCard>
        )}

        {activities.length > 0 && (
          <Fragment>
            {activities.map((activity) => {
              const { attributes, id } = activity
              const { name, start_date, end_date, short_description } = attributes
              return (
                <TouchCard
                  key={id}
                  onPress={() =>
                    navigation.navigate('ActivityDetail', {
                      activity,
                    })
                  }
                >
                  <TextMedium>{name}</TextMedium>

                  <TextMedium style={{ color: COLORS.primary }}>
                    Vant {dayjs(start_date).format('DD-MM-YYYY')} tot{' '}
                    {dayjs(end_date).format('DD-MM-YYYY')}
                  </TextMedium>
                  <TextMedium>{short_description}</TextMedium>
                </TouchCard>
              )
            })}
          </Fragment>
        )}
      </ScrollView>
    </Wrapper>
  )
}
