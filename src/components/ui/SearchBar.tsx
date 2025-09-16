import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative flex-1 mx-2 sm:mx-4 max-w-full sm:max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-1.5 sm:py-2 text-sm sm:text-base outline-none"
      />
    </div>
  );
};

export default SearchBar;
