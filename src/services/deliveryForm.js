import axios from 'axios';
import { API_BASE_URL } from '../constants/config/index';
import { requestInterceptor } from './interceptors';
const request = axios.create({
	baseURL: API_BASE_URL,
	timeout: 30 * 100
});

request.interceptors.request.use(requestInterceptor);

export default deliveryFormApi = {
	getPrice: (payload) => {
		console.log(payload);
		return new Promise((resolve, reject) => {
			request
				.post(`/v1/delivery/get-price`, payload)
				.then(({ data }) => {
					console.log(data);
					resolve(data);
				})
				.catch((error) => {
					reject(error);
					console.log(error);
				});
		});
	}
};
