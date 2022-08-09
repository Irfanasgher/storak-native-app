import React from 'react';
import {View, Image} from 'react-native';
import Slick from 'react-native-slick';
import Colors from '../../Common/Colors';

import {IMAGE_URL} from '../../constants/config';

const styles = {
  slide: {
    backgroundColor: 'transparent',
  },

  image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    alignSelf: 'center',
  },
};

const SlickSlider = props => {
  console.log('slider data', props.images);
  return (
    <View style={{paddingHorizontal: 10}}>
      {props?.images && (
        <Slick
          autoplay
          slidesToShow={1}
          height={150}
          style={{marginTop: 15}}
          dot={
            <View
              style={{
                backgroundColor: props.color ? Colors.white : Colors.gray,
                width: 10,
                height: 3,
                marginRight: 2,
                marginTop: -25,
                borderRadius: 2,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: Colors.gold,
                width: 10,
                height: 3,
                marginRight: 2,
                marginTop: -25,
                borderRadius: 2,
              }}
            />
          }
          paginationStyle={{
            bottom: 0,
            alignSelf: 'center',
          }}
          loop>
          {props?.images?.map(item => (
            <View style={styles.slide} key={item.id}>
              <Image
                resizeMode="contain"
                style={styles.image}
                // source={{
                //   uri: `${IMAGE_URL}${item.image}`,
                // }}
                source={item.image}
              />
            </View>
          ))}
        </Slick>
      )}
    </View>
  );
};

export default SlickSlider;
