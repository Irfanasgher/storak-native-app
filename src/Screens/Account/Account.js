import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from '../../Common/Colors';

const Account = props => {
  const user = useSelector(state => state.authReducer.user);
  const token = useSelector(state => state.authReducer.token);
  const dispatch = useDispatch();
  const data = [
    {
      id: 1,
      icon: 'person-outline',
      text: 'My Account',
      route: 'MyAccount',
    },
    {
      id: 2,
      icon: 'basket-outline',
      text: 'My Orders',
      route: 'MyOrder',
    },
    {
      id: 3,
      icon: 'notifications-outline',
      text: 'Notifications',
      route: 'Notification',
    },
    {
      id: 4,
      icon: 'settings-outline',
      text: 'Settings',
      route: 'Setting',
    },
    {
      id: 5,
      icon: 'help-circle-outline',
      text: 'Help Center',
      route: 'HelpCenter',
    },
  ];
  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}>
      <View style={styles.mainHeader}>
        <View style={styles.headingContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => props.navigation.goBack()}>
            <Ionicon
              name="chevron-back-outline"
              size={20}
              color={Colors.black}
            />
          </TouchableOpacity>
          <Text style={styles.cart}>
            Profile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
          <Text style={styles.item}></Text>
        </View>
      </View>

      <View style={styles.avatarContainer}>
        <ImageBackground
          source={require('../../images/userimage.png')}
          style={styles.imageBackground}>
          <TouchableOpacity style={styles.camera}>
            <Ionicon name="camera-outline" size={25} color={Colors.gray} />
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <View style={styles.badgeBoundry}>
        {data.map((data, index) => (
          <TouchableOpacity
            onPress={() => {
              data.route && props.navigation.navigate(data.route);
            }}
            style={styles.badgeContainer}
            key={index}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicon name={data.icon} size={30} color={Colors.gold} />
              <Text style={styles.badgeText}>{data.text}</Text>
            </View>
            <Ionicon
              name="chevron-forward-outline"
              size={20}
              color={Colors.gray}
            />
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={() => {
            dispatch({type: 'SIGN_OUT_REQUEST', payload: {token}});
            !user && props.navigation.navigate('Auth');
          }}
          style={styles.badgeContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicon name="exit-outline" size={30} color={Colors.gold} />
            <Text style={styles.badgeText}>Log Out</Text>
          </View>
          <Ionicon
            name="chevron-forward-outline"
            size={20}
            color={Colors.gray}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    // marginBottom: 65,
  },
  mainHeader: {
    backgroundColor: Colors.white,
    paddingTop: 60,
    paddingBottom: 10,
    borderColor: Colors.lightgray,
    borderBottomWidth: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 10,
    paddingLeft: 5,
  },
  cart: {
    color: Colors.gold,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
  },
  avatarContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageBackground: {
    width: 115,
    height: 115,
    alignSelf: 'center',
    position: 'relative',
  },
  camera: {
    height: 45,
    width: 45,
    borderRadius: 22,
    backgroundColor: Colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -10,
    bottom: -10,
  },
  badgeBoundry: {
    marginTop: 30,
    paddingBottom: 15,
  },
  badgeContainer: {
    backgroundColor: Colors.light,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 66,
    paddingHorizontal: 13,
    borderRadius: 8,
    marginTop: 15,
  },
  badgeText: {
    marginLeft: 15,
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
});
export default Account;
