// src/pages/examples/TabbedExample.tsx

import React from 'react';
import InteractiveExample from '../../components/email-examples/InteractiveExample';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import { ArrowLeft, CheckCircle, XCircle, HelpCircle, Layout, Monitor, RotateCcw, FileText } from 'lucide-react';

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
  #Kinetic:checked ~ .& .fallback { display: block !important; }
  #Kinetic:checked ~ .& .interactive { display: none !important; }
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
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Examples
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 p-12 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Layout className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-orange-100 uppercase tracking-wide">Basic Technique</div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight">Tabbed Email Interface</h1>
            </div>
          </div>

          <p className="text-xl text-orange-50 leading-relaxed max-w-3xl">
            This example demonstrates a basic tabbed interface using the checkbox hack—the foundation
            of kinetic emails. It leverages HTML radio inputs and labels combined with CSS selectors
            to create interactive tabs without JavaScript.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Navigation
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Core Technique
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Beginner Friendly
            </div>
          </div>
        </div>
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
                <CheckCircle className="h-5 w-5 mr-2" />
                Supported Clients
              </h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Apple Mail (macOS)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mail (iOS)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Outlook for Mac
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
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
                  <XCircle className="h-4 w-4 mr-2" />
                  Gmail (Web)
                </li>
                <li className="flex items-center">
                  <XCircle className="h-4 w-4 mr-2" />
                  Outlook (Windows)
                </li>
                <li className="flex items-center">
                  <XCircle className="h-4 w-4 mr-2" />
                  Yahoo Mail
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
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Tips</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 text-blue-600 mr-4">
                <Layout className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Keep your HTML structure simple</h3>
                <p className="text-gray-700">Email clients have limited CSS support. A simple, well-organized HTML structure will be more reliable across email clients.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 text-blue-600 mr-4">
                <Monitor className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Place inputs at the beginning</h3>
                <p className="text-gray-700">Put your radio or checkbox inputs at the beginning of your HTML structure so they can properly influence elements that follow them in the DOM.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 text-blue-600 mr-4">
                <RotateCcw className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Always implement fallbacks</h3>
                <p className="text-gray-700">Since kinetic techniques don't work in all email clients, always implement a static fallback version that provides a good experience for all users.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 text-blue-600 mr-4">
                <FileText className="h-5 w-5" />
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