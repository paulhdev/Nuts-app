import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Dash from './pages/Dash';
import Receipt from './pages/Receipt';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dash" component={Dash} />
        <Stack.Screen name="Receipt" component={Receipt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
