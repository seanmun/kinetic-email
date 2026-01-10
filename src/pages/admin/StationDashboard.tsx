// src/pages/admin/StationDashboard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDatabase, FaServer, FaUsers, FaFileImage, FaArrowRight, FaClock } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface ToolCard {
  id: string;
  name: string;
  description: string;
  icon: IconType;
  route: string;
  status: 'active' | 'coming-soon';
  gradient: string;
  iconColor: string;
}

const tools: ToolCard[] = [
  {
    id: 'rag',
    name: 'RAG Knowledge Base',
    description: 'Upload HTML examples and blog content to train the AI',
    icon: FaDatabase,
    route: '/station/rag',
    status: 'active',
    gradient: 'from-blue-600 to-indigo-600',
    iconColor: 'text-blue-600'
  },
  {
    id: 'database',
    name: 'Kinetic Database',
    description: 'Browse and manage all generated kinetic emails',
    icon: FaServer,
    route: '/station/database',
    status: 'coming-soon',
    gradient: 'from-purple-600 to-pink-600',
    iconColor: 'text-purple-600'
  },
  {
    id: 'subscribers',
    name: 'Subscribers',
    description: 'Manage email lists and send campaigns',
    icon: FaUsers,
    route: '/station/subscribers',
    status: 'coming-soon',
    gradient: 'from-emerald-600 to-teal-600',
    iconColor: 'text-emerald-600'
  },
  {
    id: 'assets',
    name: 'Assets Manager',
    description: 'View and manage email template assets',
    icon: FaFileImage,
    route: '/station/assets',
    status: 'active',
    gradient: 'from-orange-600 to-red-600',
    iconColor: 'text-orange-600'
  }
];

const StationDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleToolClick = (tool: ToolCard) => {
    if (tool.status === 'active') {
      navigate(tool.route);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900 }}>
            STATION
          </h1>
          <p className="text-gray-400 text-lg">Admin Control Center</p>
        </div>

        {/* Tool Cards Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            const isActive = tool.status === 'active';

            return (
              <div
                key={tool.id}
                onClick={() => handleToolClick(tool)}
                className={`
                  relative bg-gradient-to-br from-gray-800 to-gray-900
                  rounded-2xl p-6 border-2 transition-all duration-300
                  ${isActive
                    ? 'border-gray-700 hover:border-blue-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02]'
                    : 'border-gray-800 opacity-60 cursor-not-allowed'
                  }
                `}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {tool.status === 'active' ? (
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ACTIVE
                    </span>
                  ) : (
                    <span className="bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <FaClock className="text-xs" />
                      COMING SOON
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${tool.gradient} mb-4`}>
                  <Icon className="text-white text-2xl" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-400 mb-6">
                  {tool.description}
                </p>

                {/* Action */}
                {isActive && (
                  <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                    <span>Open Tool</span>
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Logged in as admin • Session active
          </p>
        </div>
      </div>
    </div>
  );
};

export default StationDashboard;
