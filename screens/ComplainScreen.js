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



const ComplainScreen = () => {
  
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState(null);
  
  return (
    <SafeAreaView>

      <Text style={styles.topicText}>
        ชื่อผู้ร้องเรียน
      </Text>
      
      <TextInput
        style={styles.inputBox}
        onChangeText={onChangeText}
        value={text}
        placeholder="placeholder"
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    color: '#000000',
  },

  topicText: {
    color: '#000000',
  },

  inputBox: {
    width: 360,
    height: 40,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#555',
  },

});

export default ComplainScreen;