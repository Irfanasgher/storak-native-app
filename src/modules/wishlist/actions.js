import * as actionTypes from './actionsTypes';

export const addToWishlist = itemID => {
  return {
    type: actionTypes.ADD_TO_WISHLIST,
    payload: {
      item: itemID,
    },
  };
};

export const removeFromWishlist = itemID => {
  return {
    type: actionTypes.REMOVE_FROM_WISHLIST,
    payload: {
      id: itemID,
    },
  };
};
