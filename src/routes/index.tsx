import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import ProtectedRoute from '../features/auth/components/ProtectedRoute';
import AboutUs from '../pages/AboutUs';
import AuthPage from '../pages/AuthPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <AboutUs /> },
      { path: 'product/:id', element: <ProductDetail /> },
      {
        path: 'cart',
        element: (
          <ProtectedRoute roles={['customer']}>
            <Cart />
          </ProtectedRoute>
        ),
      },
      { path: 'auth', element: <AuthPage /> },
      {
        path: 'profile',
        element: (
          <ProtectedRoute roles={['customer']}>
            <div>Profile user</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
