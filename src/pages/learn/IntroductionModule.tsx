// src/pages/learn/IntroductionModule.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';

const IntroductionModule: React.FC = () => {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Introduction to Kinetic Emails</h1>
        <p className="text-xl text-gray-600">
          Learn what makes emails "kinetic" and why they can dramatically improve engagement.
        </p>
      </div>
      
      <div className="space-y-8">
        {/* Definition Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What are Kinetic Emails?</h2>
          
          <p className="text-gray-700 mb-4">
            <strong className="text-blue-700">Kinetic email</strong> is a coding technique that enables <strong>interactive experiences</strong> inside an email. 
            It leverages <strong>HTML inputs and labels</strong> combined with <strong>CSS selectors</strong> to create 
            <strong> engaging, client-side interactions</strong> without requiring JavaScript.
          </p>
          
          <p className="text-gray-700 mb-4">
            Unlike traditional static emails, kinetic emails allow recipients to interact with content directly in their inbox.
            This can include tabbed interfaces, product carousels, image galleries, surveys, and more - all without
            requiring the user to click through to a website.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-800">
              <strong>Key Point:</strong> Kinetic emails work without JavaScript, making them compatible with email clients
              that strip out scripts for security reasons.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Traditional Email</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Static content only</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Requires click-through to websites for interaction</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Limited to images, text, and links</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Kinetic Email</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Interactive elements directly in the inbox</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tabs, carousels, accordions, and forms</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No JavaScript required - just HTML and CSS</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Use Kinetic Emails?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full text-green-600 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Enhances User Experience</h3>
                    <p className="text-gray-700">Provides seamless interaction inside the inbox, eliminating the need to visit external websites.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full text-green-600 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Increases Engagement</h3>
                    <p className="text-gray-700">Users can navigate content, make selections, and engage with your brand directly in their email client.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full text-green-600 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Enables First-Party Data Collection</h3>
                    <p className="text-gray-700">Clicks on kinetic elements can be tracked for better segmentation and personalization.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Engagement Statistics</h3>
              <p className="text-blue-800 mb-4">
                According to research, kinetic emails can significantly boost email performance:
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-900">Click Rate Increase</span>
                    <span className="text-sm font-medium text-blue-900">+18%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-900">Time Spent in Email</span>
                    <span className="text-sm font-medium text-blue-900">+28%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-900">Conversion Rate</span>
                    <span className="text-sm font-medium text-blue-900">+10%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-blue-700 mt-4 italic">
                Note: Results may vary based on industry, audience, and implementation quality.
              </p>
            </div>
          </div>
        </section>
        
        {/* Limitations Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations & Considerations</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-yellow-800">
              <strong>Important:</strong> While kinetic emails offer powerful interactivity, they do have some limitations
              you should be aware of before implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="text-amber-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Client Compatibility</h3>
              <p className="text-gray-700">
                Not supported in all email clients. Primarily works in Apple Mail products and some versions of Outlook for Mac.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="text-amber-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Rendering Differences</h3>
              <p className="text-gray-700">
                Some email clients strip out specific CSS properties, requiring careful testing and fallback strategies.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="text-amber-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AMP Alternative</h3>
              <p className="text-gray-700">
                Gmail and Yahoo offer AMP for Email, which provides similar interactivity but requires separate implementation.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Support</h3>
            <p className="text-gray-700 mb-4">
              Kinetic emails primarily work in WebKit-based email clients, which represent approximately 51% of all email opens.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-green-800 mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Supported Clients
                </h4>
                <ul className="space-y-1 text-gray-700">
                <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Apple Mail (macOS)
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mail (iOS)
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Outlook for Mac
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Outlook for iOS
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-red-800 mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Unsupported Clients
                </h4>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Gmail (Web)
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Outlook (Windows)
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Yahoo Mail
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Gmail (Mobile App)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-800 mb-2">The Fallback Requirement</h4>
            <p className="text-yellow-800">
              Because of these compatibility limitations, all kinetic emails <strong>must include a fallback version</strong> for 
              clients that don't support interactivity. We'll cover fallback strategies in detail in the Kinetic Lightswitch module.
            </p>
          </div>
        </section>
        
        {/* How it Works Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Kinetic Emails Work</h2>
          
          <p className="text-gray-700 mb-6">
            At their core, kinetic emails use a technique known as the "checkbox hack" (or radio button hack) to create 
            interactive elements without JavaScript. This approach leverages native HTML form elements and CSS to control 
            content visibility and appearance based on user interaction.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <div className="text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-indigo-900 mb-2">HTML Structure</h3>
              <p className="text-indigo-800">
                Using hidden input elements (checkboxes or radio buttons) and labels to create interactive 
                controls that users can click on.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <div className="text-purple-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-purple-900 mb-2">CSS Selectors</h3>
              <p className="text-purple-800">
                Using the <code>:checked</code> pseudo-class and sibling combinators to show or hide content 
                based on which input is selected.
              </p>
            </div>
            
            <div className="bg-rose-50 p-6 rounded-lg border border-rose-100">
              <div className="text-rose-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-rose-900 mb-2">State Management</h3>
              <p className="text-rose-800">
                The checked/unchecked state of inputs creates a simple state management system that 
                controls what content is visible.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 border-l-4 border-blue-500 bg-blue-50">
            <p className="text-blue-800">
              <strong>Coming Up:</strong> In the next module, we'll dive deeper into the "checkbox hack" and show you 
              exactly how it works with practical code examples.
            </p>
          </div>
        </section>
        
        {/* Next Steps Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Learn More?</h2>
          
          <p className="text-gray-700 mb-6">
            Now that you understand what kinetic emails are and their benefits and limitations, 
            let's move on to learn the core technique that makes them possible: the Checkbox Hack.
          </p>
          
          <div className="flex">
            <Link
              to="/learn/checkbox-hack"
              className="flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              <span>Next: The Checkbox Hack</span>
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

export default IntroductionModule;