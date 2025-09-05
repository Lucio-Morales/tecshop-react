import axios from 'axios';
import useAuth from '../features/auth/hooks/useAuth';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  withCredentials: true, // 👈 necesario para enviar cookies (refreshToken)
});

api.interceptors.response.use(
  (response) => response, // si todo va bien, devolvemos la respuesta
  async (error) => {
    const originalRequest = error.config;
    // Si el token expiró y no hemos reintentado aún
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // 👇 usamos el hook de auth para refrescar el token
        const { refreshAccessToken } = useAuth();
        const newToken = await refreshAccessToken();

        if (newToken) {
          // reintentamos con el nuevo token
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        }
      } catch (error) {
        console.error('Error al refrescar token en interceptor:', error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
