import { ShoppingCart, User } from 'lucide-react';

const Header = () => {
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
              <a className=" px-4 py-2 block hover:bg-gray-100 rounded-3xl" href="#">
                Home
              </a>
            </li>
            <li>
              <a className=" px-4 py-2 block hover:bg-gray-100 rounded-3xl" href="#">
                Shop
              </a>
            </li>
            <li>
              <a className=" px-4 py-2 block hover:bg-gray-100 rounded-3xl" href="#">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        {/* Botones */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="border flex items-center px-2 py-2 rounded-full cursor-pointer hover:bg-gray-100">
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="border flex items-center px-2 py-2 rounded-full cursor-pointer hover:bg-gray-100">
            <User className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
