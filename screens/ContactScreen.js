import * as React from 'react';
import {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking
} from 'react-native';

const ContactScreen = () => {
  const callcenterNumber = '025077000'
  
  return (
    <SafeAreaView style={styles.container}>
      
      <TouchableOpacity 
      style={styles.buttonLink}
      onPress={() => Linking.openURL("https://www.facebook.com/MOCThailand")}
      >
        <Text style={styles.textOnButtonLink}>
          Facebook
        </Text>

      </TouchableOpacity>


      <TouchableOpacity 
      style={styles.buttonLink}
      onPress={() => Linking.openURL(`tel:${callcenterNumber}`)}
      >
        <Text style={styles.textOnButtonLink}>
          Call center
        </Text>


      </TouchableOpacity>


      <TouchableOpacity 
      style={styles.buttonLink}
      onPress={() => Linking.openURL("https://www.moc.go.th/th/page/item/index/id/1")}
      >
        <Text style={styles.textOnButtonLink}>
          Website
        </Text>

      </TouchableOpacity>


      <TouchableOpacity 
      style={styles.buttonLink}
      onPress={() => Linking.openURL(`mailto:webmaster@moc.go.th`)}
      >
        <Text style={styles.textOnButtonLink}>
          Email
        </Text>

      </TouchableOpacity>


      <TouchableOpacity 
      style={styles.buttonLink}
      onPress={() => Linking.openURL("https://www.google.com/maps/search/563+%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5+%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%AD+%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5+11000/@13.8815754,100.4837951,18z/data=!3m1!4b1?hl=en-US")}
      >
        <Text style={styles.textOnButtonLink}>
          Location
        </Text>

      </TouchableOpacity>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonLink:{
    backgroundColor: "#007aff",
    borderRadius: 5
  },

  textOnButtonLink:{
    fontSize: 35,
    fontWeight: '400',
    color: '#fff',
  },

});

export default ContactScreen;