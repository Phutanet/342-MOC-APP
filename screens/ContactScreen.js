import * as React from 'react';
import {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  ScrollView,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ContactScreen = ({navigation}) => {
  const callcenterNumber = '025077000'
  
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>
          Herder
        </Text>
      </View>
      <View style={styles.cardContract}>
      <View style={styles.card}>
        <TouchableOpacity 
      style={styles.buttonLink}
      onPress={() => Linking.openURL("https://www.facebook.com/MOCThailand")}
      >
        <View style={styles.cardContent}>
          <MaterialCommunityIcons name="facebook" size={30} color={'#0000cd'}/>
        <Text style={styles.textOnButtonLink}>
          Facebook
        </Text>
        <MaterialCommunityIcons 
        name="chevron-right" size={30} color={'#000000'}
        style={styles.icon_facebook}
        />
        </View>
        

      </TouchableOpacity>
      </View>
      

    <View style={styles.card}>
      <TouchableOpacity 
      style={styles.buttonLink}
      onPress={() => Linking.openURL(`tel:${callcenterNumber}`)}
      >
        <View style={styles.cardContent}>
          <MaterialCommunityIcons name="card-account-phone" size={30} color={'#00ff00'}/>
        <Text style={styles.textOnButtonLink}>
          Call center
        </Text>
        <MaterialCommunityIcons 
        name="chevron-right" size={30} color={'#000000'}
        style={styles.icon_call}
        />
        </View>
        


      </TouchableOpacity>
    </View>
      

      <View style={styles.card}>
        <TouchableOpacity 
      style={styles.buttonLink}
      onPress={() => Linking.openURL("https://www.moc.go.th/th/page/item/index/id/1")}
      >
        <View style={styles.cardContent}>
          <MaterialCommunityIcons name="web" size={30} color={'#1e90ff'}/>
        <Text style={styles.textOnButtonLink}>
          Website
        </Text>
        <MaterialCommunityIcons 
        name="chevron-right" size={30} color={'#000000'}
        style={styles.icon_web}
        />
        </View>
        

      </TouchableOpacity>
      </View>
      

    <View style={styles.card}>
      <TouchableOpacity 
      style={styles.buttonLink}
      onPress={() => Linking.openURL(`mailto:webmaster@moc.go.th`)}
      >
        <View style={styles.cardContent}>
          <MaterialCommunityIcons name="email" size={30} color={'#fffff0'}/>
        <Text style={styles.textOnButtonLink}>
          Email
        </Text>
        <MaterialCommunityIcons 
        name="chevron-right" size={30} color={'#000000'}
        style={styles.icon_mail}
        />
        </View>
        

      </TouchableOpacity>
    </View>
      

    <View style={styles.card}>
       <TouchableOpacity 
      style={styles.buttonLink}
      onPress={() => Linking.openURL("https://www.google.com/maps/search/563+%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5+%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%AD+%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5+11000/@13.8815754,100.4837951,18z/data=!3m1!4b1?hl=en-US")}
      >
        <View style={styles.cardContent}>
          <MaterialCommunityIcons name="map-marker" size={30} color={'#ff0000'}/>
        <Text style={styles.textOnButtonLink}>
          Location
        </Text>
        <MaterialCommunityIcons 
        style={styles.icon_location}
        name="chevron-right" size={30} color={'#000000'} 
        />
        </View>
        

      </TouchableOpacity>
    </View>
     

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header:{
    width:'100%',
    height:50,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
  },
  cardContract:{
    backgroundColor:'white',
    width:'100%',
    alignItems:'center',
    paddingTop:230,

  },

  buttonLink:{
    borderRadius: 5,
  },

  textOnButtonLink:{
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    paddingLeft:10,
    paddingRight:70
  },
  card:{
    width:'70%',
    height:50,
    borderRadius:6,
    backgroundColor: '#dcdcdc',
    elevation:3,
    shadowOffset:{width:1, height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:12,
    borderWidth: 1,
    borderColor: "#a9a9a9",
  },
 cardContent:{
   marginHorizontal:10,
   marginVertical:10,
   flexDirection:'row',
  marginTop:10
 },
 icon_facebook:{
  paddingLeft:12
 },
 icon_call:{
  paddingLeft:4
 },
 icon_web:{
  paddingLeft:27
 },
 icon_mail:{
  paddingLeft:49
 },
 icon_location:{
  paddingLeft:20
 }
});

export default ContactScreen;