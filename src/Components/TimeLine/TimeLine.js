import React from 'react';
import Timeline from 'react-native-timeline-flatlist';
import Colors from '../../Common/Colors';

const data = [
  {
    time: 'Jan-04 01:25 pm',
    title: 'Delivered',
    description: 'Your package has been delivered. [Doha-Qatar]',
    // icon: (
    //   <Image
    //     resizeMode={'contain'}
    //     style={{width: 15, height: 15, tintColor: Colors.white}}
    //     source={require('../../images/correct.png')}
    //   />
    // ),
  },
  {
    time: 'Jan-04 01:25 pm',
    title: 'Delivered',
    description: 'Your package has been delivered. [Doha-Qatar]',
  },
  {
    time: 'Jan-04 01:25 pm',
    title: 'Out for Delivery',
    description: 'Your package has been delivered. [Doha-Qatar]',
  },
  {
    time: 'Jan-04 01:25 pm',
    title: 'Shipped',
    description: 'Your package has been delivered. [Doha-Qatar]',
  },
  {
    time: 'Jan-04 01:25 pm',
    title: 'Arrived at our Warehouse',
    description: 'Your package has been delivered. [Doha-Qatar]',
  },
  {
    time: 'Jan-04 01:25 pm',
    title: 'Pickup in progress',
    description: 'Your package has been delivered. [Doha-Qatar]',
  },
  {
    time: 'Jan-04 01:25 pm',
    title: 'Package being prepared',
    description: 'Your package has been delivered. [Doha-Qatar]',
  },
  {
    time: 'Jan-04 01:25 pm',
    title: 'Package processing started',
    description: 'Your package has been delivered. [Doha-Qatar]',
  },
];

const TimeLineC = () => (
  <Timeline
    data={data}
    circleSize={20}
    circleColor={Colors.darkgray}
    lineColor={Colors.darkgray}
    timeContainerStyle={{minWidth: 52}}
    timeStyle={{
      width: 53,
      fontSize: 11,
      color: Colors.black,
      textAlign: 'left',
    }}
    descriptionStyle={{color: Colors.black}}
    options={{
      style: {paddingTop: 5},
    }}
    innerCircle={'dot'}
  />
);

export default TimeLineC;
