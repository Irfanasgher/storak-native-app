import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import RoundedButton from '../../../Components/Buttons/RoundedButton';
import Colors from '../../../Common/Colors';

const LoginSuccess = props => {
  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}>
      <View style={styles.headingContainer}>
        <Text style={styles.cart}>Login Success </Text>
      </View>
      <View style={{marginTop: 90}}>
        <Image
          resizeMode={'contain'}
          style={{width: '100%'}}
          source={require('../../../images/thanks.png')}
        />
      </View>
      <View
        style={{
          marginTop: 15,
          marginBottom: 70,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.success}>Login Success</Text>
        <Text style={styles.detail}>Now you're ready to go shopping</Text>
        <View style={{width: '55%', marginTop: 15}}>
          <RoundedButton
            text={'Back to home'}
            onPress={() => props.navigation.navigate('Home')}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 60,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cart: {
    color: Colors.gold,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
  },
  success: {
    color: Colors.primary,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 38,
    marginTop: 15,
  },
  detail: {
    color: Colors.gray,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 25,
    width: '70%',
    textAlign: 'center',
    marginTop: 10,
  },
});
export default LoginSuccess;
