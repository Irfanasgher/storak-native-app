import * as actionTypes from './actionsTypes';

const INITIAL_STATE = {
  products: [
    {
      id: 111,
      title: 'This is the COOLEST Cube Ever',
      description:
        'ijodsjfg kjgThis cube will keep you busy the entire day and it is very fun to play with',
      price: 15.0,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 112,
      title: 'Large Coffee Cup',
      description:
        'Get a big cup of coffee every morning before the day starts',
      price: 20.0,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 113,
      title: 'Books That CHANGED My Life',
      description:
        'These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people',
      price: 150.0,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80',
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        product => product.id === action.payload.id,
      );
      // Check if Item is in cart already
      const inCart = state.cart.find(item =>
        item.id === action.payload.item.id ? true : false,
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map(item =>
              item.id === action.payload.item.id
                ? {...item, qty: item.qty + 1}
                : item,
            )
          : [...state.cart, {...action.payload.item, qty: 1}],
      };

    case actionTypes.REMOVE_FROM_CART:
      const exist = state.cart.find(x => x.id === action.payload.id);
      return {
        ...state,
        cart:
          exist.qty === 1
            ? state.cart.filter(item => item.id !== action.payload.id)
            : state.cart.map(x =>
                x.id === action.payload.id ? {...x, qty: x.qty - 1} : x,
              ),
      };

    case actionTypes.DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? {...item, qty: +action.payload.qty}
            : item,
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
