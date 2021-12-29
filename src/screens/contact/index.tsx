import Wrapper from 'component/Wrapper'
import React from 'react'
import { IMAGES } from 'theme'
import { ContactIcon, ContactRow, ContactText, Heading, NewsCard } from 'theme/common.styles'
import { useGeneral } from 'utils/hooks'
import * as Linking from 'expo-linking'
import { linkMap } from 'utils'
import { Loader } from 'component/Loader'

export const Contact = () => {
  const { generalData, isLoading } = useGeneral()
  const { contact_email, contact_name, contact_phone_number } = generalData
  const { contact_street, contact_house_number, contact_postal_code, contact_city } =
    generalData

  const { mapMarkerIcon, phoneIcon, envelopeIcon, userIcon } = IMAGES

  const addressObj = {
    street: contact_street,
    house_number: contact_house_number,
    postal_code: contact_postal_code,
    city: contact_city,
  }

  return (
    <Wrapper>
      <Heading>Contact</Heading>
      {!isLoading ? (
        <NewsCard>
          {contact_name && (
            <ContactRow>
              <ContactIcon source={userIcon} />
              <ContactText>{contact_name}</ContactText>
            </ContactRow>
          )}

          {contact_street && (
            <ContactRow onPress={() => linkMap(addressObj)}>
              <ContactIcon source={mapMarkerIcon} />
              <ContactText>
                {contact_street +
                  ' ' +
                  contact_house_number +
                  ', ' +
                  (contact_postal_code ? contact_postal_code + ' ' : '') +
                  (contact_city ? contact_city : '')}
              </ContactText>
            </ContactRow>
          )}

          {contact_phone_number && (
            <ContactRow onPress={() => Linking.openURL(`tel:${contact_phone_number}`)}>
              <ContactIcon source={phoneIcon} />
              <ContactText>{contact_phone_number}</ContactText>
            </ContactRow>
          )}

          {contact_email && (
            <ContactRow onPress={() => Linking.openURL(`mailto:${contact_email}`)}>
              <ContactIcon source={envelopeIcon} />
              <ContactText style={{ paddingLeft: 10 }}>{contact_email}</ContactText>
            </ContactRow>
          )}
        </NewsCard>
      ) : (
        <Loader />
      )}
    </Wrapper>
  )
}
