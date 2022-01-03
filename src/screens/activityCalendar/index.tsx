import { CustomList } from 'component/CustomList'
import Wrapper from 'component/Wrapper'
import dayjs from 'dayjs'
import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { Heading, NewsCard, TextMedium, TouchCard } from 'theme/common.styles'
import { useActivitiesByDate, useCalenderLocales, useData } from 'utils/hooks'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'

export const ActivityCalendar = () => {
  useCalenderLocales()
  const { navigation } = useAppNavigation()
  const [selectedDate, setSelectedDate] = React.useState('')

  const { items, isLoading, lp, isFetching } = useData(
    useGetActivitiesByDateQuery,
    selectedDate
  )

  const getMarkedDates = (date) => {
    return { [date]: { selected: true, selectedColor: 'blue' } }
  }

  return (
    <Wrapper>
      {items.length > 0 && (
        <Fragment>
          <CustomList
            ListHeaderComponent={() => (
              <Fragment>
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
                    <TextMedium>Selecteer een datum</TextMedium>
                  </NewsCard>
                )}
              </Fragment>
            )}
            data={items}
            isLoading={isLoading}
            isFetching={isFetching}
            lastPage={lp}
            renderItem={({ item }) => {
              const { attributes, id } = item
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

                  <TextMedium color={COLORS.lightPrimary}>
                    Vant {dayjs(start_date).format('DD-MM-YYYY')} tot{' '}
                    {dayjs(end_date).format('DD-MM-YYYY')}
                  </TextMedium>
                  <TextMedium color={'#494c23'}>{short_description}</TextMedium>
                </TouchCard>
              )
            }}
          />
        </Fragment>
      )}
    </Wrapper>
  )
}
