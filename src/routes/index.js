import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Initial from '../pages/Initial';
import CarSelect from '../pages/CarSelect';
import Pay from '../pages/Pay';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}
  >
    <Stack.Screen name='Initial' component={Initial} />
    <Stack.Screen name='CarSelect' component={CarSelect} />
    <Stack.Screen name='Pay' component={Pay} />
  </Stack.Navigator>
);

export default Routes;