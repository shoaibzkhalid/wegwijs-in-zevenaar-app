import { COLORS } from './colors'
import { SIZES } from './sizes'
import { FONTS } from './fonts'
import styled, { css } from 'styled-components/native'
import { Headline } from 'react-native-paper'

type PaddedViewTypes = {
  fullWidth?: boolean
}

export const PaddedView = styled.TouchableOpacity<PaddedViewTypes>`
  width: ${({ fullWidth }) => `${fullWidth ? '100%' : '100%'}`};
  align-items: center;
`

export const SearchView = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
`

export const RowContainer = styled.View`
  flex-direction: row;
  background-color: ${COLORS.white};
`

export const TouchRowContainer = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${COLORS.white};
`

export const CenterRowContainer = styled.View`
  flex-direction: row;
  background-color: ${COLORS.white};
  align-items: center;
`

export const shadow = css`
  border-color: ${COLORS.shadowColor};
  border-bottom-width: 0;
  shadow-opacity: 1;
  elevation: 1;
`

export const IconSeparator = styled.View`
  background-color: ${() => `${COLORS.lighterGray}`};
  border-right-width: 0.5px;
  border-style: solid;
  padding: 18px 0px;
  border-color: ${() => `${COLORS.lighterGray}`};
`
export const SalesPriceText = styled.Text`
  font-size: ${() => `${FONTS.fontNormal}px`};
  text-decoration: line-through;
  text-decoration-style: solid;
  color: ${() => `${COLORS.secondary}`};
  margin-left: 10px;
`

export const SectionView = styled.View`
  padding: 3% 0%;
  padding-left: 1.5%;
`

export const CenterAlignText = styled.Text`
  text-align: center;
  color: ${COLORS.lightGray};
  font-size: ${FONTS.fontBig}px;
`

export const LoadingLogoContainer = styled.View`
  background-color: ${COLORS.white};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${() => `${SIZES.height}px`};
`
export const InputContainer = styled.View`
  height: 40px;
  width: 90%;
  flex-direction: row;
  align-items: center;
  background-color: ${() => COLORS.white};
  border-radius: ${() => `${SIZES.radius}px`};
  padding-left: 12px;
  margin: 10px 0px;
  /* ${shadow} */
`

export const TextInputField = styled.TextInput`
  flex: 1;
  padding: 12px;
  padding-left: 0px;
  height: 40px;
  width: 90%;
  flex-direction: row;
  align-items: center;
  border-radius: ${() => `${SIZES.radius}px`};
  padding-left: 12px;
  margin: 10px 0px;
`

export const ModalContainer = styled.View`
  background-color: ${COLORS.white};
  padding: 35px;
  align-items: flex-start;
`

export const ModalHeading = styled.Text`
  text-align: center;
  color: ${() => COLORS.primary};
  margin: 10px 0px;
  font-size: ${() => `${FONTS.fontBig}px`};
  font-weight: bold;
`

export const HeadingText = styled.Text`
  color: #000;
  padding: 1.5% 1.4%;
  font-weight: bold;
  font-size: ${() => `${FONTS.fontBig}px`};
`

//------------------------------------------------------------------//

//-------------------------TEXT_STYLED_COMPONENTS-------------------//

type CustomTextProps = {
  color?: string
  weight?: string
  underline?: boolean
  primary?: boolean
}

export const CustomText = styled.Text<CustomTextProps>`
  color: ${({ theme, color }) => (color ? color : COLORS.black)};
  color: ${({ color = '#494c23', primary }) => (primary ? COLORS.primary : `${color}`)};
  font-weight: ${({ weight }) => `${weight ? weight : 'normal'}`};

  font-family: Roboto_500Medium;
`
export const TextTiny = styled(CustomText)`
  font-size: ${FONTS.base}px;
`

export const TextSmall = styled(CustomText)`
  font-size: ${FONTS.fontSmall}px;
`

export const TextNormal = styled(CustomText)`
  font-size: ${FONTS.fontNormal}px;
`

export const TextMedium = styled(CustomText)`
  font-size: ${FONTS.fontMedium}px;
`

export const TextBig = styled(TextNormal)`
  font-size: ${FONTS.fontBig}px;
`

export const TextBigger = styled(TextNormal)`
  font-size: ${FONTS.fontBigger}px;
`

export const TextHuge = styled(CustomText)`
  font-size: ${FONTS.fontHuge}px;
`

export const ColumnContainer = styled.View`
  align-items: center;
`

//------------------------------------------------------------------//

export const CardTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  padding-right: 30px;
`

export const CardText = styled.Text`
  font-size: ${() => `${FONTS.fontMedium}px`};
  margin-left: 5px;
  line-height: 20px;
