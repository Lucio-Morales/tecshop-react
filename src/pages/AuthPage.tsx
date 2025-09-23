import { useState } from 'react';
import LoginForm from '../features/auth/components/LoginForm';
import RegisterForm from '../features/auth/components/RegisterForm';
import { registerUser } from '../api/requests/posts';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [status, setStatus] = useState('idle'); // 'idle | 'loading | 'success' | 'error'
  const [message, setMessage] = useState('');

  const handleRegister = async (userData: any) => {
    setStatus('loading');

    try {
      await registerUser(userData);
      setStatus('success');
      setMessage('Registro exitoso, ya puedes iniciar sesion.');
    } catch (error: any) {
      setStatus('error');
      const errorMessage = error.response?.data?.message || 'Ocurrió un error inesperado.';
      setMessage(errorMessage);
    }
  };
  const handleLogin = (event: any) => {
    event.preventDefault();
    alert('Click en handleLogin');
    // Lógica para enviar datos al backend
  };

  return (
    <div className="h-screen flex flex-col items-center pt-30">
      {/* Renderizado condicional basado en el estado */}
      {status === 'success' && <div className="text-green-600 text-center mb-4">{message}</div>}
      {status === 'error' && <div className="text-red-600 text-center mb-4">{message}</div>}

      {/* Solo muestra el formulario si no está en estado de éxito */}
      {status !== 'success' && (
        <>
          {/* TABS BUTTONS */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 text-lg transition cursor-pointer border-b-2 border-transparent ${
                isLogin ? 'border-b-2 border-zinc-800 text-black-800' : 'text-gray-600 hover:text-gray-900'
              }`}
              disabled={isLogin}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 text-lg transition cursor-pointer border-b-2 border-transparent ${
                !isLogin ? 'border-b-2 border-zinc-800 text-black-800' : 'text-gray-600 hover:text-gray-900'
              }`}
              disabled={!isLogin}
            >
              Crear cuenta
            </button>
          </div>

          {/* FORM CONTAINER */}
          <div className="rounded-lg w-full max-w-sm shadow-lg relative ">
            {/* Usamos el posicionamiento absoluto en cada formulario. */}
            {isLogin && (
              <div className="absolute inset-0 p-2 ">
                <LoginForm onSubmit={handleLogin} />
              </div>
            )}
            {!isLogin && (
              <div className="absolute inset-0 p-2 ">
                <RegisterForm onRegister={handleRegister} loading={status === 'loading'} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AuthPage;
