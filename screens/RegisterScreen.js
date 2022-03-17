import React, {useContext, useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Pressable} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../navigation/AuthProvider';


const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();

    const {register} = useContext(AuthContext);

    // const onRegisterPressed = () => {
    //     console.warn('onRegisterPressed');
    // };




    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable >
                    <View style={{padding:10}}>
                        
                            <MaterialCommunityIcons 
                            onPress={() => navigation.navigate('LoginScreen')}
                            name="chevron-left" size={40} color={'black'}/>
                        
                    </View>
                </Pressable>
            </View>

            <Text style={styles.textTopic}>ลงทะเบียน</Text>
                

            <Text style={styles.textTopic1}>ชื่อจริง - นามสกุล</Text>
            <View style={styles.boxInput}>
                <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Name - Lastname"
                style={styles.inputBox}
                />
            </View>

            <Text style={styles.textTopic1}>อีเมล</Text> 
            <View style={styles.boxInput}>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="E - mail"
                    style={styles.inputBox}
                    />
            </View>
            

            <Text style={styles.textTopic1}>รหัสผ่าน</Text>
        <View style={styles.boxInput}>
            <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputBox}
            />
        </View>
            

            <Text style={styles.textTopic1}>ยืนยันรหัสผ่าน</Text>
            <View style={styles.boxInput}>
                <TextInput
            value={password2}
            onChangeText={setPassword2}
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={styles.inputBox}
            />
            </View>
            
            <View style={{alignItems:'center'}}>
                <Pressable 
                onPress={() => register(email, password)} 
                style={styles.loginButton}>
                <Text style={styles.loginButtonText}>ลงทะเบียน / Register</Text>
            </Pressable> 
            </View>
           
            



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    header:{
        height:60
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
    textTopic:{
        paddingLeft:20,
        paddingBottom:30,
        fontSize:40,
        fontWeight:'bold',
        color:'black'
    },

    registerButton: {
        backgroundColor: '#3B71F3',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    registerButtonText:{
        fontWeight: 'bold',
        color: 'white',
    },

    backToLoginText:{
        fontWeight: 'bold',
        color: 'gray',
    },
    textTopic1:{
        textAlign:'left',
        paddingLeft:30,
        fontSize:18,
        fontWeight:'bold',
        padding:10
      },
      boxInput:{
        alignItems:'center',
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


});

export default RegisterScreen