// src/components/examples/survey/SurveyApplications.tsx

import React from 'react';

export const SurveyApplications: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Applications</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <div className="text-blue-600 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Preference Collection</h3>
          <p className="text-gray-700">
            Gather customer preferences for content, products, or communication frequency to improve segmentation.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <div className="text-blue-600 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Feedback Collection</h3>
          <p className="text-gray-700">
            Gather quick feedback on products, services, or recent purchases directly within the email.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <div className="text-blue-600 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Quick Polls</h3>
          <p className="text-gray-700">
            Run simple polls to gauge customer sentiment or preferences on current topics or trends.
          </p>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Industry-Specific Applications</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="font-semibold text-blue-800 mb-2">E-commerce</h4>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Product category preference surveys</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Post-purchase satisfaction surveys</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Abandoned cart follow-up questions</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg border border-green-100">
            <h4 className="font-semibold text-green-800 mb-2">Travel & Hospitality</h4>
            <ul className="space-y-2 text-green-800">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Travel preference questionnaires</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Post-stay feedback collection</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Destination interest surveys</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
            <h4 className="font-semibold text-purple-800 mb-2">Content & Media</h4>
            <ul className="space-y-2 text-purple-800">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Content topic preference selection</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Newsletter frequency preferences</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Article/content feedback surveys</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
            <h4 className="font-semibold text-yellow-800 mb-2">B2B & Services</h4>
            <ul className="space-y-2 text-yellow-800">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Service satisfaction surveys</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Client needs assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Lead qualification questions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
          <h3 className="text-lg font-semibold text-indigo-800 mb-3">Survey Performance Statistics</h3>
          <p className="text-indigo-800 mb-4">
            According to industry research, kinetic surveys in emails can:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-1">+38%</div>
              <div className="text-indigo-800 text-sm">Increased Response Rates</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-1">-42%</div>
              <div className="text-indigo-800 text-sm">Reduced Form Abandonment</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-1">+27%</div>
              <div className="text-indigo-800 text-sm">Higher Email Engagement</div>
            </div>
          </div>
          <p className="text-xs text-indigo-700 mt-4 text-center italic">
            Note: Results may vary based on industry, audience, and email client support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SurveyApplications;