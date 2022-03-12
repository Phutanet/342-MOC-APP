import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, TextInput, Pressable} from 'react-native'

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const onRegisterPressed = () => {
        console.warn('onRegisterPressed');
    };

    const onBackToLoginPressed = () => {
        console.warn('onBackToLoginPressed');
    };


    return (
        <View style={styles.root}>

            <Text>ลงทะเบียน</Text>

            <Text>ชื่อจริง - นามสกุล</Text>

            <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Name - Lastname"
            style={styles.inputBox}
            />
            
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

            <Text>ยืนยันรหัสผ่าน</Text>

            <TextInput
            value={password2}
            onChangeText={setPassword2}
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={styles.inputBox}
            />

            <Pressable onPress={onRegisterPressed} style={styles.registerButton}>
                <Text style={styles.registerButtonText}>ลงทะเบียน / Register</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.backToLoginText}>Back</Text>
            </Pressable>


        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
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


});

export default RegisterScreen