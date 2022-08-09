import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../Common/Colors';

const Categories = props => {
  const data = [
    {
      id: 1,
      image: require('../../images/crocery.jpg'),
      text: 'Mobile',
    },
    {
      id: 2,
      image: require('../../images/dinnerware.jpg'),
      text: 'Electronics',
    },
    {
      id: 3,
      image: require('../../images/fashion1.png'),
      text: 'Games',
    },
    {
      id: 4,
      image: require('../../images/fashion2.png'),
      text: 'Laptop',
    },
    {
      id: 5,
      image: require('../../images/fashion3.png'),
      text: 'Mobile',
    },
    {
      id: 6,
      image: require('../../images/fashionk1.jpg'),
      text: 'Electronics',
    },
    {
      id: 7,
      image: require('../../images/fashionk2.jpg'),
      text: 'Games',
    },
    {
      id: 8,
      image: require('../../images/fashionk3.jpg'),
      text: 'Laptop',
    },
    {
      id: 9,
      image: require('../../images/fashionm1.jpg'),
      text: 'Mobile',
    },
    {
      id: 10,
      image: require('../../images/fashionm2.jpg'),
      text: 'Electronics',
    },
    {
      id: 11,
      image: require('../../images/fashionm3.jpg'),
      text: 'Games',
    },
    {
      id: 12,
      image: require('../../images/popular1.png'),
      text: 'Laptop',
    },
    {
      id: 13,
      image: require('../../images/popular2.png'),
      text: 'Mobile',
    },
    {
      id: 14,
      image: require('../../images/product1.png'),
      text: 'Electronics',
    },
    {
      id: 15,
      image: require('../../images/fashion1.png'),
      text: 'Games',
    },
    {
      id: 16,
      image: require('../../images/fashion2.png'),
      text: 'Laptop',
    },
    {
      id: 17,
      image: require('../../images/fashion3.png'),
      text: 'Games',
    },
    {
      id: 18,
      image: require('../../images/fashionk2.jpg'),
      text: 'Laptop',
    },
  ];

  console.log('props data', props?.data);
  return (
    <View style={styles.container}>
      {props?.data?.subcategories?.map(item => (
        <TouchableOpacity style={styles.product} key={item.id}>
          <View style={styles.imageContainer}>
            <Image
              // resizeMode={'contain'}
              source={require('../../images/crocery.jpg')}
              style={styles.image}
            />
          </View>
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: 70,
  },
  product: {
    width: '31%',
    marginBottom: 15,
    marginRight: '2.33%',
  },
  imageContainer: {
    width: '100%',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 80,
    borderRadius: 8,
  },
  text: {
    color: Colors.primary,
    fontSize: 9,
    lineHeight: 12,
    marginTop: 5,
    textAlign: 'center',
  },
});
export default Categories;
