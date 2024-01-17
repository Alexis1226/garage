import { create } from 'zustand';
import { CartState } from '../types/cart';

const initialState = {
  cart: {},
};

export const useCartStore = create<CartState>((set, get) => ({
  ...initialState,
  updateCart: (productId, count) => {
    set((state) => ({ cart: { ...state.cart, [productId]: count } }));
  },
  addCart: (productId) => {
    if (useCartStore.getState().cart[productId]) {
      set((state) => ({
        cart: {
          ...state.cart,
          [productId]: state.cart[productId] < 999 ? state.cart[productId] + 1 : 999, // @todo
        },
      }));
    } else {
      set((state) => ({
        cart: {
          ...state.cart,
          [productId]: 1,
        },
      }));
    }
  },
  subtractCart: (productId) => {
    if (useCartStore.getState().cart[productId] > 1) {
      set((state) => ({
        cart: {
          ...state.cart,
          [productId]: state.cart[productId] < 1 ? 0 : state.cart[productId] - 1,
        },
      }));
    } else {
      const prev = useCartStore.getState().cart;
      delete prev[productId];
      set((state) => ({
        cart: prev,
      }));
    }
  },
  resetCart: () => {
    set(initialState);
  },
}));
