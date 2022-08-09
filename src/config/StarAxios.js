import axios from 'axios';
import Helpers from '../utils/Helpers';
import {Alert} from 'react-native';

let config = async () => {
  let token = await Helpers.getData('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
};

export default {
  get: async url => {
    try {
      return await axios.get(url, await config());
    } catch (e) {
      const message = 'There is something wrong. Please try Again Later';
      // Alert.alert(message);
      return {e};
    }
  },
  post: async (url, data) => {
    try {
      let res = await axios.post(url, data, await config());
      return res;
    } catch (e) {
      //const message = "There is something wrong. Please try Again Later";
      //Helpers.showToastMessage(message);
      // Alert.alert(e);
      return {e};
    }
  },
};
