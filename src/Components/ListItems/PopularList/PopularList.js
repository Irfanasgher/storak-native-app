import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, FlatList, TouchableOpacity} from 'react-native';
import PopularCard from '../../Cards/PopularCard';

const DATA = [
  {
    id: 1,
    percentage: '-5%',
    image: require('../../../images/popular1.png'),
    heading: '15-dw2030ne Laptop With 15.6-Inch Display',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
  },
  {
    id: 2,
    percentage: '-5%',
    image: require('../../../images/popular2.png'),
    heading: '15-dw2030ne Laptop With 15.6-Inch Display',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
  },
  {
    id: 3,
    percentage: '-5%',
    image: require('../../../images/popular1.png'),
    heading: '15-dw2030ne Laptop With 15.6-Inch Display',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
  },
  {
    id: 4,
    percentage: '-5%',
    image: require('../../../images/popular2.png'),
    heading: '15-dw2030ne Laptop With 15.6-Inch Display',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
  },
  {
    id: 5,
    percentage: '-5%',
    image: require('../../../images/popular1.png'),
    heading: '15-dw2030ne Laptop With 15.6-Inch Display',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
  },
  {
    id: 6,
    percentage: '-5%',
    image: require('../../../images/popular2.png'),
    heading: '15-dw2030ne Laptop With 15.6-Inch Display',
    discountPrice: 'QAR 120.90',
    totalPrice: 'QAR 200.00',
  },
];

const PopularList = props => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    handleProduct();
  }, []);

  const handleProduct = async e => {
    await axios.get(`https://api.storak.qa/api/admin/products`).then(res => {
      console.log('data', res.data.products);
      setProduct(res.data.products);
    });
  };
  // console.log('product data', product);
  const renderList = item => {
    return (
      <TouchableOpacity
        onPress={() => props.onPress(item)}
        style={{marginLeft: 10}}>
        <PopularCard
          key={item.id}
          image={item.primary_image}
          description={item.detailed_description}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={product}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => renderList(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default PopularList;
