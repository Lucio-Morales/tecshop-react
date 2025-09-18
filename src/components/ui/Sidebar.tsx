import { useState } from 'react';
import AccordionItem from './AccordionItem';
import {
  Armchair,
  Cpu,
  Flower2,
  Gamepad,
  Headphones,
  Home,
  Joystick,
  Laptop,
  Laptop2,
  Mouse,
  UtensilsCrossed,
} from 'lucide-react';

// 1) Definimos tipos
type SubCategory = {
  name: string;
  icon: React.ReactNode;
};

type Category = {
  name: string;
  icon: React.ReactNode;
  subcategories: SubCategory[];
};

type SidebarProps = {
  categories?: Category[];
  className?: string;
};

// 2) Datos con íconos de ejemplo
const defaultCategories: Category[] = [
  {
    name: 'Computacion',
    icon: <Laptop2 className="w-5 h-5 text-gray-500" />,
    subcategories: [
      { name: 'Notebooks', icon: <Laptop className="w-4 h-4 text-gray-400" /> },
      { name: 'Components', icon: <Cpu className="w-4 h-4 text-gray-400" /> },
      { name: 'Accesorios', icon: <Headphones className="w-4 h-4 text-gray-400" /> },
    ],
  },
  {
    name: 'Gaming',
    icon: <Gamepad className="w-5 h-5 text-gray-500" />,
    subcategories: [
      { name: 'Joysticks', icon: <Joystick className="w-4 h-4 text-gray-400" /> },
      { name: 'Armchairs', icon: <Armchair className="w-4 h-4 text-gray-400" /> },
      { name: 'Mouse', icon: <Mouse className="w-4 h-4 text-gray-400" /> },
    ],
  },
  {
    name: 'Hogar',
    icon: <Home className="w-5 h-5 text-gray-500" />,
    subcategories: [
      { name: 'Muebles', icon: <Armchair className="w-4 h-4 text-gray-400" /> },
      { name: 'Decoración', icon: <Flower2 className="w-4 h-4 text-gray-400" /> },
      { name: 'Cocina', icon: <UtensilsCrossed className="w-4 h-4 text-gray-400" /> },
    ],
  },
];

const Sidebar = ({ categories = defaultCategories, className = '' }: SidebarProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <aside
      className={`p-4 border-2 border-gray-300 hidden md:block md:w-1/5 lg:w-1/6 xl:w-1/6 rounded-2xl bg-white shadow-sm ${className}`}
    >
      <h2 className="text-lg font-semibold mb-4">Categorías</h2>
      <nav>
        {categories.map((cat, idx) => (
          <AccordionItem
            key={idx}
            category={cat}
            index={idx}
            isOpen={openIndex === idx}
            onToggle={() => handleToggle(idx)}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
