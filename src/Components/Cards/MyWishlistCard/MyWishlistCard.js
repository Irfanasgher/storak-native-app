import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Common/Colors';
const MyWishlistCard = props => {
  const {image, heading, totalPrice} = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode={'contain'} source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{heading}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.totalPrice}>{totalPrice}</Text>
          <TouchableOpacity style={styles.heartContainer}>
            <Ionicon name="heart" size={15} color={Colors.gold} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 30,
  },
  imageContainer: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  textContainer: {
    marginTop: 10,
  },
  heading: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: Colors.primary,
    fontSize: 14,
    lineHeight: 22,
  },
  totalPrice: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: Colors.gold,
    fontSize: 14,
    lineHeight: 18,
    marginTop: 5,
  },
  heartContainer: {
    height: 28,
    width: 28,
    borderRadius: 14,
    backgroundColor: Colors.offWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MyWishlistCard;
