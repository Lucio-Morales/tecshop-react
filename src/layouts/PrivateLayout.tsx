import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../features/auth/context/AuthContext';

const PrivateLayout = () => {
  const { user, loading } = useAuth();

  // Muestra un estado de carga mientras se verifica el usuario
  if (loading) {
    return <div>Cargando autenticación...</div>;
  }

  // Si el usuario está autenticado, renderiza las rutas hijas
  if (user) {
    return <Outlet />;
  }

  // Si no está autenticado, redirige a la página de inicio de sesión
  return <Navigate to="/auth" replace />;
};

export default PrivateLayout;
