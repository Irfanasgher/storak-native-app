import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Badge} from 'react-native-elements';
import IonIcon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import SearchBar from '../../Components/SearchBar';
import SlickSlider from '../../Components/SlickSlider';
import Category from '../../Components/Category';
import PopularList from '../../Components/ListItems/PopularList';
import NewOnStorakList from '../../Components/ListItems/NewOnStorakList';
import FeaturedList from '../../Components/ListItems/FeaturedList';
import Colors from '../../Common/Colors';
import Fonts from '../../Common/Fonts';
import {API_BASE_SLIDER_URL} from '../../constants/config';

const Home = props => {
  console.log('home width', Dimensions.get('window').width);
  const user = useSelector(state => state.authReducer.user);
  const token = useSelector(state => state.authReducer.token);

  const [slider, setSlider] = useState([]);

  useEffect(() => {
    handleSlider();
    !token && props.navigation.navigate('Auth');
  }, []);

  const handleSlider = async e => {
    await axios.get(`${API_BASE_SLIDER_URL}/covers`).then(res => {
      const sliderData = res.data.covers;
      setSlider(sliderData);
    });
  };

  const images = [
    {
      id: 1,
      image: require('../../images/banner1.jpg'),
    },
    {
      id: 2,
      image: require('../../images/banner2.jpg'),
    },
    {
      id: 3,
      image: require('../../images/banner3.jpg'),
    },
    {
      id: 4,
      image: require('../../images/banner4.jpg'),
    },
    {
      id: 5,
      image: require('../../images/banner5.jpg'),
    },
  ];
  console.log('Home Token', token);
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.white}
        // translucent
      />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}>
        <View
          style={{
            width: '100%',
            paddingTop: 15,
            backgroundColor: Colors.white,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              // paddingRight: 30,
            }}>
            <Image
              resizeMode={'contain'}
              source={require('../../images/intro-logo.png')}
              style={{height: 40, width: 70}}
            />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={styles.voice}>
                <IonIcon
                  name="mic"
                  size={15}
                  color={Colors.white}
                  style={{opacity: 1}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.voice,
                  backgroundColor: '#F1F1F3',
                  marginLeft: 10,
                }}>
                <IonIcon
                  name="chatbubble-ellipses-outline"
                  size={15}
                  color={Colors.primary}
                />
                <Badge
                  containerStyle={{
                    position: 'absolute',
                    top: -5,
                    right: -8,
                  }}
                  badgeStyle={{
                    backgroundColor: Colors.gold,
                    height: 15,
                    width: 15,
                  }}
                  textStyle={{
                    // fontWeight: 'bold',
                    color: Colors.white,
                    fontSize: 8,
                  }}
                  value={5}
                />
              </TouchableOpacity>
            </View>
          </View>
          <SearchBar />
        </View>

        <SlickSlider images={images} />
        <Category />
        <View style={styles.viewAllContainer}>
          <Text style={styles.morning}>Recommended For You</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AllProduct')}>
            <Text style={styles.viewAll}>See More</Text>
          </TouchableOpacity>
        </View>
        <View>
          <PopularList
            onPress={item =>
              props.navigation.navigate('ProductDetail', {...item})
            }
          />
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 22}}>
          <Image
            resizeMode={'contain'}
            style={{width: '100%', borderRadius: 5}}
            source={require('../../images/banner1.jpg')}
          />
        </View>
        <View style={styles.viewAllContainer}>
          <Text style={styles.morning}>Featured Products</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AllProduct')}>
            <Text style={styles.viewAll}>See More</Text>
          </TouchableOpacity>
        </View>
        <View>
          <PopularList
            onPress={item =>
              props.navigation.navigate('ProductDetail', {...item})
            }
          />
        </View>
        <View style={{paddingHorizontal: 10, marginVertical: 22}}>
          <Image
            resizeMode={'contain'}
            style={{width: '100%', borderRadius: 5}}
            source={require('../../images/banner3.jpg')}
          />
        </View>
        <Category />
        <View style={{paddingHorizontal: 10, marginTop: 22}}>
          <Image
            resizeMode={'contain'}
            style={{width: '100%', borderRadius: 5}}
            source={require('../../images/banner4.jpg')}
          />
        </View>
        <View style={styles.viewAllContainer}>
          <Text style={styles.morning}>Top Selling Products</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AllProduct')}>
            <Text style={styles.viewAll}>See More</Text>
          </TouchableOpacity>
        </View>
        <View>
          <PopularList
            onPress={item =>
              props.navigation.navigate('ProductDetail', {...item})
            }
          />
        </View>
        <View style={{borderRadius: 15, marginTop: 20, overflow: 'hidden'}}>
          <ImageBackground
            source={require('../../images/special.jpg')}
            style={{
              width: Dimensions.get('window').width,
              height: 160,
            }}>
            <View
              style={{
                ...styles.viewAllContainer,
                marginTop: 5,
                marginBottom: 5,
              }}>
              <Text style={{...styles.morning, color: Colors.white}}>
                Special for you
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('AllProduct')}>
                <Text
                  style={{
                    ...styles.viewAll,
                    color: Colors.white,
                    fontWeight: 'bold',
                  }}>
                  See More
                </Text>
              </TouchableOpacity>
            </View>
            <NewOnStorakList
              onPress={item =>
                props.navigation.navigate('ProductDetail', {...item})
              }
            />
          </ImageBackground>
        </View>

        <View style={styles.viewAllContainer}>
          <Text style={styles.morning}>Top Rated Products</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AllProduct')}>
            <Text style={styles.viewAll}>See More</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom: 10}}>
          <PopularList
            onPress={item =>
              props.navigation.navigate('ProductDetail', {...item})
            }
          />
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 22}}>
          <Image
            resizeMode={'contain'}
            style={{width: '100%', borderRadius: 5}}
            source={require('../../images/banner5.jpg')}
          />
        </View>
        <View style={styles.viewAllContainer}>
          <Text style={styles.morning}>Featured Seller</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AllProduct')}>
            <Text style={styles.viewAll}>See More</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FeaturedList
            onPress={item =>
              props.navigation.navigate('ProductDetail', {...item})
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    // marginBottom: 65,
  },
  voice: {
    width: 28,
    height: 28,
    backgroundColor: 'rgba(19, 84, 141, 0.5)',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 70,
    resizeMode: 'contain',
  },
  morning: {
    fontFamily: Fonts.primary,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: Colors.primary,
    fontSize: 18,
    lineHeight: 25,
  },
  viewAll: {
    fontFamily: Fonts.primary,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.gold,
    fontSize: 14,
    lineHeight: 19,
  },
  viewAllContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 16,
  },
});

export default Home;
