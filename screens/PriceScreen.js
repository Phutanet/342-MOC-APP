import * as React from 'react';
import {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

const PriceScreen = ({navigation}) => {
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>
            Header
          </Text>
        </View>
        <Text style={styles.textTitle}>ราคาสินค้าอุปโภคบริโภค/{"\n"}สินค้าเกษตร</Text>
        <Text>THIS IS View Prices PAGE</Text>
      </View>
    </ScrollView>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  header:{
    width:'100%',
    height:50,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
  },
  textTitle:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'left',
    padding:20,
    paddingTop:40,
    color:'black'
  },

});

export default PriceScreen;