import axios from 'axios';
import {API_BASE_URLB} from '../constants/config/index';
import {requestInterceptor} from './interceptors';
const request = axios.create({
  baseURL: API_BASE_URLB,
  timeout: 30 * 100,
});

// request.interceptors.request.use(requestInterceptor);
const sliderApi = {
  getSliderImages: params => {
    return new Promise((resolve, reject) => {
      request
        .get(`/api/admin/website/banners`, {params})
        .then(({data}) => {
          // console.log(data);
          resolve(data);
        })
        .catch(error => {
          reject(error);
          console.log(error);
        });
    });
  },
};

export default sliderApi;
