import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
        tabBarActiveTintColor: 'rgba(255, 255, 255, 1)',
        tabBarActiveBackgroundColor: 'rgba(29, 59, 134, 1)',
        tabBarInactiveTintColor: 'rgba(4, 26, 78, 1)',
        tabBarInactiveBackgroundColor: 'rgba(29, 59, 134, 1)',
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
      }}
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
          paddingBottom: 10,
        },
      }}>

      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'หน้าหลัก',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="PriceScreen"
        component={PriceScreen}
        options={{
          tabBarLabel: 'ดูราคาสินค้า',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Complain"
        component={ComplainScreen}
        options={{
          tabBarLabel: 'ร้องเรียน',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="file-document-edit-outline"
              color={color}
              size={28}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          tabBarLabel: 'ติดต่อเรา',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="information-variant"
              color={color}
              size={28}
            /> //contacts account-group
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default TabLayerScreen;
