import { useState } from 'react';
import LoginForm from '../features/auth/components/LoginForm';
import RegisterForm from '../features/auth/components/RegisterForm';

const AuthPage = () => {
  const [view, setView] = useState('login');

  return (
    <div>
      <div className="h-screen flex flex-col items-center pt-30 px-6">
        {/* TABS BUTTONS */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setView('login')}
            className={`px-4 py-2 text-lg transition cursor-pointer border-b-2 border-transparent ${
              view === 'login' ? 'border-b-2 border-zinc-800 text-black-800' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => setView('register')}
            className={`px-4 py-2 text-lg transition cursor-pointer border-b-2 border-transparent ${
              view === 'register' ? 'border-b-2 border-zinc-800 text-black-800' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Crear cuenta
          </button>
        </div>

        {/* FORM CONTAINER: Renderizado condicional basado en la vista */}
        <div className="rounded-lg w-full max-w-sm shadow-lg relative min-h-[400px] ">
          {view === 'login' && (
            <div className="absolute inset-0 p-2 ">
              <LoginForm />
            </div>
          )}
          {view === 'register' && (
            <div className="absolute inset-0 p-2 ">
              <RegisterForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
