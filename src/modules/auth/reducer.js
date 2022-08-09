import {SET_INITIAL_STATE} from '../common/actions';
// import { getUserId } from '../common/utils';
import {SIGN_IN, SIGN_UP, SIGN_OUT, USER_UPDATE} from './actions';

const initialState = {
  user: '',
  loading: false,
  token: '',
  error: false,
  accessToken: '',
  refreshToken: '',
  updateLoading: false,
};

function authReducer(state = initialState, {type, payload}) {
  switch (type) {
    case SIGN_IN.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN.SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        // refreshToken: payload.tokens.refresh.token,
        // accessToken: payload.tokens.access.token,
        loading: false,
      };
    case SIGN_IN.FAILURE:
      return {
        ...state,
        loading: false,
      };

    case SIGN_UP.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP.SUCCESS:
      return {
        ...state,
        // user: payload,
        token: payload.data.original.token,
        // refreshToken: payload.tokens.refresh.token,
        // accessToken: payload.tokens.access.token,
        loading: false,
      };
    case SIGN_UP.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case SIGN_OUT.REQUEST:
      return {
        ...state,
      };
    case SIGN_OUT.SUCCESS:
      return {
        user: '',
        token: '',
        loading: false,
        error: false,
      };
    case SIGN_OUT.FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default authReducer;
