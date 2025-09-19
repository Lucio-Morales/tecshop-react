import { Outlet } from 'react-router-dom';
import Header from '../components/ui/Header';

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
