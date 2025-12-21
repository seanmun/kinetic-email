// src/pages/examples/survey/SurveyImplementationTips.tsx

import React from 'react';
import { CheckCircle, AlertTriangle, Info, Award } from 'lucide-react';

export const SurveyImplementationTips: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Tips</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-3">Best Practices</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-green-600" />
              <span>Keep surveys short and focused—one to three questions maximum</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-green-600" />
              <span>Make response options clear, distinct, and easy to tap on mobile</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-green-600" />
              <span>Provide personalized feedback based on responses</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-green-600" />
              <span>Always implement a thoughtful fallback for unsupported clients</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
            <Info className="h-5 w-5 mr-2" />
            Common Pitfalls to Avoid
          </h3>
          <ul className="space-y-3 text-yellow-800">
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0 text-yellow-600" />
              <span>Too many questions, leading to poor user experience</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0 text-yellow-600" />
              <span>Complex selectors that may not work across email clients</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0 text-yellow-600" />
              <span>Not providing a quality fallback experience</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0 text-yellow-600" />
              <span>Forgetting to track interactions for analytics</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Code Optimization</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Minimize CSS selectors to improve compatibility</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Use unique, descriptive IDs for inputs and content elements</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Place inputs at the beginning of your HTML structure</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Test with the Litmus/Email on Acid rendering tools</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Design Considerations</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Make interactive elements visually distinct and tap-friendly (minimum 44×44px)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Provide visual feedback when options are selected</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Keep the design consistent with your brand guidelines</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Ensure sufficient color contrast for accessibility</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-100">
        <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
          <Award className="h-5 w-5 mr-2" />
          Pro Tip: Analytics Integration
        </h3>
        <p className="text-green-800 mb-4">
          To track engagement with your kinetic surveys, add unique tracking parameters to each option:
        </p>
        <div className="bg-white p-4 rounded border border-green-200 overflow-x-auto text-sm">
          <pre className="text-green-900">
{`<label for="q1a" class="survey-option">
  <a href="https://example.com/?survey=preference&choice=womens" target="_blank" style="display:block;">
    Women's Apparel
  </a>
</label>`}
          </pre>
        </div>
        <p className="text-green-800 mt-4">
          This allows you to track which options users select, even in email clients that don't support the interactive features.
        </p>
      </div>
    </div>
  );
};

export default SurveyImplementationTips;