import React from 'react';
import {
  Text,
  TextInput,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Rating} from 'react-native-elements';
import Ionicon from 'react-native-vector-icons/Ionicons';
import RoundedButton from '../../Components/Buttons/RoundedButton';
import Colors from '../../Common/Colors';

const FeedBack = props => {
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
            Feedback &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
          <Text style={styles.item}></Text>
        </View>
      </View>

      <View style={styles.avatarContainer}>
        <ImageBackground
          source={require('../../images/userimage.png')}
          style={styles.imageBackground}></ImageBackground>
      </View>
      <Text style={styles.experience}>How was your Experiance with us?</Text>
      <View style={{marginTop: 20}}>
        <Rating
          type="custom"
          startingValue={4}
          fractions={0.5}
          ratingColor={Colors.gold}
          ratingBackgroundColor={Colors.light}
          style={{paddingVertical: 10}}
        />
      </View>
      <View style={styles.buttons}>
        {/* <Text style={styles.badge}>Comment</Text> */}
        <TextInput
          multiline={true}
          numberOfLines={6}
          placeholder={'Add your comment'}
          style={styles.containerStyle}
        />
      </View>
      <View style={{marginTop: 40, marginBottom: 5}}>
        <RoundedButton
          text={'Submit'}
          onPress={() => props.navigation.navigate('Home')}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    // marginBottom: 65,
  },
  mainHeader: {
    backgroundColor: Colors.white,
    paddingTop: 60,
    paddingBottom: 10,
    borderColor: Colors.lightgray,
    borderBottomWidth: 1,
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
  heading: {
    color: Colors.primary,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 22,
  },
  experience: {
    color: Colors.primary,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
    marginTop: 25,
  },
  containerStyle: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.gray,
    padding: 10,
    borderRadius: 15,
    textAlignVertical: 'top',
  },
  buttons: {
    marginTop: 30,
    // position: 'relative',
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
    zIndex: 1,
  },
});
export default FeedBack;
