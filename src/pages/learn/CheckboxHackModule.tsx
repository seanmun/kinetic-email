// src/pages/learn/CheckboxHackModule.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';

const CheckboxHackModule: React.FC = () => {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">The Checkbox Hack</h1>
        <p className="text-xl text-gray-600">
          Understand the core technique behind kinetic emails using input elements and CSS selectors.
        </p>
      </div>
      
      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Checkbox Hack?</h2>
          
          <p className="text-gray-700 mb-4">
            The <strong className="text-blue-700">checkbox hack</strong> is a CSS technique that allows you to create interactive elements without using JavaScript. It works by controlling the visibility of content based on the state of checkboxes or radio buttons.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-800">
              <strong>Key Principle:</strong> When a user clicks on a label associated with a checkbox or radio button, it changes the state of that input element. We can then use CSS to detect this state change and modify the appearance of other elements accordingly.
            </p>
          </div>
          
          <p className="text-gray-700 mb-4">
            This technique is the foundation of kinetic emails because it allows us to create interactive elements that respond to user clicks without relying on JavaScript, which is typically stripped out by email clients.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">The Building Blocks</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Input elements</strong>: Checkboxes or radio buttons that store state</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Labels</strong>: Elements that users click to change input state</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>CSS selectors</strong>: Rules that detect state and apply styles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Content elements</strong>: Sections that show or hide based on state</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-3">CSS Selectors We'll Use</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><code className="bg-blue-100 px-1 rounded">:checked</code> pseudo-class to detect checked state</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><code className="bg-blue-100 px-1 rounded">+</code> adjacent sibling selector</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><code className="bg-blue-100 px-1 rounded">~</code> general sibling selector</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><code className="bg-blue-100 px-1 rounded">~*</code> to reach nested elements</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Basic Example Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Basic Example: A Simple Toggle</h2>
          
          <p className="text-gray-700 mb-4">
            Let's start with a simple example: a checkbox that shows or hides content when clicked.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">HTML Structure</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <pre className="text-sm text-gray-800 whitespace-pre">{`<input type="checkbox" id="toggle" class="hidden-checkbox">
<label for="toggle" class="toggle-label">Show Details</label>

<div class="content">
  This content will be hidden until the checkbox is checked.
</div>`}</pre>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">CSS Rules</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <pre className="text-sm text-gray-800 whitespace-pre">{`.hidden-checkbox {
  display: none;
}

.toggle-label {
  cursor: pointer;
  padding: 10px 15px;
  background: #ddd;
  border-radius: 5px;
  display: inline-block;
}

.toggle-label:hover {
  background: #ccc;
}

.content {
  display: none;
  padding: 15px;
  margin-top: 10px;
  border: 1px solid #ccc;
}

/* The key selector that shows content when checked */
#toggle:checked ~ .content {
  display: block !important;
}`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h3>
              <ol className="space-y-4 text-gray-700">
                <li>
                  <div className="flex">
                    <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">1</div>
                    <div>
                      <p><strong>The Input Element:</strong> We hide the actual checkbox but keep it in the DOM.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">2</div>
                    <div>
                      <p><strong>The Label:</strong> We style the label to look like a button. When clicked, it toggles the associated checkbox.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">3</div>
                    <div>
                      <p><strong>The Content:</strong> Initially hidden with <code className="bg-gray-100 px-1 rounded">display: none</code>.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">4</div>
                    <div>
                      <p><strong>The CSS Magic:</strong> <code className="bg-gray-100 px-1 rounded">#toggle:checked ~ .content</code> selects the content element when the checkbox is checked, and makes it visible.</p>
                    </div>
                  </div>
                </li>
              </ol>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">The CSS Selector Explained</h4>
                <p className="text-blue-800 text-sm">
                  <code className="bg-blue-100 px-1 rounded">#toggle:checked ~ .content</code> breaks down as:
                </p>
                <ul className="mt-2 space-y-1 text-blue-800 text-sm">
                  <li><code className="bg-blue-100 px-1 rounded">#toggle</code> - Targets the input with ID "toggle"</li>
                  <li><code className="bg-blue-100 px-1 rounded">:checked</code> - Only applies when the input is checked</li>
                  <li><code className="bg-blue-100 px-1 rounded">~</code> - General sibling selector (selects elements after the input)</li>
                  <li><code className="bg-blue-100 px-1 rounded">.content</code> - Targets elements with class "content"</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Live Example</h3>
            <p className="text-gray-700 mb-4">
              This demonstrates the basic checkbox hack in action. Click the button to toggle the content visibility:
            </p>
            
            <div className="p-6 bg-white rounded-lg border border-gray-300">
              <div>
                <input type="checkbox" id="demo-toggle" className="sr-only peer" />
                <label htmlFor="demo-toggle" className="cursor-pointer py-2 px-4 bg-gray-200 inline-block rounded hover:bg-gray-300 peer-checked:bg-blue-600 peer-checked:text-white transition-colors">
                  Toggle Content
                </label>
                
                <div className="overflow-hidden max-h-0 peer-checked:max-h-40 transition-all duration-500">
                  <div className="p-4 bg-blue-50 mt-4 rounded-lg border border-blue-100">
                    <p className="text-blue-800">This content is now visible because you clicked the toggle button!</p>
                    <p className="text-blue-800 mt-2">In a real email, this could contain additional information, images, or other content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tabbed Interface Example */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Example: Tabbed Interface</h2>
          
          <p className="text-gray-700 mb-4">
            Now let's create something more complex and useful: a tabbed interface. This is one of the most common applications of the checkbox hack in kinetic emails.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">HTML Structure</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <pre className="text-sm text-gray-800 whitespace-pre">{`<input type="radio" id="tab1" name="tabs" checked>
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
</div>`}</pre>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">CSS Rules</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <pre className="text-sm text-gray-800 whitespace-pre">{`/* Hide radio buttons */
input[type="radio"] { 
  display: none; 
}

