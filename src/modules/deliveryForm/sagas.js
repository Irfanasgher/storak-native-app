import { call, take, put, select, delay } from "redux-saga/effects";
import { Alert } from "react-native";
import { CommonActions } from "@react-navigation/native";
import * as Navigation from "../../../Navigation/RootNavigation";
import deliveryFormActions, { ITEM_DETAIL } from "./actions";
import deliveryFormApi from "./../../services/deliveryForm";

export function* handleGetDeliveryPrice() {
  while (true) {
    try {
      const { payload } = yield take(ITEM_DETAIL.REQUEST);
      yield put(deliveryFormActions.itemDetail.success({ ...payload }));
    } catch (e) {
      yield put(
        deliveryFormActions.itemDetail.failure(e.response.data.message)
      );
      Alert.alert("Failed the in Delivery Form", e.response.data.message);
    }
  }
}
