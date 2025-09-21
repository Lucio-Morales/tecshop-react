import { useState } from 'react';
import LoginForm from '../features/auth/components/LoginForm';
import RegisterForm from '../features/auth/components/RegisterForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    console.log('handleLogin');
    // Lógica para enviar datos al backend
  };

  const handleRegister = () => {
    console.log('handleRegister');
    // Lógica para enviar datos al backend
  };
  return (
    <div className="bg-gray-800 text-white h-screen flex flex-col items-center justify-center">
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setIsLogin(true)}
          className={`px-4 py-2 rounded-md transition ${
            isLogin ? 'bg-zinc-700 text-white' : 'bg-transparent text-gray-400'
          }`}
          disabled={isLogin}
        >
          Iniciar sesión
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`px-4 py-2 rounded-md transition ${
            !isLogin ? 'bg-zinc-700 text-white' : 'bg-transparent text-gray-400'
          }`}
          disabled={!isLogin}
        >
          Crear cuenta
        </button>
      </div>

      {/* FORM CONTAINER */}
      <div className="border border-zinc-700 rounded-lg p-8 w-full max-w-sm shadow-lg">
        {isLogin ? <LoginForm onSubmit={handleLogin} /> : <RegisterForm onSubmit={handleRegister} />}
      </div>
    </div>
  );
};

export default AuthPage;
