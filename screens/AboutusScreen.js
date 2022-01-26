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

const AboutusScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      
      <View>
        <Text>THIS IS ABOUT US PAGE</Text>

      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default AboutusScreen;