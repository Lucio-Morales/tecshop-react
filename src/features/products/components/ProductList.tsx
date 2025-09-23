import type { Product } from '../../../types/Product';
import ProductCard from './ProductCard';
import image_0 from '../../../assets/notebook.png';
import image_1 from '../../../assets/headphones-1.png';
import image_2 from '../../../assets/headphones-2.png';
import image_3 from '../../../assets/mouse0.png';
import image_5 from '../../../assets/mouse1.png';
import image_6 from '../../../assets/notebook-1.png';
import image_7 from '../../../assets/camara-0.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const products: Product[] = [
  {
    id: '1',
    name: 'Auriculares inalámbricos',
    description: 'Auriculares Bluetooth con cancelación de ruido y batería de 20h',
    price: 79.99,
    stock: 25,
    images: [image_7],
    category: 'Audio',
    reviews: '5.0 (2k reviews)',
  },
  {
    id: '2',
    name: 'Mouse gamer RGB',
    description: 'Mouse óptico con 7 botones programables y luces RGB',
    price: 39.99,
    stock: 50,
    images: [image_6],
    category: 'Periféricos',
    reviews: '4.2 (1.2k reviews)',
  },
  {
    id: '3',
    name: 'Teclado mecánico',
    description: 'Teclado mecánico con switches rojos y retroiluminación LED',
    price: 99.99,
    stock: 15,
    images: [image_1],
    category: 'Periféricos',
    reviews: '3.4 (900 reviews)',
  },
  {
    id: '4',
    name: "Monitor 27'' 144Hz",
    description: 'Monitor gaming 27 pulgadas con tasa de refresco de 144Hz',
    price: 249.99,
    stock: 10,
    images: [image_0],
    category: 'Monitores',
    reviews: '1.5 (324 reviews)',
  },
  {
    id: '5',
    name: 'Silla gamer ergonómica',
    description: 'Silla con soporte lumbar, reposabrazos ajustables y cuero sintético',
    price: 199.99,
    stock: 8,
    images: [image_5],
    category: 'Muebles',
    reviews: '5.0 (2.2k reviews)',
  },
  {
    id: '6',
    name: 'Parlante portátil',
    description: 'Parlante Bluetooth resistente al agua con batería de 15h',
    price: 59.99,
    stock: 40,
    images: [image_1],
    category: 'Audio',
    reviews: '5.0 (1.2k reviews)',
  },
  {
    id: '7',
    name: 'Laptop ultrabook',
    description: 'Laptop ligera con procesador i7, 16GB RAM y SSD 512GB',
    price: 1099.99,
    stock: 5,
    images: [image_2],
    category: 'Computadoras',
    reviews: '4.1 (1k reviews)',
  },
  {
    id: '8',
    name: 'Cámara web HD',
    description: 'Cámara web 1080p con micrófono integrado y enfoque automático',
    price: 49.99,
    stock: 35,
    images: [image_3],
    category: 'Accesorios',
    reviews: '5.0 (1.9k reviews)',
  },
  {
    id: '9',
    name: 'Micrófono USB',
    description: 'Micrófono condensador ideal para streaming y podcasting',
    price: 89.99,
    stock: 20,
    images: [image_5],
    category: 'Audio',
    reviews: '2.0 (1.5k reviews)',
  },
];

const ProductList = () => {
  return (
    <section className="w-full px-8 md:w-3/4 lg:w-5/6 xl:w-5/6 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {/* Product Card */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-around items-center py-4 border-t border-gray-300 gap-6 mt-10">
        {/* Previous */}
        <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition cursor-pointer">
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-2 ">
          <button className="text-gray-900 font-semibold cursor-pointer bg-gray-200 px-3 py-2 rounded-lg">1</button>
          <button className="text-gray-700 hover:text-gray-900 cursor-pointer px-3 py-2 rounded-lg">2</button>
          <button className="text-gray-700 hover:text-gray-900 cursor-pointer px-3 py-2 rounded-lg">3</button>
          <span className="text-gray-500">...</span>
          <button className="text-gray-700 hover:text-gray-900 cursor-pointer px-3 py-2 rounded-lg">9</button>
        </div>

        {/* Next */}
        <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition cursor-pointer">
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default ProductList;
