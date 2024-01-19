import { Suspense } from 'react';
import Layout from '../components/layout/Layout';
import OrderList from '../components/pages/order/OrderList';
import { fetchProducts } from '../utils/fetchData';
import Loading from '../components/pages/order/Loading';

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
