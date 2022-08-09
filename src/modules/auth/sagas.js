import {call, take, put} from 'redux-saga/effects';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from "@react-native-firebase/storage";
import Helpers from './../../utils/Helpers';

import authActions, {SIGN_IN, SIGN_OUT, SIGN_UP} from './actions';

import authApi from './../../services/auth';

const setTokens = async token => {
  await AsyncStorage.setItem('token', token);
  // await AsyncStorage.setItem('token', token);
};
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('store error is here', e);
    // saving error
  }
};
const login = async data => {
  await storeData('token', data.token);
  await storeData('user', JSON.stringify(data.user));
};

const unSetTokens = async () => {
  await AsyncStorage.clear();
};

export function* handleSignin() {
  while (true) {
    try {
      const {payload} = yield take(SIGN_IN.REQUEST);
      const data = yield call(authApi.signin, payload);
      Alert.alert(`${data?.message}`);
      yield call(login, data);
      console.log('🚀 ~ file: sagas.js ~ line 39 ~ function*handleSignin ~ ');
      yield put(authActions.signin.success(data));
      // console.log('sagas data', data);
    } catch (e) {
      console.log(
        '🚀 ~ file: sagas.js ~ line 44 ~ function*handleSignin ~ e',
        e,
      );
      yield put(authActions.signin.failure(e));
      Alert.alert('Login Failed', data?.message);
    }
  }
}

export function* handleSignup() {
  while (true) {
    try {
      const {payload} = yield take(SIGN_UP.REQUEST);
      // console.log('sagas data start signup');
      const data = yield call(authApi.signup, payload);
      // console.log('sagas data', data);
      yield call(setTokens, data?.data?.original?.token);
      Alert.alert(`Signup Success ${data?.data?.original?.message}`);
      yield put(authActions.signup.success(data));
    } catch (e) {
      console.log(
        '🚀 ~ file: sagas.js ~ line 50 ~ function*handleSignup ~ e',
        e,
      );
      Alert.alert(`Signup Failed ${e}`);
      yield put(authActions.signup.failure(e));
    }
  }
}

export function* handleSignout() {
  while (true) {
    try {
      const {payload} = yield take(SIGN_OUT.REQUEST);
      yield call(unSetTokens);
      let data = '';
      yield put(authActions.signout.success(data));
    } catch (e) {
      yield put(authActions.signout.failure(e));
      console.log(
        '🚀 ~ file: sagas.js ~ line 76 ~ function*handleSignout ~ e',
        e,
      );
      Alert.alert('Some Problem in Signout', e?.response?.data?.message);
    }
  }
}
