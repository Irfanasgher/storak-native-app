import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
// import HTML from 'react-native-render-html';
import Colors from '../../../Common/Colors';
import Fonts from '../../../Common/Fonts';

const PopularCard = props => {
  const {image, description} = props;

  const htmlContent = `${description}`;

  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <View style={styles.saleContainer}>
          <Text style={styles.sale}>SALE</Text>
        </View>
        <View>
          <TouchableOpacity>
            <IonIcon
              name="heart-outline"
              size={20}
              color={Colors.lightPrimary}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <IonIcon
              name="basket-outline"
              size={20}
              color={Colors.lightPrimary}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          // source={{
          //   uri: `https://api.storak.qa/admin/images/products/primary/sm/${image}`,
          // }}
          source={require('../../../images/image1.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Gazelle Super x Alltimers Shoes</Text>
      </View>
      <View style={styles.priceMainContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.currency}>
            <Text style={styles.symbol}>QAR</Text>
            {/* <Text style={styles.symbol}>$</Text> */}
          </View>
          <View style={{marginLeft: 5}}>
            <Text style={styles.price}>254.99</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.discountPrice}>280.99</Text>
              <Text style={styles.discount}>30%</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.priceMainContainer,
          alignItems: 'flex-end',
          marginTop: -6,
        }}>
        <View style={styles.economyContainer}>
          <Text style={styles.economy}>Economy</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.rating}>(20)</Text>
          <View style={{flexDirection: 'row'}}>
            <IonIcon name="star" size={10} color={Colors.gold} />
            <IonIcon name="star" size={10} color={Colors.gold} />
            <IonIcon name="star" size={10} color={Colors.gold} />
            <IonIcon name="star" size={10} color={Colors.gold} />
            <IonIcon name="star" size={10} color={Colors.gold} />
          </View>
        </View>
      </View>
      {/* <HTML
        source={{html: htmlContent}}
        tagsStyles={{
          h2: {textAlign: 'center', fontStyle: 'italic', color: 'grey'},
          li: {color: 'red', listStyleType: 'none'},
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 16,
    width: 131,
    // height: 275,
    paddingVertical: 10,
    overflow: 'hidden',
    position: 'relative',
    // marginRight: 10,
    backgroundColor: Colors.light,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    position: 'absolute',
    top: 10,
    paddingHorizontal: 7,
    zIndex: 1,
  },
  saleContainer: {
    width: 40,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gold,
    borderRadius: 4,
  },
  sale: {
    // fontFamily: Fonts.primary,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    fontSize: 10,
    // lineHeight: 20,
    textTransform: 'uppercase',
  },
  economyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 4,
    paddingHorizontal: 5,
    padding: 3,
  },
  economy: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.white,
    textAlign: 'center',
    fontSize: 6,
  },
  rating: {
    // fontFamily: Fonts.primary,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: Colors.gray,
    fontSize: 8,
    lineHeight: 11,
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 155,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  title: {
    // fontFamily: Fonts.primary,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 9,
    lineHeight: 14,
    color: Colors.gold,
  },
  priceMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  currency: {
    // width: 17,
    // height: 20,
    backgroundColor: 'rgba(184, 210, 222, 0.3)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#A2C4D4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  symbol: {
    fontWeight: '600',
    fontSize: 10,
    color: Colors.gold,
  },
  price: {
    // fontFamily: Fonts.primary,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19,
    color: Colors.primary,
  },
  discountPrice: {
    // fontFamily: Fonts.primary,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 9,
    lineHeight: 12,
    color: Colors.gold,
    textDecorationLine: 'line-through',
  },
  discount: {
    // fontFamily: Fonts.primary,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 16,
    color: '#23B198',
    marginLeft: 5,
  },
  bagContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    height: 35,
  },
});
export default PopularCard;
