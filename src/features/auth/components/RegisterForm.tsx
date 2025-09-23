import type { FormEvent } from 'react';
import FormInput from './FormInput';

type RegisterFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <FormInput label="Nombre completo" name="name" type="text" placeholder="Lucio Morales" required />
      <FormInput label="Correo electronico" name="email" type="text" placeholder="ejemplo@gmail.com" required />
      <FormInput label="Contraseña" name="password" type="password" placeholder="**********" required />
      <button
        type="submit"
        className="mt-2 bg-zinc-800 text-white px-4 py-2 w-full rounded-lg hover:bg-zinc-900 cursor-pointer"
      >
        Crear cuenta
      </button>
    </form>
  );
};

export default RegisterForm;
