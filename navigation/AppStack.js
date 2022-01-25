import * as React from 'react';


import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import SettingScreen from '../screens/SettingScreen';
import MainTabScreen from '../screens/MainTabScreen';



const Drawer = createDrawerNavigator();


function AppStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options={{ 
        title: 'Home',
        headerStyle: {
          backgroundColor: 'rgba(45, 73, 132, 1)',
        },
        headerTitleStyle: {
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerTitleAlign: 'center',
      }}
      />

      <Drawer.Screen 
      name="NewsScreen" 
      component={NewsScreen} 
      options={{ 
        title: 'News',
        headerStyle: {
          backgroundColor: 'rgba(45, 73, 132, 1)',
        },
        headerTitleStyle: {
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerTitleAlign: 'center',
      }}
      />

      <Drawer.Screen 
      name="SettingScreen" 
      component={SettingScreen} 
      options={{ 
        title: 'Settings',
        headerStyle: {
          backgroundColor: 'rgba(45, 73, 132, 1)',
        },
        headerTitleStyle: {
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerTitleAlign: 'center',
      }}
      />

      {/* <Drawer.Screen name="Home" component={MainTabScreen} />
      <Drawer.Screen name="News" component={NewsScreen} />
      <Drawer.Screen name="Settings" component={SettingScreen} /> */}

    </Drawer.Navigator>
  );
}

export default AppStack;
