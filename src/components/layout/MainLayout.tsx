// src/components/layout/MainLayout.tsx

import { Outlet } from 'react-router-dom';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;