import { CustomList } from 'component/CustomList'
import Wrapper from 'component/Wrapper'
import dayjs from 'dayjs'
import React from 'react'
import { useGetNewsQuery } from 'store/api'
import { COLORS } from 'theme'
import { Heading, NewsCard, TextMedium, TextNormal } from 'theme/common.styles'
import { useData } from 'utils/hooks'

export const NewsList = () => {
  const { items, isLoading, isFetching, lp } = useData(useGetNewsQuery)

  const patchedNews = {
    id: '1',
    title: 'NIEUWS',
    description: 'Korte omschrijving op deze plek',
    post: [],
  }

  patchedNews.post.push(items)

  return (
    <Wrapper>
      <CustomList
        data={items}
        isLoading={isLoading}
        isFetching={isFetching}
        lastPage={lp}
        ListHeaderComponent={() => <Heading>{patchedNews.title}</Heading>}
        renderItem={({ item }) => {
          const { attributes, id } = item
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
        }}
      />

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
