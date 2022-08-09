import axios from 'axios';
import {Alert} from 'react-native';
import {API_BASE_URL} from '../constants/config/index';
import {useSelector} from 'react-redux';

const request = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30 * 100,
});

export default authApi = {
  signin: payload => {
    return new Promise((resolve, reject) => {
      request
        .post(`/login`, payload)
        .then(({data}) => {
          // console.log(data);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  signup: payload => {
    return new Promise((resolve, reject) => {
      request
        .post(`/register`, payload)
        .then(({data}) => {
          // console.log('auth data', data);
          resolve(data);
        })
        .catch(error => {
          reject(error);
          console.log('Error', error);
        });
    });
  },
  signout: payload => {
    return new Promise((resolve, reject) => {
      request
        .post(`/logout`, payload)
        .then(res => {
          // console.log(res);
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
