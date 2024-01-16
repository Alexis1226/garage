import { IProductList } from '../types/products';

export const fetchProducts = () => {
  let products: IProductList | null = null;
  const suspender = fetch('http://localhost:3001/items')
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        products = data;
      }, 1000);
    });
  return {
    read() {
      if (products === null) {
        throw suspender;
      } else {
        return products;
      }
    },
  };
};
