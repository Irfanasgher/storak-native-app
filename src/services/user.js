import axios from "axios";
import { API_BASE_URL } from "../constants/config/index";
import { requestInterceptor } from "./interceptors";

const request = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30 * 100,
});

request.interceptors.request.use(requestInterceptor);

// const api = {
//   updateProfile: (data) => {
//     const prop = "id";
//     const newData = Object.keys(data).reduce((object, key) => {
//       if (key !== prop) {
//         object[key] = data[key];
//       }
//       return object;
//     }, {});
//     return new Promise((resolve, reject) => {
//       request
//         .patch(`/v1/users/${data.id}`, { ...newData })
//         .then((res) => {
//           resolve({ data: res.data });
//         })
//         .catch((e) => {
//           reject();
//           console.log("error in the user update", e);
//         });
//     });
//   },
// };

export default api;
