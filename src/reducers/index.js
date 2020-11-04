import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import ordersReducer from './ordersReducer';

export default combineReducers({
  products: productsReducer,
  orders: ordersReducer
});