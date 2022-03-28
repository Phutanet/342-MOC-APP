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

const PriceScreen = ({navigation}) => {

  const enterDataScreen = (name) => {
    navigation.navigate("ProductDataScreen", {
      name,
    })
  }

  const productList = [
    {
      id: '1', 
      data: {
        name: "เนื้อสัตว์",
        image: require("./image/product/product1.jpg")
      }
    },
    {
      id: '2', 
      data: {
        name: "สัตว์น้ำ", 
        image: require("./image/product/product2.jpg")
      }
    }, 
    {
      id: '3', 
      data: {
        name: "ผลไม้", 
        image: require("./image/product/product3.jpg")
      }
    }, 
    {
      id: '4', 
      data: {
        name: "ผักสด", 
        image: require("./image/product/product4.jpg")
      }
    },
    {
      id: '5', 
      data: {
        name: "พืชอาหาร", 
        image: require("./image/product/product5.jpg")
      }
    },
    {
      id: '6', 
      data: {
        name: "พืชน้ำมันและน้ำมันพืช", 
        image: require("./image/product/product6.jpg")
      }
    },
  ]

  const Item = ({ name, image }) => (

    <TouchableOpacity 
      style={styles.item}
      onPress={() => {enterDataScreen(name)}}
    >
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={image}
        />
      </View>
      <Text style={styles.itemName}>{name}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item name={item.data.name} image={item.data.image} />
  );

  return (
    <ScrollView style={styles.container}>
      <Header/>

        <Text style={styles.textTitle}>ราคาสินค้าอุปโภคบริโภค/{"\n"}สินค้าเกษตร</Text>

        <FlatList
          contentContainerStyle={styles.list}
          data={productList}
          renderItem={renderItem}
        />

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
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    backgroundColor: '#DDDDDD',
    borderRadius: 25,
    borderWidth: 1,
    margin: 12,
    width: 170,
    height: 170,
  },
  itemName: {
    fontSize:16,
    fontWeight:'bold',
    padding:10,
    position: 'absolute',
    bottom:0,
  },
  imageView: {
    alignItems: 'center',
    paddingTop: 5,
  },
  image: {
    borderRadius: 100,
    borderColor: "#999999",
    borderWidth: 2
  },
  listView: {
    backgroundColor: 'black',
    height: 100,
    width: "100%",
    position: 'absolute',
    marginTop: 60

  }

});

export default PriceScreen;