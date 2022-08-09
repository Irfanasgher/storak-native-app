import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import SplashScreen from 'react-native-splash-screen';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import AppIntroSlider from 'react-native-app-intro-slider';
import Navigation from './Navigation';
import configureStore from './src/store';
import Colors from './src/Common/Colors';
const {store} = configureStore();

const slides = [
  {
    key: 1,
    title: 'Welcome to STORAK, Let’s shop!',
    image: require('./src/images/intro-1.png'),
  },
  {
    key: 2,
    title: 'We help people conect with store around Qatar.',
    image: require('./src/images/intro-2.png'),
  },
  {
    key: 3,
    title: 'We show the easy way to shop. Just stay at home with us',
    image: require('./src/images/intro-3.png'),
  },
];

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '',
      // '315661653952-gtn0dhgc8hksdft7sr0jqala8po2uqkk.apps.googleusercontent.com',
      // offlineAccess: false,
    });
    setTimeout(() => {
      RNBootSplash.hide();
    }, 2000);
  }, []);

  const _onDone = () => {
    setShowRealApp(true);
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.done}>Next</Text>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.done}>Done</Text>
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.done}>Skip</Text>
      </View>
    );
  };

  const _renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image
          resizeMode={'contain'}
          source={require('./src/images/intro-logo.png')}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Image
          resizeMode={'contain'}
          source={item.image}
          style={styles.image}
        />
      </View>
    );
  };

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );

  // if (showRealApp) {
  //   return (
  //     <Provider store={store}>
  //       <Navigation />
  //     </Provider>
  //   );
  // } else {
  //   return (
  //     <View style={{flex: 1}}>
  //       <StatusBar
  //         barStyle={'dark-content'}
  //         backgroundColor="transparent"
  //         translucent
  //       />
  //       <AppIntroSlider
  //         renderItem={_renderItem}
  //         data={slides}
  //         onDone={_onDone}
  //         showSkipButton={true}
  //         dotStyle={styles.dot}
  //         activeDotStyle={styles.activeDot}
  //         renderDoneButton={_renderDoneButton}
  //         renderNextButton={_renderNextButton}
  //         renderSkipButton={_renderSkipButton}
  //       />
  //     </View>
  //   );
  // }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingTop: 100,
  },
  title: {
    marginTop: 30,
    width: 246,
    color: Colors.gray,
    textAlign: 'center',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
  },
  image: {
    marginTop: 30,
    height: 250,
  },
  dot: {
    backgroundColor: Colors.gray,
  },
  activeDot: {
    backgroundColor: Colors.gold,
    width: 10,
  },
  buttonCircle: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  done: {
    color: Colors.primary,
    fontSize: 16,
  },
});

export default App;
