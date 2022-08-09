import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchBar from '../../Components/SearchBar';
import AllProductList from '../../Components/ListItems/AllProductList';
import Dropdown from '../../Components/Dropdown';
import Colors from '../../Common/Colors';

const truck = [
  {label: '30kg', value: 30},
  {label: '35kg', value: 35},
  {label: '40kg', value: 40},
  {label: '45kg', value: 45},
  {label: '50kg', value: 50},
  {label: '55kg', value: 55},
  {label: '60kg', value: 60},
];

const AllProduct = props => {
  return (
    <View style={styles.container} showsVerticalIndicator={false}>
      <SearchBar />
      {/* <Dropdown /> */}
      <AllProductList
        onPress={item => props.navigation.navigate('ProductDetail', {...item})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 60,
  },
  welcome: {
    backgroundColor: Colors.primary,
    paddingTop: 10,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  },
});
export default AllProduct;
