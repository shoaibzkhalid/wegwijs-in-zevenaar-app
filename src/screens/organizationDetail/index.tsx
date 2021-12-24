import { useRoute } from '@react-navigation/native'
import Wrapper from 'component/Wrapper'
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Headline } from 'react-native-paper'
import styled from 'styled-components/native'
import { IMAGES } from 'theme'
import { TouchRowContainer } from 'theme/common.styles'
import { RenderHTML } from 'react-native-render-html'

export const OrganizationDetail = () => {
  const organization = (useRoute().params as any).organization

  return (
    <Wrapper>
      {organization && <Text>{organization.attributes.name}</Text>}
      <NewsCard>
        {organization && <PostTitle>{organization.attributes.name}</PostTitle>}
        {organization.attributes.street && (
          <TouchableOpacity>
            <Text>
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
            </Text>
          </TouchableOpacity>
        )}

        {organization.attributes.phone_number && (
          <TouchRowContainer
            style={{ padding: 10, alignItems: 'center', backgroundColor: 'red' }}
          >
            <ImageIcon source={IMAGES.phoneIcon} />
            <Text>{organization.attributes.phone_number}</Text>
          </TouchRowContainer>
        )}

        {organization.attributes.email && (
          <TouchRowContainer style={{ padding: 10 }}>
            <ImageIcon source={IMAGES.envelopeIcon} />
            <Text>{organization.attributes.email}</Text>
          </TouchRowContainer>
        )}

        {organization.attributes.website && (
          <TouchRowContainer style={{ padding: 10 }}>
            <ImageIcon source={IMAGES.globeIcon} />
            <Text>{organization.attributes.website}</Text>
          </TouchRowContainer>
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

const NewsCard = styled.View`
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
  margin: 10px;
  padding: 10px;
`
const PostTitle = styled.Text`
  color: #494c23;
  font-weight: bold;
  font-size: 18px;
`

const ImageIcon = styled.Image`
  width: 20px;
  height: 10px;
`
