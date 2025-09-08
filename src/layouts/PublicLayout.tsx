import { Outlet } from 'react-router-dom';
import Header from '../components/ui/Header';
// import Navbar from '../components/ui/Navbar';

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
