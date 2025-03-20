// src/pages/examples/TabbedExample.tsx

import React from 'react';
import InteractiveExample from '../../components/email-examples/InteractiveExample';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';

const TabbedExample: React.FC = () => {
  // HTML code for the tabbed example
  const htmlCode = `<input type="radio" id="tab1" name="tabs" checked>
<input type="radio" id="tab2" name="tabs">
<input type="radio" id="tab3" name="tabs">

<div class="tabs">
  <label for="tab1">Tab 1</label>
  <label for="tab2">Tab 2</label>
  <label for="tab3">Tab 3</label>
</div>

<div class="content">
  <div id="content1" class="tab-content">Content for Tab 1</div>
  <div id="content2" class="tab-content">Content for Tab 2</div>
  <div id="content3" class="tab-content">Content for Tab 3</div>
</div>`;

  // CSS code for the tabbed example
  const cssCode = `/* Hide radio buttons */
input[type="radio"] { display: none; }

/* Basic tab styling */
.tabs { display: flex; gap: 10px; }

label { 
  cursor: pointer; 
  padding: 10px 15px; 
  background: #ddd; 
  border-radius: 5px; 
  transition: background 0.3s ease; 
}

/* Active tab styling */
#tab1:checked ~ .tabs label[for="tab1"],
#tab2:checked ~ .tabs label[for="tab2"],
#tab3:checked ~ .tabs label[for="tab3"] { 
  background: #003366; 
  color: white; 
}

/* Content visibility */
.tab-content { 
  display: none; 
  padding: 15px; 
  border: 1px solid #ccc; 
  margin-top: 10px; 
}

#tab1:checked ~ .content #content1,
#tab2:checked ~ .content #content2,
#tab3:checked ~ .content #content3 { 
  display: block !important; 
}`;

  // Lightswitch code from your guide
  const lightswitchCode = `<input type="checkbox" class="kinetic" name="interactive" id="Kinetic" checked>

<style>
  #Kinetic:checked ~* .interactive { display: block !important; }
  #Kinetic:checked ~* .fallback { display: none !important; }
  /* AOL/Yahoo Compatibility Fix */
  #Kinetic:checked ~* .& .fallback { display: block !important; }
  #Kinetic:checked ~* .& .interactive { display: none !important; }
</style>`;

  // Complete HTML for the preview
  const previewHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.5;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    /* Hide radio buttons */
    input[type="radio"] { display: none; }

    /* Basic tab styling */
    .tabs { display: flex; gap: 10px; }

    label { 
      cursor: pointer; 
      padding: 10px 15px; 
      background: #ddd; 
      border-radius: 5px; 
      transition: background 0.3s ease; 
    }

    /* Active tab styling */
    #tab1:checked ~ .tabs label[for="tab1"],
    #tab2:checked ~ .tabs label[for="tab2"],
    #tab3:checked ~ .tabs label[for="tab3"] { 
      background: #003366; 
      color: white; 
    }

    /* Content visibility */
    .tab-content { 
      display: none; 
      padding: 15px; 
      border: 1px solid #ccc; 
      margin-top: 10px; 
    }

    #tab1:checked ~ .content #content1,
    #tab2:checked ~ .content #content2,
    #tab3:checked ~ .content #content3 { 
      display: block !important; 
    }
  </style>
</head>
<body>
  <h2>Interactive Tabbed Content</h2>
  
  <input type="radio" id="tab1" name="tabs" checked>
  <input type="radio" id="tab2" name="tabs">
  <input type="radio" id="tab3" name="tabs">

  <div class="tabs">
    <label for="tab1">Product Features</label>
    <label for="tab2">Specifications</label>
    <label for="tab3">Reviews</label>
  </div>

  <div class="content">
    <div id="content1" class="tab-content">
      <h3>Product Features</h3>
      <ul>
        <li>Lightweight design for all-day comfort</li>
        <li>Water-resistant materials</li>
        <li>Sustainable manufacturing process</li>
        <li>Available in 5 colors</li>
      </ul>
    </div>
    <div id="content2" class="tab-content">
      <h3>Specifications</h3>
      <table border="0" cellpadding="5">
        <tr>
          <td><strong>Weight:</strong></td>
          <td>8.5 oz</td>
        </tr>
        <tr>
          <td><strong>Materials:</strong></td>
          <td>Recycled polyester, natural rubber</td>
        </tr>
        <tr>
          <td><strong>Warranty:</strong></td>
          <td>2 years</td>
        </tr>
      </table>
    </div>
    <div id="content3" class="tab-content">
      <h3>Customer Reviews</h3>
      <p>⭐⭐⭐⭐⭐ "Amazing comfort and durability!" — Alex</p>
      <p>⭐⭐⭐⭐ "Great value for the price, very happy with my purchase." — Sam</p>
      <p>⭐⭐⭐⭐⭐ "The water resistance is a game-changer." — Taylor</p>
    </div>
  </div>
