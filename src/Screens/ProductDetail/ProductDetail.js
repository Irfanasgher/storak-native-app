import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Input} from 'react-native-elements';
import HTML from 'react-native-render-html';
import ProductSlider from '../../Components/ProductSlider';
import RoundedButton from '../../Components/Buttons/RoundedButton';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from '../../Common/Colors';
import {addToCart, removeFromCart} from '../../modules/addToCart/actions';
import {addToWishlist} from '../../modules/wishlist/actions';

const images = [
  {
    id: 1,
    image: require('../../images/product1.png'),
  },
  {
    id: 2,
    image: require('../../images/product1.png'),
  },
  {
    id: 3,
    image: require('../../images/product1.png'),
  },
  {
    id: 4,
    image: require('../../images/product1.png'),
  },
];

// const images = [
//   {
//     id: 1,
//     image:
//       'https://theupcoming-flmedialtd.netdna-ssl.com/wp-content/uploads/2015/03/dready-2-2.jpg',
//   },
//   {
//     id: 2,
//     image:
//       'https://theupcoming-flmedialtd.netdna-ssl.com/wp-content/uploads/2015/03/dready-2-2.jpg',
//   },
//   {
//     id: 3,
//     image:
//       'https://theupcoming-flmedialtd.netdna-ssl.com/wp-content/uploads/2015/03/dready-2-2.jpg',
//   },
//   {
//     id: 4,
//     image:
//       'https://theupcoming-flmedialtd.netdna-ssl.com/wp-content/uploads/2015/03/dready-2-2.jpg',
//   },
// ];

const listTab = [
  {
    id: 1,
    name: 'Description',
    status: 'description',
  },
  {
    id: 2,
    name: 'Review',
    status: 'review',
  },
  {
    id: 3,
    name: 'Question',
    status: 'question',
  },
];

