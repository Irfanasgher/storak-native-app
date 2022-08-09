import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Colors from '../../../Common/Colors';
const AllProductCard = props => {
  const {image, heading, discountPrice, totalPrice} = props;
  return (
    <View style={styles.container}>
      <Image resizeMode={'contain'} source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{heading}</Text>
        <View style={styles.price}>
          <Text style={styles.totalPrice}>{totalPrice} </Text>
          <Text style={styles.discountPrice}>{discountPrice}</Text>
        </View>
        <Text style={styles.model}>Jakarta</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 165,
    resizeMode: 'cover',
    borderRadius: 3,
  },
  textContainer: {
    marginTop: 10,
    paddingLeft: 10,
  },
  heading: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 14,
    lineHeight: 18,
  },
  price: {
    flexDirection: 'row',
    marginTop: 3,
  },
  discountPrice: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: Colors.gold,
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 10,
  },
  totalPrice: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.black,
    fontSize: 12,
    lineHeight: 15,
    textDecorationLine: 'line-through',
  },
  model: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: Colors.gray,
    fontSize: 14,
    lineHeight: 18,
    marginTop: 5,
  },
});
export default AllProductCard;
