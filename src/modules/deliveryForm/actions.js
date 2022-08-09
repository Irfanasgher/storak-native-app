import {
  REQUEST,
  SUCCESS,
  FAILURE,
  createRequestTypes,
  action,
} from "../common/actions";

export const TO = createRequestTypes("TO");
export const FROM = createRequestTypes("FROM");
export const CONTACT_DETAIL = createRequestTypes("CONTACT_DETAIL");
export const ITEM_DETAIL = createRequestTypes("ITEM_DETAIL");
export const ORDER_SUCCESS = createRequestTypes("ORDER_SUCCESS");
const authActions = {
  to: {
    request: (data) => action(TO.REQUEST, { payload: data }),
    success: (data) => action(TO.SUCCESS, { payload: data }),
    failure: (data) => action(TO.FAILURE, { payload: data }),
  },
  from: {
    request: (data) => action(FROM.REQUEST, { payload: data }),
    success: (data) => action(FROM.SUCCESS, { payload: data }),
    failure: (data) => action(FROM.FAILURE, { payload: data }),
  },
  contactDetail: {
    request: (data) => action(CONTACT_DETAIL.REQUEST, { payload: data }),
    success: (data) => action(CONTACT_DETAIL.SUCCESS, { payload: data }),
    failure: (data) => action(CONTACT_DETAIL.FAILURE, { payload: data }),
  },
  itemDetail: {
    request: (data) => action(ITEM_DETAIL.REQUEST, { payload: data }),
    success: (data) => action(ITEM_DETAIL.SUCCESS, { payload: data }),
    failure: (data) => action(ITEM_DETAIL.FAILURE, { payload: data }),
  },
  orderSuccess: {
    request: (data) => action(ORDER_SUCCESS.REQUEST, { payload: data }),
    success: (data) => action(ORDER_SUCCESS.SUCCESS, { payload: data }),
    failure: (data) => action(ORDER_SUCCESS.FAILURE, { payload: data }),
  },
};
export default authActions;
