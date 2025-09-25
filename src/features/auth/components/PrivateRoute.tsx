import { Navigate } from 'react-router-dom';
import type { UserRole } from '../../../types/User';
import { useAuth } from '../context/AuthContext';
import type { JSX } from 'react';

const checkRole = (requiredRoles: UserRole[], userRole: UserRole) => {
  return requiredRoles.includes(userRole);
};

export const PrivateRoute = ({ children, requiredRoles }: { children: JSX.Element; requiredRoles: UserRole[] }) => {
  const { user, loading, role } = useAuth();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  if (!checkRole(requiredRoles, role)) {
    return <Navigate to="/" />; // Redirect to home or a forbidden page
  }

  return children;
};
