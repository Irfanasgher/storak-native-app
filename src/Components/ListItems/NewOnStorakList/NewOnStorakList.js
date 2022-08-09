import React from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import NewOnStorakCard from '../../Cards/NewOnStorakCard';
import Colors from '../../../Common/Colors';

const data = [
  {
    id: 1,
    image: require('../../../images/specialFor1.png'),
    heading: 'QAR 5',
  },
  {
    id: 2,
    image: require('../../../images/specialFor2.png'),
    heading: 'QAR 5',
  },
  {
    id: 3,
    image: require('../../../images/specialFor3.png'),
    heading: 'QAR 5',
  },
  {
    id: 4,
    image: require('../../../images/specialFor2.png'),
    heading: 'QAR 5',
  },
  {
    id: 5,
    image: require('../../../images/specialFor4.png'),
    heading: 'QAR 5',
  },
  {
    id: 6,
    image: require('../../../images/specialFor1.png'),
    heading: 'QAR 5',
  },
  {
    id: 7,
    image: require('../../../images/specialFor2.png'),
    heading: 'QAR 5',
  },
  {
    id: 8,
    image: require('../../../images/specialFor3.png'),
    heading: 'QAR 5',
  },
  {
    id: 9,
    image: require('../../../images/specialFor2.png'),
    heading: 'QAR 5',
  },
  {
    id: 10,
    image: require('../../../images/specialFor4.png'),
    heading: 'QAR 5',
  },
];

const NewOnStorakList = props => {
  const renderList = item => {
    return (
      <TouchableOpacity
        onPress={() => props.onPress(item)}
        style={{paddingLeft: 15}}>
        <NewOnStorakCard
          key={item.id}
          image={item.image}
          heading={item.heading}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => renderList(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default NewOnStorakList;
