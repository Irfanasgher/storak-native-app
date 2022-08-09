import { call, take, put, select, delay } from "redux-saga/effects";
import notificationApi from "../../services/notification";
import { Alert } from "react-native";
import notificationActions, { GET_ALL_NOTIFICATIONS } from "./actions";

export function* handleNotifications() {
  while (true) {
    try {
      console.log("I am in notification saga before request");
      const { payload } = yield take(GET_ALL_NOTIFICATIONS.REQUEST);
      const data = yield call(notificationApi.getNotifications, payload);
      // console.log(data, "data");
      yield put(notificationActions.getNotifications.success(data));
    } catch (error) {
      yield put(notificationActions.getNotifications.failure(error));
      Alert.alert("Error", error?.response?.data?.message);
      console.log(error);
      // Alert.alert("Login Failed", error.response.data.message);
    }
  }
}
