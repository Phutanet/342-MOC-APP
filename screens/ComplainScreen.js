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
  Button,
  Pressable,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';






const ComplainScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [petition, setPetition] = useState('');
  const [image, setImage] = useState('');

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const onSubmitPressed = () => {
    console.warn('onSubmitPressed');
  };

  
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

      <Button title='Choose Photo' onPress={choosePhotoFromLibrary}/>

      <Image 
      source={{
        uri: image,
      }} 
      style={styles.imageUpload}
      />

      <Pressable onPress={onSubmitPressed} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>ส่งคำร้อง</Text>
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

    imageUpload: {
      width: 100,
      height: 100,
      borderRadius: 5,
    },

    submitButton: {
      backgroundColor: '#3B71F3',
      width: '100%',
      padding: 15,
      marginVertical: 5,
      alignItems: 'center',
      borderRadius: 5,
    },

    submitButtonText:{
      fontWeight: 'bold',
      color: 'white',
    },

});

export default ComplainScreen;