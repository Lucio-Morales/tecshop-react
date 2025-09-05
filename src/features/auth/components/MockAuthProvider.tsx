import type { ReactNode } from 'react';
import { useAuthStore } from '../../../store/authStore';

interface MockAuthProviderProps {
  children: ReactNode;
  user?: {
    role: 'ADMIN' | 'CUSTOMER';
    email: string;
  } | null;
  isAuthenticated?: boolean;
}

export const MockAuthProvider = ({ children, user = null, isAuthenticated = false }: MockAuthProviderProps) => {
  // Setear valores hardcodeados en Zustand
  const store = useAuthStore.getState();
  store.user = user as any;
  store.isAuthenticated = isAuthenticated;

  return <>{children}</>;
};
