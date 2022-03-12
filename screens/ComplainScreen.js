import * as React from 'react';
import {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';



const ComplainScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [petition, setPetition] = useState('');
  
  
  return (
    <View style={styles.root}>
      <Text>ร้องเรียนราคาสินค้าไม่เป็นธรรม</Text>

      <Text>ชื่อผู้ร้องเรียน</Text>

      <TextInput
      value={name}
      onChangeText={setName}
      placeholder="ชื่อจริง - นามสกุล"
      style={styles.inputBox}
      />

      <Text>อีเมล</Text>

      <TextInput
      value={email}
      onChangeText={setEmail}
      placeholder="อีเมล"
      style={styles.inputBox}
      />

      <Text>ข้อความร้องเรียน</Text>

      <TextInput
      value={petition}
      onChangeText={setPetition}
      placeholder="ระบุข้อมูลอาทิเช่น ชื่อร้าน, ตำแหน่งที่ตั้ง, ประเภทสินค้า, ราคา"
      style={styles.inputBox}
      />

      <Text>หลักฐานประกอบการร้องเรียน</Text>

      <TextInput
      value={email}
      onChangeText={setEmail}
      placeholder="อีเมล"
      style={styles.inputBox}
      />





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

});

export default ComplainScreen;