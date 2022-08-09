import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import MyWishlistCard from '../../Cards/MyWishlistCard';

const data = [
  {
    id: 1,
    percentage: '-20%',
    image: require('../../../images/steal.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'samsung',
  },
  {
    id: 2,
    percentage: '-20%',
    image: require('../../../images/crocery.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'apple',
  },
  {
    id: 3,
    percentage: '-20%',
    image: require('../../../images/steal.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'huawie',
  },
  {
    id: 4,
    percentage: '-20%',
    image: require('../../../images/dinnerware.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'lenovo',
  },
  {
    id: 5,
    percentage: '-20%',
    image: require('../../../images/crocery.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'oppo',
  },
  {
    id: 6,
    percentage: '-20%',
    image: require('../../../images/steal.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'samsung',
  },
  {
    id: 7,
    percentage: '-20%',
    image: require('../../../images/crocery.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'samsung',
  },
  {
    id: 8,
    percentage: '-20%',
    image: require('../../../images/dinnerware.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'samsung',
  },
  {
    id: 9,
    percentage: '-20%',
    image: require('../../../images/steal.jpg'),
    heading: 'Wireless Controller for PS4',
    size: '6.7 inch',
    ramsize: '6GB',
    betterySize: '3687 mAh',
    camera: '12 Mp',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
    discount: '40%',
    status: 'samsung',
  },
];

const MyWishlist = props => {
  const renderList = item => {
    return (
      <TouchableOpacity
        onPress={() => props.onPress(item)}
        style={{flex: 1, alignItems: 'center'}}>
        <MyWishlistCard
          key={item.id}
          size={item.size}
          ramsize={item.ramsize}
          betterySize={item.betterySize}
          camera={item.camera}
          image={item.image}
          heading={item.heading}
          discountPrice={item.discountPrice}
          totalPrice={item.totalPrice}
          discount={item.discount}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{paddingBottom: 55}}>
      <FlatList
        data={data}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => renderList(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default MyWishlist;
