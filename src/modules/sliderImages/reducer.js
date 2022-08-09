import {GET_SLIDER_IMAGES} from './actions';

const initialState = {
  sliderImages: [],
  loading: false,
};

function sliderReducer(state = initialState, {type, payload}) {
  switch (type) {
    case GET_SLIDER_IMAGES.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SLIDER_IMAGES.SUCCESS:
      return {
        ...state,
        sliderImages: payload,
        loading: false,
      };
    case GET_SLIDER_IMAGES.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default sliderReducer;
