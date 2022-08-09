import { GET_ALL_NOTIFICATIONS } from "./actions";

const initialState = {
  notifications: [],
  loading: false,
};

function notificationReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_NOTIFICATIONS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_NOTIFICATIONS.SUCCESS:
      return {
        ...state,
        notifications: payload,
        loading: false,
      };
    case GET_ALL_NOTIFICATIONS.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default notificationReducer;