/* Basic tab styling */
.tabs { 
  display: flex; 
  gap: 10px; 
}

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
}`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Differences</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Radio Buttons Instead of Checkboxes:</strong> We use radio buttons with the same <code className="bg-gray-100 px-1 rounded">name</code> attribute, which ensures only one can be selected at a time.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Multiple Content Sections:</strong> Each tab has its own content section that's shown/hidden based on which radio button is checked.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Active Tab Styling:</strong> We style the active tab differently to give users visual feedback.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>More Complex Selectors:</strong> We target nested elements with more specific selectors.
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-medium text-green-800 mb-2">Pro Tips</h4>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Use the <code className="bg-green-100 px-1 rounded">checked</code> attribute to set a default active tab</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Use <code className="bg-green-100 px-1 rounded">!important</code> for display properties to ensure they work in email clients</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Keep your HTML structure simple, with inputs at the beginning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-indigo-50 p-6 rounded-lg border border-indigo-100">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">Why This Works in Email</h3>
            <p className="text-indigo-800 mb-4">
              The checkbox hack is particularly well-suited for email because:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">What It Uses</h4>
                <ul className="space-y-1 text-indigo-800">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Standard HTML form elements</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Basic CSS selectors and properties</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Native browser behaviors</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">What It Avoids</h4>
                <ul className="space-y-1 text-indigo-800">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>JavaScript (often blocked in email clients)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>External dependencies or libraries</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Advanced CSS features not supported in email</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Best Practices Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Things to Do</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Place inputs at the start of your HTML</strong>
                    <p className="text-sm mt-1 text-gray-600">This makes it easier to select subsequent elements with the general sibling selector.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Use meaningful IDs</strong>
                    <p className="text-sm mt-1 text-gray-600">Clear, descriptive IDs make your code more maintainable and easier to debug.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Test in target email clients</strong>
                    <p className="text-sm mt-1 text-gray-600">Different clients have different levels of support for CSS selectors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Add visual feedback</strong>
                    <p className="text-sm mt-1 text-gray-600">Make sure users can tell when they've clicked on something interactive.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-3">Things to Avoid</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Overly complex CSS selectors</strong>
                    <p className="text-sm mt-1 text-gray-600">Keep selectors simple to ensure maximum compatibility across email clients.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Too many interactive elements</strong>
                    <p className="text-sm mt-1 text-gray-600">Keep it simple. Too many checkboxes can lead to confusing selectors and interactions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Forgetting about fallbacks</strong>
                    <p className="text-sm mt-1 text-gray-600">Always have a fallback for email clients that don't support these techniques.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Relying on advanced CSS features</strong>
                    <p className="text-sm mt-1 text-gray-600">Stick to basic CSS properties that are widely supported in email clients.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-amber-50 p-6 rounded-lg border border-amber-100">
            <h3 className="text-lg font-semibold text-amber-900 mb-3">Common Challenges</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Challenge: Nested Elements</h4>
                <p className="text-amber-800 mb-3">
                  Sometimes you need to select deeply nested elements, which can be tricky with sibling selectors.
                </p>
                <p className="text-amber-800 font-medium">Solution:</p>
                <pre className="text-sm text-amber-900 bg-amber-50 p-2 rounded mt-1 whitespace-pre">{`/* Use the general sibling + wildcard selector */
