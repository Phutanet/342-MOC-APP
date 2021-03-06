import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user} = useContext(AuthContext);
  const {login} = useContext(AuthContext);

  const isValidForm = () => {
    //CHECK : All fields have value
    if (email === '')
      return Alert.alert(
        'กรุณาใส่ข้อมูลในช่องอีเมล',
        'Please enter your Email address.',
      );

    if (password === '')
      return Alert.alert(
        'กรุณาใส่ข้อมูลในช่องรหัสผ่าน',
        'Please enter your Password.',
      );

    return true;
  };

  const submitForm = () => {
    if (isValidForm()) {
      login(email, password);
    }
  };

  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{alignItems: 'center', padding: 10}}>
        <Image
          source={require('./image/mocLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerLogin}>เข้าสู่ระบบ</Text>
      </View>

      <Text style={styles.textTopic}>อีเมล</Text>
      <View style={styles.boxInput}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email "
          style={styles.inputBox}
        />
      </View>

      <Text style={styles.textTopic}>รหัสผ่าน</Text>
      <View style={styles.boxInput}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.inputBox}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Pressable onPress={submitForm} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>เข้าสู่ระบบ / Login</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text>ท่านยังไม่มีบัญชีใช่หรือไม่?</Text>
        <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.createAccountButtonText}>
            สร้างบัญชีใหม่ / Create account
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  headerLogin: {
    fontSize: 35,
    padding: 10,
    fontWeight: 'bold',
    color: 'black',
  },

  logo: {
    width: 180,
    height: 180,
  },

  inputBox: {
    backgroundColor: '#e8e8e8',
    width: '80%',
    height: 40,
    borderColor: '#e8e8e8',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginVertical: 5,
  },

  loginButton: {
    backgroundColor: 'rgba(29, 59, 134, 1)',
    width: '40%',
    padding: 10,
    marginTop:30,
    marginVertical: 25,
    alignItems: 'center',
    borderRadius: 25,
  },

  loginButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },

  forgotPasswordButtonText: {
    fontWeight: 'bold',
    color: 'gray',
  },

  createAccountButtonText: {
    fontWeight: 'bold',
    color: 'green',
  },

  textTopic: {
    textAlign: 'left',
    paddingLeft: 30,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },

  boxInput: {
    alignItems: 'center',
  },

  footer: {
    alignItems: 'center',
    padding: 40,
  },
  
});

export default LoginScreen;
