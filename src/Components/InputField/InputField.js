import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from '../../Common/Colors';

const InputField = props => {
  const {title, placeholder, icon} = props;
  return (
    <View style={styles.buttons}>
      <Text style={styles.badge}>{title}</Text>
      <Input
        placeholder={placeholder}
        rightIcon={<Ionicon name={icon} size={25} color={Colors.gold} />}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.gray,
    padding: 0,
    height: 50,
    borderRadius: 28,
    overflow: 'hidden',
  },
  inputContainerStyle: {
    backgroundColor: Colors.white,
    borderWidth: 0,
    paddingHorizontal: 5,
  },
  buttons: {
    marginTop: 30,
    position: 'relative',
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
export default InputField;
