// src/components/learn/tabs/TabbedBasicExample.tsx

import React, { useState } from 'react';
import CodeBlock from '../../../components/common/CodeBlock';

const TabbedBasicExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Basic Tabbed Interface</h2>
      
      <p className="text-gray-700 mb-4">
        Let's start with a simple example of how to create a basic tabbed interface in an email. This pattern forms the foundation for more complex kinetic email components.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">HTML Structure</h3>
          <CodeBlock
            code={`<!-- Tab inputs -->
<input type="radio" id="tab1" name="tabs" checked>
<input type="radio" id="tab2" name="tabs">
<input type="radio" id="tab3" name="tabs">

<!-- Tab navigation -->
<div class="tabs">
  <label for="tab1">Tab 1</label>
  <label for="tab2">Tab 2</label>
  <label for="tab3">Tab 3</label>
</div>

<!-- Tab content -->
<div class="content">
  <div id="content1" class="tab-content">
    <h2>Content for Tab 1</h2>
    <p>This is the content for the first tab.</p>
  </div>
  <div id="content2" class="tab-content">
    <h2>Content for Tab 2</h2>
    <p>This is the content for the second tab.</p>
  </div>
  <div id="content3" class="tab-content">
    <h2>Content for Tab 3</h2>
    <p>This is the content for the third tab.</p>
  </div>
</div>`}
            language="html"
          />
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">CSS Rules</h3>
          <CodeBlock
            code={`/* Hide radio buttons */
input[type="radio"] { 
  display: none; 
}

/* Basic tab styling */
.tabs { 
  display: flex; 
  gap: 10px;
  margin-bottom: 10px;
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
}

#tab1:checked ~* #content1,
#tab2:checked ~* #content2,
#tab3:checked ~* #content3 { 
  display: block !important; 
}`}
            language="css"
          />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h3>
          <ol className="space-y-4 text-gray-700">
            <li>
              <div className="flex">
                <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">1</div>
                <div>
                  <p><strong>Radio Buttons as State Storage:</strong> We use radio buttons with the same <code className="bg-gray-100 px-1 rounded">name</code> attribute to ensure only one tab can be selected at a time.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">2</div>
                <div>
                  <p><strong>Labels as Tab Triggers:</strong> When a user clicks on a label, it checks the corresponding radio button.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">3</div>
                <div>
                  <p><strong>CSS Selectors for Showing Content:</strong> We use sibling selectors to show the content associated with the checked radio button.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">4</div>
                <div>
                  <p><strong>Default Selection:</strong> The <code className="bg-gray-100 px-1 rounded">checked</code> attribute on the first radio button ensures content is visible when the email is first opened.</p>
                </div>
              </div>
            </li>
          </ol>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-medium text-blue-800 mb-2">Key CSS Selectors Explained</h4>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li>
                <code className="bg-blue-100 px-1 rounded">#tab1:checked ~ .tabs label[for="tab1"]</code> - This highlights the active tab label when the corresponding radio button is checked.
              </li>
              <li>
                <code className="bg-blue-100 px-1 rounded">#tab1:checked ~* #content1</code> - This shows the content for tab 1 when the first radio button is checked. The <code className="bg-blue-100 px-1 rounded">~*</code> selector targets all elements after the radio button.
              </li>
              <li>
                <code className="bg-blue-100 px-1 rounded">!important</code> - This ensures our styles override any client-specific styles in the email environment.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Live Example */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Live Example</h3>
        <p className="text-gray-700 mb-4">
          Click on the tabs below to see how a basic tabbed interface works:
        </p>
        
        <div className="bg-white p-6 rounded-lg border border-gray-300">
          {/* Tab navigation */}
          <div className="flex border-b mb-4">
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab(1)}
            >
              Products
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 2 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab(2)}
            >
              Features
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 3 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab(3)}
            >
              Support
            </button>
          </div>
          
          {/* Tab content */}
          <div className="p-4 bg-gray-50 rounded-md">
            {activeTab === 1 && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Our Products</h3>
                <p className="text-gray-700">Explore our range of products designed to meet your needs.</p>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Key Features</h3>
                <p className="text-gray-700">Discover the powerful features that set our products apart.</p>
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Customer Support</h3>
                <p className="text-gray-700">We're here to help. Get in touch with our support team.</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p>
            <strong>Note:</strong> This interactive example uses React for demonstration purposes. In an actual email, the tabs would work using only HTML and CSS as shown in the code examples above.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TabbedBasicExample;