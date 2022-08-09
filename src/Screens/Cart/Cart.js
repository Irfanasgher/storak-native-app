import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';

import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundedButton from '../../Components/Buttons/RoundedButton';
import Colors from '../../Common/Colors';

import {
  addToCart,
  removeFromCart,
  deleteFromCart,
} from '../../modules/addToCart/actions';

const data = [
  {
    id: 1,
    percentage: '-20%',
    image: require('../../images/category1.png'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'samsung',
    qty: 1,
  },
  {
    id: 2,
    percentage: '-20%',
    image: require('../../images/crocery.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'apple',
    qty: 1,
  },
  {
    id: 3,
    percentage: '-20%',
    image: require('../../images/steal.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'huawie',
    qty: 1,
  },
  {
    id: 4,
    percentage: '-20%',
    image: require('../../images/dinnerware.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'lenovo',
    qty: 1,
  },
  {
    id: 5,
    percentage: '-20%',
    image: require('../../images/crocery.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'oppo',
    qty: 1,
  },
  {
    id: 6,
    percentage: '-20%',
    image: require('../../images/steal.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'samsung',
    qty: 1,
  },
  {
    id: 7,
    percentage: '-20%',
    image: require('../../images/crocery.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'samsung',
    qty: 1,
  },
  {
    id: 8,
    percentage: '-20%',
    image: require('../../images/dinnerware.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'samsung',
    qty: 1,
  },
  {
    id: 9,
    percentage: '-20%',
    image: require('../../images/steal.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'samsung',
    qty: 1,
  },
];

const Cart = ({
  products,
  cart,
  addToCart,
  removeFromCart,
  deleteFromCart,
  navigation,
}) => {
  const [number, setNumber] = useState(1);
  const [cartItems, setCartItems] = useState(data);

  const onAdd = product => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? {...exist, qty: exist.qty + 1} : x,
        ),
      );
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };

  const onRemove = product => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? {...exist, qty: exist.qty - 1} : x,
        ),
      );
    }
  };

  const handleDelete = product => {
    setCartItems(cartItems.filter(x => x.id !== product.id));
  };

  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}>
      <View style={styles.mainHeader}>
        <View style={styles.headingContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Ionicon
              name="chevron-back-outline"
              size={20}
              color={Colors.black}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.cart}>
              Your Cart &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Text>
            <Text style={styles.item}>
              4 items &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Text>
          </View>
          <Text style={styles.item}></Text>
        </View>
        {/* <Text style={styles.store}>Wano Store</Text> */}
      </View>
      {products.map(item => {
        console.log('cart data', item);
        return (
          <TouchableOpacity key={item.id}>
            <View style={styles.box}>
              <View style={styles.imageContainer}>
                <View style={styles.imagedev}>
                  <Image
                    resizeMode={'center'}
                    source={{uri: item.image}}
                    style={styles.image}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text numberOfLines={1} style={styles.heading}>
                    {item.title}
                  </Text>
                  <Text numberOfLines={1} style={styles.heading}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={styles.discountPrice}>QAR {item.price}</Text>
                      <Text style={styles.quantity}>x {item.qty}</Text>
                    </View>
                    <View style={styles.counterContainer}>
                      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                        <View style={styles.counter}>
                          <Ionicon
                            name="remove-outline"
                            size={15}
                            color={Colors.white}
                          />
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => addToCart(item)}>
                        <View style={{...styles.counter, marginLeft: 10}}>
                          <Ionicon
                            name="add-outline"
                            size={15}
                            color={Colors.white}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{height: 30, marginTop: 20}}
                onPress={() => deleteFromCart(item.id)}>
                <Ionicon name="trash-outline" size={30} color={Colors.gold} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      })}

      {/* {cart.map(item => (
        <Text key-={item.id}>{item.qty}</Text>
      ))} */}
      <View style={styles.checkout}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.voucherImage}>
            <Icon name="ticket" size={25} color={Colors.gold} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.voucher}>Add voucher code</Text>
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
              text={'Check Out'}
              onPress={() => navigation.navigate('CheckOut')}
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
  store: {
    color: Colors.primary,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 23,
    marginTop: 50,
  },
  box: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    position: 'relative',
  },
  imageContainer: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagedev: {
    width: 90,
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.light,
    borderWidth: 2,
    borderColor: Colors.gold,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 85,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  textContainer: {
    width: '73%',
    paddingLeft: 10,
  },
  heading: {
    color: Colors.primary,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 22,
  },
  discountPrice: {
    marginTop: -3,
    color: Colors.gold,
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    color: Colors.gray,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 22,
    marginLeft: 10,
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 22,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  button: {
    flex: 0.45,
    padding: 15,
    borderRadius: 8,
    backgroundColor: Colors.gold,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 20,
  },
  badgeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 10,
  },
  badgeText: {
    marginLeft: 15,
    color: Colors.gold,
    fontSize: 16,
    fontWeight: '700',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 35,
    marginTop: 5,
    padding: 0,
  },
  number: {
    fontSize: 18,
    color: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.primary,
    width: 33,
    height: 35,
    textAlign: 'center',
    paddingTop: 5,
  },
  counter: {
    backgroundColor: Colors.gold,
    width: 25,
    height: 25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkout: {
    backgroundColor: Colors.light,
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

const mapStateToProps = state => {
  return {
    products: state.cartReducer.products,
    cart: state.cartReducer.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id)),
    removeFromCart: id => dispatch(removeFromCart(id)),
    deleteFromCart: id => dispatch(deleteFromCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
