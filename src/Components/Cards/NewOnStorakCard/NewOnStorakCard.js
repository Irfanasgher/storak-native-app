import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Colors from '../../../Common/Colors';

const NewOnStorakCard = props => {
  const {image, heading} = props;

  return (
    <View style={styles.box}>
      <Image source={image} style={styles.image} />
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 15,
    width: 70,
    overflow: 'hidden',
    // marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 90,
    borderRadius: 15,
  },
  heading: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.white,
    fontSize: 14,
    lineHeight: 18,
    marginTop: 5,
  },
});
export default NewOnStorakCard;
