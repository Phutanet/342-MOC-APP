import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';


const Stack = createStackNavigator();

function AppStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ header: () => null }}
        />

  
      </Stack.Navigator>
  
  

    );
  }
  
  export default AppStack;