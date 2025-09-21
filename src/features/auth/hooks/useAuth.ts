import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Ocurrió un error inesperado.');
    } finally {
      setLoading(false);
    }
  };

  const register = async (registerData) => {
    return `register function se ejecuto con los datos: ${registerData}`;
  };

  return { user, loading, error, login, register };
};
