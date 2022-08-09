import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['deliveryReducer', 'deliveryFormReducer'],
};

import commonReducer from './common/reducer';
import authReducer from './auth/reducer';
import sliderReducer from './sliderImages/reducer';
import cartReducer from './addToCart/reducer';
import favouriteReducer from './wishlist/reducer';
// import deliveryFormReducer from "./deliveryForm/reducer";
// import deliveryReducer from "./delivery/reducer";
// import notificationReducer from "./notification/reducer";

const appReducer = combineReducers({
  commonReducer,
  authReducer,
  sliderReducer,
  cartReducer,
  favouriteReducer,
  // userReducer,
  // deliveryFormReducer,
  // deliveryReducer,
  // notificationReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'SIGNOUT_SUCCESS') {
    state = undefined;
  }

  return appReducer(state, action);
};

const reducer = persistReducer(persistConfig, rootReducer);

export default reducer;
