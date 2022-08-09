import {call, take, put} from 'redux-saga/effects';
import sliderApi from '../../services/sliderImages';
import {Alert} from 'react-native';
import sliderActions, {GET_SLIDER_IMAGES} from './actions';

// export function* handleSliderImages() {
//   while (true) {
//     try {
//       const {payload} = yield take(GET_SLIDER_IMAGES.REQUEST);
//       const data = yield call(sliderApi.getSliderImages, payload);
//       // console.log(
//       //   '🚀 ~ file: sagas.js ~ line 13 ~ function*handleGetSlider ~ payload',
//       //   payload,
//       // );
//       yield put(sliderActions.getSliderImages.success(data));
//       console.log('saga data', data);
//     } catch (error) {
//       yield put(sliderActions.getSliderImages.failure(error));
//       Alert.alert('Error', error?.response?.data?.message);
//       console.log(error);
//       // Alert.alert("Login Failed", error.response.data.message);
//     }
//   }
// }
