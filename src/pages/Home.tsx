import Sidebar from '../components/ui/Sidebar';
import Hero from '../components/ui/Hero';
import ProductCard from '../components/ui/ProductCard';

const Home = () => {
  return (
    <div>
      <Hero />
      <main className="-mt-10 md:-mt-16 relative z-10 bg-white rounded-2xl shadow-lg p-6 mx-2 sm:mx-4 md:mx-8 lg:mx-16">
        <div className="mb-14">
          <h1 className="text-2xl font-semibold">Give All You Need</h1>
        </div>
        <div className="flex gap-4">
          {/* SIDEBAR  */}
          {/* <aside className="p-4 mb-4 border-2 border-gray-300 hidden md:block md:w-1/5 lg:1/6 xl:1/7 rounded-2xl">
            Sidebar
          </aside> */}
          <Sidebar />

          {/* PRODUCT LIST */}
          <section className=" w-full md:w-3/4 lg:w-5/6 xl:w-5/6 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
              {/* Product Card */}
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
// sm:mx-4 md:mx-8 lg:mx-16
