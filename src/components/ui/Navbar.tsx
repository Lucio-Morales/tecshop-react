import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuthStore();

  // Determinar URL del carrito según rol
  const cartLink = isAuthenticated && user?.role === 'CUSTOMER' ? '/cart' : '/login';

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          TechStore
        </Link>

        {/* Links principales */}
        <ul className="hidden md:flex gap-6 text-zinc-700 font-medium">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-black' : 'hover:text-black')} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" className={({ isActive }) => (isActive ? 'text-black' : 'hover:text-black')}>
              Tienda
            </NavLink>
          </li>

          {/* Solo Admin */}
          {isAuthenticated && user?.role === 'ADMIN' && (
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) => (isActive ? 'text-black' : 'hover:text-black')}
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>

        {/* Acciones: Carrito + Login/Logout */}
        <div className="flex items-center gap-4">
          {/* Carrito visible para CUSTOMER o invitado */}
          {(user?.role === 'CUSTOMER' || !isAuthenticated) && (
            <Link to={cartLink} className="relative flex items-center hover:text-black" aria-label="Ver carrito">
              <ShoppingCart className="h-6 w-6" />
              {isAuthenticated && user?.role === 'CUSTOMER' && (
                <span className="absolute -top-2 -right-2 rounded-full bg-zinc-700 px-1 text-xs text-white">0</span>
              )}
            </Link>
          )}

          {/* Usuario no logueado */}
          {!isAuthenticated && (
            <Link
              to="/login"
              className="rounded-md border border-zinc-700 px-3 py-1 text-zinc-700 hover:bg-zinc-700 hover:text-white transition"
            >
              Ingresar
            </Link>
          )}

          {/* Usuario logueado */}
          {isAuthenticated && (
            <button
              onClick={logout}
              className="rounded-md border border-red-600 px-3 py-1 text-red-600 hover:bg-red-600 hover:text-white transition"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
