import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Colors from '../../../Common/Colors';
import RoundedButton from '../../../Components/Buttons/RoundedButton';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Otp = ({navigation}) => {
  const [otp, setOtp] = useState('');
  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <View style={styles.headingContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Ionicon
              name="chevron-back-outline"
              size={20}
              color={Colors.black}
            />
          </TouchableOpacity>
          <Text style={styles.signin}>
            OTP Verification &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
          <Text style={styles.signin}></Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.welcome}>OTP Verification</Text>
          <Text style={styles.instruction}>
            We sent your code to +1 898 860 *** This code will expired in 00:30
          </Text>
          <View style={styles.buttons}>
            <OTPInputView
              style={{width: '80%', height: 60}}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              onCodeChanged={code => {
                setOtp(code);
              }}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={otp => {
                console.log(`Code is ${otp}, you are good to go!`);
              }}
            />
          </View>

          <View style={{marginTop: 70}}>
            <RoundedButton
              text={'Continue'}
              onPress={() => navigation.navigate('LoginSuccess')}
            />
          </View>

          <View style={styles.icons}>
            <Text style={styles.have}>Resend OTP Code</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
    paddingBottom: 10,
    borderColor: Colors.lightgray,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 10,
    paddingLeft: 5,
  },
  signin: {
    color: Colors.gold,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 23,
    fontSize: 18,
    textAlign: 'center',
  },
  welcome: {
    color: Colors.primary,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 35,
    fontSize: 28,
    textAlign: 'center',
    marginTop: 60,
  },
  instruction: {
    width: 264,
    color: Colors.gray,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  buttons: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  underlineStyleBase: {
    width: 45,
    height: 45,
    borderRadius: 8,
    color: Colors.gray,
    borderColor: Colors.gray,
    borderWidth: 2,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.gold,
    color: Colors.gold,
  },
  icons: {
    // position: 'absolute',
    marginTop: 70,
    alignItems: 'center',
    width: '100%',
    bottom: 40,
  },
  have: {
    color: Colors.gray,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 22,
    textDecorationLine: 'underline',
  },
});
export default Otp;
