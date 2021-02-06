import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Lottie from 'lottie-react-native';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Logo,
  Sumamry,
  CarName,
  Price,
  Button,
  ButtonText,
  CancelButton,
  CancelButtonText
} from './styles';

import animation from '../../animations/pay-success.json';

const Pay = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const price = route.params.price;
  const carName = route.params.name;

  const [payAnimation, setPayAnimation] = useState(false);

  function navigateToInital() {
    setPayAnimation(true)
    setTimeout(() => {
      navigation.navigate('Initial')
    }, 4000);
  }

  return (
    <>
      <StatusBar backgroundColor='#000' style='light' />
      <Container>
        <Logo
          source={logoImg}
        />

        {payAnimation ?
          <Lottie
            loop={false}
            source={animation}
            autoPlay
          />
          :
          <>
            <Sumamry>Sumamry</Sumamry>

            <CarName>Your {carName}</CarName>

            <Price>${price}</Price>

            <Button
              onPress={navigateToInital}
            >
              <ButtonText>PAY</ButtonText>
            </Button>

            <CancelButton
              onPress={() => navigation.navigate('Initial')}
            >
              <CancelButtonText>Cancel</CancelButtonText>
            </CancelButton>

          </>
        }

      </Container>
    </>
  );
}

export default Pay;