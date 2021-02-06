import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Dimensions, Image, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import logoImg from '../../assets/logo-black.png';

import {
  Container,
  Header,
  BackButton,
  Logo,
  Selected,
  SelectedText,
  CarSelectedContainer,
  CarSelectedTitle,
  CarSelectedInfoContainer,
  SpeedInfo,
  AccelerationInfo,
  AccelerationDetail,
  Line,
  Details,
  ButtonArea,
  Price,
  Button,
  ButtonText,
  ColorTitle,
  ColorPrice,
  ButtonsColorsContainer,
  BlackButton,
  SilverButton,
  BlueButton,
  WhiteButton,
  RedButton,
  ButtonContainer,
  CarInteriorSelectContainer,
  CarInteriorSelect,
  InteriorTitle,
  InteriorColorName,
  InteriorColorsNameContainer,
  ButtonSelectInteriorColor,
  Included,
  AutopilotText
} from './styles';

import autopilotImg from '../../assets/autopilot.png';
import { set } from 'react-native-reanimated';

const imageWidth = Dimensions.get('window').width;

const CarSelect = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const car = route.params.car;

  const [carIsSelected, SetCarIsSelected] = useState(true);
  const [exteriorIsSelected, SetExteriorIsSelected] = useState(false);
  const [interiorIsSelected, SetInteriorIsSelected] = useState(false);
  const [autopilotIsSelected, SetAutopilotIsSelected] = useState(false);

  const [colorSelected, setColorSelected] = useState(car.selectExterior.white.color);
  const [colorNameSelected, setColorNameSelected] = useState(car.selectExterior.white.name);
  const [colorPriceSelected, setColorPriceSelected] = useState(car.selectExterior.white.price);

  const [interiorColorSelected, setInteriorColorSelected] = useState(car.selectInterior.black.color);
  const [interiorColorPriceSelected, setInteriorColorPriceSelected] = useState(car.selectInterior.black.price);

  const [autopilotSelected, setAutopilotSelected] = useState(0);

  const [price, setPrice] = useState();

  useEffect(() => {
    let total = car.selectedCar.price + colorPriceSelected + interiorColorPriceSelected + autopilotSelected;
    setPrice(total.toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));

    console.log(car.selectedCar.price + colorPriceSelected)
  }, [colorPriceSelected, interiorColorPriceSelected, autopilotSelected]);

  function selectExterior() {
    SetCarIsSelected(false);
    SetExteriorIsSelected(true);
  }

  function selectInterior() {
    SetExteriorIsSelected(false);
    SetInteriorIsSelected(true);
  }

  function selectAutoPilot() {
    SetInteriorIsSelected(false);
    SetAutopilotIsSelected(true);
  }

  function selectColorBlack() {
    setColorSelected(car.selectExterior.black.color);
    setColorNameSelected(car.selectExterior.black.name);
    setColorPriceSelected(car.selectExterior.black.price);
  }

  function selectColorSilver() {
    setColorSelected(car.selectExterior.silver.color);
    setColorNameSelected(car.selectExterior.silver.name);
    setColorPriceSelected(car.selectExterior.silver.price);
  }

  function selectColorBlue() {
    setColorSelected(car.selectExterior.blue.color);
    setColorNameSelected(car.selectExterior.blue.name);
    setColorPriceSelected(car.selectExterior.blue.price);
  }

  function selectColorWhite() {
    setColorSelected(car.selectExterior.white.color);
    setColorNameSelected(car.selectExterior.white.name);
    setColorPriceSelected(car.selectExterior.white.price);
  }

  function selectColorRed() {
    setColorSelected(car.selectExterior.red.color);
    setColorNameSelected(car.selectExterior.red.name);
    setColorPriceSelected(car.selectExterior.red.price);
  }

  function selectInteriorWhite() {
    setInteriorColorSelected(car.selectInterior.white.color);
    setInteriorColorPriceSelected(car.selectInterior.white.price);
  }

  function selectInteriorBlack() {
    setInteriorColorSelected(car.selectInterior.black.color);
    setInteriorColorPriceSelected(car.selectInterior.black.price);
  }

  function navigateToPay(price, name) {
    SetAutopilotIsSelected(false);
    navigation.navigate('Pay', { price, name })
  }

  return (
    <Container>
      <StatusBar backgroundColor='#fff' style='dark' />
      <Header>
        <BackButton
          onPress={() => navigation.goBack()}
        >
          <Feather name='arrow-left' size={25} color='#9f9f9f' />
        </BackButton>
        <Logo source={logoImg} />

        <Selected>
          <SelectedText
            style={carIsSelected && { color: '#000', borderBottomColor: '#d01000' }}
          >
            1. Car
            </SelectedText>

          <SelectedText
            style={exteriorIsSelected && { color: '#000', borderBottomColor: '#d01000' }}
          >
            2. Exterior
            </SelectedText>

          <SelectedText
            style={interiorIsSelected && { color: '#000', borderBottomColor: '#d01000' }}
          >
            3. Interior
            </SelectedText>

          <SelectedText
            style={autopilotIsSelected && { color: '#000', borderBottomColor: '#d01000' }}
          >
            4. Autopilot
            </SelectedText>
        </Selected>
      </Header>

      { carIsSelected ?
        <CarSelectedContainer>
          <CarSelectedTitle>Car Selected</CarSelectedTitle>
          <Image style={{ width: imageWidth }} source={car.selectedCar.image} resizeMode='contain' />

          <CarSelectedInfoContainer>
            <SpeedInfo>
              <View>
                <AccelerationInfo>{car.selectedCar.accelleration}</AccelerationInfo>
                <AccelerationDetail>0-60 mph</AccelerationDetail>
              </View>
              <Line />
              <View>
                <AccelerationInfo>{car.selectedCar.topSpeed}</AccelerationInfo>
                <AccelerationDetail>Top Speed</AccelerationDetail>
              </View>
            </SpeedInfo>

            <Details>{car.selectedCar.detail}</Details>

            <ButtonArea>
              <Price>${price}</Price>
              <Button
                onPress={selectExterior}
              >
                <ButtonText>NEXT</ButtonText>
              </Button>
            </ButtonArea>
          </CarSelectedInfoContainer>
        </CarSelectedContainer>

        : exteriorIsSelected ?

          <CarSelectedContainer>
            <CarSelectedTitle>Select Color</CarSelectedTitle>
            <Image style={{ width: imageWidth }} source={colorSelected} resizeMode='contain' />

            <ColorTitle>{colorNameSelected}</ColorTitle>
            <ColorPrice>${colorPriceSelected.toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</ColorPrice>

            <ButtonsColorsContainer>
              <BlackButton
                style={colorSelected === car.selectExterior.black.color ? { borderColor: '#d01000', width: 45, height: 45, borderWidth: 3 } : null}
                onPress={selectColorBlack}
              />
              <SilverButton
                style={colorSelected === car.selectExterior.silver.color ? { borderColor: '#d01000', width: 45, height: 45, borderWidth: 3 } : null}
                onPress={selectColorSilver}
              />
              <BlueButton
                style={colorSelected === car.selectExterior.blue.color ? { borderColor: '#d01000', width: 45, height: 45, borderWidth: 3 } : null}
                onPress={selectColorBlue}
              />
              <WhiteButton
                style={colorSelected === car.selectExterior.white.color ? { borderColor: '#d01000', width: 45, height: 45, borderWidth: 3 } : null}
                onPress={selectColorWhite}
              />
              <RedButton
                style={colorSelected === car.selectExterior.red.color ? { borderColor: '#d01000', width: 45, height: 45, borderWidth: 3 } : null}
                onPress={selectColorRed}
              />
            </ButtonsColorsContainer>

            <ButtonContainer>
              <ButtonArea>
                <Price>${price}</Price>
                <Button
                  onPress={selectInterior}
                >
                  <ButtonText>NEXT</ButtonText>
                </Button>
              </ButtonArea>
            </ButtonContainer>
          </CarSelectedContainer>

          : interiorIsSelected ?

            <CarInteriorSelectContainer>
              <Image style={{ width: imageWidth }} source={interiorColorSelected} resizeMode='contain' />

              <CarInteriorSelect>
                <InteriorTitle>Select Interior</InteriorTitle>

                <InteriorColorsNameContainer>
                  <ButtonSelectInteriorColor
                    onPress={selectInteriorWhite}
                  >
                    <InteriorColorName
                      style={interiorColorSelected === car.selectInterior.white.color && { color: '#000' }}
                    >
                      Black and White
                    </InteriorColorName>
                    <ColorPrice
                      style={interiorColorSelected === car.selectInterior.black.color && { color: '#999999' }}
                    >$1.000
                    </ColorPrice>
                  </ButtonSelectInteriorColor>

                  <ButtonSelectInteriorColor
                    onPress={selectInteriorBlack}
                  >
                    <InteriorColorName
                      style={interiorColorSelected === car.selectInterior.black.color && { color: '#000' }}

                    >All Black
                    </InteriorColorName>

                    <Included
                      style={interiorColorSelected === car.selectInterior.white.color && { color: '#999999' }}

                    >
                      Included
                      </Included>
                  </ButtonSelectInteriorColor>
                </InteriorColorsNameContainer>

                <ButtonsColorsContainer>
                  <WhiteButton
                    style={interiorColorSelected === car.selectInterior.white.color && { borderColor: '#d01000', width: 45, height: 45, borderWidth: 3 }}
                    onPress={selectInteriorWhite}
                  />

                  <BlackButton
                    style={interiorColorSelected === car.selectInterior.black.color && { borderColor: '#d01000', width: 45, height: 45, borderWidth: 3 }}
                    onPress={selectInteriorBlack}
                  />
                </ButtonsColorsContainer>

                <ButtonArea>
                  <Price>${price}</Price>
                  <Button
                    onPress={selectAutoPilot}
                  >
                    <ButtonText>NEXT</ButtonText>
                  </Button>
                </ButtonArea>
              </CarInteriorSelect>
            </CarInteriorSelectContainer>

            : autopilotIsSelected ?
              <CarInteriorSelectContainer>
                <Image style={{ width: imageWidth }} source={autopilotImg} resizeMode='contain' />
                <CarInteriorSelect>
                  <InteriorTitle>Autopilot</InteriorTitle>
                  <InteriorColorsNameContainer>
                    <ButtonSelectInteriorColor
                      onPress={() => setAutopilotSelected(5.000)}
                    >
                      <InteriorColorName
                        style={autopilotSelected === 5.000 && { color: '#000' }}
                      >
                        Full Self-Driving
                        </InteriorColorName>
                      <ColorPrice
                        style={autopilotSelected !== 5.000 && { color: '#999999' }}
                      >
                        $5.000
                        </ColorPrice>
                    </ButtonSelectInteriorColor>

                    <ButtonSelectInteriorColor
                      onPress={() => setAutopilotSelected(0)}
                    >
                      <InteriorColorName
                        style={autopilotSelected === 0 && { color: '#000' }}
                      >
                        Autopilot
                      </InteriorColorName>
                      <ColorPrice
                        style={autopilotSelected !== 0 && { color: '#999999' }}
                      >
                        $0.000
                        </ColorPrice>
                    </ButtonSelectInteriorColor>
                  </InteriorColorsNameContainer>

                  {autopilotSelected === 0 ?
                    <AutopilotText>
                      auto Enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane.
                </AutopilotText>
                    :
                    <AutopilotText>
                      Atomatic driving from highway on-ramp to off-ramp including interchanges and overtaking slower cars.
                  </AutopilotText>
                  }


                  <ButtonArea>
                    <Price>${price}</Price>
                    <Button
                      onPress={() => navigateToPay(price, car.name)}
                    >
                      <ButtonText>NEXT</ButtonText>
                    </Button>
                  </ButtonArea>
                </CarInteriorSelect>
              </CarInteriorSelectContainer>
              : null}

    </Container>
  );
}

export default CarSelect;