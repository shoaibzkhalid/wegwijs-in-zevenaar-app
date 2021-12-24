import { CategoryItem } from 'component/CategoryItem'
import Wrapper from 'component/Wrapper'
import { HomeOption } from 'models/generalTypes'
import React from 'react'
import { View, Text } from 'react-native'
import { Heading, ItemGrid, ParaText } from 'theme/common.styles'
import { activityChooseOptions } from 'utils/hooks/constants'

export const ActivityChoose = () => {
  return (
    <Wrapper>
      <Heading>Activiteiten</Heading>
      <ParaText>
        Organisaties in de gemeente Zevenaar organiseren verschillende activiteiten op gebied
        van dagbesteding, sport en recreatie voor jong en oud. Onder Activiteiten staan de
        mogelijkheden die worden georganiseerd. Met de “Kalender” kan op datum de activiteiten
        worden gevonden. Ook is het mogelijk op leeftijdscategorie, 0 - 25 jaar; 25 - 55 jaar
        en 55 jaar en ouder) activiteiten te zoeken.
      </ParaText>
      <ItemGrid>
        {activityChooseOptions.map((option: HomeOption) => (
          <CategoryItem data={option} key={option.title} />
        ))}
      </ItemGrid>
    </Wrapper>
  )
}
