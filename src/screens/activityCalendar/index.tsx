import Wrapper from 'component/Wrapper'
import React from 'react'
import { View, Text } from 'react-native'
import { Calendar, CalendarList } from 'react-native-calendars'
import { useCalenderLocales } from 'utils/hooks'

export const ActivityCalendar = () => {
  useCalenderLocales()

  return (
    <Wrapper>
      <Text>Activiteiten</Text>

      <Calendar />

      <Text>Selecteer een datum</Text>
    </Wrapper>
  )
}
