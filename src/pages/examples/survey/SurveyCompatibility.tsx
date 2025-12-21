// src/pages/examples/survey/SurveyCompatibility.tsx

import React from 'react';
import { CheckCircle, XCircle, Check, X, HelpCircle, Shield } from 'lucide-react';

export const SurveyCompatibility: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Client Compatibility</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="font-semibold text-green-800 flex items-center mb-3">
            <CheckCircle className="h-5 w-5 mr-2" />
            Supported Clients
          </h3>
          <ul className="space-y-2 text-green-800">
            <li className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Apple Mail (macOS)
            </li>
            <li className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Mail (iOS)
            </li>
            <li className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Outlook for Mac
            </li>
            <li className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Outlook for iOS
            </li>
          </ul>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
          <h3 className="font-semibold text-red-800 flex items-center mb-3">
            <XCircle className="h-5 w-5 mr-2" />
            Unsupported Clients
          </h3>
          <ul className="space-y-2 text-red-800">
            <li className="flex items-center">
              <X className="h-4 w-4 mr-2" />
              Gmail (Web)
            </li>
            <li className="flex items-center">
              <X className="h-4 w-4 mr-2" />
              Outlook (Windows)
            </li>
            <li className="flex items-center">
              <X className="h-4 w-4 mr-2" />
              Yahoo Mail
            </li>
            <li className="flex items-center">
              <X className="h-4 w-4 mr-2" />
              Gmail (Mobile App)
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-blue-800 flex items-center mb-3">
            <HelpCircle className="h-5 w-5 mr-2" />
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
                <Shield className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" />
                <span><strong>Litmus</strong> or <strong>Email on Acid</strong> for rendering tests across email clients</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" />
                <span><strong>MailChimp's Inbox Preview</strong> for quick compatibility checks</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" />
                <span><strong>Real device testing</strong> for critical campaigns</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">Testing Checklist</h4>
            <ul className="space-y-2 text-indigo-800">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" />
                <span>Verify both interactive and fallback versions render correctly</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" />
                <span>Test survey functionality across supported clients</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" />
                <span>Confirm that tracking links work in both versions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" />
                <span>Check usability on both desktop and mobile devices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

