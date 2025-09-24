import { useState } from 'react';
import LoginForm from '../features/auth/components/LoginForm';
import RegisterForm from '../features/auth/components/RegisterForm';
import { registerUser } from '../api/requests/posts';

const AuthPage = () => {
  const [view, setView] = useState('register'); // register | success | login | error
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleRegister = async (userData: any) => {
    setLoading(true);

    try {
      await registerUser(userData);
      setView('success');
      setMessage('¡Registro exitoso! Inicia sesión por favor.');
    } catch (error: any) {
      setView('error');
      const errorMessage = error.response?.data?.message || 'Ocurrió un error inesperado.';
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  const handleLogin = (event: any) => {
    event.preventDefault();
    alert('Click en handleLogin');
    // Lógica para enviar datos al backend
  };

  return (
    <div className="h-screen flex flex-col items-center pt-30">
      {/* TABS BUTTONS */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setView('login')}
          className={`px-4 py-2 text-lg transition cursor-pointer border-b-2 border-transparent ${
            view === 'login' ? 'border-b-2 border-zinc-800 text-black-800' : 'text-gray-600 hover:text-gray-900'
          }`}
          disabled={loading || view === 'success'}
        >
          Iniciar sesión
        </button>
        <button
          onClick={() => setView('register')}
          className={`px-4 py-2 text-lg transition cursor-pointer border-b-2 border-transparent ${
            view === 'register' ? 'border-b-2 border-zinc-800 text-black-800' : 'text-gray-600 hover:text-gray-900'
          }`}
          disabled={loading || view === 'success'}
        >
          Crear cuenta
        </button>
      </div>

      {/* FORM CONTAINER: Renderizado condicional basado en la vista */}
      <div className="rounded-lg w-full max-w-sm shadow-lg relative min-h-[400px] ">
        {/* Usamos el posicionamiento absoluto en cada formulario. */}
        {view === 'login' && (
          <div className="absolute inset-0 p-2 ">
            <LoginForm onSubmit={handleLogin} loading={loading} />
          </div>
        )}
        {view === 'register' && (
          <div className="absolute inset-0 p-2 ">
            <RegisterForm onRegister={handleRegister} loading={loading} />
          </div>
        )}

        {/* Si la vista es 'success' o 'error', se muestra el mensaje centrado */}
        {(view === 'success' || view === 'error') && (
          <div className=" absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
            <h2 className={`text-xl font-semibold mb-2 ${view === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {view === 'success' ? '¡Éxito!' : 'Error'}
            </h2>
            <p
              className={`border p-2 rounded-lg mb-4 ${
                view === 'error'
                  ? 'border-red-500 bg-red-300 text-red-500'
                  : 'border-green-500 bg-green-500 text-green-200'
              }`}
            >
              {message}
            </p>

            <button
              onClick={() => {
                view === 'success' ? setView('login') : setView('register');
              }}
              className="w-1/2 py-2 px-4 text-sm rounded-md text-white font-semibold bg-zinc-800 hover:bg-zinc-900 cursor-pointer"
            >
              {view === 'success' ? 'Iniciar sesion' : 'Volver a intentar'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
