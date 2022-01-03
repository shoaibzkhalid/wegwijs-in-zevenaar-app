import { CustomList } from 'component/CustomList'
import Wrapper from 'component/Wrapper'
import React from 'react'
import { useGetIdeasQuery } from 'store/api'
import { Heading, NewsCard, ParaText, TextMedium, TextNormal } from 'theme/common.styles'
import { useData } from 'utils/hooks'

export const IdeasList = () => {
  const { items, isLoading, isFetching, lp } = useData(useGetIdeasQuery)

  const patchedIdeas = {
    id: '1',
    title: 'Ideeën',
    description: 'Korte omschrijving op deze plek',
    post: [],
  }

  patchedIdeas.post.push(items)

  return (
    <Wrapper>
      <Heading>{patchedIdeas.title}</Heading>
      <ParaText>
        U vindt hier ideeën van de gemeenschap om samen het wonen en leven in de gemeente nog
        mooier te maken. Misschien kunt u helpen een of meerdere ideeën te realiseren. U heeft
        ook de mogelijkheid om als inwoner, buurt of groep een mooi idee in te dienen.
      </ParaText>

      <CustomList
        data={items}
        isLoading={isLoading}
        isFetching={isFetching}
        ListHeaderComponent={() => (
          <NewsCard>
            <TextMedium>Heeft u zelf een leuk idee?</TextMedium>
            <TextNormal color={'#494c23'}>
              Ga naar de website www.wegwijsinzevenaar.nl en dien je idee in.
            </TextNormal>
          </NewsCard>
        )}
        lastPage={lp}
        renderItem={({ item }) => (
          <NewsCard>
            <TextMedium>Heeft u zelf een leuk idee?</TextMedium>
            <TextNormal color={'#494c23'}>
              Ga naar de website www.wegwijsinzevenaar.nl en dien je idee in.
            </TextNormal>
          </NewsCard>
        )}
      />
    </Wrapper>
  )
}
