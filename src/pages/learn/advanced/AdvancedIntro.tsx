// src/pages/learn/advanced/AdvancedIntro.tsx

import React from 'react';

const AdvancedIntro: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Taking Kinetic Emails to the Next Level</h2>
      
      <p className="text-gray-700 mb-4">
        Now that you've mastered the core concepts of kinetic emails, including the checkbox hack, 
        client detection, and tabbed interfaces, it's time to explore more sophisticated techniques 
        that can make your emails truly stand out.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <p className="text-blue-800">
          <strong>Advanced Kinetic Techniques:</strong> While these techniques offer enhanced interactivity,
          remember that they're only supported in a limited set of email clients. Always implement proper
          fallbacks for clients that don't support these features.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
          <div className="text-purple-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 className="font-semibold text-purple-900 mb-2">CSS Animations</h3>
          <p className="text-purple-800">
            Add motion and visual interest to your emails using CSS keyframes and transitions,
            creating attention-grabbing experiences that work without JavaScript.
          </p>
        </div>
        
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
          <div className="text-indigo-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h3 className="font-semibold text-indigo-900 mb-2">Product Showcases</h3>
          <p className="text-indigo-800">
            Create interactive product galleries with image switching, color selection,
            and detailed product views all within the email client.
          </p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-blue-900 mb-2">Interactive Surveys</h3>
          <p className="text-blue-800">
            Collect user feedback directly in the email with radio buttons,
            checkboxes, and custom selection interfaces with visual feedback.
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">What You'll Learn</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">How to implement CSS animations that work in email clients</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Techniques for creating interactive product showcases</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Methods for building interactive surveys inside emails</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Best practices for combining multiple interactive elements</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AdvancedIntro;