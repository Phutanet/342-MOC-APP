import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import SettingScreen from '../screens/SettingScreen';


const Stack = createStackNavigator();

function AppStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name="NewsScreen"
          component={NewsScreen}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{ header: () => null }}
        />

  
      </Stack.Navigator>
  
  

    );
  }
  
  export default AppStack;