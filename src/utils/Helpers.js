import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('store error is here', e);
    // saving error
  }
};
const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    // console.log("data get error", e);
    // error reading value
  }
};

const login = async (token, user) => {
  await storeData('token', token);
  await storeData('user', JSON.stringify(user));
};

const logout = async props => {
  await storeData('token', '');
  await storeData('user', '');
  console.log('logout');
};

const getUser = async () => {
  return JSON.parse(await getData('user'));
};

const setUser = async user => {
  await storeData('user', JSON.stringify(user));
};

export default {
  storeData,
  getData,
  login,
  logout,
  getUser,
  setUser,
};
