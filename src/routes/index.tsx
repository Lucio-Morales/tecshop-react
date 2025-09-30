import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import Home from '../pages/Home';
import AuthPage from '../pages/AuthPage';
import AboutUs from '../pages/AboutUs';

export const router = createBrowserRouter([
  // RUTAS PÚBLICAS
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'auth', element: <AuthPage /> },
      { path: 'about', element: <AboutUs /> },
    ],
  },
]);