</body>
</html>`;

  // Fallback version (without interactivity)
  const fallbackHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.5;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .tabs { display: flex; gap: 10px; margin-bottom: 10px; }
    .tab { padding: 10px 15px; background: #ddd; border-radius: 5px; }
    .active-tab { background: #003366; color: white; }
    .tab-content { padding: 15px; border: 1px solid #ccc; }
  </style>
</head>
<body>
  <h2>Product Information</h2>
  
  <div class="tabs">
    <div class="tab active-tab">Product Features</div>
    <div class="tab">Specifications</div>
    <div class="tab">Reviews</div>
  </div>
  
  <div class="tab-content">
    <h3>Product Features</h3>
    <ul>
      <li>Lightweight design for all-day comfort</li>
      <li>Water-resistant materials</li>
      <li>Sustainable manufacturing process</li>
      <li>Available in 5 colors</li>
    </ul>
    
    <p><em>Note: In email clients that support kinetic features, you would be able to click the tabs to see different content.</em></p>
  </div>
</body>
</html>`;

  // Define code sections for the example
  const codeSections = [
    {
      title: 'HTML Structure',
      language: 'html' as const,
      code: htmlCode,
      description: 'The HTML structure uses hidden radio inputs paired with labels. Each input corresponds to a content div. The key is putting the inputs at the beginning of the HTML structure so they can influence elements that follow them in the DOM.'
    },
    {
      title: 'CSS Styling',
      language: 'css' as const,
      code: cssCode,
      description: 'The CSS hides the radio buttons and styles the labels as clickable tabs. The magic happens with the :checked selector combined with the general sibling combinator (~), which targets and displays only the content associated with the checked radio button.'
    },
    {
      title: 'Kinetic Lightswitch',
      language: 'html' as const,
      code: lightswitchCode,
      description: 'The lightswitch is a technique to detect if a client supports kinetic features. If supported, it shows the interactive version; if not, it shows a fallback. This ensures a good experience across all email clients.'
    }
  ];

  return (
    <PageLayout>
      <div className="mb-6">
        <Link to="/examples" className="text-blue-600 hover:text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Examples
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Tabbed Email Interface</h1>
      
      <div className="prose max-w-none mb-8">
        <p>
          This example demonstrates a basic tabbed interface using the checkbox hack—the foundation 
          of kinetic emails. It leverages HTML radio inputs and labels combined with CSS selectors 
          to create interactive tabs without JavaScript.
        </p>
        <p>
          This interactive component allows recipients to navigate between different content sections
          without leaving their inbox, significantly increasing engagement compared to traditional static emails.
        </p>
      </div>

      <InteractiveExample
        title="Tabbed Product Information"
        description="An interactive tabbed interface that allows users to navigate between product details, specifications, and reviews."
        sections={codeSections}
        previewHtml={previewHtml}
        fallbackHtml={fallbackHtml}
      />

      <div className="mt-12 space-y-12">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-3">The Technical Mechanism</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Radio inputs with the same <code className="bg-gray-100 px-1 rounded text-blue-600">name</code> attribute ensure only one tab is active at a time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Labels are styled as tabs and linked to their corresponding inputs via the <code className="bg-gray-100 px-1 rounded text-blue-600">for</code> attribute</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>When a user clicks a label, it checks the associated radio button</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Content visibility is controlled through CSS selectors that target the <code className="bg-gray-100 px-1 rounded text-blue-600">:checked</code> state</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The general sibling combinator (<code className="bg-gray-100 px-1 rounded text-blue-600">~</code>) connects the checked state to the content visibility</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Key CSS Selector Explained</h3>
              <pre className="bg-gray-800 text-white p-4 rounded text-sm overflow-x-auto">
{`/* This selector is the heart of the technique */
#tab1:checked ~ .content #content1 { 
  display: block !important; 
}`}
              </pre>
              <div className="mt-3 text-blue-800 text-sm">
                <p className="mb-2"><strong>How this works:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li><code className="bg-blue-100 px-1 rounded">#tab1:checked</code> - Targets the checkbox/radio when it's checked</li>
                  <li><code className="bg-blue-100 px-1 rounded">~</code> - The general sibling combinator finds elements that follow</li>
                  <li><code className="bg-blue-100 px-1 rounded">.content #content1</code> - Targets the content to show when this tab is active</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Product Information</h3>
                <p className="text-gray-700">Show features, specifications, and reviews in a compact space while giving users control over what they want to see.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Event Details</h3>
                <p className="text-gray-700">Toggle between schedule, speakers, venue information, and registration details all within a single email.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Newsletter Content</h3>
                <p className="text-gray-700">Allow recipients to browse different article categories or content sections based on their interests.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Educational Content</h3>
                <p className="text-gray-700">Present different topics or lessons in a single email, creating an interactive learning experience.</p>
              </div>
            </div>
          </div>
        </div>
        
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
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Tips</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 text-blue-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Keep your HTML structure simple</h3>
                <p className="text-gray-700">Email clients have limited CSS support. A simple, well-organized HTML structure will be more reliable across email clients.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 text-blue-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Place inputs at the beginning</h3>
                <p className="text-gray-700">Put your radio or checkbox inputs at the beginning of your HTML structure so they can properly influence elements that follow them in the DOM.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 text-blue-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Always implement fallbacks</h3>
                <p className="text-gray-700">Since kinetic techniques don't work in all email clients, always implement a static fallback version that provides a good experience for all users.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 text-blue-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Test thoroughly</h3>
                <p className="text-gray-700">Test your kinetic emails across different email clients and devices to ensure both interactive and fallback versions render correctly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TabbedExample;