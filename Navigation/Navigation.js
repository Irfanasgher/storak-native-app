import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, isReadyRef} from './RootNavigation';

import Home from '../src/Screens/BottomTab';

import Auth from '../src/Screens/Auth/AuthOptions';
import SignUp from '../src/Screens/Auth/SignUp';
import SignIn from '../src/Screens/Auth/SignIn';
import Forgot from '../src/Screens/Auth/Forgot';
import ForgotSetPassword from '../src/Screens/Auth/ForgotSetPassword';
import LoginSuccess from '../src/Screens/Auth/LoginSuccess';
import Otp from '../src/Screens/Auth/Otp';

import Helpers from '../src/utils/Helpers';

const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: '#000',
    background: 'rgb(242, 242, 242)',
    card: 'white',
  },
};

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Auth">
    <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Forgot"
      component={Forgot}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ForgotSetPassword"
      component={ForgotSetPassword}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="LoginSuccess"
      component={LoginSuccess}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />
  </Stack.Navigator>
);

const UserStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
  </Stack.Navigator>
);

export default Navigation = props => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    return () => {
      isReadyRef.current = false;
      Helpers.getData('token').then(token => {
        setToken(token);
      });
    };
  });

  console.log('navigation', token);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={MyTheme}
      style={{padding: 0}}>
      {token == null ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};
