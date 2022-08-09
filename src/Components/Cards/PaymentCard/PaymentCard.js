import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Colors from '../../../Common/Colors';

const PaymentCard = props => {
  const {image} = props;
  return (
    <View style={styles.box}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 66,
    height: 52,
    borderRadius: 15,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
export default PaymentCard;
