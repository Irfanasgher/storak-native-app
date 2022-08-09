import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Colors from '../../Common/Colors';
const TextHeader = props => {
  const {text, onPress} = props;
  return (
    <View style={styles.header}>
      {onPress && (
        <TouchableOpacity style={styles.back} onPress={onPress}>
          {/* <Image
            resizeMode={'contain'}
            style={{width: 25}}
            source={require('../../images/arrow.png')}
          /> */}
        </TouchableOpacity>
      )}
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 20,
  },
  back: {
    position: 'absolute',
    top: -8,
    left: 20,
  },
});

export default TextHeader;
