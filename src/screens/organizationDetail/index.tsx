import { useRoute } from '@react-navigation/native'
import Wrapper from 'component/Wrapper'
import React from 'react'
import styled from 'styled-components/native'
import { IMAGES } from 'theme'
import { Heading, NewsCard, TouchRowContainer } from 'theme/common.styles'
import { RenderHTML } from 'react-native-render-html'

export const OrganizationDetail = () => {
  const organization = (useRoute().params as any).organization

  return (
    <Wrapper>
      {organization && <Heading>{organization.attributes.name}</Heading>}

      <NewsCard>
        {organization && <PostTitle>{organization.attributes.name}</PostTitle>}
        {organization.attributes.street && (
          <ContactRow>
            <ImageIcon source={IMAGES.mapMarkerIcon} />
            <ContactText>
              {organization.attributes.street +
                ' ' +
                organization.attributes.house_number +
                (organization.attributes.house_number_addition
                  ? organization.attributes.house_number_addition
                  : '') +
                ', ' +
                (organization.attributes.postal_code
                  ? organization.attributes.postal_code + ' '
                  : '') +
                (organization.attributes.city ? organization.attributes.city : '')}
            </ContactText>
          </ContactRow>
        )}

        {organization.attributes.phone_number && (
          <ContactRow>
            <ImageIcon source={IMAGES.phoneIcon} />
            <ContactText>{organization.attributes.phone_number}</ContactText>
          </ContactRow>
        )}

        {organization.attributes.email && (
          <ContactRow>
            <ImageIcon source={IMAGES.envelopeIcon} />
            <ContactText style={{ paddingLeft: 10 }}>
              {organization.attributes.email}
            </ContactText>
          </ContactRow>
        )}

        {organization.attributes.website && (
          <ContactRow>
            <ImageIcon source={IMAGES.globeIcon} />
            <ContactText>{organization.attributes.website}</ContactText>
          </ContactRow>
        )}

        {organization.attributes.description && (
          <Headline>{organization.attributes.information_title}</Headline>
        )}

        {organization.attributes.information_description && (
          <RenderHTML source={{ html: organization.attributes.information_description }} />
        )}
      </NewsCard>
    </Wrapper>
  )
}

const PostTitle = styled.Text`
  color: #494c23;
  font-weight: bold;
  font-size: 18px;
`

const ImageIcon = styled.Image`
  width: 20px;
  height: 20px;
`

const ContactRow = styled(TouchRowContainer)`
  padding: 5px 10px;
`

const ContactText = styled.Text`
  padding-left: 10px;
`
