import { configureStore } from '@reduxjs/toolkit';
import prodcutsReducer from '../features/products/productsSlice';
import cartSlice from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    product: prodcutsReducer,
    cart: cartSlice,
  },
});
