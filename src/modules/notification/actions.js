import {
  REQUEST,
  SUCCESS,
  FAILURE,
  createRequestTypes,
  action,
} from "../common/actions";

export const GET_ALL_NOTIFICATIONS = createRequestTypes(
  "GET_ALL_NOTIFICATIONS"
);

const notificationActions = {
  getNotifications: {
    request: (data) => action(GET_ALL_NOTIFICATIONS.REQUEST, { payload: data }),
    success: (data) => action(GET_ALL_NOTIFICATIONS.SUCCESS, { payload: data }),
    failure: (data) => action(GET_ALL_NOTIFICATIONS.FAILURE, { payload: data }),
  },
};
export default notificationActions;
