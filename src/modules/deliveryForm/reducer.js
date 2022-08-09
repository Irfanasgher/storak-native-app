import { SET_INITIAL_STATE } from "../common/actions";
// import { getUserId } from '../common/utils';
import {
  TO,
  FROM,
  CONTACT_DETAIL,
  ITEM_DETAIL,
  ORDER_SUCCESS,
} from "./actions";

const initialState = {
  deliveryTime: "2hr",
  pickup: {
    address: "",
    latlng: {
      coordinates: [],
    },
  },
  dropOff: {
    address: "",
    latlng: {
      coordinates: [],
    },
  },
  orderDate: "",
  senderName: "",
  senderMobile: "",
  receiverName: "",
  receiverMobile: "",
  selectedVehicle: "",
  weightKg: 0,
  items: 0,
  size: {
    width: 0,
    height: 0,
  },
  description: "",
  distance: 0,
  price: 0,
};

function deliveryFormReducer(state = initialState, { type, payload }) {
  switch (type) {
    case TO.REQUEST:
      return {
        ...state,
      };
    case TO.SUCCESS:
      return {
        ...state,
        deliveryTime: payload.deliveryTime,
        dropOff: payload.dropOff,
        orderDate: payload.orderDate,
      };
    case TO.FAILURE:
      return {
        ...state,
      };

    case FROM.REQUEST:
      return {
        ...state,
      };
    case FROM.SUCCESS:
      return {
        ...state,
        pickup: payload.pickup,
      };
    case FROM.FAILURE:
      return {
        ...state,
      };

    case CONTACT_DETAIL.REQUEST:
      return {
        ...state,
      };
    case CONTACT_DETAIL.SUCCESS:
      return {
        ...state,
        senderName: payload.senderName,
        senderMobile: payload.senderMobile,
        receiverName: payload.receiverName,
        receiverMobile: payload.receiverMobile,
        selectedVehicle: payload.selectedVehicle,
      };
    case CONTACT_DETAIL.FAILURE:
      return {
        ...state,
      };
    case ITEM_DETAIL.REQUEST:
      return {
        ...state,
      };
    case ITEM_DETAIL.SUCCESS:
      return {
        ...state,
        weightKg: payload.weightKg,
        items: payload.items,
        size: payload.size,
        description: payload.description,
        price: payload.price,
        distance: payload.distance,
      };
    case ITEM_DETAIL.FAILURE:
      return {
        ...state,
      };

    case ORDER_SUCCESS.SUCCESS: {
      return {
        ...state,
        deliveryTime: "2hr",
        pickup: {
          address: "",
          latlng: {
            coordinates: [],
          },
        },
        dropOff: {
          address: "",
          latlng: {
            coordinates: [],
          },
        },
        orderDate: "",
        senderName: "",
        senderMobile: "",
        receiverName: "",
        receiverMobile: "",
        selectedVehicle: "",
        weightKg: 0,
        items: 0,
        size: {
          width: 0,
          height: 0,
        },
        description: "",
        price: 0,
      };
    }

    default:
      return state;
  }
}

export default deliveryFormReducer;
