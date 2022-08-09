import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import MyOrderCard from '../../Cards/MyOrderCard';
import Colors from '../../../Common/Colors';

const data = [
  {
    id: 1,
    icon: 'train-outline',
    title: 'Current',
    desc: 'Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order )',
    status: 'current',
  },
  {
    id: 2,
    icon: 'checkmark-circle-outline',
    title: 'Complete',
    desc: 'Order 24089794727000824 has been Success. Please wait for the product to be sent',
    status: 'complete',
  },
  {
    id: 3,
    icon: 'close-circle-outline',
    title: 'Cancel',
    desc: 'Refunds order 24089794727000824 have been processed. A fund of $ 120 will be returned in 15 minutes',
    status: 'cancel',
  },
  {
    id: 4,
    icon: 'alarm-outline',
    title: 'Pending',
    desc: 'Payment order 24089794727000824 has been confirmed. Please wait for the product to be sent',
    status: 'pending',
  },
  {
    id: 5,
    icon: 'train-outline',
    title: 'Current',
    desc: 'Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order )',
    status: 'current',
  },
  {
    id: 6,
    icon: 'train-outline',
    title: 'Current',
    desc: 'Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order )',
    status: 'current',
  },
  {
    id: 7,
    icon: 'train-outline',
    title: 'Current',
    desc: 'Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order )',
    status: 'current',
  },
  {
    id: 8,
    icon: 'train-outline',
    title: 'Current',
    desc: 'Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order )',
    status: 'current',
  },
  {
    id: 9,
    icon: 'train-outline',
    title: 'Current',
    desc: 'Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order )',
    status: 'current',
  },
  {
    id: 10,
    icon: 'train-outline',
    title: 'Current',
    desc: 'Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order )',
    status: 'current',
  },
  {
    id: 11,
    icon: 'train-outline',
    title: 'Current',
    desc: 'Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order )',
    status: 'current',
  },
  {
    id: 12,
    icon: 'train-outline',
    title: 'Current',
    desc: 'Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order )',
    status: 'current',
  },
  {
    id: 13,
    icon: 'checkmark-circle-outline',
    title: 'Complete',
    desc: 'Order 24089794727000824 has been Success. Please wait for the product to be sent',
    status: 'complete',
  },
  {
    id: 14,
    icon: 'checkmark-circle-outline',
    title: 'Complete',
    desc: 'Order 24089794727000824 has been Success. Please wait for the product to be sent',
    status: 'complete',
  },
  {
    id: 15,
    icon: 'checkmark-circle-outline',
    title: 'Complete',
    desc: 'Order 24089794727000824 has been Success. Please wait for the product to be sent',
    status: 'complete',
  },
  {
    id: 16,
    icon: 'checkmark-circle-outline',
    title: 'Complete',
    desc: 'Order 24089794727000824 has been Success. Please wait for the product to be sent',
    status: 'complete',
  },
  {
    id: 17,
    icon: 'checkmark-circle-outline',
    title: 'Complete',
    desc: 'Order 24089794727000824 has been Success. Please wait for the product to be sent',
    status: 'complete',
  },
  {
    id: 18,
    icon: 'checkmark-circle-outline',
    title: 'Complete',
    desc: 'Order 24089794727000824 has been Success. Please wait for the product to be sent',
    status: 'complete',
  },
  {
    id: 19,
    icon: 'checkmark-circle-outline',
    title: 'Complete',
    desc: 'Order 24089794727000824 has been Success. Please wait for the product to be sent',
    status: 'complete',
  },
  {
    id: 20,
    icon: 'checkmark-circle-outline',
    title: 'Complete',
    desc: 'Order 24089794727000824 has been Success. Please wait for the product to be sent',
    status: 'complete',
  },
  {
    id: 21,
    icon: 'close-circle-outline',
    title: 'Cancel',
    desc: 'Refunds order 24089794727000824 have been processed. A fund of $ 120 will be returned in 15 minutes',
    status: 'cancel',
  },
  {
    id: 22,
    icon: 'close-circle-outline',
    title: 'Cancel',
    desc: 'Refunds order 24089794727000824 have been processed. A fund of $ 120 will be returned in 15 minutes',
    status: 'cancel',
  },
  {
    id: 23,
    icon: 'close-circle-outline',
    title: 'Cancel',
    desc: 'Refunds order 24089794727000824 have been processed. A fund of $ 120 will be returned in 15 minutes',
    status: 'cancel',
  },
  {
    id: 24,
    icon: 'close-circle-outline',
    title: 'Cancel',
    desc: 'Refunds order 24089794727000824 have been processed. A fund of $ 120 will be returned in 15 minutes',
    status: 'cancel',
  },
  {
    id: 25,
    icon: 'close-circle-outline',
    title: 'Cancel',
    desc: 'Refunds order 24089794727000824 have been processed. A fund of $ 120 will be returned in 15 minutes',
    status: 'cancel',
  },
  {
    id: 26,
    icon: 'close-circle-outline',
    title: 'Cancel',
    desc: 'Refunds order 24089794727000824 have been processed. A fund of $ 120 will be returned in 15 minutes',
    status: 'cancel',
  },
  {
    id: 27,
    icon: 'close-circle-outline',
    title: 'Cancel',
    desc: 'Refunds order 24089794727000824 have been processed. A fund of $ 120 will be returned in 15 minutes',
    status: 'cancel',
  },
  {
    id: 28,
    icon: 'close-circle-outline',
    title: 'Cancel',
    desc: 'Refunds order 24089794727000824 have been processed. A fund of $ 120 will be returned in 15 minutes',
    status: 'cancel',
  },
  {
    id: 29,
    icon: 'alarm-outline',
    title: 'Pending',
    desc: 'Payment order 24089794727000824 has been confirmed. Please wait for the product to be sent',
    status: 'pending',
  },
  {
    id: 30,
    icon: 'alarm-outline',
    title: 'Pending',
    desc: 'Payment order 24089794727000824 has been confirmed. Please wait for the product to be sent',
    status: 'pending',
  },
  {
    id: 31,
    icon: 'alarm-outline',
    title: 'Pending',
    desc: 'Payment order 24089794727000824 has been confirmed. Please wait for the product to be sent',
    status: 'pending',
  },
  {
    id: 32,
    icon: 'alarm-outline',
    title: 'Pending',
    desc: 'Payment order 24089794727000824 has been confirmed. Please wait for the product to be sent',
    status: 'pending',
  },
  {
    id: 33,
    icon: 'alarm-outline',
    title: 'Pending',
    desc: 'Payment order 24089794727000824 has been confirmed. Please wait for the product to be sent',
    status: 'pending',
  },
  {
    id: 34,
    icon: 'alarm-outline',
    title: 'Pending',
    desc: 'Payment order 24089794727000824 has been confirmed. Please wait for the product to be sent',
    status: 'pending',
  },
  {
    id: 35,
    icon: 'alarm-outline',
    title: 'Pending',
    desc: 'Payment order 24089794727000824 has been confirmed. Please wait for the product to be sent',
    status: 'pending',
  },
  {
    id: 36,
    icon: 'alarm-outline',
    title: 'Pending',
    desc: 'Payment order 24089794727000824 has been confirmed. Please wait for the product to be sent',
    status: 'pending',
  },
];

