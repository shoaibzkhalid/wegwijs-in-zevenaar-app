import Wrapper from 'component/Wrapper'
import dayjs from 'dayjs'
import React, { Fragment } from 'react'
import { COLORS } from 'theme'
import { Heading, NewsCard, TextMedium } from 'theme/common.styles'
import { useNews } from 'utils/hooks'

export const NewsList = () => {
  const { news } = useNews()

  return (
    <Wrapper>
      <Heading>NIEUWS</Heading>
      <Fragment>
        {news.map((activity) => {
          const { attributes, id } = activity
          const { name, start_date, end_date, short_description } = attributes
          return (
            <NewsCard key={id}>
              <TextMedium>{name}</TextMedium>

              <TextMedium style={{ color: COLORS.primary }}>
                Vant {dayjs(start_date).format('DD-MM-YYYY')} tot{' '}
                {dayjs(end_date).format('DD-MM-YYYY')}
              </TextMedium>
              <TextMedium>{short_description}</TextMedium>
            </NewsCard>
          )
        })}
      </Fragment>
    </Wrapper>
  )
}
