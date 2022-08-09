import * as actionTypes from './actionsTypes';

const INITIAL_STATE = {
  favourite: [],
};

const favouriteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_WISHLIST:
      const inFavourite = state.favourite.find(item =>
        item.id === action.payload.item.id ? true : false,
      );

      return {
        ...state,
        favourite: inFavourite
          ? state.favourite.filter(item => item.id !== action.payload.item.id)
          : [...state.favourite, {...action.payload.item, favourite: true}],
      };

    case actionTypes.REMOVE_FROM_WISHLIST:
      state = {
        ...state,
        isFavorite: false,
      };

    default:
      return state;
  }
};

export default favouriteReducer;
