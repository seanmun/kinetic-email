// src/pages/blog/BlogPage.tsx

import React from 'react';
import PageLayout from '../../components/layout/PageLayout';

const BlogPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Kinetic Email Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Deep dives, tutorials, and insights into the world of interactive email design and strategy.
        </p>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <div className="text-4xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-blue-900 mb-3">Blog Coming Soon!</h2>
          <p className="text-blue-800 mb-4">
            We're preparing in-depth articles, tutorials, and case studies to help you master kinetic email design.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 max-w-2xl mx-auto border border-gray-200">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-2xl text-gray-700">📝</span>
          <span className="text-lg font-semibold text-gray-800">Powered by Notion</span>
        </div>
        <p className="text-gray-600 text-sm">
          Our blog content is managed through Notion and automatically synced here.
        </p>
      </div>
    </PageLayout>
  );
};

export default BlogPage;