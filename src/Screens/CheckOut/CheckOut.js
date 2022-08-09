import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundedButton from '../../Components/Buttons/RoundedButton';
import CartList from '../../Components/ListItems/CartList';
import PaymentList from '../../Components/ListItems/PaymentList';
import Colors from '../../Common/Colors';

const CheckOut = props => {
  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}>
      <View style={styles.mainHeader}>
        <View style={styles.headingContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => props.navigation.goBack()}>
            {/* <Image source={require('../../images/back-icon.png')} /> */}
            <Ionicon
              name="chevron-back-outline"
              size={20}
              color={Colors.black}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.cart}>
              Check Out &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Text>
            <Text style={styles.item}>
              4 items &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Text>
          </View>
          <Text style={styles.item}></Text>
        </View>
      </View>
      <View style={styles.cartContainer}>
        <Text style={styles.store}>Your Cart</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={{marginTop: 20}}>
        <CartList />
      </View>

      <View style={{...styles.cartContainer, marginTop: 20}}>
        <Text style={styles.store}>Your Address</Text>
        <Text style={styles.viewAll}>Edit Address</Text>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={styles.address}>Jimmy Sullivan, (+1) 954-868-1190</Text>
        <Text style={styles.address}>
          Long Beach, California (Jimmy’s Home), 90712
        </Text>
      </View>

      <View style={{...styles.cartContainer, marginTop: 20}}>
        <Text style={styles.store}>Shipping Options</Text>
        <Text style={styles.viewAll}>Choose Service</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../images/popular2.png')}
          />
        </View>
        <View style={{marginLeft: 10, marginTop: 10}}>
          <Text style={styles.price}>$131.18</Text>
          <Text style={styles.heading}>Will be received on July 12, 2020</Text>
        </View>
      </View>
      <View style={{...styles.cartContainer, marginTop: 20}}>
        <Text style={styles.store}>Payment Methods</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={{marginTop: 20}}>
        <PaymentList />
      </View>
      <View style={styles.checkout}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.voucherImage}>
            {/* <Image source={require('../../images/voucher.png')} /> */}

            <Icon name="ticket" size={25} color={Colors.gold} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.voucher}>Add voucher code</Text>
            {/* <Image
              style={{marginLeft: 10}}
              source={require('../../images/chevron_right.png')}
            /> */}
            <Ionicon
              name="chevron-forward-outline"
              size={18}
              color={Colors.gray}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '30%'}}>
            <Text style={styles.voucher}>Total:</Text>
            <Text style={styles.totalPrice}>QAR 337.15</Text>
          </View>
          <View style={{width: '60%'}}>
            <RoundedButton
              text={'Pay Now'}
              onPress={() => props.navigation.navigate('OrderSuccess')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
  },
  mainHeader: {
    backgroundColor: Colors.white,
    paddingTop: 60,
    paddingBottom: 10,
    borderColor: Colors.lightgray,
    borderBottomWidth: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 10,
    paddingLeft: 5,
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
  item: {
    color: Colors.gray,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
  },
  cartContainer: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  store: {
    color: Colors.primary,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 23,
  },
  viewAll: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.gray,
    fontSize: 14,
    lineHeight: 18,
  },
  address: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.gray,
    fontSize: 14,
    lineHeight: 18,
    marginTop: 5,
  },
  imageContainer: {
    width: 66,
    height: 52,
    borderRadius: 15,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  price: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.gold,
    fontSize: 14,
    lineHeight: 22,
  },
  heading: {
    color: Colors.gray,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 24,
  },
  checkout: {
    backgroundColor: Colors.light,
    // height: 200,
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 20,
    // marginBottom: 65,
    padding: 30,
  },
  voucherImage: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  voucher: {
    color: Colors.gray,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 22,
  },
  totalPrice: {
    color: Colors.black,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
  },
});
export default CheckOut;
