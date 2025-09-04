import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Store from '../pages/Store';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'store', element: <Store /> },
      { path: 'product/:id', element: <ProductDetail /> },
      { path: 'cart', element: <Cart /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);
