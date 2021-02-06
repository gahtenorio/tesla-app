// initial screen
import teslaModelS from '../../assets/modelS.png';
import teslaModel3 from '../../assets/model3.png';
import teslaModelY from '../../assets/modelY.png';
import teslaModelX from '../../assets/modelX.png';

// Model Y
import modelYWhite from '../../assets/modelY/modelY-white.png';
import modelYBlack from '../../assets/modelY/modelY-black.png';
import modelYBlue from '../../assets/modelY/modelY-blue.png';
import modelYSilver from '../../assets/modelY/modelY-silver.png';
import modelYRed from '../../assets/modelY/modelY.png';

// Model X
import modelXWhite from '../../assets/modelX/modelX-white.png';
import modelXBlack from '../../assets/modelX/modelX-black.png';
import modelXBlue from '../../assets/modelX/modelX-blue.png';
import modelXSilver from '../../assets/modelX/modelX-silver.png';
import modelXRed from '../../assets/modelX/modelX-red.png';

// Model S
import modelSWhite from '../../assets/modelS/modelS-white.png';
import modelSBlack from '../../assets/modelS/modelS-black.png';
import modelSBlue from '../../assets/modelS/modelS-blue.png';
import modelSSilver from '../../assets/modelS/modelS-silver.png';
import modelSRed from '../../assets/modelS/modelS-red.png';

// Model 3
import model3White from '../../assets/model3/model3-white.png';
import model3Black from '../../assets/model3/model3-black.png';
import model3Blue from '../../assets/model3/model3-blue.png';
import model3Silver from '../../assets/model3/model3-silver.png';
import model3Red from '../../assets/model3/model3-red.png';

// Interior
import allBlack from '../../assets/interior/interior-black.png';
import blackAndWhite from '../../assets/interior/interior-white.png';


export const cars = [
  {
    name: 'Model S',
    mi: '401 mi',
    range: 'Range (EPA est.)',
    info: 'AWD',
    detail: 'Dual Motor',
    acceleration: '0-60 mph in 2.3s',
    topSpeed: 'up to 163 mph',
    photo: teslaModelS,

    selectedCar: {
      image: modelSRed,
      accelleration: '2.3s',
      topSpeed: '163mph',
      detail: 'Tesla All-Wheel Drive has two independent motors. Unlike traditional all-wheel drive systems, these two motors digitally control torque to the front and rear wheels—for far better handling and traction control.',
      price: 84.990,
    },

    selectExterior: {
      black: { color: modelSBlack, name: 'Solid Black', price: 1.500 },
      silver: { color: modelSSilver, name: 'Midnight Silver Metallic', price: 1.500 },
      blue: { color: modelSBlue, name: 'Deep Blue Metallic', price: 2.000 },
      white: { color: modelSWhite, name: 'Pearl White Multi-Coat', price: 0 },
      red: { color: modelSRed, name: 'Red Multi-Coat', price: 2.500 }
    },

    selectInterior: {
      black: { color: allBlack, name: 'All Black', price: 0 },
      white: { color: blackAndWhite, name: 'Black and White', price: 1.000 }
    },
  },

  {
    name: 'Model 3',
    mi: '353 mi',
    range: 'Range',
    info: 'AWD',
    detail: 'Dual Motor',
    acceleration: '0-60 mph in 3.1s',
    topSpeed: 'up to 162 mph',
    photo: teslaModel3,

    selectedCar: {
      image: model3Red,
      accelleration: '3.1s',
      topSpeed: '162mph',
      detail: 'Tesla All-Wheel Drive has two independent motors. Unlike traditional all-wheel drive systems, these two motors digitally control torque to the front and rear wheels—for far better handling and traction control.',
      price: 47.190,
    },

    selectInterior: {
      black: { color: allBlack, name: 'All Black', price: 0 },
      white: { color: blackAndWhite, name: 'Black and White', price: 1.000 }
    },

    selectExterior: {
      black: { color: model3Black, name: 'Solid Black', price: 1.500 },
      silver: { color: model3Silver, name: 'Midnight Silver Metallic', price: 1.500 },
      blue: { color: model3Blue, name: 'Deep Blue Metallic', price: 2.000 },
      white: { color: model3White, name: 'Pearl White Multi-Coat', price: 0 },
      red: { color: model3Red, name: 'Red Multi-Coat', price: 2.500 }
    }
  },

  {
    name: 'Model X',
    mi: '371 mi',
    range: 'Range (EPA est.)',
    info: 'AWD',
    detail: 'Dual Motor',
    acceleration: '0-60 mph in 2.6s',
    topSpeed: 'up to 155 mph',
    photo: teslaModelX,

    selectedCar: {
      image: modelXRed,
      accelleration: '2.6s',
      topSpeed: '155mph',
      detail: 'Tesla All-Wheel Drive has two independent motors. Unlike traditional all-wheel drive systems, these two motors digitally control torque to the front and rear wheels—for far better handling and traction control.',
      price: 93.190,
    },

    selectExterior: {
      black: { color: modelXBlack, name: 'Solid Black', price: 1.500 },
      silver: { color: modelXSilver, name: 'Midnight Silver Metallic', price: 1.500 },
      blue: { color: modelXBlue, name: 'Deep Blue Metallic', price: 2.000 },
      white: { color: modelXWhite, name: 'Pearl White Multi-Coat', price: 0 },
      red: { color: modelXRed, name: 'Red Multi-Coat', price: 2.500 }
    },

    selectInterior: {
      black: { color: allBlack, name: 'All Black', price: 0 },
      white: { color: blackAndWhite, name: 'Black and White', price: 1.000 }
    },
  },

  {
    name: 'Model Y',
    mi: '300 mi',
    range: 'Range (EPA est.)',
    info: 'AWD',
    detail: 'Dual Motor',
    acceleration: '0-60 mph in 3.5s',
    topSpeed: 'up to 150 mph',
    photo: teslaModelY,

    selectedCar: {
      image: modelYRed,
      accelleration: '3.5s',
      topSpeed: '150mph',
      detail: 'Tesla All-Wheel Drive has two independent motors. Unlike traditional all-wheel drive systems, these two motors digitally control torque to the front and rear wheels—for far better handling and traction control.',
      price: 55.700,
    },

    selectExterior: {
      black: { color: modelYBlack, name: 'Solid Black', price: 1.500 },
      silver: { color: modelYSilver, name: 'Midnight Silver Metallic', price: 1.500 },
      blue: { color: modelYBlue, name: 'Deep Blue Metallic', price: 2.000 },
      white: { color: modelYWhite, name: 'Pearl White Multi-Coat', price: 0 },
      red: { color: modelYRed, name: 'Red Multi-Coat', price: 2.500 }
    },

    selectInterior: {
      black: { color: allBlack, name: 'All Black', price: 0 },
      white: { color: blackAndWhite, name: 'Black and White', price: 1.000 }
    },
  },

]