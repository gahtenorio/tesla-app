import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #000;
  padding-top: 48px;
`;


export const Title = styled.Text`
  color: #fff;
  font-family: 'Ubuntu_300Light';
  font-size: 28px;
  margin-top: 80px;
`;

export const CarContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const CarName = styled.Text`
  color: #fff;
  font-family: 'Ubuntu_400Regular';
  font-size: 40px;
  margin-top: 20px;
`;

export const CarInfoContainer = styled.View`
  top: -15px;
  width: 60%; 
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const Line = styled.View`
  width: 1px;
  height: 57px;
  background: #393939;
`;

export const CarInfo = styled.View`
  
`;

export const CarInfoText = styled.Text`
  color: #fff;
  font-family: 'Ubuntu_500Medium';
  font-size: 30px;
`;

export const CarInfoDetailText = styled.Text`
    color: #fff;
    font-family: 'Ubuntu_400Regular';
    font-size: 10px;
    margin-top: 5px;
`;

export const CarAcceleration = styled.Text`
  color: #fff;
  font-family: 'Ubuntu_400Regular';
  font-size: 18px;
  margin-top: 10px;
`;

export const CarTopSpeed = styled.Text``;

export const Button = styled.TouchableOpacity`
  width: 60%;
  height: 60px;
  position: absolute;
  bottom: 20px;
  align-self: center;
  border-width: 2px;
  border-color: #d01000;
  border-radius: 100px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Ubuntu_500Medium';
  font-size: 20px;
`;