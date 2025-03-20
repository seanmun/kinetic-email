// src/components/layout/PageLayout.tsx

import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`pt-24 pb-16 ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;