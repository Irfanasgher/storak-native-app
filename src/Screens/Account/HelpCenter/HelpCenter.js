import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {List} from 'react-native-paper';
import Colors from '../../../Common/Colors';

const data = [
  {
    id: 1,
    title: 'How should I develop my app on time?',
    decs: 'You should have a clear idea of how your app would develop over time. One of the best gauges for app developers is the feedback that they get from users who have spent time utilizing the app. You as the app developer should promptly find ways to address them.',
  },
  {
    id: 2,
    title: 'How should I develop my app on time?',
    decs: 'You should have a clear idea of how your app would develop over time. One of the best gauges for app developers is the feedback that they get from users who have spent time utilizing the app. You as the app developer should promptly find ways to address them.',
  },
  {
    id: 3,
    title: 'How should I develop my app on time?',
    decs: 'You should have a clear idea of how your app would develop over time. One of the best gauges for app developers is the feedback that they get from users who have spent time utilizing the app. You as the app developer should promptly find ways to address them.',
  },
  {
    id: 4,
    title: 'How should I develop my app on time?',
    decs: 'You should have a clear idea of how your app would develop over time. One of the best gauges for app developers is the feedback that they get from users who have spent time utilizing the app. You as the app developer should promptly find ways to address them.',
  },
  {
    id: 5,
    title: 'How should I develop my app on time?',
    decs: 'You should have a clear idea of how your app would develop over time. One of the best gauges for app developers is the feedback that they get from users who have spent time utilizing the app. You as the app developer should promptly find ways to address them.',
  },
  {
    id: 6,
    title: 'How should I develop my app on time?',
    decs: 'You should have a clear idea of how your app would develop over time. One of the best gauges for app developers is the feedback that they get from users who have spent time utilizing the app. You as the app developer should promptly find ways to address them.',
  },
  {
    id: 7,
    title: 'How should I develop my app on time?',
    decs: 'You should have a clear idea of how your app would develop over time. One of the best gauges for app developers is the feedback that they get from users who have spent time utilizing the app. You as the app developer should promptly find ways to address them.',
  },
];

const contact = [
  {
    id: 1,
    icon: 'chatbubbles-outline',
    title: 'Chat Storak now',
    desc: 'You can chat with us here',
  },
  {
    id: 2,
    icon: 'mail-outline',
    title: 'Send Email',
    desc: 'Send your question or problem',
  },
  {
    id: 3,
    icon: 'call-outline',
    title: 'Costumer Service',
    desc: '00 000 0000',
  },
];
const HelpCenter = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => props.navigation.goBack()}>
          <Ionicon name="chevron-back-outline" size={20} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.signin}>
          Help Center &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
        <Text></Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cartContainer}>
          <Text style={styles.store}>FAQ</Text>
        </View>
        <List.Section>
          {data.map(item => (
            <List.Accordion
              key={item.id}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.black,
                backgroundColor: Colors.white,
              }}
              titleStyle={{color: Colors.black}}
              title={item.title}>
              <List.Item titleNumberOfLines={6} title={item.decs} />
            </List.Accordion>
          ))}
        </List.Section>

        <View style={{...styles.cartContainer, marginTop: 25}}>
          <Text style={styles.store}>Contact Us</Text>
        </View>
        <View style={{paddingBottom: 5}}>
          {contact.map(item => (
            <View style={styles.container1} key={item.id}>
              <View style={styles.imageContainer}>
                <Ionicon name={item.icon} size={25} color={Colors.gold} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.heading}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
    paddingHorizontal: 10,
    paddingBottom: 10,
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
  cartContainer: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  store: {
    color: Colors.primary,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 23,
  },
  container1: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imageContainer: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: Colors.offWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    paddingLeft: 15,
    paddingRight: 20,
    width: '94%',
  },
  heading: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    color: Colors.black,
    fontSize: 16,
    lineHeight: 20,
  },
  desc: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: Colors.gray,
    fontSize: 14,
    lineHeight: 16,
    marginTop: 5,
  },
});
export default HelpCenter;
