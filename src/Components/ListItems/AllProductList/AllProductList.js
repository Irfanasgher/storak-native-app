import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import AllProductCard from '../../Cards/AllProductCard';
import Colors from '../../../Common/Colors';

const data = [
  {
    id: 1,
    percentage: '-20%',
    image: require('../../../images/popular1.png'),
    heading: 'Perfect Table for Designers',
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
    id: 2,
    percentage: '-20%',
    image: require('../../../images/popular2.png'),
    heading: 'Perfect Table for Designers',
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
    image: require('../../../images/product1.png'),
    heading: 'Perfect Table for Designers',
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
    id: 4,
    percentage: '-20%',
    image: require('../../../images/popular1.png'),
    heading: 'Perfect Table for Designers',
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
    id: 5,
    percentage: '-20%',
    image: require('../../../images/popular2.png'),
    heading: 'Perfect Table for Designers',
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
    id: 6,
    percentage: '-20%',
    image: require('../../../images/product1.png'),
    heading: 'Perfect Table for Designers',
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
    id: 7,
    percentage: '-20%',
    image: require('../../../images/popular2.png'),
    heading: 'Perfect Table for Designers',
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
    image: require('../../../images/popular1.png'),
    heading: 'Perfect Table for Designers',
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
    image: require('../../../images/product1.png'),
    heading: 'Perfect Table for Designers',
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
    id: 10,
    percentage: '-20%',
    image: require('../../../images/popular2.png'),
    heading: 'Perfect Table for Designers',
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
    id: 11,
    percentage: '-20%',
    image: require('../../../images/popular1.png'),
    heading: 'Perfect Table for Designers',
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
    id: 12,
    percentage: '-20%',
    image: require('../../../images/product1.png'),
    heading: 'Perfect Table for Designers',
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
const listTab = [
  {
    id: 1,
    name: 'Product',
    status: 'samsung',
  },
  {
    id: 2,
    name: 'Seller',
    status: 'apple',
  },
];

const AllProductList = props => {
  const [status, setStatus] = useState('samsung');
  const [datalist, setDatalist] = useState(data);
  const setStatusFilter = status => {
    setDatalist([...data.filter(e => e.status === status)]);
    setStatus(status);
  };
  useEffect(() => {
    setDatalist([...data.filter(e => e.status === status)]);
  }, []);

  const renderList = item => {
    return (
      <TouchableOpacity
        onPress={() => props.onPress(item)}
        style={{flex: 1, alignItems: 'center'}}>
        <AllProductCard
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
    <View style={{paddingBottom: 135}}>
      <View style={styles.buttonContainer}>
        {listTab.map(e => (
          <TouchableOpacity
            key={e.id}
            style={[styles.button, status === e.status && styles.activeButton]}
            onPress={() => setStatusFilter(e.status)}>
            <Text
              style={{
                ...styles.buttonText,
                color: status === e.status ? Colors.gold : Colors.gray,
              }}>
              {e.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={datalist}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => renderList(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 10,
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: Colors.white,
    width: '50%',
    height: 50,
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderColor: Colors.white,
  },
  activeButton: {
    borderColor: Colors.primary,
  },
  buttonText: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.41,
  },
});
export default AllProductList;
