import { Outlet } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';

const PublicLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto flex">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
