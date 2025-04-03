import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
 
const preloadedState = {
  cart: {
    items:[{id:1, name:'Shoes',price:50}],
    totalPrice:50,
  }
}
export const store = configureStore({
  reducer:rootReducer, 
  devTools:process.env.NODE_ENV !== 'production',
  preloadedState,//this comes from the server global variable
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;