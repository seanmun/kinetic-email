// src/pages/learn/LearnPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';

// Module definitions
const modules = [
  {
    id: 'introduction',
    title: 'Introduction to Kinetic Emails',
    description: 'Learn what makes emails "kinetic" and why they can dramatically improve engagement.',
    path: '/learn/introduction',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'checkbox-hack',
    title: 'The Checkbox Hack',
    description: 'Understand the core technique behind kinetic emails using input elements and CSS selectors.',
    path: '/learn/checkbox-hack',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'lightswitch',
    title: 'The Kinetic Lightswitch',
    description: 'Learn how to detect if an email client supports kinetic interactivity and provide appropriate fallbacks.',
    path: '/learn/lightswitch',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 'tabbed-elements',
    title: 'Building Tabbed Elements',
    description: 'Create interactive tab interfaces in your emails to organize content.',
    path: '/learn/tabbed-elements',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    )
  },
  {
    id: 'advanced-techniques',
    title: 'Advanced Techniques',
    description: 'Explore more complex kinetic email techniques including product showcases and interactive surveys.',
    path: '/learn/advanced-techniques',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'tracking',
    title: 'Kinetic Email Tracking',
    description: 'Transform kinetic interactions into actionable business intelligence using pixel tracking techniques.',
    path: '/learn/tracking',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const LearnPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learn Kinetic Emails</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Master the art of creating interactive, engaging emails that push the boundaries of traditional email design.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
        <p className="text-gray-700 mb-6">
          This learning path takes you from the fundamentals of kinetic emails to advanced interactive techniques. 
          By the end, you'll have the knowledge to create emails that engage users directly in their inbox, without 
          requiring JavaScript or external services.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="font-medium">Core Concepts</span>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="font-medium">Practical Techniques</span>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Real-World Examples</span>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Link 
            to={module.path} 
            key={module.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors">
              {module.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {module.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {module.description}
            </p>
            <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
              <span>Start Learning</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to put your knowledge into practice?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Check out our examples gallery to see these techniques in action, or jump straight into the playground to start experimenting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/examples"
                className="px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                View Examples
              </Link>
              <Link
                to="/playground"
                className="px-5 py-2 bg-white text-blue-600 font-medium rounded-md border border-blue-200 hover:bg-blue-50 transition-colors"
              >
                Go to Playground
              </Link>
            </div>
          </div>
          <div className="md:w-1/3">
            <img 
              src="https://via.placeholder.com/400x300?text=Learning+Resources" 
              alt="Learning Resources" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LearnPage;