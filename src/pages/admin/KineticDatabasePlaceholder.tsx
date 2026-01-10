// src/pages/admin/KineticDatabasePlaceholder.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaServer, FaArrowLeft, FaSearch, FaStar, FaChartLine, FaCopy } from 'react-icons/fa';

const KineticDatabasePlaceholder: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FaSearch,
      title: 'Search & Filter',
      description: 'Browse all generated emails by prompt, technique, or date'
    },
    {
      icon: FaStar,
      title: 'Favorites',
      description: 'Mark and save your best email generations for quick access'
    },
    {
      icon: FaCopy,
      title: 'Clone Prompts',
      description: 'Reuse successful prompts to generate similar emails'
    },
    {
      icon: FaChartLine,
      title: 'Analytics',
      description: 'Track most popular techniques and generation success rates'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => navigate('/station')}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <FaArrowLeft />
          <span>Back to Station</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6">
            <FaServer className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kinetic Database
          </h1>
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            COMING SOON
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A centralized repository for all your generated kinetic emails with powerful search and management features
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-purple-600 text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Preview */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✓</span>
              <span>Complete history of all playground-generated emails</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✓</span>
              <span>Advanced filtering by technique, complexity, and success metrics</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✓</span>
              <span>One-click prompt cloning for rapid iteration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✓</span>
              <span>Usage analytics to identify trending techniques</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KineticDatabasePlaceholder;
