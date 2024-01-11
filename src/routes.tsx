import { useRoutes } from 'react-router-dom';
import { Complete, Error, Home, Order } from './pages';

const Router = () => {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/order', element: <Order /> },
    { path: '/complete', element: <Complete /> },
    { path: '/error', element: <Error /> },
  ];

  let element = useRoutes(routes);
  return element;
};

export default Router;
