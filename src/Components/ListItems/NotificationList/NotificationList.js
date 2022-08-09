import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import NotificationCard from '../../Cards/NotificationCard';

const data = [
  {
    id: 1,
    icon: 'train-outline',
    title: 'Order Arrived',
    desc: 'Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order )',
    date: 'July 20, 2020 (08:00 pm)',
  },
  {
    id: 2,
    icon: 'checkmark-circle-outline',
    title: 'Order Success',
    desc: 'Order 24089794727000824 has been Success. Please wait for the product to be sent',
    date: 'July 20, 2020 (08:00 pm)',
  },
  {
    id: 3,
    icon: 'wallet-outline',
    title: 'Payment Confirmed',
    desc: 'Payment order 24089794727000824 has been confirmed. Please wait for the product to be sent',
    date: 'July 20, 2020 (08:00 pm)',
  },
  {
    id: 4,
    icon: 'close-circle-outline',
    title: 'Order Canceled',
    desc: 'Refunds order 24089794727000824 have been processed. A fund of $ 120 will be returned in 15 minutes',
    date: 'July 20, 2020 (08:00 pm)',
  },
  {
    id: 5,
    icon: 'train-outline',
    title: 'Order Arrived',
    desc: 'Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order )',
    date: 'July 20, 2020 (08:00 pm)',
  },
  {
    id: 6,
    icon: 'checkmark-circle-outline',
    title: 'Order Success',
    desc: 'Order 24089794727000824 has been Success. Please wait for the product to be sent',
    date: 'July 20, 2020 (08:00 pm)',
  },
  {
    id: 7,
    icon: 'wallet-outline',
    title: 'Payment Confirmed',
    desc: 'Payment order 24089794727000824 has been confirmed. Please wait for the product to be sent',
    date: 'July 20, 2020 (08:00 pm)',
  },
  {
    id: 8,
    icon: 'close-circle-outline',
    title: 'Order Canceled',
    desc: 'Refunds order 24089794727000824 have been processed. A fund of $ 120 will be returned in 15 minutes',
    date: 'July 20, 2020 (08:00 pm)',
  },
];

const NotificationList = props => {
  const renderList = item => {
    return (
      <TouchableOpacity>
        <NotificationCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          date={item.date}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{paddingBottom: 100, marginTop: 20}}>
      <FlatList
        data={data}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => renderList(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default NotificationList;
