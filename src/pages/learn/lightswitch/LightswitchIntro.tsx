// src/components/learn/lightswitch/LightswitchIntro.tsx

import React from 'react';

const LightswitchIntro: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Kinetic Lightswitch?</h2>
      
      <p className="text-gray-700 mb-4">
        The <strong className="text-blue-700">Kinetic Lightswitch</strong> is a crucial concept in kinetic emails. It's a mechanism that detects whether an email client supports interactive elements, and then shows either the interactive content or a fallback version.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <p className="text-blue-800">
          <strong>Key Principle:</strong> Since not all email clients support the CSS selectors needed for kinetic emails, we need a way to determine client compatibility and provide appropriate content for each user.
        </p>
      </div>
      
      <p className="text-gray-700 mb-4">
        The lightswitch works by creating a specially crafted <strong>state-detection system</strong> using a hidden checkbox. When the email is opened, this system automatically determines whether kinetic features will work, and displays the appropriate version of the email.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-green-50 rounded-lg p-5 border border-green-200">
          <h3 className="font-semibold text-green-900 mb-3">If Kinetic Works</h3>
          <ul className="space-y-2 text-green-800">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>The <strong>interactive version</strong> is displayed</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>The <strong>fallback version</strong> is hidden</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Users get the <strong>full interactive experience</strong></span>
            </li>
          </ul>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-5 border border-amber-200">
          <h3 className="font-semibold text-amber-900 mb-3">If Kinetic Doesn't Work</h3>
          <ul className="space-y-2 text-amber-800">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>The <strong>interactive version</strong> remains hidden</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>The <strong>fallback version</strong> is displayed</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Users still get a <strong>functional experience</strong></span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 bg-gray-50 p-5 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3">How It Works</h3>
        <p className="text-gray-700">
          The Kinetic Lightswitch relies on a hidden checkbox that's checked by default. Using CSS selectors like <code className="bg-gray-100 px-1 rounded">:checked</code> and sibling combinators, we can determine if a client supports these features. If it does, we show the interactive content. If not, we show the fallback.
        </p>
      </div>
    </section>
  );
};

export default LightswitchIntro;