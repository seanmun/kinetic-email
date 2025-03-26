// src/components/layout/MainLayout.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import ScrollToTop from '../common/ScrollToTop';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;