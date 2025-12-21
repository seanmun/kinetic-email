// src/components/examples/survey/SurveyHowItWorks.tsx

import React from 'react';
import { CheckCircle } from 'lucide-react';

export const SurveyHowItWorks: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-3">Core Mechanism</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Radio inputs control which content is visible in response to user choices</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Styled labels serve as clickable options for answering questions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>CSS selectors hide the question and display the corresponding response when an option is selected</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>This creates an interactive form-like experience without requiring JavaScript</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-700 mb-3">Benefits for Email Marketing</h3>
          <ul className="space-y-3 text-blue-800">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
              <span>Higher engagement by removing the need to click through to external websites</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
              <span>Improved feedback collection rates with frictionless interaction</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
              <span>Personalized content delivery based on user selections</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
              <span>Immediate feedback to users, increasing satisfaction</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SurveyHowItWorks;