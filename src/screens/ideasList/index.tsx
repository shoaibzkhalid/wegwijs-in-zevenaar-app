import Wrapper from 'component/Wrapper'
import React from 'react'
import { View, Text } from 'react-native'
import { BoldText, Heading, NewsCard, ParaText, SubWrapper } from 'theme/common.styles'
import { useIdeas } from 'utils/hooks'

export const IdeasList = () => {
  const { ideas } = useIdeas()

  const patchedIdeas = {
    id: '1',
    title: 'Ideeën',
    description: 'Korte omschrijving op deze plek',
    post: [],
  }

  patchedIdeas.post.push(ideas)

  return (
    <Wrapper>
      <Heading>{patchedIdeas.title}</Heading>
      <ParaText>
        U vindt hier ideeën van de gemeenschap om samen het wonen en leven in de gemeente nog
        mooier te maken. Misschien kunt u helpen een of meerdere ideeën te realiseren. U heeft
        ook de mogelijkheid om als inwoner, buurt of groep een mooi idee in te dienen.
      </ParaText>

      <NewsCard>
        <BoldText>Heeft u zelf een leuk idee?</BoldText>
        <Text> Ga naar de website www.wegwijsinzevenaar.nl en dien je idee in.</Text>
      </NewsCard>
    </Wrapper>
  )
}
