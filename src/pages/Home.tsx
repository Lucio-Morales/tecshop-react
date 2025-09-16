import Hero from '../components/ui/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <main className="-mt-10 md:-mt-16 relative z-10 bg-white rounded-lg shadow-lg p-6 mx-4 sm:mx-6 md:mx-8">
        <aside className="mb-4">Sidebar</aside>
        <section>Products list</section>
      </main>
    </div>
  );
};

export default Home;
