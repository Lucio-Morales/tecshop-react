import { useAuth } from '../../auth/context/AuthContext';

const AdminDashboard = () => {
  const { user, profile } = useAuth();

  if (!profile) {
    return <div>Cargando perfil...</div>;
  }

  return (
    <div>
      <h1>Panel de Administración</h1>
      <p>Bienvenido, {user?.email}!</p>
      <p>Tu rol es: {profile.role}</p>
      <p>Este es un dashboard protegido solo para administradores.</p>
    </div>
  );
};

export default AdminDashboard;
