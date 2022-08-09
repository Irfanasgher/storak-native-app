import React from 'react';
import {View, Image} from 'react-native';
import Slick from 'react-native-slick';
import Colors from '../../Common/Colors';

const styles = {
  container: {
    flex: 1,
  },
  slide: {
    backgroundColor: 'transparent',
  },

  text: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    marginTop: 20,
    width: '70%',
    marginLeft: '15%',
    height: 200,
    borderRadius: 3,
  },
};

const ProductSlider = props => {
  return (
    <View>
      <Slick
        autoplay
        slidesToShow={1}
        height={260}
        dot={
          <View
            style={{
              backgroundColor: Colors.gray,
              width: 8,
              height: 8,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
              borderRadius: 4,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: Colors.gold,
              width: 8,
              height: 8,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
              borderRadius: 4,
            }}
          />
        }
        paginationStyle={{
          bottom: 0,
          alignSelf: 'center',
        }}
        loop>
        {props.images.map(item => (
          <View style={styles.slide} key={item.id}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={item.image}
            />
          </View>
        ))}
      </Slick>
    </View>
  );
};

export default ProductSlider;
