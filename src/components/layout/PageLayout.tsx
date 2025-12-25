// src/components/layout/PageLayout.tsx

import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`pt-24 pb-16 ${className}`}>
      <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;