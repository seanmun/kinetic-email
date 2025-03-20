// src/pages/examples/survey/SurveyCompatibility.tsx

import React from 'react';

export const SurveyCompatibility: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Client Compatibility</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="font-semibold text-green-800 flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Supported Clients
          </h3>
          <ul className="space-y-2 text-green-800">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Apple Mail (macOS)
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Mail (iOS)
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Outlook for Mac
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Outlook for iOS
            </li>
          </ul>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
          <h3 className="font-semibold text-red-800 flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            Unsupported Clients
          </h3>
          <ul className="space-y-2 text-red-800">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Gmail (Web)
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Outlook (Windows)
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Yahoo Mail
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Gmail (Mobile App)
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-blue-800 flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Why the Difference?
          </h3>
          <p className="text-blue-800 text-sm mb-3">
            Supported clients use the WebKit rendering engine, which properly implements the CSS selectors needed for kinetic emails.
          </p>
          <p className="text-blue-800 text-sm">
            Unsupported clients either strip out form elements or don't fully implement the CSS selectors required for interactivity.
          </p>
          <div className="mt-4 pt-4 border-t border-blue-200">
            <p className="text-blue-800 text-sm font-medium">Alternative for Gmail:</p>
            <p className="text-blue-800 text-sm mt-1">
              For Gmail users, consider implementing AMP for Email, which provides similar interactive features but requires a separate implementation.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-4 border-b">
            <h3 className="font-semibold text-gray-900">Market Share Considerations</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <div className="w-1/2">
                <p className="text-sm text-gray-600 mb-1">Apple Mail (iOS & macOS)</p>
                <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-4 rounded-full" style={{ width: '52%' }}></div>
                </div>
              </div>
              <span className="ml-4 font-semibold">52%</span>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-1/2">
                <p className="text-sm text-gray-600 mb-1">Gmail</p>
                <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div className="bg-red-500 h-4 rounded-full" style={{ width: '28%' }}></div>
                </div>
              </div>
              <span className="ml-4 font-semibold">28%</span>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-1/2">
                <p className="text-sm text-gray-600 mb-1">Outlook</p>
                <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-4 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <span className="ml-4 font-semibold">10%</span>
            </div>
            <div className="flex items-center">
              <div className="w-1/2">
                <p className="text-sm text-gray-600 mb-1">Other</p>
                <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div className="bg-gray-500 h-4 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <span className="ml-4 font-semibold">10%</span>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              Note: Email client usage varies by audience, industry, and region. These figures are approximate.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-4 border-b">
            <h3 className="font-semibold text-gray-900">Implementing a Proper Fallback Strategy</h3>
          </div>
          <div className="p-4">
            <ol className="list-decimal ml-5 space-y-3 text-gray-700">
              <li>
                <span className="font-medium text-gray-900">Kinetic Lightswitch:</span> Use a hidden checkbox at the start of your email to detect clients that support interactivity.
              </li>
              <li>
                <span className="font-medium text-gray-900">Static Version:</span> Create a non-interactive version of your survey for unsupported clients.
              </li>
              <li>
                <span className="font-medium text-gray-900">Progressive Enhancement:</span> Start with a base layout that works everywhere, then enhance it for supporting clients.
              </li>
              <li>
                <span className="font-medium text-gray-900">Clear Instructions:</span> Include guidance for users in both versions.
              </li>
            </ol>
            <div className="mt-5 p-3 bg-gray-50 rounded border border-gray-200">
              <p className="text-sm text-gray-800">
                <span className="font-medium">Pro Tip:</span> Always include a call-to-action for unsupported clients that directs users to a web-based version of your survey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-indigo-50 p-6 rounded-lg border border-indigo-100">
        <h3 className="text-lg font-semibold text-indigo-900 mb-4">Testing Your Kinetic Surveys</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">Testing Tools</h4>
            <ul className="space-y-2 text-indigo-800">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span><strong>Litmus</strong> or <strong>Email on Acid</strong> for rendering tests across email clients</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span><strong>MailChimp's Inbox Preview</strong> for quick compatibility checks</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span><strong>Real device testing</strong> for critical campaigns</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">Testing Checklist</h4>
            <ul className="space-y-2 text-indigo-800">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Verify both interactive and fallback versions render correctly</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Test survey functionality across supported clients</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Confirm that tracking links work in both versions</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Check usability on both desktop and mobile devices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

