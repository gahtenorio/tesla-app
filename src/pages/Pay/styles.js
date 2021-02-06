import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #000;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  position: absolute;
  top: 48px;
`;

export const Sumamry = styled.Text`
  color: #a4b0bc;
  font-size: 24px;
  font-family: 'Ubuntu_400Regular';
`;

export const CarName = styled.Text`
  color: #fff;
  font-size: 48px;
  font-family: 'Ubuntu_500Medium';

  margin-top: 48px;
  margin-bottom: 24px;
`;

export const Price = styled.Text`
  color: #fff;
  font-size: 36px;
  font-family: 'Ubuntu_300Light';
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 64px;
  border-width: 2px;
  border-color: #d01000;
  border-radius: 100px;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Ubuntu_500Medium';
  font-size: 20px;
`;

export const CancelButton = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const CancelButtonText = styled.Text`
  color: #999;
  font-size: 18px;
  font-family: 'Ubuntu_400Regular';
`;