import * as React from 'react';
import {useState, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabLayerScreen from '../screens/TabLayerScreen';
import HomeScreen from '../screens/HomeScreen';
import PriceScreen from '../screens/PriceScreen';
import ProductDataScreen from '../screens/ProductDataScreen';
import ContactScreen from '../screens/ContactScreen';
import ComplainScreen from '../screens/ComplainScreen';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabLayerScreen"
        component={TabLayerScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PriceScreen"
        component={PriceScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ProductDataScreen"
        component={ProductDataScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ComplainScreen"
        component={ComplainScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
