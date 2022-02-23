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
        <Text>THIS IS Home PAGE</Text>
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
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    marginBottom: 25,
  },
});

export default HomeScreen;
