import axios from "axios";
import { API_BASE_URL } from "../constants/config/index";
import { requestInterceptor } from "./interceptors";

const request = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30 * 100,
});

request.interceptors.request.use(requestInterceptor);
const notificationApi = {
  getNotifications: (params) => {
    return new Promise((resolve, reject) => {
      request
        .get(`/v1/notification`, { params })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
          console.log(error);
        });
    });
  },
};

export default notificationApi;
