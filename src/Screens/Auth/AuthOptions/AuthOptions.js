import React from 'react';
import {Image, View, StyleSheet, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RoundedButton from '../../../Components/Buttons/RoundedButton';
const AuthOptions = props => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container}>
        <View style={{width: '100%'}}>
          <Image
            style={styles.logo}
            source={require('../../../images/intro-logo.png')}></Image>
          <View style={styles.buttons}>
            <RoundedButton
              text={'Sign In'}
              small={true}
              onPress={() => props.navigation.navigate('SignIn')}
            />
            <RoundedButton
              text={'Sign Up'}
              primary={true}
              small={true}
              onPress={() => props.navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logo: {
    alignSelf: 'center',
  },
  buttons: {
    justifyContent: 'space-between',
    height: 120,
    marginTop: 35,
  },
});
export default AuthOptions;
