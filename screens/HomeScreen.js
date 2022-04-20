import * as React from 'react';
import Header from './component/Header';
import News from './component/News';
import {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      
      <ImageBackground source={require('./image/asd1.jpg')} resizeMode="cover" style={styles.image}>
                    <Text style={styles.textHeader}>ข่าวประชาสัมพันธ์</Text>
      </ImageBackground>
      
      <ScrollView >
        <View>
          <News />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
      height:160,
      width:'100%',
      paddingLeft:20,
  },
  textHeader:{
      color:'white',
      fontSize:35,
      paddingTop:70,
      paddingLeft:5,
  }
});

export default HomeScreen;
