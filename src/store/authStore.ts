import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types/User';

// ESTADO INICIAL:
// user: null ===> no hay sesion
// isAuthenticated: false ===> el usuario no esta logueado
// login(user) ===> - guarda los datos del usuario en el estado user
//                  - cambia isAuthenticated a true
//                  - lo guarda en localStorage (persist)
// logout() ===> - Borra el user del store
//               - Resetea isAuthenticated
//               - Limpia localStorage
// persist ===> - hace que el estado persista a lo refresh de pagina
//              - usa localStorage con la clave "auth-storage"

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: 'auth-storage' } // guarda en localStorage automáticamente
  )
);
