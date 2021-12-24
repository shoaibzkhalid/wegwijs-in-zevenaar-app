import { Footer } from 'component/Footer'
import Wrapper from 'component/Wrapper'
import React from 'react'
import { Heading, ParaText } from 'theme/common.styles'

export const OrganizationsList = () => {
  return (
    <Wrapper>
      <Heading>Gids</Heading>
      <ParaText>
        Zoekt u een organisatie of een functie in de gemeente Zevenaar die actief zijn op het
        gebied van het sociaal domein dan kunt u die vinden met gebruik van de zoekfunctie. Typ
        de naam of functie en druk op de zoekknop.
      </ParaText>
      <Footer />
    </Wrapper>
  )
}
