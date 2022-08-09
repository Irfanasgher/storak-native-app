// /* global window */
// import * as _ from 'lodash';

// export const getImageUrl = (vehicle) => {
// 	switch (vehicle) {
// 		case 'bike':
// 			return require('../../images/deliveryList/bike.png');
// 		case 'taxi':
// 			return require('../../images/deliveryList/car.png');
// 		case 'pickup':
// 			return require('../../images/deliveryList/pickup.png');
// 		case 'truck':
// 			return require('../../images/deliveryList/truck.png');
// 		default:
// 			break;
// 	}
// };

// const host = "uni_drive";

// export const getUserId = () => {
//   return localStorage.getItem(`${host}_accessToken`);
// };

// export const setAccessToken = (token) => {
//   localStorage.setItem(`${host}_accessToken`, token);
// };

// export const setIdToken = (token) => {
//   localStorage.setItem(`${host}_idToken`, token);
// };

// export const setLastAuthCallTimeStamp = (value) => {
//   localStorage.setItem(`${host}_lastAuthCallTimeStamp`, value);
// };

// export const setRefreshToken = (value) => {
//   localStorage.setItem(`${host}_refreshToken`, value);
// };

// export const setSessionCookies = (user) => {
//   const decodedToken = user;
//   window.localStorage[`${host}_role`] = decodedToken[`custom:role`];
//   window.localStorage[`${host}_refreshToken`] = user.data.refresh_token;
//   window.localStorage[`${host}_idToken`] = user.data.id_token;
//   window.localStorage[`${host}_accessToken`] = user.data.access_token;
//   window.localStorage[`${host}_username`] = decodedToken[`cognito:username`];
//   window.localStorage[`${host}_lastAuthCallTimeStamp`] = decodedToken['auth_time'];
//   window.localStorage[`${host}_refreshTokenExpireTime`] = decodedToken['exp'];
// };

// export const unSetSessionCookies = () => {
//   localStorage.removeItem(`${host}_lastAuthCallTimeStamp`);
//   localStorage.removeItem(`${host}_refreshTokenExpireTime`);
//   localStorage.removeItem(`${host}_refreshToken`);
//   localStorage.removeItem(`${host}_idToken`);
//   localStorage.removeItem(`${host}_accessToken`);
//   localStorage.removeItem(`${host}_role`);
//   localStorage.removeItem(`${host}_username`);
// };

// //decode access token
// export const getUserRole = () => {
//   return localStorage.getItem(`${host}_role`);
// };

// export const USER_ROLE = localStorage.getItem(`${host}_role`);
