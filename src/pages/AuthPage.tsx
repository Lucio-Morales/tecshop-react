import { useState, type FormEvent } from 'react';
import LoginForm from '../features/auth/components/LoginForm';
import RegisterForm from '../features/auth/components/RegisterForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Click en handleLogin');
    // Lógica para enviar datos al backend
  };

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Click en handleRegister');
    // Lógica para enviar datos al backend
  };
  return (
    <div className="h-screen flex flex-col items-center pt-30">
      {/* NAV BUTTONS */}
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
            <RegisterForm onSubmit={handleRegister} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
