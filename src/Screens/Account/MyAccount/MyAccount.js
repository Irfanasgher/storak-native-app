import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import InputField from '../../../Components/InputField';
import RoundedButton from '../../../Components/Buttons/RoundedButton';
import Colors from '../../../Common/Colors';

const MyAccount = props => {
  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}>
      <View style={styles.mainHeader}>
        <View style={styles.headingContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => props.navigation.goBack()}>
            <Ionicon
              name="chevron-back-outline"
              size={20}
              color={Colors.black}
            />
          </TouchableOpacity>
          <Text style={styles.cart}>
            My Account &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
          <Text style={styles.item}></Text>
        </View>
      </View>

      <View style={styles.avatarContainer}>
        <ImageBackground
          source={require('../../../images/userimage.png')}
          style={styles.imageBackground}>
          <TouchableOpacity style={styles.camera}>
            <Ionicon name="camera-outline" size={25} color={Colors.gray} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={{marginTop: 30, paddingBottom: 5}}>
        <InputField
          title={'First Name'}
          placeholder="Jimmy"
          icon="person-outline"
        />
        <InputField
          title={'Last Name'}
          placeholder="Sullivan"
          icon="person-outline"
        />

        <InputField
          title={'Phone Number'}
          placeholder="+1 898 860 864"
          icon="phone-portrait-outline"
        />
        <InputField
          title={'Email'}
          placeholder="Enter your email"
          icon="mail-outline"
        />
        <InputField
          title={'Password'}
          placeholder="Enter your password"
          icon="lock-closed-outline"
        />
        <InputField
          title={'Address'}
          placeholder="Long Beach California"
          icon="location-outline"
        />
        <InputField
          title={'Postal code'}
          placeholder="90712"
          icon="location-outline"
        />
        <InputField
          title={'Home Number'}
          placeholder="24"
          icon="location-outline"
        />
        <View style={{marginTop: 20}}>
          <RoundedButton
            text={'Save Changes'}
            onPress={() => props.navigation.navigate('Home')}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    // marginBottom: 65,
  },
  mainHeader: {
    backgroundColor: Colors.white,
    paddingTop: 60,
    paddingBottom: 10,
    borderColor: Colors.lightgray,
    borderBottomWidth: 1,
    zIndex: 111,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 10,
    paddingLeft: 5,
  },
  cart: {
    color: Colors.gold,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
  },
  avatarContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageBackground: {
    width: 115,
    height: 115,
    alignSelf: 'center',
    position: 'relative',
  },
  camera: {
    height: 45,
    width: 45,
    borderRadius: 22,
    backgroundColor: Colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -10,
    bottom: -10,
  },
});
export default MyAccount;
