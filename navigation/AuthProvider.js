import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      //create different state for the authentication
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            auth()
              .signInWithEmailAndPassword(email, password)
              .catch(error => {
                //กรอกอีเมลผิด (ไม่มี @domain.com)
                if (error.code === 'auth/invalid-email') {
                  Alert.alert(
                    'อีเมลไม่ถูกต้อง',
                    "Please include an '@' in the email address.",
                  );
                }
                //กรอกอีเมลที่มีใน Database แต่รหัสผ่านผิด
                if (error.code === 'auth/wrong-password') {
                  Alert.alert(
                    'รหัสผ่านไม่ถูกต้อง',
                    'The password is incorrect.',
                  );
                }
                //กรอกอีเมลที่ไม่มีอยู่ใน Database
                if (error.code === 'auth/user-not-found') {
                  Alert.alert(
                    'ไม่พบบัญชีผู้ใช้ดังกล่าว',
                    'The account could not be found.',
                  );
                }
              });
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .catch(error => {
                //กรอกอีเมลที่ถูกใช้ไปแล้ว
                if (error.code === 'auth/email-already-in-use') {
                  Alert.alert(
                    'อีเมลดังกล่าวถูกใช้แล้ว',
                    'The email address already in use.',
                  );
                }
                //กรอกอีเมลผิด (ไม่มี @domain.com)
                if (error.code === 'auth/invalid-email') {
                  Alert.alert(
                    'อีเมลไม่ถูกต้อง',
                    "Please include an '@' in the email address.",
                  );
                }
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
