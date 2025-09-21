import FormInput from './FormInput';

const RegisterForm = ({ onSubmit }) => {
  return (
    <div className="flex flex-col gap-5">
      <FormInput label="Nombre completo" name="name" type="text" placeholder="Lucio Morales" required />
      <FormInput label="Correo electronico" name="email" type="text" placeholder="ejemplo@gmail.com" required />
      <FormInput label="Contraseña" name="password" type="password" placeholder="**********" required />
      <button className="mt-2 bg-zinc-800 text-white px-4 py-2 w-full rounded-lg hover:bg-zinc-900 cursor-pointer">
        Crear cuenta
      </button>
    </div>
  );
};

export default RegisterForm;
