import * as React from 'react';
import {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Dimensions
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './component/Header';

const windowHeight = Dimensions.get('window').height;
const ContactScreen = ({navigation}) => {
  const callcenterNumber = '025077000';

  return (
    <View style={styles.container}>

      <View >
          <Header/>
            <ImageBackground source={require('./image/product/cover/contactBanner1.jpg')} resizeMode="cover" style={styles.image}>
              <Text style={styles.textHeader}>ติดต่อเรา</Text>
                  <View style={{alignItems:'center'}}>
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
                    <View style={styles.icon_facebook}>
                      <MaterialCommunityIcons 
                    name="chevron-right" size={30} color={'#000000'}
                    
                    />
                    </View>
                    
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
                    <View style={styles.icon_facebook}>
                      <MaterialCommunityIcons 
                    name="chevron-right" size={30} color={'#000000'}
                    
                    />
                    </View>
                    
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
                    <View style={styles.icon_facebook}>
                      <MaterialCommunityIcons 
                    name="chevron-right" size={30} color={'#000000'}
                    
                    />
                    </View>
                    
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
                    <View style={styles.icon_facebook}>
                      <MaterialCommunityIcons 
                    name="chevron-right" size={30} color={'#000000'}
                    
                    />
                    </View>
                    
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
                    <View style={styles.icon_facebook}>
                      <MaterialCommunityIcons 
                    
                    name="chevron-right" size={30} color={'#000000'} 
                    />
                    </View>
                    
                    </View>
                    

                  </TouchableOpacity>
                </View>
                

                </View>
                </View>
    </ImageBackground>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  cardContract: {
    alignItems:'center',
    backgroundColor:'white',
    width:'100%',
    borderRadius:20,
    paddingTop:40,
    marginLeft:-47,
    height:windowHeight,
  },

  buttonLink: {
    borderRadius: 5,
  },

  textOnButtonLink: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    paddingLeft:10,
    paddingRight:70
  },
  card: {
    width:'70%',
    borderRadius:6,
    backgroundColor: '#dcdcdc',
    elevation:3,
    borderWidth: 1,
    borderColor: "#a9a9a9",
    marginBottom: 20,
  },
 cardContent: {
   marginHorizontal:10,
   marginVertical:10,
   flexDirection:'row',
 },
 icon_facebook: {
  flex:1,
  flexDirection: 'row',
  justifyContent:'flex-end',
  paddingRight:10
 },
 icon_call: {
  paddingLeft:4
 },
 icon_web: {
  paddingLeft:27
 },
 icon_mail: {
  paddingLeft:49
 },
 icon_location: {
  paddingLeft:20
 },
 image:{
   height:150,
   width:'107%',
   paddingLeft:20,
  
 },
 textHeader:{
   color:'white',
   fontSize:35,
   paddingTop:65,
   paddingLeft:30,
   paddingBottom:20
 }
});

export default ContactScreen;