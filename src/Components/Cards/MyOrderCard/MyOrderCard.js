import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Common/Colors';

const MyOrderCard = props => {
  const {icon, title, desc, date} = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Ionicon name={icon} size={25} color={Colors.gold} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  imageContainer: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: Colors.offWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 18,
    height: 21,
  },
  textContainer: {
    paddingLeft: 15,
    paddingRight: 20,
    width: '94%',
  },
  heading: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    color: Colors.black,
    fontSize: 16,
    lineHeight: 20,
  },
  desc: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.gray,
    fontSize: 14,
    lineHeight: 16,
    marginTop: 5,
  },
});
export default MyOrderCard;
