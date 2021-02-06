import styled from 'styled-components/native';
import { Image, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  background: #f2f5f8;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 140px;
  align-items: center;
  background: #fff;
`;

export const Logo = styled(Image)`
  flex-direction: row;
  position: absolute;
  top: 48px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 48px;
  left: 20px;
`;


export const Selected = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const SelectedText = styled.Text`
  color: #d6d6d6;
  font-family: 'Ubuntu_500Medium';
  font-size: 16px;
  line-height: 30px;
  border-bottom-width: 2px;
  border-bottom-color: #fff;
`;

export const CarSelectedContainer = styled.View`
  flex: 1;
  padding-top: 20px;
`;

export const CarSelectedTitle = styled.Text`
  margin-left: 40px;
  color: #a4b0bc;
  font-family: 'Ubuntu_400Regular';
  font-size: 20px;
`;

export const CarSelectedInfoContainer = styled.ScrollView`
  background: #fff;
  padding: 20px;
  position: relative;
  height: 100%;
  border-radius: 45px;
  margin-top: -50px;
`;

export const SpeedInfo = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const AccelerationInfo = styled.Text`
  color: #000;
  font-family: 'Ubuntu_500Medium';
  font-size: 30px;
`;

export const AccelerationDetail = styled.Text`
  color: #000;
  font-family: 'Ubuntu_400Regular';
  font-size: 14px;
`;

export const Line = styled.View`
   width: 1px;
  height: 57px;
  background: #393939;
`;

export const Details = styled.Text`
  margin-top: 30px;
  margin-left: 15px;
  margin-right: 15px;
  color: #979797;
  font-family: 'Ubuntu_400Regular';
  font-size: 16px;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 25px;
`;

export const Price = styled.Text`
  color: #000;
  font-family: 'Ubuntu_400Regular';
  font-size: 28px;
  height: 60px;
  margin-top: 14px;
`;

export const Button = styled.TouchableOpacity`
  width: 180px;
  height: 60px;
  border-radius: 100px;
  border-width: 2px;
  border-color: #d01000;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
    color: #000;
    font-family: 'Ubuntu_500Medium';
    font-size: 20px;
`;

export const ColorTitle = styled.Text`
  margin-top: -50px;
  margin-left: 20px;
  color: #000;
  font-family: 'Ubuntu_400Regular';
  font-size: 24px;
`;

export const ColorPrice = styled.Text`
  margin: 10px 20px;
  font-family: 'Ubuntu_400Regular';
  font-size: 20px;
  color: #d01000;
`;

export const ButtonsColorsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

export const BlackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #000;
  border-width: 2px;
`;

export const SilverButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #45525C;
  border-width: 2px;
  `;

export const BlueButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #044bb6;
  border-width: 2px;
`;

export const WhiteButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #fff;
  border-width: 2px;
`;

export const RedButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #dd0100;
  border-width: 2px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: ${Width}px;
  height: 150px;
  background: #fff;
  border-radius: 45px;
  justify-content: center;
`;

export const CarInteriorSelectContainer = styled.View`
  flex: 1;
  margin-top: -46.37px;
`;

export const CarInteriorSelect = styled.ScrollView`
  background: #fff;
  border-radius: 45px;
  height: 100%;
  margin-top: -150px;
`;

export const InteriorTitle = styled.Text`
  margin-top: 35px;
  margin-left: 30px;
  color: #a4b0bc;
  font-family: 'Ubuntu_400Regular';
  font-size: 22px;
`;

export const InteriorColorsNameContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

export const ButtonSelectInteriorColor = styled.TouchableOpacity`

`;

export const InteriorColorName = styled.Text`
  color: #999999;
  font-family: 'Ubuntu_400Regular';
  font-size: 22px;
`;

export const Included = styled.Text`
  font-size: 14px;
  font-family: 'Ubuntu_400Regular';
  color: #191919;
  `;

export const AutopilotText = styled.Text`
  color: #979797;
  font-family: 'Ubuntu_400Regular';
  font-size: 16px;
  margin-top: 5px;
  margin-left: 20px;
  margin-bottom: 20px;
`;



