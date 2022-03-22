import React, { createContext, useState } from "react";
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return(
        <AuthContext.Provider
        //create different state for the authentication
        value={{
            user,
            setUser,
            login: async (email, password) => {
                try {
                    auth()
                    .signInWithEmailAndPassword(email, password)
                    .catch((error) => {
                        //กรอกอีเมลผิด (ไม่มี @gmail.com , ไม่มี @hotmail.com)
                        if (error.code === 'auth/invalid-email') {
                            Alert.alert('อีเมลผิด, กรุณาตรวจสอบและกรอกใหม่');
                        }
                        //กรอกอีเมลที่มีใน Database แต่รหัสผ่านผิด
                        if (error.code === 'auth/wrong-password') {
                            Alert.alert('รหัสผ่านผิด, กรุณาตรวจสอบและกรอกใหม่');
                        }
                        //กรอกอีเมลที่ไม่มีอยู่ใน Database
                        if (error.code === 'auth/user-not-found') {
                            Alert.alert('ไม่พบบัญชีผู้ใช้ดังกล่าว');
                        }
                    });
                } catch(e) {
                    console.log(e);
                }
            },
            register: async (name, email, password, password2) => {
                try {
                    await auth()
                    .createUserWithEmailAndPassword(email, password)
                    .catch((error) => {
                        //กรอกอีเมลที่ถูกใช้ไปแล้ว
                        if (error.code === 'auth/email-already-in-use') {
                            Alert.alert('อีเมลดังกล่าวถูกใช้แล้ว');
                          }
                        //กรอกอีเมลผิด (ไม่มี @gmail.com , ไม่มี @hotmail.com)
                        if (error.code === 'auth/invalid-email') {
                            Alert.alert('ไม่พบอีเมลดังกล่าว กรุณาลองใหม่อีกครั้ง');
                          }
                    });
                } catch(e) {
                    console.log(e);
                }
            },
            logout: async () => {
                try {
                    await auth().signOut();
                } catch(e) {
                    console.log(e);
                }
            },
        }}>
        {children}
        </AuthContext.Provider>
    );
};