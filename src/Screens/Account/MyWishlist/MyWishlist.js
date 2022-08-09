import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MyWishlist from '../../../Components/ListItems/MyWishlist';
import Colors from '../../../Common/Colors';
const MyWishlistS = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => props.navigation.goBack()}>
          {/* <Image source={require('../../../images/back-icon.png')} /> */}
          <Ionicon name="chevron-back-outline" size={20} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.cart}>
          Favorites &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
        <Text style={styles.item}></Text>
      </View>
      <MyWishlist
        onPress={item => props.navigation.navigate('ProductDetail', {...item})}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 60,
    // marginBottom: 70,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginHorizontal: 10,
    borderColor: Colors.lightgray,
    borderBottomWidth: 1,
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
});
export default MyWishlistS;
