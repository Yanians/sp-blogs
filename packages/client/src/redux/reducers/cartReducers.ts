import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number
  price: number;
  details?: {
    manufacturer: string;
    warranty: string;
  };
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
  rating?: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateProductWarranty(state, action: PayloadAction<{ id: number; warranty: string }>) {
      const cartItem = state.items.find(item => item.id === action.payload.id);
      if (cartItem && cartItem.details) {
        cartItem.details.warranty = action.payload.warranty;
      }
    },
    addToCart(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        state.totalPrice -= item.price;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    applyCoupon(state, action: PayloadAction<string>) {
      const couponCode = action.payload;
      if (couponCode === 'DISCOUNT10') {
        state.totalPrice *= 0.9;
      }
    },
  },
});

export const { addToCart, removeFromCart, applyCoupon } = cartSlice.actions;
export default cartSlice.reducer;