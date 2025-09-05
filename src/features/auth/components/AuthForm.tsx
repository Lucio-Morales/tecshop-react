import type { FormEvent } from 'react';
import FormInput from './FormInput';

interface AuthFormProps {
  type: 'login' | 'register';
  onSubmit: (data: { email: string; password: string; name?: string }) => void;
}

const AuthForm = ({ type, onSubmit }: AuthFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
      name?: string;
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col border gap-4">
      <div>
        {type === 'register' && (
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
      </div>

      <button type="submit" className="rounded-md bg-zinc-800 px-4 py-2 text-white hover:bg-zinc-900 transition">
        {type === 'login' ? 'Ingresar' : 'Crear cuenta'}
      </button>
    </form>
  );
};

export default AuthForm;
