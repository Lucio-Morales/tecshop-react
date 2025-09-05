import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../../store/authStore';
import type { UserRole } from '../../../types/User';
import type { JSX } from 'react';

interface ProtectedRouteProps {
  children: JSX.Element;
  roles?: UserRole[];
}

const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(user?.role as 'ADMIN' | 'CUSTOMER')) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
