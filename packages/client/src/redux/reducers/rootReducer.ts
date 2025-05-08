import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducers';
import productsReducer from './productReducers';
import userReducer from './userReducer';
import blogReducer from './blogPostReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer,
  post: blogReducer,
});

export default rootReducer;