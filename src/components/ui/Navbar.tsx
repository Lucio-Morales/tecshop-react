import { ShoppingCart } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const Navbar = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3" aria-label="Main navigation">
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
        </ul>

        {/* Acciones: Carrito + Login */}
        <div className="flex items-center gap-4">
          <Link
            to={isAuthenticated ? '/cart' : '/login'}
            className="relative flex items-center "
            aria-label="Ver carrito"
          >
            <ShoppingCart className="text-zinc-700 hover:text-black h-6 w-6" />
            <span className="absolute -top-2 -right-2 rounded-full bg-red-400 px-1 text-xs text-white">0</span>
          </Link>

          <Link
            to={isAuthenticated ? '/profile' : '/login'}
            className="rounded-md border border-zinc-700 px-3 py-1 text-zinc-700 hover:text-black transition"
          >
            {isAuthenticated ? 'Profile' : 'Ingresar'}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
