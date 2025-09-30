import { useState } from 'react';
import FormInput from './FormInput';
import type { UserCredentials } from '../types';

const LoginForm = () => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: '',
    password: '',
  });

  const handleLogin = async (event: any) => {
    event.preventDefault();

    console.log('Login click');
  };

  // Tipa el evento correctamente
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Usa el nombre del campo para actualizar la propiedad correcta del objeto
    const { name, value } = event.target;
    // Combina el estado anterior con el nuevo valor
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleLogin} className=" flex flex-col gap-4">
      <FormInput
        label="Correo electronico"
        name="email"
        type="text"
        placeholder="ejemplo@gmail.com"
        value={credentials.email}
        onChange={handleChange}
        required
      />
      <FormInput
        label="Contraseña"
        name="password"
        type="password"
        placeholder="**********"
        value={credentials.password}
        onChange={handleChange}
        required
      />

      <a href="#" className="text-sm text-zinc-600 hover:underline -mt-2">
        ¿Olvidaste tu contraseña?
      </a>
      <button
        type="submit"
        className="mt-2 font-medium bg-zinc-800 text-white px-4 py-2 rounded-lg w-full hover:bg-zinc-900 cursor-pointer"
      >
        Iniciar sesión
      </button>
      <button className="mt-2 font-medium border-2 text-gray-500 border-gray-200 px-4 py-2 rounded-lg w-full hover:text-gray-600 hover:bg-gray-100 cursor-pointer flex items-center justify-center gap-2">
        <img src="/google-icon.svg" className="w-6 h-6" alt="Google Icon" />
        <span>Ingresar con Google</span>
      </button>
    </form>
  );
};

export default LoginForm;
