// src/pages/learn/LightswitchModule.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import LightswitchIntro from './lightswitch/LightswitchIntro';
import LightswitchExample from './lightswitch/LightswitchExample';
import LightswitchBestPractices from './lightswitch/LightswitchBestPractices';

const LightswitchModule: React.FC = () => {
  return (
    <PageLayout>
      <div className="mb-6">
        <Link to="/learn" className="text-blue-600 hover:text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Learning Path
        </Link>
      </div>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">The Kinetic Lightswitch</h1>
        <p className="text-xl text-gray-600">
          Learn how to detect if an email client supports kinetic interactivity and provide appropriate fallbacks.
        </p>
      </div>
      
      <div className="space-y-8">
        {/* Introduction Section */}
        <LightswitchIntro />
        
        {/* Example Section */}
        <LightswitchExample />
        
        {/* Best Practices Section */}
        <LightswitchBestPractices />
        
        {/* Next Steps Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Learn More?</h2>
          
          <p className="text-gray-700 mb-6">
            Now that you understand the Kinetic Lightswitch, let's move on to learn how to build tabbed elements in kinetic emails.
          </p>
          
          <div className="flex justify-between">
            <Link
              to="/learn/checkbox-hack"
              className="flex items-center px-5 py-2 bg-white text-blue-600 font-medium rounded-md border border-blue-200 hover:bg-blue-50 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous: The Checkbox Hack</span>
            </Link>
            
            <Link
              to="/learn/tabbed-elements"
              className="flex items-center px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              <span>Next: Building Tabbed Elements</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default LightswitchModule;