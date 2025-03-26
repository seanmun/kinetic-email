// src/components/learn/tabs/TabbedIntro.tsx

import React from 'react';

const TabbedIntro: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">What are Tabbed Interfaces in Email?</h2>
      
      <p className="text-gray-700 mb-4">
        Tabbed interfaces are one of the most practical and widely used applications of the checkbox hack in kinetic emails. They allow recipients to switch between different content sections without scrolling, creating a more interactive and engaging experience.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <p className="text-blue-800">
          <strong>Key Benefit:</strong> Tabbed interfaces let you include more content in your emails without creating a lengthy scroll, allowing recipients to focus on the information that interests them most.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Common Use Cases</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Product category navigation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Content segmentation (e.g., Details/Specs/Reviews)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Multi-step processes or forms</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Language or region selection</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Before/After comparisons</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100">
          <h3 className="font-semibold text-indigo-900 mb-3">How They Work</h3>
          <p className="text-indigo-800 mb-3">
            Tabbed interfaces in emails work by using:
          </p>
          <ul className="space-y-2 text-indigo-800">
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span><strong>Radio buttons</strong> to track which tab is selected</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span><strong>Labels</strong> styled as tab headers</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span><strong>CSS selectors</strong> to show/hide content based on selection</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>The <strong>:checked</strong> pseudo-class to determine active state</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 bg-amber-50 p-6 rounded-lg border border-amber-100">
        <h3 className="text-lg font-semibold text-amber-900 mb-3">Key Considerations</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-amber-800 mb-2">Advantages</h4>
            <ul className="space-y-1 text-amber-800">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Saves vertical space in emails
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Improves organization of content
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Encourages engagement through interaction
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Can be used to track user preferences
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-amber-800 mb-2">Limitations</h4>
            <ul className="space-y-1 text-amber-800">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Only works in supporting email clients
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Requires fallback for non-supporting clients
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                Here's the completion of that code:

```jsx
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Complex CSS selectors needed to work reliably
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Can increase overall email size
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedIntro;