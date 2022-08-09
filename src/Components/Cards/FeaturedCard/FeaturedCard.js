import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Colors from '../../../Common/Colors';
import Fonts from '../../../Common/Fonts';
const FeaturedCard = props => {
  const {image, logo, company, heading} = props;
  return (
    <View style={styles.box}>
      <Image source={image} style={styles.image} />
      <Image source={logo} style={styles.logo} />
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 106,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: 106,
    height: 145,
    borderRadius: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: -30,
  },
  company: {
    fontFamily: Fonts.primary,
    fontStyle: 'normal',
    fontWeight: '600',
    color: Colors.primary,
    fontSize: 10,
    lineHeight: 14,
    marginTop: 2,
  },
  heading: {
    fontFamily: Fonts.primary,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: Colors.gold,
    fontSize: 9,
    lineHeight: 14,
    marginTop: 0,
  },
});
export default FeaturedCard;
