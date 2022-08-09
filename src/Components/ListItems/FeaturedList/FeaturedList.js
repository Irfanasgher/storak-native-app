import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import FeaturedCard from '../../Cards/FeaturedCard';

const DATA = [
  {
    id: 1,
    image: require('../../../images/featured.jpg'),
    logo: require('../../../images/featuredLogo.jpg'),
    company: 'ORIENT',
    heading: 'Washing Machine',
  },
  {
    id: 2,
    image: require('../../../images/featured.jpg'),
    logo: require('../../../images/featuredLogo.jpg'),
    company: 'ORIENT',
    heading: 'Washing Machine',
  },
  {
    id: 3,
    image: require('../../../images/featured.jpg'),
    logo: require('../../../images/featuredLogo.jpg'),
    company: 'ORIENT',
    heading: 'Washing Machine',
  },
  {
    id: 4,
    image: require('../../../images/featured.jpg'),
    logo: require('../../../images/featuredLogo.jpg'),
    company: 'ORIENT',
    heading: 'Washing Machine',
  },
  {
    id: 5,
    image: require('../../../images/featured.jpg'),
    logo: require('../../../images/featuredLogo.jpg'),
    company: 'ORIENT',
    heading: 'Washing Machine',
  },
  {
    id: 6,
    image: require('../../../images/featured.jpg'),
    logo: require('../../../images/featuredLogo.jpg'),
    company: 'ORIENT',
    heading: 'Washing Machine',
  },
];
const FeaturedList = props => {
  const renderList = item => {
    return (
      <TouchableOpacity
        onPress={() => props.onPress(item)}
        style={{paddingLeft: 10}}>
        <FeaturedCard
          key={item.id}
          image={item.image}
          logo={item.logo}
          company={item.company}
          heading={item.heading}
        />
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default FeaturedList;
