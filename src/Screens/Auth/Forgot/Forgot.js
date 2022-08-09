import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Colors from '../../../Common/Colors';
import {Input} from 'react-native-elements';
import RoundedButton from '../../../Components/Buttons/RoundedButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

const UserSchema = Yup.object({
  email: Yup.string().trim().email().required().label('Email'),
});

const Forgot = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Formik
        validationSchema={UserSchema}
        initialValues={{
          email: '',
        }}
        onSubmit={values => {
          console.log(values);
          //   login(values);
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
                  Forgot Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
                <Text style={styles.signin}></Text>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.welcome}>Forgot Password</Text>
                <Text style={styles.instruction}>
                  Please enter your email and we will send you a link to return
                  to your account
                </Text>
                <View style={{...styles.buttons, marginTop: 60}}>
                  <Text style={styles.badge}>Email</Text>
                  <Input
                    placeholder="Enter your email"
                    rightIcon={
                      // <Icon name="envelope" size={24} color={Colors.gray} />
                      <Ionicon
                        name="mail-outline"
                        size={20}
                        color={Colors.gray}
                      />
                      // <Image
                      //   resizeMode={'contain'}
                      //   source={require('../../../images/email.png')}
                      // />
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

                <View style={{marginTop: 30}}>
                  <RoundedButton
                    text={'Continue'}
                    onPress={handleSubmit}
                    onPress={() => navigation.navigate('ForgotSetPassword')}
                  />
                </View>

                <View
                  style={{...styles.icons, marginTop: 30, marginBottom: 20}}>
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
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 35,
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
export default Forgot;
