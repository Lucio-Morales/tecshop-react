// Estado global para gestionar datos del usuario logueado
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types/User';

interface UserState {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