#checkbox:checked ~* .target-element { 
  display: block !important; 
}`}</pre>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Challenge: Email Client Limitations</h4>
                <p className="text-amber-800 mb-3">
                  Some email clients strip or modify certain CSS properties.
                </p>
                <p className="text-amber-800 font-medium">Solution:</p>
                <ul className="mt-1 space-y-1 text-amber-800">
                  <li>• Use <code className="bg-amber-50 px-1 rounded">!important</code> to override client styles</li>
                  <li>• Test in target email clients</li>
                  <li>• Implement a robust fallback strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Real-World Applications */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-World Applications</h2>
          
          <p className="text-gray-700 mb-6">
            The checkbox hack can be used to create a variety of interactive elements in kinetic emails. Here are some common applications:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="text-blue-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tabbed Interfaces</h3>
              <p className="text-gray-700">
                Organize content into tabs to save space and allow users to navigate between different sections.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="text-blue-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Accordions</h3>
              <p className="text-gray-700">
                Expandable sections that allow users to show/hide content, perfect for FAQs or product details.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="text-blue-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Product Carousels</h3>
              <p className="text-gray-700">
                Showcase multiple products with navigation controls, allowing users to browse without leaving the email.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="text-blue-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Simple Surveys</h3>
              <p className="text-gray-700">
                Collect user feedback directly in the email, with different content displayed based on their selection.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="text-blue-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Image Galleries</h3>
              <p className="text-gray-700">
                Allow users to browse through multiple images with navigation controls and thumbnail previews.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="text-blue-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Multi-Step Forms</h3>
              <p className="text-gray-700">
                Create simple form-like experiences where each selection reveals the next step in a process.
              </p>
            </div>
          </div>
        </section>
        
        {/* Next Steps Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Learn More?</h2>
          
          <p className="text-gray-700 mb-6">
            Now that you understand the checkbox hack, let's move on to learn about the Kinetic Lightswitch,
            which helps us detect client support and provide appropriate fallbacks.
          </p>
          
          <div className="flex justify-between">
            <Link
              to="/learn/introduction"
              className="flex items-center px-5 py-2 bg-white text-blue-600 font-medium rounded-md border border-blue-200 hover:bg-blue-50 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous: Introduction</span>
            </Link>
            
            <Link
              to="/learn/lightswitch"
              className="flex items-center px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              <span>Next: The Kinetic Lightswitch</span>
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

export default CheckboxHackModule;