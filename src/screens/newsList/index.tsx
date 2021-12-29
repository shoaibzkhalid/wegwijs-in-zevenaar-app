import Wrapper from 'component/Wrapper'
import dayjs from 'dayjs'
import React, { Fragment } from 'react'
import { COLORS } from 'theme'
import { Heading, NewsCard, ParaText, TextMedium, TextNormal } from 'theme/common.styles'
import { useNews } from 'utils/hooks'

export const NewsList = () => {
  const { news } = useNews()

  const patchedNews = {
    id: '1',
    title: 'NIEUWS',
    description: 'Korte omschrijving op deze plek',
    post: [],
  }

  patchedNews.post.push(news)

  return (
    <Wrapper>
      <Heading>{patchedNews.title}</Heading>
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

      {/* <ParaText>
        U vindt hier ideeën van de gemeenschap om samen het wonen en leven in de gemeente nog
        mooier te maken. Misschien kunt u helpen een of meerdere ideeën te realiseren. U heeft
        ook de mogelijkheid om als inwoner, buurt of groep een mooi idee in te dienen.
      </ParaText> */}

      <NewsCard>
        <TextNormal color={'#494c23'}>
          Ga naar de website www.wegwijsinzevenaar.nl en dien je idee in.
        </TextNormal>
      </NewsCard>
    </Wrapper>
  )
}
