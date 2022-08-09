import axios from 'axios';
import {Alert} from 'react-native';
import {API_BASE_URL} from '../constants/config/index';
import {useSelector} from 'react-redux';

const request = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30 * 100,
});

export default cartApi = {
  addtocart: payload => {
    return new Promise((resolve, reject) => {
      const exist = cartItems.find(x => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map(x =>
            x.id === product.id ? {...exist, qty: exist.qty + 1} : x,
          ),
        );
      } else {
        setCartItems([...cartItems, {...product, qty: 1}]);
      }
    });
  },
};
