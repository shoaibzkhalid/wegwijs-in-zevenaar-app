import React from 'react'
import { Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import dayjs from 'dayjs'
import Wrapper from 'component/Wrapper'
import RenderHTML from 'react-native-render-html'
import { COLORS } from 'theme'
import { Heading, NewsCard, TextMedium } from 'theme/common.styles'

export const ActivityDetail = () => {
  const { activity } = useRoute().params as any
  const { attributes, id } = activity
  const { name, start_date, end_date, description, image } = attributes

  console.log('activity', activity)

  return (
    <Wrapper>
      <Heading>Activiteiten</Heading>
      <NewsCard>
        <TextMedium>{name}</TextMedium>

        <TextMedium style={{ color: COLORS.primary }}>
          Op {dayjs(start_date).format('DD-MM-YYYY')} van {dayjs(start_date).format('HH:mm')}{' '}
          tot {dayjs(end_date).format('HH:mm')}
        </TextMedium>
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, alignSelf: 'center' }}
          resizeMode="contain"
        />
        <RenderHTML source={{ html: description }} />
      </NewsCard>
    </Wrapper>
  )
}
