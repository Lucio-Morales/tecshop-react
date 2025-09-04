import { Outlet } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';

const PublicLayout = () => {
  return (
    <div className="bg-zinc-300 flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-gray-400 flex-1 container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
