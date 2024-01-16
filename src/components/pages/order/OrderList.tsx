import { IProductList } from '../../../types/products';

const OrderList = ({ fetchedData }: { fetchedData: { read(): IProductList } }) => {
  const data = fetchedData.read();

  return <div>OrderList</div>;
};

export default OrderList;
