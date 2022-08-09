import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Colors from '../../../Common/Colors';

const CartCard = props => {
  const {image} = props;
  return (
    <View style={styles.box}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 90,
    height: 100,
    borderRadius: 15,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 2,
    borderColor: Colors.gold,
  },
  image: {
    width: 75,
    height: 85,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
export default CartCard;
