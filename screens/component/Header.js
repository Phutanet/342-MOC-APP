import * as React from 'react';
import {useContext} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Image,
} from 'react-native';

import {AuthContext} from '../../navigation/AuthProvider';

const Header = ({navigation}) => {
  const {logout} = useContext(AuthContext);

  return (
    <View style={styles.header}>
      <Image
        source={require('../image/mocLogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.MocName_Thai}>
        กระทรวงพาณิชย์{'\n'}
        <Text style={styles.MocName_Eng}>Ministry of Commerce 4.0</Text>
      </Text>

      <TouchableOpacity onPress={() => logout()} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>ออกจากระบบ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'rgba(29, 59, 134, 1)',
    flexDirection: 'row',
  },
  logo: {
    width: 60,
    height: 60,
    paddingLeft: '25%',
  },
  MocName_Thai: {
    color: 'white',
    fontSize: 22,
    paddingTop: 5,
  },
  MocName_Eng: {
    fontSize: 12,
  },
  logoutButton: {
    paddingTop: 32,
    paddingLeft: 50,
  },
  logoutButtonText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Header;