const ProductDetail = ({
  addToCart,
  removeFromCart,
  addToWishlist,
  favourite,
  navigation,
  route,
}) => {
  const [number, setNumber] = useState(1);
  const [heart, setHeart] = useState(false);
  const [product, setProduct] = useState([]);
  const [status, setStatus] = useState('description');
  const [showAdd, setShowAdd] = useState(true);
  const [showInput, setShowInput] = useState(false);

  const setStatusFilter = status => {
    setStatus(status);
  };

  useEffect(() => {
    handleProduct();
  }, []);

  const handleProduct = async e => {
    await axios
      .get(
        `https://api.storak.qa/api/admin/products/${route.params.id}/variants`,
      )
      .then(res => {
        // console.log('detail', res.data.product);
        setProduct(res.data.product);
      });
  };

  const handleDecrement = id => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };
  const handleIncrement = () => {
    if (number < 10) {
      setNumber(number + 1);
    }
  };
  const {params} = route;
  console.log('product detail', product);
  // console.log('favourite detail', favourite);

  const favouriteData = favourite.find(item => item.id === product.id);

  // console.log('specific data', favouriteData);
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Ionicon name="chevron-back-outline" size={20} color={Colors.black} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginRight: 5, color: Colors.black}}>4.5</Text>
          <Ionicon name="star" size={15} color={Colors.gold} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductSlider images={images} />
        <Text style={styles.text}>{product?.name}</Text>
        <Text style={styles.little}>Little Description</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            marginTop: 10,
          }}>
          <View style={styles.discountContainer}>
            <Text style={styles.discount}>40% off</Text>
          </View>
          <Text style={styles.price}>QAR 000</Text>
        </View>
        <View style={styles.heartContainer}>
          <Text style={styles.qarPrice}>QAR 64.99</Text>
          <View style={styles.heart}>
            <TouchableOpacity onPress={() => addToWishlist(product)}>
              <Ionicon name="heart" size={20} color={Colors.gray} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.stockContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicon name="cart" size={25} color={Colors.gold} />
            <Text style={styles.stock}>Stock</Text>
          </View>
          <Text style={{color: Colors.black}}>54</Text>
        </View>
        <View style={styles.stockContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicon name="checkmark-outline" size={25} color={Colors.gold} />
            <Text style={styles.stock}>Product Sold</Text>
          </View>
          <Text style={{color: Colors.black}}>430</Text>
        </View>

        <View style={styles.buttonContainer}>
          {listTab.map(e => (
            <TouchableOpacity
              key={e.id}
              style={[
                styles.button,
                status === e.status && styles.activeButton,
              ]}
              onPress={() => setStatusFilter(e.status)}>
              <Text style={styles.buttonText}>{e.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {status === 'description' && (
          <View style={{paddingHorizontal: 10, marginTop: 25}}>
            <Text style={styles.productDetail}>Product Details:</Text>
            <Text style={styles.detail}>
              Sunset is the time of day when our sky meets the outer space solar
              winds. There are blue, pink, and purple swirls, spinning and
              twisting, like clouds of balloons caught in a whirlwind.
            </Text>
            {product?.detailed_description && (
              <View style={{marginTop: 15}}>
                <HTML source={{html: product?.detailed_description}} />
              </View>
            )}
          </View>
        )}

        {status === 'review' && (
          <View style={{marginTop: 25}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('FeedBack');
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: Colors.gold,
                    padding: 4,
                    borderRadius: 8,
                  }}>
                  <Ionicon name="add-outline" size={20} color={Colors.white} />
                </View>
                <Text style={{marginLeft: 8, color: Colors.primary}}>
                  Add Review
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ratingContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../images/ratingUser.png')} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.heading}>Lorum Ipsum</Text>
                  <Text style={styles.descrip}>location name</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{marginRight: 5, color: Colors.black}}>4.5</Text>
                <Ionicon name="star" size={15} color={Colors.gold} />
              </View>
            </View>
            <Text style={styles.ratingDetail}>
              Sunset is the time of day when our sky meets the outer space solar
              winds.{' '}
            </Text>
          </View>
        )}

        {status === 'question' && (
          <View style={{marginTop: 15}}>
            {showAdd && (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setShowAdd(!showAdd), setShowInput(!showInput);
                  }}
                  style={{
                    backgroundColor: Colors.gold,
                    padding: 4,
                    borderRadius: 8,
                  }}>
                  <Ionicon name="add-outline" size={20} color={Colors.white} />
                </TouchableOpacity>
              </View>
            )}
            {showInput && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <View style={{...styles.buttons, marginTop: 10, width: '85%'}}>
                  <Text style={styles.badge}>Question</Text>
                  <TextInput
                    placeholder="Enter your question"
                    // rightIcon={
                    //   <Ionicon
                    //     name="help-outline"
                    //     size={25}
                    //     color={Colors.gray}
                    //     onPress={() => {
                    //       setShowAdd(!showAdd), setShowInput(!showInput);
                    //     }}
                    //   />
                    // }
                    style={styles.containerStyle}
                    // inputContainerStyle={styles.inputContainerStyle}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setShowAdd(!showAdd), setShowInput(!showInput);
                  }}
                  style={{
                    backgroundColor: Colors.gold,
                    width: '15%',
                    height: 50,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: 2,
                    borderBottomRightRadius: 2,
                  }}>
                  <Ionicon name="send" size={25} color={Colors.white} />
                </TouchableOpacity>
              </View>
            )}
            <View style={{...styles.ratingContainer, marginTop: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.ratingImageContainer}>
                  <Text style={{color: Colors.white, fontSize: 14}}>Q</Text>
                </View>
                <Text style={styles.questionHeading}>
                  Sunset is the time of day when our sky meets the outer space
                  solar winds.{' '}
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* <Text>
          Hi{'\n'}
          this is a test message.
        </Text> */}
        <View style={styles.priceContainer}>
          {/* <View style={styles.counterContainerM}>
            <View
              style={{
                ...styles.counterContainer,
                justifyContent: 'flex-start',
              }}>
              <View style={styles.color} />
              <View style={{...styles.color, backgroundColor: '#836DB8'}} />
              <View style={{...styles.color, backgroundColor: '#DECB9C'}} />
              <View
                style={{...styles.color, backgroundColor: Colors.primary}}
              />
            </View>
            <View style={styles.counterContainer}>
              <TouchableOpacity onPress={() => handleDecrement()}>
                <View style={styles.counter}>
                  <Ionicon
                    name="remove-outline"
                    size={20}
                    color={Colors.white}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.number}>{number}</Text>
              <TouchableOpacity onPress={() => handleIncrement()}>
                <View style={styles.counter}>
                  <Ionicon name="add-outline" size={20} color={Colors.white} />
                </View>
              </TouchableOpacity>
            </View>
          </View> */}

          <View style={styles.buttonContainerb}>
            <RoundedButton
              text={'Add to Cart'}
              // onPress={() => addToCart(product)}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 60,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderColor: Colors.lightgray,
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  backButton: {
    padding: 10,
    paddingLeft: 5,
  },
  text: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    color: Colors.primary,
    fontSize: 24,
    lineHeight: 28,
    marginTop: 15,
    paddingLeft: 10,
    textTransform: 'capitalize',
  },
  little: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    color: Colors.black,
    fontSize: 18,
    lineHeight: 21,
    marginTop: 5,
    paddingLeft: 10,
  },
  discountContainer: {
    backgroundColor: Colors.gold,
    padding: 5,
  },
  discount: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    color: Colors.white,
    fontSize: 8,
    lineHeight: 9,
  },
  price: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    color: Colors.gray,
    fontSize: 12,
    lineHeight: 14,
    marginLeft: 5,
    textDecorationLine: 'line-through',
  },
  heartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 10,
  },

  qarPrice: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.gold,
    fontSize: 24,
    lineHeight: 28,
    paddingLeft: 10,
  },
  heart: {
    height: 50,
    width: 65,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: Colors.offWhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingRight: 20,
    marginTop: 15,
  },
  stock: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.primary,
    fontSize: 14,
    lineHeight: 16,
    paddingLeft: 10,
  },
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: Colors.primary,
    width: '30%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: Colors.gold,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.41,
  },
  productDetail: {
    color: Colors.primary,
    fontFamily: 'Mulish',
    fontSize: 24,
    lineHeight: 28,
  },
  detail: {
    fontFamily: 'Mulish',
    color: Colors.gray,
    fontSize: 18,
    lineHeight: 21,
    marginTop: 10,
  },
  ratingContainer: {
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  imageContainer: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: Colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingImageContainer: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: Colors.primary,
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
  },
  heading: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    color: Colors.primary,
    fontSize: 18,
    lineHeight: 21,
    textTransform: 'capitalize',
  },
  questionHeading: {
    width: '90%',
    fontFamily: 'Mulish',
    color: Colors.black,
    fontSize: 12,
    lineHeight: 14,
    marginLeft: 10,
  },
  descrip: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.gold,
    fontSize: 14,
    lineHeight: 16,
    textTransform: 'capitalize',
    marginTop: 3,
  },
  ratingDetail: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.gray,
    fontSize: 18,
    lineHeight: 21,
    textTransform: 'capitalize',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  priceContainer: {
    marginTop: 15,
    paddingTop: 25,
    backgroundColor: Colors.light,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  counterContainerM: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 6,
    width: 120,
    height: 45,
  },
  color: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: Colors.gold,
    marginRight: 10,
  },
  number: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.black,
    fontSize: 18,
    lineHeight: 24,
    width: 40,
    height: 45,
    textAlign: 'center',
    paddingTop: 10,
  },
  counter: {
    fontSize: 18,
    color: Colors.white,
    backgroundColor: Colors.gold,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainerb: {
    marginTop: 25,
    padding: 25,
    paddingHorizontal: 30,
    backgroundColor: Colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    // paddingBottom: 80,
  },

  containerStyle: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: Colors.gray,
    paddingHorizontal: 10,
    height: 50,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    overflow: 'hidden',
  },
  inputContainerStyle: {
    backgroundColor: Colors.white,
    borderWidth: 0,
    paddingHorizontal: 5,
  },
  buttons: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    left: 10,
    top: -10,
    color: Colors.gold,
    backgroundColor: Colors.white,
    paddingHorizontal: 8,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    zIndex: 11,
  },
});
const mapStateToProps = state => {
  return {
    favourite: state.favouriteReducer.favourite,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id)),
    removeFromCart: id => dispatch(removeFromCart(id)),
    addToWishlist: id => dispatch(addToWishlist(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
