import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Badge} from 'react-native-elements';

import Cart from '../Cart';
import CheckOut from '../CheckOut';
import OrderSuccess from '../OrderSuccess';

import Categories from '../Categories';

import Home from '../Home';
import AllProduct from '../AllProduct';
import ProductDetail from '../ProductDetail';
import FeedBack from '../FeedBack';

import Fashion from '../Fashion';

import Account from '../Account';
import MyAccount from '../Account/MyAccount';
import MyOrder from '../Account/MyOrder';
import Notification from '../Account/Notification';
import Setting from '../Account/Setting';
import HelpCenter from '../Account/HelpCenter';

import MyWishlist from '../Account/MyWishlist';

import Colors from '../../Common/Colors';

import IonIcon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderSuccess"
        component={OrderSuccess}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AllProduct"
        component={AllProduct}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FeedBack"
        component={FeedBack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyOrder"
        component={MyOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HelpCenter"
        component={HelpCenter}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: Colors.primary,
          borderTopColor: 'transparent',
          height: 65,
          position: 'relative',
          overflow: 'hidden',
          shadowColor: '#6c1d45',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <IonIcon
                name="home"
                size={20}
                color={focused ? Colors.gold : Colors.white}
              />
              <Text
                style={{
                  ...styles.text,
                  color: focused ? Colors.gold : Colors.white,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <IonIcon
                // name="grid"
                name="layers"
                size={20}
                color={focused ? Colors.gold : Colors.white}
              />
              <Text
                style={{
                  ...styles.text,
                  color: focused ? Colors.gold : Colors.white,
                }}>
                Category
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <IonIcon
                name="cart"
                size={25}
                color={focused ? Colors.gold : Colors.white}
              />

              {/* <Badge
                containerStyle={{
                  position: 'absolute',
                  top: -10,
                  right: -8,
                }}
                badgeStyle={{backgroundColor: '#fff'}}
                textStyle={{fontWeight: 'bold', color: '#FD8F1F'}}
                value={5}
              /> */}
              <Text
                style={{
                  ...styles.text,
                  color: focused ? Colors.gold : Colors.white,
                }}>
                Cart
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={MyWishlist}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <IonIcon
                name="heart"
                size={25}
                color={focused ? Colors.gold : Colors.white}
              />
              <Text
                style={{
                  ...styles.text,
                  color: focused ? Colors.gold : Colors.white,
                }}>
                Wishlist
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <IonIcon
                name="person"
                size={20}
                color={focused ? Colors.gold : Colors.white}
              />
              <Text
                style={{
                  ...styles.text,
                  color: focused ? Colors.gold : Colors.white,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    lineHeight: 11,
    textAlign: 'center',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginTop: 7,
  },
});
export default BottomTab;
