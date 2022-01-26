import * as React from 'react';
import {useState , useContext} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import AboutusScreen from '../screens/AboutusScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function AppStack() {
  
  return (
    <Tab.Navigator 
    screenOptions={{ 
      headerShown: false, 
      tabBarStyle:{
        height: 67,
      },
    }}
    tabBarOptions={{
      labelStyle: {
        fontSize: 16,
        paddingBottom: 7,
        color: '#ffffff', //font label color
        fontWeight: 'bold',
      },
      activeTintColor: '#ffffff',
      activeBackgroundColor: 'rgba(29, 59, 134, 1)',
      inactiveTintColor: '#000000',
      inactiveBackgroundColor: 'rgba(29, 59, 134, 1)',
    }}
    >
      <Tab.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}/>

      <Tab.Screen 
      name="ServicesScreen" 
      component={ServicesScreen}
      options={{
        tabBarLabel: 'Services',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="poll" color={color} size={size} />
        ),
      }}/>

      <Tab.Screen 
      name="AboutusScreen" 
      component={AboutusScreen}
      options={{
        tabBarLabel: 'About us',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-group" color={color} size={size} /> //contacts account-group
        ),
      }}/>

    </Tab.Navigator>

  );
}

export default AppStack;