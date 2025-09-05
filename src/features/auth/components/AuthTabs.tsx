import { useState } from 'react';
import AuthForm from './AuthForm';

const AuthTabs = () => {
  const [tab, setTab] = useState<'login' | 'register'>('login');

  const handleSubmit = (data: any) => {
    console.log('Form submit:', tab, data);
  };

  return (
    <div className="flex flex-col w-full max-w-md rounded-xl border bg-white p-6 shadow-md">
      {/* Tabs */}
      <div className="mb-6 flex justify-center gap-6">
        <button
          onClick={() => setTab('login')}
          className={`
            pb-2 text-sm font-medium cursor-pointer 
            transition-colors duration-200 ease-in-out
            ${tab === 'login' ? 'border-b-2 border-zinc-800 text-black-800' : 'text-gray-600 hover:text-gray-900'}
          `}
        >
          Ingresar
        </button>
        <button
          onClick={() => setTab('register')}
          className={`
            pb-2 text-sm font-medium cursor-pointer 
            transition-colors duration-200 ease-in-out
            ${tab === 'register' ? 'border-b-2 border-zinc-800 text-black-800' : 'text-gray-600 hover:text-gray-900'}
          `}
        >
          Crear cuenta
        </button>
      </div>

      {/* Contenedor con altura mínima para evitar el salto */}
      <div className="min-h-[280px] bg-amber-300 transition-height duration-300 ease-in-out ">
        <AuthForm key={tab} type={tab} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AuthTabs;
