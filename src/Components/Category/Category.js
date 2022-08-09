import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Colors from '../../Common/Colors';
import Fonts from '../../Common/Fonts';

const Category = () => {
  const [category, setCategory] = useState([]);
  const data = [
    {
      id: 1,
      name: 'Flash',
      // image: require('../../images/flash.png'),
    },
    {
      id: 2,
      name: 'Bill',
      // image: require('../../images/bill.png'),
    },
    {
      id: 3,
      name: 'Game',
      // image: require('../../images/game.png'),
    },
    {
      id: 4,
      name: 'Gifts',
      // image: require('../../images/gift.png'),
    },
    {
      id: 5,
      name: 'More',
      // image: require('../../images/discover.png'),
    },
    {
      id: 6,
      name: 'Flash',
      // image: require('../../images/flash.png'),
    },
    {
      id: 7,
      name: 'Bill',
      // image: require('../../images/bill.png'),
    },
    {
      id: 8,
      name: 'Game',
      // image: require('../../images/game.png'),
    },
    {
      id: 9,
      name: 'Gifts',
      // image: require('../../images/gift.png'),
    },
    {
      id: 10,
      name: 'More',
      // image: require('../../images/discover.png'),
    },
  ];

  useEffect(() => {
    handleCategory();
  }, []);

  const handleCategory = async e => {
    await axios.get(`http://192.168.18.12:9000/api/categories`).then(res => {
      const categoryData = res.data.categories;
      setCategory(categoryData);
    });
  };

  console.log('icon data', category);
  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Main Categories</Text> */}
      <View style={styles.cardContainer}>
        {category?.slice(0, 5).map((data, index) => (
          <TouchableOpacity style={styles.imageContainer} key={index}>
            {/* <View style={styles.imageC}> */}
            <Image
              resizeMode={'contain'}
              style={styles.image}
              source={{
                uri: `http://192.168.18.12:9000/admin/images/categories/mobile/org/${data.mobile_image}`,
              }}
            />
            {/* </View> */}
            <Text numberOfLines={2} style={styles.categoryname}>
              {data.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{...styles.cardContainer, marginTop: 15}}>
        {category?.slice(5, 10).map((data, index) => (
          <TouchableOpacity style={styles.imageContainer} key={index}>
            {/* <View style={styles.imageC}> */}
            <Image
              resizeMode={'contain'}
              style={styles.image}
              source={{
                uri: `http://192.168.18.12:9000/admin/images/categories/mobile/org/${data.mobile_image}`,
              }}
            />
            {/* </View> */}
            <Text numberOfLines={2} style={styles.categoryname}>
              {data.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  heading: {
    fontFamily: Fonts.primary,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 25,
  },
  cardContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    // marginTop: 22,
    // marginRight: 15,
  },
  // imageC: {
  //   width: 55,
  //   height: 55,
  // },
  image: {
    height: 55,
    width: 55,
  },
  categoryname: {
    fontFamily: Fonts.primary,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 17,
    textAlign: 'center',
    color: Colors.gray,
    marginTop: 5,
    width: 65,
  },
});
export default Category;
