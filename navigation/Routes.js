import React from 'react';
import {useState, useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import {AuthContext} from './AuthProviders';
import AppStack from './AppStack';

const Routes = () => {
    

return (
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
  );
};

export default Routes;
