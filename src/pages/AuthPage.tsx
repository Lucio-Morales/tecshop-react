import { useEffect, useState } from 'react';
import LoginForm from '../features/auth/components/LoginForm';
import RegisterForm from '../features/auth/components/RegisterForm';
import { registerUser } from '../api/requests/posts';
import { supabase } from '../lib/supabaseClient';

const AuthPage = () => {
  const [view, setView] = useState('login'); // register | success | login | error
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [session, setSession] = useState<any>(null);
  const [userRole, setUserRole] = useState<any>(null);

  useEffect(() => {
    // Maneja el estado inicial de la sesión
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      // Busca el rol si ya hay una sesión
      if (session) {
        fetchUserRole(session.user.id);
      }
    });

    // Escucha cambios en el estado de autenticación
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      if (newSession) {
        fetchUserRole(newSession.user.id);
      } else {
        setUserRole(null);
      }
    });

    // Limpia el listener cuando el componente se desmonte
    return () => {
      subscription.unsubscribe();
    };
  }, []); // El array vacío asegura que se ejecute solo una vez al montar

  const fetchUserRole = async (userId: any) => {
    try {
      // Esta es la consulta que trae el rol
      const { data: profile, error } = await supabase.from('profiles').select('role').eq('id', userId).single();

      if (error) {
        throw error;
      }

      // Valida si el perfil existe antes de actualizar el estado
      if (profile && profile.role) {
        setUserRole(profile.role);
      } else {
        // En caso de no encontrar un rol, asigna un valor por defecto
        setUserRole('sin rol');
      }
    } catch (error: any) {
      console.error('Error al obtener el rol del usuario:', error);
      setUserRole('error'); // Asigna un estado de error para depurar
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
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

  return (
    <div>
      {!session ? (
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
                <LoginForm setSession={setSession} loading={loading} />
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
                      ? 'border-red-500 bg-red-100 text-red-500'
                      : 'border-green-300 bg-green-100 text-green-500'
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
      ) : (
        <div className="mt-40">
          <p>Bienvenido, {session.user.email}!</p>
          <p>Tu rol es: {userRole}</p>
          <button onClick={handleLogout}>Cerrar Sesión</button>
          {/* Renderiza componentes basados en el rol */}
          {userRole === 'admin' && <p>Panel de administrador</p>}
          {userRole === 'seller' && <p>Panel de vendedor</p>}
          {userRole === 'client' && <p>Panel de cliente</p>}
        </div>
      )}

      {/* div global */}
    </div>
  );
};

export default AuthPage;