const listTab = [
  {
    id: 1,
    name: 'Current',
    status: 'current',
  },
  {
    id: 2,
    name: 'Complete',
    status: 'complete',
  },
  {
    id: 3,
    name: 'Cancel',
    status: 'cancel',
  },
  {
    id: 4,
    name: 'Pending',
    status: 'pending',
  },
];

const MyOrderList = props => {
  const [status, setStatus] = useState('current');
  const [datalist, setDatalist] = useState(data);
  const setStatusFilter = status => {
    setDatalist([...data.filter(e => e.status === status)]);
    setStatus(status);
  };
  useEffect(() => {
    setDatalist([...data.filter(e => e.status === status)]);
  }, []);
  const renderList = item => {
    return (
      <TouchableOpacity>
        <MyOrderCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginBottom: 280, marginTop: 20}}>
      <View>
        <ScrollView
          style={styles.buttonContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {listTab.map(e => (
            <TouchableOpacity
              key={e.id}
              style={[
                styles.button,
                status === e.status && styles.activeButton,
              ]}
              onPress={() => setStatusFilter(e.status)}>
              <Text style={styles.buttonText}>{e.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View>
        <FlatList
          data={datalist}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => renderList(item)}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    width: 110,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: Colors.gold,
  },
  buttonText: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.41,
    color: Colors.white,
  },
});
export default MyOrderList;
