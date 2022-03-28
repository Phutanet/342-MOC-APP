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

          <View style={styles.titleContainer}>
            <Image
                source={route.params.coverImage}
            />
            <Text style={styles.textTitle}>{route.params.name}</Text>
            
          </View>
          <View style={styles.splitLine}>
              <Text style={styles.splitLineText}>ราคา: {route.params.name}-/category_name/ (ข้อมูล ณ วันที่ /date/ )</Text>
          </View>

        </ScrollView>  
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textTitle: {
        position: 'absolute',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'left',
        padding:20,
        paddingTop:40,
        color:'white',
    },
    titleContainer: {
        backgroundColor: 'gray',
        width: "100%",
        height: 140,
    },
    splitLine: {
        backgroundColor: 'rgba(29, 59, 134, 1)',
        padding: 4,
        width: "100%",
    },
    splitLineText: {
        color:'white',
        marginLeft: 20,
    }
});

export default ProductDataScreen;