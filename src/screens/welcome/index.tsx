import { Loader } from 'component/Loader'
import Wrapper from 'component/Wrapper'
import { Video } from 'expo-av'
import React from 'react'
import RenderHTML from 'react-native-render-html'
import { SIZES } from 'theme'
import { Heading, NewsCard, SubHeading } from 'theme/common.styles'
import { useGeneral } from 'utils/hooks'

export const Welcome = () => {
  const video = React.useRef(null)
  const { generalData, isLoading } = useGeneral()

  return (
    <Wrapper>
      <Heading>Welkom</Heading>
      <SubHeading>In de Wegwijs in Zevenaar app</SubHeading>

      {!isLoading ? (
        <NewsCard>
          <RenderHTML
            source={{ html: generalData.welcome_message }}
            contentWidth={SIZES.width}
          />

          <Video
            source={{
              uri: generalData.welcome_video,
            }}
            style={{ width: 320, height: 200 }}
            resizeMode="contain"
            useNativeControls
            ref={video}
          />
        </NewsCard>
      ) : (
        <Loader />
      )}
    </Wrapper>
  )
}
