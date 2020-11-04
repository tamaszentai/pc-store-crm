import {FETCH_PRODUCTS, NEW_PRODUCTS} from '../actions/types';

const initialState = {
  products: [],
  product: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}