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
      
      <ImageBackground source={require('./image/Untitled-1.jpg')} resizeMode="cover" style={styles.image}>
                    <Text style={styles.textHeader}>ข่าวประชาสัมพันธ์</Text>
      <ScrollView style={styles.news}>
        <View>
          <News />
        </View>
      </ScrollView>
      </ImageBackground>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
      height:"110%",
      width:'100%',
      // paddingLeft:20,
  },
  news: {
      paddingLeft:0,
      borderRadius:10,
      paddingTop:10,
      zIndex: 3,
      backgroundColor: '#ffffff'
  },
  textHeader:{
    color:'white',
    fontSize:35,
    paddingTop:70,
    paddingLeft:5,
}
});

export default HomeScreen;
