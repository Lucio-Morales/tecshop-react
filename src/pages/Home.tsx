import Sidebar from '../components/ui/Sidebar';
import Hero from '../components/ui/Hero';
import ProductList from '../features/products/components/ProductList';

const Home = () => {
  const heroImg = '/hero-image.webp';
  const heroLabel = 'Shop';
  return (
    <div>
      <Hero heroImg={heroImg} heroLabel={heroLabel} />
      <main className="-mt-10 md:-mt-16 relative z-10 bg-white rounded-2xl shadow-lg p-6 mx-2 sm:mx-4 md:mx-8 lg:mx-16">
        <div className="mb-14">
          <h1 className="text-2xl font-semibold">Give All You Need</h1>
        </div>
        <div className="flex gap-4">
          {/* SIDEBAR  */}
          <Sidebar />
          {/* PRODUCT LIST */}
          <ProductList />
        </div>
      </main>
    </div>
  );
};

export default Home;
