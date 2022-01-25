import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#000000',
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;