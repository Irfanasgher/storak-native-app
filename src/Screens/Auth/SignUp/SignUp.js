import React from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import {Input} from 'react-native-elements';
import RoundedButton from '../../../Components/Buttons/RoundedButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Common/Colors';

const UserSchema = Yup.object({
  name: Yup.string().trim().required().label('Name'),
  email: Yup.string().trim().email().required().label('Email'),
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,15})$/,
      'Password must be 8 characters long and contains one number, one capital letter',
    )
    .required()
    .label('Password'),
  confirmPassword: Yup.string()
    .required()

    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    })
    .label('Confirm Password'),
});

const SignUp = ({signup, loading, navigation}) => {
  const token = useSelector(state => state.authReducer.token);

  console.log('loading', loading);
  return (
    <View style={{flex: 1}}>
      <Formik
        validationSchema={UserSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={values => {
          // console.log('values', values);
          delete values.confirmPassword;
          signup(values);
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
                  Sign Up &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
                <Text style={styles.signin}></Text>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.welcome}>Register Account</Text>
                <Text style={styles.instruction}>
                  Complete your details or continue with social media
                </Text>
                <View style={{...styles.buttons, marginTop: 45}}>
                  <Text style={styles.badge}>Name</Text>
                  <Input
                    placeholder="Enter your name"
                    rightIcon={
                      <Ionicon
                        name="person-outline"
                        size={20}
                        color={Colors.gray}
                      />
                    }
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  {touched.name && errors.name && (
                    <Text style={{color: 'red'}}>{errors.name}</Text>
                  )}
                </View>
                <View style={styles.buttons}>
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
                    <Text style={{color: 'red'}}>{errors.email}</Text>
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
                    <Text style={{color: 'red'}}>{errors.password}</Text>
                  )}
                </View>
                <View style={styles.buttons}>
                  <Text style={styles.badge}>Confirm</Text>
                  <Input
                    placeholder="Enter confirm password"
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
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={{color: 'red'}}>{errors.confirmPassword}</Text>
                  )}
                </View>
                <View style={styles.buttons}>
                  <RoundedButton
                    text={'Continue'}
                    onPress={handleSubmit}
                    // onPress={() => navigation.navigate('Otp')}
                  />
                </View>

                <View style={styles.icons}>
                  <TouchableOpacity>
                    <SocialIcon style={{width: 53}} button type="google" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <SocialIcon style={{width: 53}} button type="facebook" />
                  </TouchableOpacity>
                </View>
                <View style={{...styles.account, paddingBottom: 20}}>
                  <Text style={styles.have}>Having An Account?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text
                      style={{
                        ...styles.have,
                        color: Colors.gold,
                        marginLeft: 10,
                      }}>
                      Sign In
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
    marginTop: 40,
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
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  image: {
    width: 40,
    height: 40,
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
export default SignUp;
