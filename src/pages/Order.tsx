import { Suspense } from 'react';
import Layout from '../components/layout/Layout';
import Loading from '../components/Loading';
import OrderList from '../components/pages/order/OrderList';
import { fetchProducts } from '../utils/fetchData';

const Order = () => {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <OrderList fetchedData={fetchProducts()} />
      </Suspense>
    </Layout>
  );
};

export default Order;
