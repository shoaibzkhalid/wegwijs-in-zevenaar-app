import { useRoute } from '@react-navigation/native'
import Wrapper from 'component/Wrapper'
import React from 'react'
import styled from 'styled-components/native'
import { IMAGES, SIZES } from 'theme'
import { ContactIcon, ContactRow, ContactText, Heading, NewsCard } from 'theme/common.styles'
import { RenderHTML } from 'react-native-render-html'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { linkMap } from 'utils'
import * as Linking from 'expo-linking'
import { ScrollView } from 'react-native'

export const OrganizationDetail = () => {
  const organization = (useRoute().params as any).organization

  // console.log('organization', organization)

  const { attributes } = organization
  const { name, phone_number, email, website } = attributes
  const { description, information_title, information_description } = attributes
  const { street, house_number, house_number_addition } = attributes
  const { postal_code, city } = attributes
  const { mapMarkerIcon, phoneIcon, envelopeIcon, globeIcon } = IMAGES

  return (
    <Wrapper>
      <ScrollView contentContainerStyle={{ paddingBottom: hp(15) }}>
        {organization && <Heading>{name}</Heading>}

        <NewsCard>
          {organization && <PostTitle>{name}</PostTitle>}
          {street && (
            <ContactRow onPress={() => linkMap(attributes)}>
              <ContactIcon source={mapMarkerIcon} />
              <ContactText>
                {street +
                  ' ' +
                  house_number +
                  (house_number_addition ? house_number_addition : '') +
                  ', ' +
                  (postal_code ? postal_code + ' ' : '') +
                  (city ? city : '')}
              </ContactText>
            </ContactRow>
          )}

          {phone_number && (
            <ContactRow onPress={() => Linking.openURL(`tel:${phone_number}`)}>
              <ContactIcon source={phoneIcon} />
              <ContactText>{phone_number}</ContactText>
            </ContactRow>
          )}

          {email && (
            <ContactRow onPress={() => Linking.openURL(`mailto:${email}`)}>
              <ContactIcon source={envelopeIcon} />
              <ContactText style={{ paddingLeft: 10 }}>{email}</ContactText>
            </ContactRow>
          )}

          {website && (
            <ContactRow onPress={() => Linking.openURL(`https:${website}`)}>
              <ContactIcon source={globeIcon} />
              <ContactText>{website}</ContactText>
            </ContactRow>
          )}

          {description && <Heading>{information_title}</Heading>}

          {information_description && (
            <RenderHTML
              source={{ html: information_description }}
              contentWidth={SIZES.width}
            />
          )}
        </NewsCard>
      </ScrollView>
    </Wrapper>
  )
}

const PostTitle = styled.Text`
  color: #494c23;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`
