import React from 'react';
import { Image, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  CarContainer,
  CarName,
  CarInfoContainer,
  Line,
  CarInfo,
  CarInfoText,
  CarInfoDetailText,
  CarAcceleration,
  Button,
  ButtonText
} from './styles';

import { cars } from '../../components/CarsInfo';

import logoImg from '../../assets/logo.png';

const sliderWidth = Dimensions.get('window').width;

const Initial = () => {
  const navigation = useNavigation();

  function navigateToCarSelect(car) {
    navigation.navigate('CarSelect', { car });
  }

  return (
    <Container>
      <Image
        source={logoImg}
      />

      <Title>Tesla</Title>

      <Carousel
        data={cars}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        renderItem={({ item: car }) => (
          <>
            <CarContainer>
              <CarName>{car.name}</CarName>
              <Image
                source={car.photo}
                style={{ width: 400, height: 250 }}
                resizeMode='contain'
              />

              <CarInfoContainer>
                <CarInfo>
                  <CarInfoText>{car.mi}</CarInfoText>
                  <CarInfoDetailText>{car.range}</CarInfoDetailText>
                </CarInfo>

                <Line />

                <CarInfo>
                  <CarInfoText>{car.info}</CarInfoText>
                  <CarInfoDetailText>{car.detail}</CarInfoDetailText>
                </CarInfo>
              </CarInfoContainer>

              <CarAcceleration><Text style={{ color: '#979797' }}>Acceleration:</Text> {car.acceleration}</CarAcceleration>
              <CarAcceleration><Text style={{ color: '#979797' }}>Top speed:</Text> {car.topSpeed}</CarAcceleration>
            </CarContainer>

            <Button
              onPress={() => navigateToCarSelect(car)}
            >
              <ButtonText>ORDER NOW</ButtonText>
            </Button>
          </>
        )}
      />
    </Container >
  );
}

export default Initial;