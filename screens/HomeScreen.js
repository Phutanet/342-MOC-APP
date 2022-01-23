import * as React from 'react';
import {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      

      <View>
        <Text>THIS IS HOME PAGE</Text>

      </View>

      <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
        <Text>NEWS</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
        <Text>SETTING</Text>
      </TouchableOpacity>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default HomeScreen;