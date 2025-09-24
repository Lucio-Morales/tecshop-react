import type { FormEvent } from 'react';
import FormInput from './FormInput';

type LoginFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
};

const LoginForm = ({ onSubmit, loading }: LoginFormProps) => {
  return (
    <form onSubmit={onSubmit} className=" flex flex-col gap-4">
      <FormInput label="Correo electronico" name="email" type="text" placeholder="ejemplo@gmail.com" required />
      <FormInput label="Contraseña" name="password" type="password" placeholder="**********" required />

      <a href="#" className="text-sm text-zinc-600 hover:underline -mt-2">
        ¿Olvidaste tu contraseña?
      </a>
      <button
        type="submit"
        className="mt-2 font-medium bg-zinc-800 text-white px-4 py-2 rounded-lg w-full hover:bg-zinc-900 cursor-pointer"
      >
        {loading ? 'Iniciando sesión..' : 'Iniciar sesión'}
      </button>
      <button className="mt-2 font-medium border-2 text-gray-500 border-gray-200 px-4 py-2 rounded-lg w-full hover:text-gray-600 hover:bg-gray-100 cursor-pointer flex items-center justify-center gap-2">
        <img src="/google-icon.svg" className="w-6 h-6" alt="Google Icon" />
        <span>Ingresar con Google</span>
      </button>
    </form>
  );
};

export default LoginForm;
