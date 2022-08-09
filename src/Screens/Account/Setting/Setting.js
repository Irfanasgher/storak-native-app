import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Common/Colors';
import ToggleSwitch from 'toggle-switch-react-native';
import RoundedButton from '../../../Components/Buttons/RoundedButton';

const Setting = props => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: '100%', position: 'relative'}}>
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
          <Text style={styles.signin}>
            Settings &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
          <Text style={styles.signin}></Text>
        </View>

        <View style={{marginTop: 70}}>
          <View style={styles.shipping}>
            <Text style={styles.address}>Notifications</Text>
            <ToggleSwitch
              isOn={isEnabled1}
              onColor={Colors.gold}
              offColor={Colors.gray}
              size="medium"
              onToggle={toggleSwitch1}
            />
          </View>
          <View style={{...styles.shipping, marginTop: 20}}>
            <Text style={styles.address}>Ask before buy</Text>
            <ToggleSwitch
              isOn={isEnabled2}
              onColor={Colors.gold}
              offColor={Colors.gray}
              size="medium"
              onToggle={toggleSwitch2}
            />
          </View>
        </View>

        <View style={{position: 'absolute', bottom: 5, width: '100%'}}>
          <RoundedButton
            text={'Save Changes'}
            // onPress={handleSubmit}
            onPress={() => props.navigation.navigate('Home')}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    // marginBottom: 65,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
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
  shipping: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  address: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: 14,
  },
});
export default Setting;
