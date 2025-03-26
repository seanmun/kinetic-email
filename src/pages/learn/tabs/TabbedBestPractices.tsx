// src/components/learn/tabs/TabbedBestPractices.tsx

import React from 'react';

const TabbedBestPractices: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices for Tabbed Interfaces</h2>
      
      <p className="text-gray-700 mb-4">
        While implementing tabbed interfaces in emails, keep these best practices in mind to ensure optimal performance and compatibility.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-3">Design & User Experience</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Clear visual indicators:</strong>
                <p className="text-sm mt-1 text-gray-600">Ensure tabs are clearly identifiable as interactive elements with distinct visual styling for active vs. inactive states.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Limit the number of tabs:</strong>
                <p className="text-sm mt-1 text-gray-600">Keep tab count reasonable (3-5 maximum) to avoid overwhelming users and maintain simplicity in your design.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Descriptive tab labels:</strong>
                <p className="text-sm mt-1 text-gray-600">Use concise but descriptive labels that clearly indicate the content behind each tab.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Set a logical default tab:</strong>
                <p className="text-sm mt-1 text-gray-600">Always have one tab selected by default (using the <code className="bg-gray-100 px-1 rounded">checked</code> attribute) so content is visible when the email is opened.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-3">Technical Implementation</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Always include the lightswitch:</strong>
                <p className="text-sm mt-1 text-gray-600">Implement the kinetic lightswitch for proper client detection and fallbacks.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Use descriptive IDs:</strong>
                <p className="text-sm mt-1 text-gray-600">Give your inputs and content divs meaningful IDs to make maintenance easier.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Optimize for touch:</strong>
                <p className="text-sm mt-1 text-gray-600">Make tab labels large enough to be easily tapped on mobile devices (minimum 44×44px).</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong>Test, test, test:</strong>
                <p className="text-sm mt-1 text-gray-600">Always test your tabbed interfaces in all target email clients to ensure proper functionality.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 bg-red-50 p-6 rounded-lg border border-red-100">
        <h3 className="text-lg font-semibold text-red-800 mb-3">Common Pitfalls to Avoid</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-2 text-red-800">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span><strong>Forgetting fallback content</strong> for email clients that don't support the checkbox hack.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span><strong>Creating overly complex tab structures</strong> that make the code difficult to maintain.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span><strong>Not including !important</strong> on display properties, which can lead to inconsistent behavior.</span>
              </li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-2 text-red-800">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span><strong>Using too many tabs</strong>, making the interface confusing for users.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span><strong>Making tab labels unclear</strong> or not descriptive enough of their content.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span><strong>Not checking tab content height</strong>, which can lead to layout jumps when switching tabs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
        <h4 className="font-medium text-green-800 mb-2">Pro Tip: Analytics Integration</h4>
        <p className="text-green-800">
          For more advanced implementations, consider tracking which tabs users click on by using unique tracking pixels or links in each tab's content. This provides valuable insights into what content resonates most with your audience.
        </p>
      </div>
      
      <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
        <h4 className="font-medium text-blue-800 mb-2">Responsive Considerations</h4>
        <p className="text-blue-800">
          For responsive emails, consider how your tabs will behave on mobile devices. Horizontal tabs can become crowded on small screens, so you might want to:
        </p>
        <ul className="mt-2 space-y-1 text-blue-800">
          <li>• Switch to vertical tabs on mobile</li>
          <li>• Reduce the number of tabs for mobile views</li>
          <li>• Increase tap target sizes for better touch interaction</li>
          <li>• Use media queries to adjust styling for smaller screens</li>
        </ul>
      </div>
    </section>
  );
};

export default TabbedBestPractices;