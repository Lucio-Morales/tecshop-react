import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import Home from '../pages/Home';
import AuthPage from '../pages/AuthPage';
import { PrivateRoute } from '../features/auth/components/PrivateRoute';
import AdminDashboard from '../features/user/admin/Dashboard';

export const router = createBrowserRouter([
  // RUTAS PÚBLICAS
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'auth', element: <AuthPage /> },
    ],
  },

  {
    path: '/admin',
    element: (
      <PrivateRoute requiredRoles={['admin']}>
        <AdminDashboard />
      </PrivateRoute>
    ),
  },
]);
