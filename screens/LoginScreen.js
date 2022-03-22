import React, {useContext, useState} from 'react'
import {View, Text, Image, StyleSheet, TextInput, Pressable, ScrollView} from 'react-native'
import { AuthContext } from '../navigation/AuthProvider';


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { user, logout } = useContext(AuthContext);
    const {login} = useContext(AuthContext);


    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    };



    return (
        <ScrollView style={styles.container}>
            <View style={{alignItems:'center',padding:10}}>
                <Image 
                    source={require('./image/mocLogo.png')} 
                    style={styles.logo} 
                    resizeMode="contain" 
                    />
            <Text style={styles.headerLogin}>เข้าสู่ระบบ</Text>
            </View>
            

            
            <Text style={styles.textTopic}>อีเมล</Text>
            <View  style={styles.boxInput}>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    // onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholder="E - mail"
                    style={styles.inputBox}
            />
            </View>
            


            <Text style={styles.textTopic}>รหัสผ่าน</Text>
            <View style={styles.boxInput}>
               <TextInput
                    value={password}
                    onChangeText={setPassword}
                    // onChangeText={(userPassword) => setPassword(userPassword)}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.inputBox}
                    /> 
            </View>
            
        <View style={{alignItems:'center'}}>
            <Pressable 
            onPress={() => login(email, password)} 
            style={styles.loginButton}>
                <Text style={styles.loginButtonText}>เข้าสู่ระบบ / Login</Text>
            </Pressable>
        </View>


        


        <View style={styles.footer}>
            <Pressable onPress={onForgotPasswordPressed}>
                <Text style={styles.forgotPasswordButtonText}>ลืมรหัสผ่าน / Forgot Password?</Text>
            </Pressable>

        <View style={{flexDirection: 'row', alignItems: 'center',padding:10}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>

            <Text>ท่านยังไม่มีบัญชีใช่หรือไม่?</Text>

            <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.createAccountButtonText}>สร้างบัญชีใหม่ / Create account</Text>
            </Pressable>
        </View>
            

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
    },
    headerLogin:{
        fontSize:35,
        padding:10,
        fontWeight:'bold',
        color:'black'

    },

    logo: {
        width:200,
        height:200
    },
    inputBox: {
        backgroundColor: '#e8e8e8',
        width: '80%',
        height:40,
        borderColor: '#e8e8e8',
        borderRadius: 30,
        paddingHorizontal: 20,
        marginVertical: 5,
      },

    loginButton: {
        backgroundColor: '#0000cd',
        width: '40%',
        padding: 10,
        marginVertical: 25,
        alignItems: 'center',
        borderRadius: 25,
    },

    loginButtonText:{
        fontWeight: 'bold',
        color: 'white',
    },

    forgotPasswordButtonText:{
        fontWeight: 'bold',
        color: 'gray',
    },

    createAccountButtonText:{
        fontWeight: 'bold',
        color: 'green',
    },
    textTopic:{
        textAlign:'left',
        paddingLeft:30,
        fontSize:18,
        fontWeight:'bold',
        padding:10
      },
      boxInput:{
        alignItems:'center',
      },
      footer:{
          alignItems:'center',
          padding:60
      }


});

export default LoginScreen