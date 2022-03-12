import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, TextInput, Pressable} from 'react-native'


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPressed = () => {
        console.warn('onLoginPressed');
    };

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    };

    const onCreateAccountPressed = () => {
        console.warn('onCreateAccountPressed');
    };

    return (
        <View style={styles.root}>
            <Image 
            source={require('./image/mocLogo.png')} 
            style={styles.logo} 
            resizeMode="contain" 
            />

            <Text>เข้าสู่ระบบ</Text>
            <Text>อีเมล</Text>

            <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="E - mail"
            style={styles.inputBox}
            />

            <Text>รหัสผ่าน</Text>

            <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputBox}
            />

            <Pressable onPress={onLoginPressed} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>เข้าสู่ระบบ / Login</Text>
            </Pressable>

            <Pressable onPress={onForgotPasswordPressed}>
                <Text style={styles.forgotPasswordButtonText}>ลืมรหัสผ่าน / Forgot Password?</Text>
            </Pressable>

            <Text>ท่านยังไม่มีบัญชีใช่หรือไม่?</Text>

            <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.createAccountButtonText}>สร้างบัญชีใหม่ / Create account</Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },

    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },

    inputBox: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },

    loginButton: {
        backgroundColor: '#3B71F3',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
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


});

export default LoginScreen