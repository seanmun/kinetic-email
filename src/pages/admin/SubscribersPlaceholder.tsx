// src/pages/admin/SubscribersPlaceholder.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaArrowLeft, FaEnvelope, FaChartBar, FaFilter, FaPaperPlane } from 'react-icons/fa';

const SubscribersPlaceholder: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FaEnvelope,
      title: 'List Management',
      description: 'Organize and manage your email subscriber lists'
    },
    {
      icon: FaFilter,
      title: 'Segmentation',
      description: 'Create targeted segments based on subscriber behavior'
    },
    {
      icon: FaPaperPlane,
      title: 'Campaign Sending',
      description: 'Send email campaigns using your Assets templates'
    },
    {
      icon: FaChartBar,
      title: 'Analytics',
      description: 'Track open rates, clicks, and engagement metrics'
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl mb-6">
            <FaUsers className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Subscribers Tool
          </h1>
          <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            COMING SOON
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete email marketing platform to manage subscribers and send kinetic email campaigns
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
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-emerald-600 text-xl" />
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
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <span>Import and manage subscriber lists with custom fields</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <span>Create segments based on engagement and preferences</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <span>Send campaigns using templates from Assets Manager</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <span>Real-time analytics and delivery reports</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <span>Integration with Resend API for reliable email delivery</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubscribersPlaceholder;
