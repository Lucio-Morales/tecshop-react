import { useAuthStore } from '../../../store/authStore';

const useAuth = () => {
  const { user, accessToken, isAuthenticated, login, logout } = useAuthStore();

  // llamada al back para login
  const handleLogin = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include', //👈 importante para cookies HttpOnly (refreshToken)
      });

      if (!res.ok) throw new Error('Credenciales inválidas.');

      const data = await res.json();

      // backend devuelve: { user, accessToken }

      login(data.user, data.accessToken);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  };

  // llamada al backend para logout
  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } finally {
      logout();
    }
  };

  // Refrescar accessToken usando refreshToken (cookie HttpOnly)
  const refreshAccessToken = async () => {
    try {
      const res = await fetch('/api/auth/refresh', {
        method: 'POST',
        credentials: 'include',
      });

      if (!res.ok) throw new Error('No se pudo refrescar el token');

      const data = await res.json();

      // back devuelve: { accessToken }
      login(user!, data.accessToken);
      return data.accessToken;
    } catch (error) {
      console.error('Error al refrescar token:', error);
      handleLogout();
      return null;
    }
  };

  return {
    user,
    accessToken,
    isAuthenticated,
    handleLogin,
    handleLogout,
    refreshAccessToken,
  };
};

export default useAuth;
