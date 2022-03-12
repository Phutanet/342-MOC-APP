import * as React from 'react';
import {useState , useContext} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import PriceScreen from '../screens/PriceScreen';
import ContactScreen from '../screens/ContactScreen';
import ComplainScreen from '../screens/ComplainScreen';



const Tab = createBottomTabNavigator();


function TabLayerScreen() {
  
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
        fontSize: 14,
        paddingBottom: 10,
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
        tabBarLabel: 'หน้าหลัก',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}/>

      <Tab.Screen 
      name="PriceScreen" 
      component={PriceScreen}
      options={{
        tabBarLabel: 'ดูราคาสินค้า',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
        ),
      }}/>

      <Tab.Screen 
      name="Complain" 
      component={ComplainScreen}
      options={{
        tabBarLabel: 'ร้องเรียน',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="file-document-edit-outline" color={color} size={size} />
        ),
      }}/>      

      <Tab.Screen 
      name="ContactScreen" 
      component={ContactScreen}
      options={{
        tabBarLabel: 'ติดต่อเรา',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="information-variant" color={color} size={size} /> //contacts account-group
        ),
      }}/>



    </Tab.Navigator>

  );
}

export default TabLayerScreen;