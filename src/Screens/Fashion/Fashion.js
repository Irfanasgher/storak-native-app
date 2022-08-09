import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from '../../Common/Colors';
import {data} from './data';

import SearchBar from '../../Components/SearchBar';
import SlickSlider from '../../Components/SlickSlider';

const images = [
  {
    id: 1,
    image: require('../../images/slide1.png'),
  },
  {
    id: 2,
    image: require('../../images/slide2.png'),
  },
  {
    id: 3,
    image: require('../../images/slide1.png'),
  },
  {
    id: 4,
    image: require('../../images/slide2.png'),
  },
];

const listTab = [
  {
    id: 1,
    status: 'women',
  },
  {
    id: 2,
    status: 'men',
  },
  {
    id: 3,
    status: 'kids',
  },
];

const Fashion = () => {
  const [status, setStatus] = useState('women');
  const [datalist, setDatalist] = useState(data);
  const setStatusFilter = status => {
    setDatalist([...data.filter(e => e.status === status)]);
    setStatus(status);
  };

  useEffect(() => {
    setDatalist([...data.filter(e => e.status === status)]);
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView style={{backgroundColor: '#fff'}}>
        <SlickSlider images={images} />
        <View style={styles.buttonContainer}>
          {listTab.map(e => (
            <TouchableOpacity
              key={e.id}
              style={[
                styles.button,
                status === e.status && styles.activeButton,
              ]}
              onPress={() => setStatusFilter(e.status)}>
              <Text style={styles.buttonText}>{e.status}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{paddingTop: 15}}>
          <Text style={styles.heading}>BIG PRICE DROPS Across Categories</Text>
          <View style={styles.itemContainer}>
            {datalist.map(item => (
              <TouchableOpacity style={styles.product} key={item.id}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#13548D',
    paddingTop: 10,
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 15,
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: Colors.lightgray,
    width: '28%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  activeButton: {
    backgroundColor: Colors.lightorange,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  heading: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.primary,
  },
  itemContainer: {
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: 80,
  },
  product: {
    width: '28%',
    marginTop: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  text: {
    color: Colors.primary,
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
});
export default Fashion;
