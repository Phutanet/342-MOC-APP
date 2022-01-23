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
        <Text>USERNAME</Text>
        <Text>PASSWORD</Text>
      </View>

      <TouchableOpacity onPress={() => logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  text: {
      fontWeight: "bold",
      fontSize: 40,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default HomeScreen;