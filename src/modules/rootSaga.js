import {fork, all} from 'redux-saga/effects';

import {handleSignin, handleSignup, handleSignout} from './auth/sagas';

import {handleSliderImages} from './sliderImages/sagas';

export default function* rootSaga() {
  const sagas = [
    handleSignin,
    handleSignup,
    handleSignout,
    handleSliderImages,
  ].filter(saga => saga !== undefined);

  yield all(sagas.map(saga => fork(saga)));
}
