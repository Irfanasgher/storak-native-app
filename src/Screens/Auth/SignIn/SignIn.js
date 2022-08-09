import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {SocialIcon, CheckBox, Input} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Colors from '../../../Common/Colors';
import RoundedButton from '../../../Components/Buttons/RoundedButton';
import Ionicon from 'react-native-vector-icons/Ionicons';

const UserSchema = Yup.object({
  email: Yup.string().trim().email().required().label('Email'),
  password: Yup.string().trim().required().label('Password'),
});

const SignIn = ({login, loading, navigation}) => {
  const [userGoogleInfo, setUserGoogleInfo] = useState({});

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '241502027290-o3sh4q9vbh3s50s7ppd2t15g44jqe86k.apps.googleusercontent.com',
  //     // '315661653952-teq06pip8iu799supj3rn7vom22dqtop.apps.googleusercontent.com',
  //     offlineAccess: true,
  //   });
  // });

  const googleSignIn = async () => {
    GoogleSignin.signIn()
      .then(data => {
        console.log('user data', data);
        setUserGoogleInfo(data);
        const currentUser = GoogleSignin.getTokens().then(res => {
          console.log('token', res.accessToken); //<-------Get accessToken
          var postData = {
            access_token: res.accessToken,
            code: data.idToken,
          };
          setUserGoogleInfo(prevState => ({
            ...prevState,
            token: res.accessToken,
          }));

          let axiosConfig = {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          };
          const setTokens = async token => {
            await AsyncStorage.setItem('token', token);
          };
          setTokens(res.accessToken);
        });
      })
      .then(user => {
        console.log('TEST G LOGIN 1 ' + JSON.stringify(user));
      })
      .catch(error => {
        console.log('.....' + JSON.stringify(error.message));
      });
  };

  return (
    <View style={{flex: 1}}>
      <Formik
        validationSchema={UserSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          console.log(values);
          login(values);
          // token && navigation.navigate('Home');
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            {/* <Spinner visible={loading} /> */}
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
                  Sign In &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
                <Text style={styles.signin}></Text>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.welcome}>Welcome Back</Text>
                <Text style={styles.instruction}>
                  Sign in with your email and password or continue with social
                  media
                </Text>
                <View style={{...styles.buttons, marginTop: 60}}>
                  <Text style={styles.badge}>Email</Text>
                  <Input
                    placeholder="Enter your email"
                    rightIcon={
                      <Ionicon
                        name="mail-outline"
                        size={20}
                        color={Colors.gray}
                      />
                    }
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <Text style={{color: Colors.red}}>{errors.email}</Text>
                  )}
                </View>
                <View style={styles.buttons}>
                  <Text style={styles.badge}>Password</Text>
                  <Input
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    rightIcon={
                      <Ionicon
                        name="lock-closed-outline"
                        size={20}
                        color={Colors.gray}
                      />
                    }
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {touched.password && errors.password && (
                    <Text style={{color: Colors.red}}>{errors.password}</Text>
                  )}
                </View>

                <View style={styles.account}>
                  <Text style={styles.remember}>
                    {/* <CheckBox
                      title="Click Here"
                      checked={this.state.checked}
                    /> */}
                  </Text>
                  <TouchableOpacity
                  // onPress={() => navigation.navigate('Forgot')}
                  >
                    <Text
                      style={{
                        ...styles.remember,
                        textDecorationLine: 'underline',
                      }}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 30}}>
                  <RoundedButton
                    text={'Continue'}
                    onPress={handleSubmit}
                    // onPress={() => navigation.navigate('LoginSuccess')}
                  />
                </View>
                <View style={styles.icons}>
                  <TouchableOpacity onPress={googleSignIn}>
                    <SocialIcon style={{width: 53}} button type="google" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <SocialIcon style={{width: 53}} button type="facebook" />
                  </TouchableOpacity>
                </View>
                <View
                  style={{...styles.icons, marginTop: 30, paddingBottom: 20}}>
                  <Text style={styles.have}>Don't Have An Account?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}>
                    <Text
                      style={{
                        ...styles.have,
                        color: Colors.gold,
                        marginLeft: 10,
                      }}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
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
    width: 244,
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
  containerStyle: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.gray,
    padding: 0,
    height: 50,
    borderRadius: 28,
    overflow: 'hidden',
  },
  inputContainerStyle: {
    backgroundColor: Colors.white,
    borderWidth: 0,
    paddingHorizontal: 5,
  },
  buttons: {
    marginTop: 20,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    left: 20,
    top: -10,
    color: Colors.gold,
    backgroundColor: Colors.white,
    paddingHorizontal: 8,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    zIndex: 11,
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  remember: {
    color: Colors.gray,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 35,
  },
  image: {
    width: 40,
    height: 40,
  },
  have: {
    color: Colors.gray,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
  },
});
export default SignIn;
