import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Common/Colors';
import MyOrderList from '../../../Components/ListItems/MyOrderList';

const MyOrder = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => props.navigation.goBack()}>
          <Ionicon name="chevron-back-outline" size={20} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.signin}>
          My Orders &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
        <Text style={styles.signin}></Text>
      </View>

      <View>
        <MyOrderList />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    // marginBottom: 65,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
    paddingBottom: 10,
    marginHorizontal: 10,
    borderColor: Colors.lightgray,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 10,
    paddingLeft: 5,
  },
  signin: {
    color: Colors.gold,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 23,
    fontSize: 18,
    textAlign: 'center',
  },
});
export default MyOrder;
