import { LogIn, ShoppingCart, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const isAuthenticated = false;
  const user = { role: 'client' };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-16 mx-2 sm:mx-4 md:mx-8 lg:mx-16 flex items-center justify-between h-12 sm:h-16 rounded-b-lg">
        {/* Logo */}
        <div className="flex items-center p-2 space-x-2 sm:space-x-1 bg-gray-300 rounded-2xl  sm:text-sm cursor-pointer">
          <img src="/headphones.svg" alt="Logo" className="w-4 h-4 sm:w-6  sm:h-6" />
          <span className="italic font-['Press_Start_2P']">Tecshop</span>
        </div>

        <nav className="hidden sm:block">
          <ul className="px-4 flex justify-center space-x-6 font-semibold">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `px-4 py-2 block font-normal rounded-3xl ${
                    isActive ? 'text-gray-900 ' : 'text-gray-500 hover:text-gray-900 '
                  }`
                }
                to="/"
              >
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `px-4 py-2 block font-normal rounded-3xl ${
                    isActive ? 'text-gray-900 ' : 'text-gray-500 hover:text-gray-900'
                  }`
                }
                to="/about"
              >
                Quiénes somos?
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              `px-4 py-2 rounded-3xl font-normal text-gray-500 hover:text-gray-900 transition-colors duration-200 ease-in-out flex items-center space-x-2 ${
                isActive ? 'text-gray-900' : ''
              }`
            }
          >
            <LogIn className="w-4 h-4" />
            <span>Iniciar Sesión</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
