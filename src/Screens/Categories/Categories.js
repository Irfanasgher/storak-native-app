import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../Common/Colors';
import AllCategories from '../../Components/Categories';
import SearchBar from '../../Components/SearchBar';

const listTab = [
  {
    id: 1,
    title: 'Just For You',
    status: 'women',
  },
  {
    id: 2,
    title: 'Electronic Devices',
    status: 'men',
  },
  {
    id: 3,
    title: 'Electronic accessories',
    status: 'kids1',
  },
  {
    id: 4,
    title: 'TV & Home Appliances',
    status: 'kids2',
  },
  {
    id: 5,
    title: 'Health & Beauty',
    status: 'kids3',
  },
  {
    id: 6,
    title: 'Babies & Toys',
    status: 'kids4',
  },
  {
    id: 7,
    title: 'Groceries',
    status: 'kids5',
  },
  {
    id: 8,
    title: 'Pets',
    status: 'kids6',
  },
  {
    id: 9,
    title: 'Home & Life Style',
    status: 'kids7',
  },
  {
    id: 10,
    title: 'Women Fashion',
    status: 'kids8',
  },
  {
    id: 11,
    title: 'Men’s Fashion',
    status: 'kids9',
  },
  {
    id: 12,
    title: 'Watches',
    status: 'kids10',
  },
  {
    id: 13,
    title: 'Jewelery & Bags',
    status: 'kids11',
  },
  {
    id: 14,
    title: 'Sports & Out Door',
    status: 'kids12',
  },
  {
    id: 15,
    title: 'Automative Motorbike',
    status: 'kids13',
  },
];

const Categories = props => {
  const [status, setStatus] = useState();
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState();

  const setStatusFilter = data => {
    setStatus(data?.id);
    setSubCategoryData(data);
  };

  useEffect(() => {
    handleCategories();
  }, []);

  const handleCategories = async e => {
    await axios
      .get(`http://192.168.18.12:9000/api/categories-with-subcategories`)
      .then(res => {
        const data = res.data;
        setSubCategoryData(data?.categories[0]);
        setCategoryData(data);
        setStatus(data?.categories[0].id);
      });
  };

  console.log('category data', categoryData);
  console.log('sub category', subCategoryData);

  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <ScrollView style={styles.sidebar} showsVerticalScrollIndicator={false}>
          {categoryData?.categories?.map(e => {
            return (
              <TouchableOpacity
                key={e.id}
                style={[styles.button, status === e.id && styles.activeButton]}
                onPress={() => setStatusFilter(e)}>
                <Text
                  style={[
                    styles.buttonText,
                    status === e.id && styles.activeButtonText,
                  ]}>
                  {e.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{width: '100%'}}>
          <AllCategories data={subCategoryData} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 60,
    // paddingBottom: 65,
  },
  sidebar: {
    width: 100,
    borderTopRightRadius: 5,
    backgroundColor: Colors.offWhite,
    marginBottom: 65,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    padding: 12,
    marginTop: 5,
  },
  activeButton: {
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  activeButtonText: {
    color: Colors.white,
  },
});
export default Categories;
