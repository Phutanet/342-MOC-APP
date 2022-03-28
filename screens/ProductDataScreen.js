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
  FlatList,
} from 'react-native';
import Header from './component/Header';

const ProductDataScreen = ({navigation, route}) => {

    return (
        <ScrollView style={styles.container}>
          <Header/>
    
            <Text style={styles.textTitle}>{route.params.name}</Text>
    
        </ScrollView>  
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default ProductDataScreen;