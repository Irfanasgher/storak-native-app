import {createRequestTypes, action} from '../common/actions';

export const GET_SLIDER_IMAGES = createRequestTypes('GET_SLIDER_IMAGES');

const sliderActions = {
  getSliderImages: {
    request: data => action(GET_SLIDER_IMAGES.REQUEST, {payload: data}),
    success: data => action(GET_SLIDER_IMAGES.SUCCESS, {payload: data}),
    failure: data => action(GET_SLIDER_IMAGES.FAILURE, {payload: data}),
  },
};
export default sliderActions;
