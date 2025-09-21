import FormInput from './FormInput';

const LoginForm = ({ onSubmit }) => {
  return (
    <div className="flex flex-col gap-4">
      <FormInput label="Correo electronico" name="email" type="text" placeholder="ejemplo@gmail.com" required />
      <FormInput label="Contraseña" name="password" type="password" placeholder="**********" required />
      <button className="mt-2 bg-zinc-800 text-white px-4 py-2 rounded-lg w-full hover:bg-zinc-900 cursor-pointer">
        Iniciar sesión
      </button>
    </div>
  );
};

export default LoginForm;
