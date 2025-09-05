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
  accessToken: string | null; // 👉 se guarda solo en memoria
  isAuthenticated: boolean;
  login: (user: User, accessToken: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      login: (user, accessToken) => set({ user, accessToken, isAuthenticated: true }),
      logout: () => set({ user: null, accessToken: null, isAuthenticated: false }),
    }),
    { name: 'auth-storage' }
  )
);
