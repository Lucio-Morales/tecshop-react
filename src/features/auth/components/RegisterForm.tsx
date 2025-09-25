import { useState } from 'react';
import FormInput from './FormInput';

type RegisterFormProps = {
  onRegister: (formData: any) => void;
  loading: boolean;
};

const RegisterForm = ({ onRegister, loading }: RegisterFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Puedes añadir un estado para manejar errores de validación a nivel de formulario si lo necesitas
  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Aquí podrías añadir una validación básica antes de enviar al padre
    // Por ejemplo, setValidationErrors({...})
    if (!formData.name || !formData.email || !formData.password) {
      setValidationErrors({
        name: 'El nombre es obligatorio.',
        email: 'El email es necesario',
        password: 'La contraseña es obligatoria',
      });
    }
    console.log('formData:', formData);

    try {
      // Llama al endpoint del backend para registrar
      // y manejar el rol
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName: formData.name, email: formData.email, password: formData.password }),
      });
      console.log('RESPONSE:', response);

      const data = await response.json();
      console.log('DATA:', data);

      if (response.ok) {
        setFormData({ name: '', email: '', password: '' });
        alert(data.message);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert('Error inesperado al registrar.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <FormInput
        label="Nombre completo"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Lucio Morales"
        required
        disabled={loading}
        error={validationErrors.name}
      />
      <FormInput
        label="Correo electronico"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="ejemplo@gmail.com"
        required
        disabled={loading}
        error={validationErrors.email}
      />
      <FormInput
        label="Contraseña"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="**********"
        required
        disabled={loading}
        error={validationErrors.password}
      />
      <button
        type="submit"
        disabled={loading}
        className={`mt-2 text-white px-4 py-2 w-full rounded-lg cursor-pointer ${
          loading ? 'bg-zinc-700 cursor-not-allowed' : 'bg-zinc-800 hover:bg-zinc-900'
        }`}
      >
        {loading ? 'Creando cuenda..' : 'Crear cuenta'}
      </button>
    </form>
  );
};

export default RegisterForm;
