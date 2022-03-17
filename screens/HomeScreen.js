import * as React from 'react';
import {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';



const HomeScreen = ({navigation}) => {

  const {logout} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text>เข้าสู่ระบบ</Text>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => logout()}>
        <Text>ออกจากระบบ</Text>
      </TouchableOpacity>

      <View>
        <Text>THIS IS Home PAGE</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    marginBottom: 25,
  },
});

export default HomeScreen;