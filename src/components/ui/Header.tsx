import { Search, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-16 mx-2 sm:mx-4 md:mx-8 lg:mx-16 flex items-center justify-between h-12 sm:h-16 rounded-b-lg">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold">Logo</div>

        {/* Search bar */}
        <div className="relative flex-1 mx-2 sm:mx-4 max-w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-1.5 sm:py-2 text-sm sm:text-base outline-none"
          />
        </div>

        {/* Botones */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="border flex items-center px-2 py-1.5 sm:px-2 sm:py-2 rounded-full">
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="border flex items-center px-2 py-1.5 sm:px-2 sm:py-2 rounded-full">
            <User className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import { useState } from 'react';
// import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 shadow-md z-50">
//       <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-16 mx-2 sm:mx-4 md:mx-8 lg:mx-16 flex items-center justify-between h-12 sm:h-16 rounded-b-lg">
//         {/* Logo */}
//         <div className="text-xl sm:text-2xl font-bold">Logo</div>

//         {/* Barra de búsqueda y botones - ocultos en móvil */}
//         <div className="hidden sm:flex flex-1 items-center mx-4 max-w-md">
//           {/* Search */}
//           <div className="relative flex-1">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Buscar..."
//               className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 text-base outline-none"
//             />
//           </div>

//           {/* Botones */}
//           <div className="flex items-center space-x-4 ml-4">
//             <button className="border flex items-center px-2 py-2 rounded-full">
//               <ShoppingCart className="w-5 h-5" />
//             </button>
//             <button className="border flex items-center px-2 py-2 rounded-full">
//               <User className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Botón de menú hamburguesa - visible solo en móvil */}
//         <button className="sm:hidden border p-2 rounded-md" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//         </button>
//       </div>

//       {/* Menú desplegable móvil */}
//       {isMenuOpen && (
//         <div className="sm:hidden bg-white shadow-md px-4 pt-2 pb-4 flex flex-col space-y-2">
//           {/* Search */}
//           <div className="relative w-full">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Buscar..."
//               className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 text-base outline-none"
//             />
//           </div>

//           {/* Botones */}
//           <div className="flex space-x-2 mt-2">
//             <button className="border flex-1 flex items-center justify-center px-2 py-2 rounded-full">
//               <ShoppingCart className="w-5 h-5" />
//             </button>
//             <button className="border flex-1 flex items-center justify-center px-2 py-2 rounded-full">
//               <User className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
