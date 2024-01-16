export type Product = {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
};

export interface IProductList {
  items: Product[];
}
