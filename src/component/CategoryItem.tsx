import { HomeOption } from 'models/generalTypes'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import styled from 'styled-components/native'
import { useDrawer } from 'utils/hooks'
import { useAppNavigation } from 'utils/hooks/useAppNavigation'

type Props = {
  data: HomeOption
}

export const CategoryItem: React.FC<Props> = ({ data }) => {
  const { icon, title, subject, screenName, target } = data
  const { navigation } = useAppNavigation()
  const { closeDrawer } = useDrawer()

  return (
    <Item
      onPress={() => {
        closeDrawer()
        navigation.navigate(screenName, { subject, target })
      }}
    >
      <ItemIcon source={icon} />
      <ItemText>{title}</ItemText>
    </Item>
  )
}

const Item = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;

  width: ${wp(30)}px;
`
const ItemIcon = styled.Image`
  margin-bottom: 10px;
  width: ${wp(30)}px;
  height: ${wp(30)}px;
`
const ItemText = styled.Text`
  color: white;
  text-align: center;
  font-size: 12.5px;
`
