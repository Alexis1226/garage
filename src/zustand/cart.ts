import { create } from 'zustand';
import { CartState } from '../types/cart';

const initialState = {
  cart: {},
};

export const useCartStore = create<CartState>((set) => ({
  ...initialState,
  updateCart: (productId, count) => {
    // input 창에서 수량 조정하는 경우 실행하는 함수
    set((state) => ({ cart: { ...state.cart, [productId]: count } }));
  },
  addCart: (productId) => {
    // 수량 증가시키는 함수
    if (useCartStore.getState().cart[productId]) {
      set((state) => ({
        cart: {
          ...state.cart,
          [productId]: state.cart[productId] < 999 ? state.cart[productId] + 1 : 999,
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
    // 수량 감소시키는 함수
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
