import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import CartCard from '../../Cards/CartCard';

const DATA = [
  {
    id: 1,
    image: require('../../../images/special1.png'),
  },
  {
    id: 2,
    image: require('../../../images/special1.png'),
  },
  {
    id: 3,
    image: require('../../../images/special1.png'),
  },
  {
    id: 4,
    image: require('../../../images/special1.png'),
  },
  {
    id: 5,
    image: require('../../../images/special1.png'),
  },
  {
    id: 6,
    image: require('../../../images/special1.png'),
  },
];
const CartList = props => {
  const renderList = item => {
    return (
      <TouchableOpacity
      // onPress={() => props.onPress(item)}
      >
        <CartCard key={item.id} image={item.image} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={DATA}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => renderList(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CartList;
