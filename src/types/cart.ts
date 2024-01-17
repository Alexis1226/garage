export interface CartState {
  cart: item;
  updateCart: (productId: string, count: number) => void;
  addCart: (productId: string) => void;
  subtractCart: (productId: string) => void;
  resetCart: () => void;
}

type item = {
  [key: string]: number;
};
