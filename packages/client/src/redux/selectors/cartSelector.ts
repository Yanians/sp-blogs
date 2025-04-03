import { RootState } from '../store';

export const selectCartTotalItems = (state: RootState) => state.cart.items.length;
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;