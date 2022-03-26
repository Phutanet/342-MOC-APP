import * as React from 'react';
import {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Header from './component/Header';



const HomeScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <Header/>
      <View>
        <Text>THIS IS Home PAGE</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;