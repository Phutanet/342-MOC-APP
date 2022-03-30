import * as React from 'react';
import News from './component/News';
import Header from './component/Header';
import {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';



const HomeScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <Header/>
      <View>
        <Text>THIS IS Home PAGE</Text>
        <News/>
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