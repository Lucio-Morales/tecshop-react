import image_demo from '../../assets/headphones-1.png';

const ProductCard = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="w-full bg-gray-200 rounded-2xl p-6">
        <img className="w-full object-contain" src={image_demo} alt="Product image" />
      </div>

      <div className="flex flex-col p-4 gap-3 flex-grow">
        <h1 className="text-xl font-semibold">Headphones Sony</h1>
        {/* Reviews y precio */}
        <div className="flex items-center justify-between text-sm font-medium text-gray-500">
          <span>⭐ 5.0 (1.2k reviews)</span>
          <p className="font-semibold text-xl text-gray-900">$29.90</p>
        </div>
        {/* Botones */}
        <div className="flex gap-2 mt-auto">
          <button className="w-1/2 bg-gray-50 border-2 border-gray-300 hover:bg-gray-200 text-zinc-800 font-medium py-2 rounded-full cursor-pointer">
            Add to Cart
          </button>
          <button className="w-1/2 bg-zinc-800 hover:bg-zinc-900 text-white font-medium text-sm py-2 rounded-full cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
