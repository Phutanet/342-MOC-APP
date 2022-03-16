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

const productList = [
                      {id: '1', name: "เนื้อสัตว์"},
                      {id: '2', name: "สัตว์น้ำ"}, 
                      {id: '3', name: "ผลไม้"}, 
                      {id: '4', name: "ผักสด"},
                      {id: '5', name: "พืชอาหาร"},
                      {id: '6', name: "พืชน้ำมันและน้ำมันพืช"}
                    ]

const Item = ({ name }) => (
  <View style={styles.item}>
    <View style={{alignItems:'center'}}>
      <Image
        styles={styles.itemImage}
        source={require("./image/productPlaceholder.png")}
      />
    </View>
    
    <Text style={styles.itemName}>{name}</Text>

  </View>
);
const renderItem = ({ item }) => (
  <Item name={item.name} />
);

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

        <FlatList
          contentContainerStyle={styles.list}
          data={productList}
          renderItem={renderItem}
        />

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
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    backgroundColor: '#DDDFDD',
    borderRadius: 25,
    borderWidth: 1,
    margin: 15,
    width: 140,
    height: 140,
  },
  itemName: {
    fontSize:15,
    fontWeight:'bold',
    padding:10,
    paddingBottom:13,
    position: 'absolute',
    bottom:0,
  },
  itemImage: {
    resizeMode:'contain',

  }

});

export default PriceScreen;