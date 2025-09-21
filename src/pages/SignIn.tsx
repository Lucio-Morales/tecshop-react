import { useState } from 'react';
import FormInput from '../features/auth/components/FormInput';

const Login = () => {
  const [tab, setTab] = useState<'login' | 'register'>('login');

  return (
    <section className="flex flex-1 flex-col items-center px-4 pt-20 sm:py-20">
      {/* Tabs */}
      <div className=" flex w-full max-w-md justify-center gap-2 sm:gap-4 overflow-hidden">
        <button
          onClick={() => setTab('login')}
          className={`flex-1 py-2 text-sm sm:text-lg sm:font-medium border-b-2 cursor-pointer ${
            tab === 'login'
              ? 'border-b-2 border-zinc-800 text-zinc-800 '
              : 'border-transparent text-gray-600 hover:text-zinc-800 hover:border-b-2 hover:border-zinc-800'
          }`}
        >
          Ingresar
        </button>
        <button
          onClick={() => setTab('register')}
          className={`flex-1 py-2 text-sm sm:text-lg sm:font-medium border-b-2 cursor-pointer ${
            tab === 'register'
              ? 'border-b-2 border-zinc-800 text-zinc-800 '
              : 'border-transparent text-gray-600 hover:text-zinc-800 hover:border-b-2 hover:border-zinc-800'
          }`}
        >
          Crear cuenta
        </button>
      </div>

      {/* Contenedor del formulario */}
      <div className="w-full max-w-md border border-zinc-300 p-4 sm:p-6 mt-6 rounded-lg shadow">
        <form className="flex flex-col gap-4">
          {tab === 'register' && (
            <FormInput label="Nombre completo" name="name" type="text" placeholder="Lucio Morales" required />
          )}
          <FormInput
            label="Correo electrónico"
            name="email"
            type="email"
            placeholder="lucio_morales7@gmail.com"
            required
          />
          <FormInput label="Contraseña" name="password" type="password" placeholder="***********" required />
          <button className="bg-black text-white w-full py-2 rounded-md cursor-pointer">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
