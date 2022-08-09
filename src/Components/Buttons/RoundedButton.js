import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../Common/Colors';
const RoundedButton = props => {
  const {text, onPress, primary, small} = props;
  return (
    <View>
      <TouchableOpacity
        onPress={() => onPress()}
        style={{
          ...styles.button,
          backgroundColor: primary ? Colors.primary : Colors.gold,
          height: small ? 48 : 56,
        }}>
        <Text style={styles.buttonText}> {text} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    marginTop: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
  },
});
export default RoundedButton;