`
export const Card = styled.View`
  background-color: ${COLORS.white};
  padding: 10px 0px;
  padding-top: 0px;
  margin: 5px 10px;
  border-radius: ${() => `${SIZES.radius}px`};
  ${shadow}
`
export const CardHeading = styled.Text`
  font-size: ${() => `${FONTS.fontBig}px`};
  font-weight: bold;
  padding: 10px;
`

export const InputFieldsContainer = styled.View`
  justify-content: space-between;
  background-color: ${COLORS.white};
  margin: 5px 10px;

  padding: 5px 5px;
  border-radius: ${() => `${SIZES.radius}px`};
  ${shadow}
`

export const RoundTabBarItemCircle = styled.TouchableOpacity`
  top: -22.5px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid;
  background-color: ${() => COLORS.white};
  border-color: ${() => COLORS.lighterGray};
`
export const ViewMoreBtnContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-self: flex-end;
`

export const BrandsSliderContainer = styled.TouchableOpacity`
  width: 100px;
  height: 80px;
  background-color: ${COLORS.white};
  border-radius: ${() => `${SIZES.radius}px`};
  margin-right: ${() => `${SIZES.padding + 2}px`};
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${shadow}
`

export const ImageSmall = styled.Image`
  width: 50px;
  height: 50px;
`

export const ImageTiny = styled.Image`
  width: 20px;
  height: 20px;
`
export const CardsContainer = styled.View`
  padding: 10px;
`

export const prefCardStyles = css`
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const PrefRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const Container = styled.View`
  justify-content: center;
  flex: 1;
  height: 100%;
  padding: 0% 5%;
`

export const SubContainer = styled.View`
  background-color: ${COLORS.white};
  border-radius: ${SIZES.radius}px;
  padding: 20px 10px;
  margin-bottom: 25px;
`

export const MenuOption = styled.TouchableOpacity`
  flex-direction: row;
  width: 90%;
  align-self: center;
  align-items: center;
  padding: 10px 10px;
  justify-content: space-between;
`

type FilterOptionType = {
  highlight: boolean
}

export const FilterOptionContainer = styled.View`
  flex-flow: row wrap;
  justify-content: space-around;
`

export const FilterOption = styled.TouchableOpacity<FilterOptionType>`
  background-color: ${({ highlight }) =>
    `${highlight ? COLORS.lightPrimary : COLORS.lightGray}`};
  border-color: ${({ highlight }) => `${highlight ? COLORS.primary : COLORS.lightGray}`};
  border-width: 1px;
  border-radius: ${SIZES.radius}px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 8px;
`

export const AvatarContainer = styled.View`
  justify-content: center;
  padding: 5px;
  align-self: center;
  padding-bottom: 0;
`

export const RoundedProfileImg = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
`

export const UploadIconContainer = styled.TouchableOpacity`
  background-color: ${COLORS.white};
  align-self: flex-end;
  top: -40px;
  padding: 15px;
  margin-bottom: 0;
  border-radius: 50px;
  ${shadow};
`

export const DrawerContainer = styled.View`
  background-color: ${COLORS.white};
  height: 100%;
  justify-content: space-around;
  /* padding-top: 30px; */
`

export const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${COLORS.white};
  border-radius: ${SIZES.radiusTiny}px;
  margin-bottom: 5px;
  ${shadow}
`
export const ItemSectionContainer = styled.TouchableOpacity`
  background-color: ${COLORS.white};
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  margin: 3px 0px;
`
export const WhiteCard = styled.View`
  background-color: ${COLORS.white};
  border-radius: ${SIZES.radius}px;
  padding: 10px;
  margin-bottom: 10px;
`
export const TouchableWhiteCard = styled.TouchableOpacity`
  background-color: ${COLORS.white};
  border-radius: ${SIZES.radius}px;
  padding: 10px;
  margin-bottom: 10px;
`

export const ItemGrid = styled.View`
  flex-flow: row wrap;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 5px;
`

export const NewsCard = styled.View`
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
  margin: 10px;
  padding: 10px;
`
export const TouchCard = styled.TouchableOpacity`
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
  margin: 10px;
  padding: 10px;
`

export const Heading = styled(Headline)`
  color: ${COLORS.white};
  padding: 10px 7px;
  padding-bottom: 0px;
  font-weight: bold;
`
export const SubHeading = styled(TextMedium)`
  padding: 10px;
  padding-top: 0;
  color: ${COLORS.white};
`

export const ParaText = styled(TextMedium)`
  padding: 10px;
  padding-top: 0px;
  color: white;
`
export const ContactIcon = styled.Image`
  width: 20px;
  height: 20px;
`

export const ContactRow = styled(TouchRowContainer)`
  padding: 5px 10px;
`

export const ContactText = styled(TextNormal)`
  padding-left: 10px;
  color: black;
  font-size: 16px;
  font-family: Roboto_400Regular;
`
