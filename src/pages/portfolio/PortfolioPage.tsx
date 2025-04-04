// src/pages/portfolio/PortfolioPage.tsx
// Main portfolio page that displays all project cards

import React from 'react';
import { Link } from 'react-router-dom';
import { Project, projects } from './data/projectsData';
// We'll use these icons instead of images
import { FaSun, FaLaptopCode, FaTshirt, FaChartBar, FaMoon, FaGift } from 'react-icons/fa';

// Map project IDs to icons
const projectIcons: Record<string, React.ReactNode> = {
  'daylight': <FaSun size={36} className="text-amber-500" />,
  'onboarding': <FaLaptopCode size={36} className="text-indigo-500" />,
  'product-launch': <FaTshirt size={36} className="text-pink-500" />,
  'feedback-survey': <FaChartBar size={36} className="text-green-500" />,
  'amber-mode': <FaMoon size={36} className="text-blue-500" />,
  'holiday-campaign': <FaGift size={36} className="text-red-500" />
};

const PortfolioPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Email Campaign Portfolio</h1>
        <p className="text-lg text-gray-600">
          Browse our collection of interactive kinetic email campaigns created for various brands.
        </p>
      </div>

      {/* Project cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

// Project card component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Link 
      to={`/portfolio/${project.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6 bg-gray-50 flex items-center justify-center h-40">
        <div className="flex flex-col items-center">
          {projectIcons[project.id] || <div className="w-9 h-9 bg-gray-300 rounded-full" />}
          <div className="mt-2 text-lg font-semibold text-gray-700">{project.brand}</div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
        <h4 className="text-sm text-gray-500 mb-3">{project.brand}</h4>
        <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-500">
            {project.totalEmails} {project.totalEmails === 1 ? 'email' : 'emails'}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.keywords.map((keyword, index) => (
            <span 
              key={index}
              className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PortfolioPage;