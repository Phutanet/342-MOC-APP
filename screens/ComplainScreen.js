import * as React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  Linking
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './component/Header';


const ComplainScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [petition, setPetition] = useState('');
  const [image, setImage] = useState('');

  const goToMail = () => {
    Linking.openURL(`mailto:webmaster@moc.go.th?subject=ร้องเรียนราคาสินค้าไม่เป็นธรรม&body=${petition}`);
  }

  const clearData = () => {
    setName('');
    setEmail('');
    setPetition('');
    setImage('');
  }

  const onSubmitPressed = () => {
    goToMail();
    clearData();
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height : 400,
      cropping: true,
      imageUpload: {
        width: 10,
        height: 10,
        borderRadius: 5,
      },
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };


  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Text style={styles.textTitle}>ร้องเรียนราคาสินค้าไม่เป็นธรรม</Text>
      <Text style={styles.textTopic}>ชื่อผู้ร้องเรียน</Text>
    <View style={styles.boxInput}>
      <TextInput
      value={name}
      onChangeText={setName}
      placeholder="ชื่อจริง - นามสกุล"
      style={styles.inputBox}
      />
    </View>
      <Text style={styles.textTopic}>อีเมล</Text>
    <View style={styles.boxInput}>
      <TextInput
      style={styles.inputBox}
      value={email}
      onChangeText={setEmail}
      placeholder="อีเมล"
      
      />
    </View>
      <Text style={styles.textTopic}>ข้อความร้องเรียน</Text>
    <View style={styles.boxInput}>
       <TextInput
      value={petition}
      style={styles.inputBoxmultiline}
      onChangeText={setPetition}
      placeholder="ระบุข้อมูลอาทิเช่น ชื่อร้าน, ตำแหน่งที่ตั้ง, ประเภทสินค้า, ราคา"  
      multiline={true}
      numberOfLines={7}
      />
    </View>

      <Text style={styles.textTopic}>หลักฐานประกอบการร้องเรียน</Text>
    <View style={styles.boxInput}>
            <View
            
            style={styles.inputBox}
            >
              <View style={styles.containerfile}>
                <Text style={styles.textconplain}
                >
                  อาทิเช่นใบเสร็จ หรือรูปป้ายราคาสินค้า
                </Text>
                <TouchableOpacity
                onPress={choosePhotoFromLibrary} 
                >
                <MaterialCommunityIcons 
                  name="file-upload" 
                  size={30} 
                  color={'#696969'} 
                  style={{paddingLeft:25,paddingTop:4}} />
                </TouchableOpacity>

              </View>
            </View>
    </View>
    <View style={styles.cropImage}>
       <Image 
      source={{uri: image,}} 
      style={styles.imageUpload}
      />
    </View>
     
  <View style={{alignItems:'center'}}>
    <Pressable 
    onPress={onSubmitPressed}
    style={styles.submitButton}>
        <Text 
        style={styles.submitButtonText}
        >ส่งคำร้อง</Text>
      </Pressable>
  </View>
      

      </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
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

    imageUpload: {
      width: 160,
      height: 130,
      borderRadius: 5,
    },

    submitButton: {
      backgroundColor: 'rgba(29, 59, 134, 1)',
      width: '25%',
      padding: 10,
      marginVertical: 10,
      alignItems: 'center',
      borderRadius: 30,
    },

    submitButtonText:{
      fontWeight: 'bold',
      color: 'white',
      fontSize:15
    },
    textTitle:{
      fontSize:23,
      fontWeight:'bold',
      textAlign:'center',
      padding:20,
      color:'black'
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
    containerfile:{
      flexDirection:'row'
    },
    textconplain:{
      alignItems:'center',
      fontSize:14,
      paddingTop:10
    },
    inputBoxmultiline:{
      backgroundColor:'#e8e8e8',
      width: '80%',
      height:160,
      borderColor: '#e8e8e8',
      borderRadius: 30,
      paddingHorizontal: 20,
      marginVertical: 5,
      borderWidth: 1,
      textAlignVertical: 'top'
    },
    cropImage:{
      alignItems:'center',
      borderColor:'bold',
      padding:10
    }

});

export default ComplainScreen;