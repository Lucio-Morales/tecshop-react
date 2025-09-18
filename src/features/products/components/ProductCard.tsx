import type { Product } from '../../../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="w-full bg-gray-200 rounded-2xl p-7 relative mb-4">
        <span className="absolute bg-white  border-gray-300 rounded-full shadow text-xs top-2 right-2 font-semibold px-3 py-1">
          {product.category}
        </span>
        <div className="w-full h-54 flex items-center justify-center overflow-hidden">
          <img className="w-full object-contain" src={product.images[0]} alt="Product image" />
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <h1 className="text-xl font-semibold mb-1">{product.name}</h1>
        {/* Reviews y precio */}
        <div className="flex items-center justify-between text-sm font-medium text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <img src="/star.svg" alt="star icon" className="w-4 h-4" />
            <span>{product.reviews}</span>
          </div>
          <p className="font-medium text-2xl text-zinc-900">${product.price}</p>
        </div>

        {/* Botones */}
        <div className="flex gap-2 mt-auto">
          <button className="w-1/2 bg-gray-50 border-2 border-gray-300 hover:bg-gray-200 text-zinc-800 font-medium text-sm py-2 rounded-full cursor-pointer">
            Add to Cart
          </button>
          <button className=" w-1/2 bg-zinc-800 hover:bg-zinc-900 text-white font-medium text-sm py-2 rounded-full cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
