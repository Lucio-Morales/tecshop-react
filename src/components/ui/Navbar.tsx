import { ShoppingCart } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          TechStore
        </Link>

        {/* Links principales */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : 'hover:text-blue-600')} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" className={({ isActive }) => (isActive ? 'text-blue-600' : 'hover:text-blue-600')}>
              Tienda
            </NavLink>
          </li>
        </ul>

        {/* Acciones: Carrito + Login */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative flex items-center hover:text-blue-600" aria-label="Ver carrito">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 rounded-full bg-blue-600 px-1 text-xs text-white">0</span>
          </Link>

          <Link
            to="/login"
            className="rounded-md border border-blue-600 px-3 py-1 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Ingresar
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
