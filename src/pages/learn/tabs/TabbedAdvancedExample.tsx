// src/components/learn/tabs/TabbedAdvancedExample.tsx

import React, { useState } from 'react';
import CodeBlock from '../../../components/common/CodeBlock';

const TabbedAdvancedExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Tabbed Techniques</h2>
      
      <p className="text-gray-700 mb-4">
        Now that we understand the basics, let's explore some advanced techniques to enhance your tabbed interfaces in emails.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Styled Tabs</h3>
          <CodeBlock
            code={`/* Horizontal tabs with more styling */
.tabs {
  display: flex;
  border-bottom: 2px solid #e5e7eb;
  margin-bottom: 15px;
}

.tabs label {
  padding: 8px 16px;
  cursor: pointer;
  background: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  font-weight: 500;
  color: #6b7280;
  transition: all 0.3s ease;
}

/* Active tab styling */
#tab1:checked ~ .tabs label[for="tab1"],
#tab2:checked ~ .tabs label[for="tab2"],
#tab3:checked ~ .tabs label[for="tab3"] {
  border-bottom: 2px solid #2563eb;
  color: #2563eb;
}`}
            language="css"
          />
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Animated Transitions</h3>
          <CodeBlock
            code={`/* Fade-in effect for tab content */
.tab-content {
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

#tab1:checked ~* #content1,
#tab2:checked ~* #content2,
#tab3:checked ~* #content3 {
  display: block !important;
  opacity: 1;
}`}
            language="css"
          />
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
            <p className="text-yellow-800 text-sm">
              <strong>Note on animations:</strong> CSS transitions work in some email clients but not all. Always test thoroughly and ensure your tabs still function properly even if the animations don't display.
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Vertical Tabs</h3>
          <CodeBlock
            code={`/* Vertical tab layout */
.tabs-container {
  display: flex;
}

.tabs {
  display: flex;
  flex-direction: column;
  min-width: 150px;
  border-right: 1px solid #e5e7eb;
}

.tabs label {
  padding: 12px 15px;
  cursor: pointer;
  background: #f9fafb;
  border-left: 3px solid transparent;
  margin-bottom: 5px;
}

/* Active tab styling */
#tab1:checked ~ .tabs-container .tabs label[for="tab1"],
#tab2:checked ~ .tabs-container .tabs label[for="tab2"],
#tab3:checked ~ .tabs-container .tabs label[for="tab3"] {
  border-left: 3px solid #2563eb;
  background: #eff6ff;
  color: #2563eb;
}

.content {
  padding-left: 20px;
  flex: 1;
}`}
            language="css"
          />
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Icons in Tabs</h3>
          <CodeBlock
            code={`/* Tab with icons */
.tabs label {
  display: flex;
  align-items: center;
}

.tabs label .icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
}

.tabs label[for="tab1"] .icon {
  background-image: url('product-icon.png');
}

.tabs label[for="tab2"] .icon {
  background-image: url('features-icon.png');
}

.tabs label[for="tab3"] .icon {
  background-image: url('support-icon.png');
}`}
            language="css"
          />
        </div>
      </div>
      
      {/* Live Example of Vertical Tabs */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Example: Vertical Tabs</h3>
        <p className="text-gray-700 mb-4">
          Here's how vertical tabs look in practice:
        </p>
        
        <div className="bg-white p-6 rounded-lg border border-gray-300">
          <div className="flex">
            {/* Tab navigation (vertical) */}
            <div className="w-40 border-r border-gray-200">
              <div className="flex flex-col space-y-1">
                <button 
                  className={`text-left px-4 py-2 ${activeTab === 1 ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'}`}
                  onClick={() => setActiveTab(1)}
                >
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Products
                  </div>
                </button>
                <button 
                  className={`text-left px-4 py-2 ${activeTab === 2 ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'}`}
                  onClick={() => setActiveTab(2)}
                >
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Features
                  </div>
                </button>
                <button 
                  className={`text-left px-4 py-2 ${activeTab === 3 ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'}`}
                  onClick={() => setActiveTab(3)}
                >
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Support
                  </div>
                </button>
              </div>
            </div>
            
            {/* Tab content */}
            <div className="flex-1 p-4">
              {activeTab === 1 && (
                <div className="animate-fade-in">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Our Products</h3>
                  <p className="text-gray-700 mb-2">Explore our range of products designed to meet your needs.</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Premium Widgets</li>
                    <li>Super Solutions</li>
                    <li>Pro Services</li>
                  </ul>
                </div>
              )}
              {activeTab === 2 && (
                <div className="animate-fade-in">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Key Features</h3>
                  <p className="text-gray-700 mb-2">Discover the powerful features that set our products apart:</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Advanced Analytics</li>
                    <li>Cloud Integration</li>
                    <li>Real-time Collaboration</li>
                  </ul>
                </div>
              )}
              {activeTab === 3 && (
                <div className="animate-fade-in">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Customer Support</h3>
                  <p className="text-gray-700 mb-2">We're here to help. Get in touch with our support team:</p>
                  <div className="bg-blue-50 p-3 rounded-md text-blue-800 mt-2">
                    <p>Email: support@example.com</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Hours: Mon-Fri, 9am-5pm ET</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p>
            <strong>Note:</strong> In email, vertical tabs work especially well for mobile-responsive layouts, allowing for better space usage on smaller screens.
          </p>
        </div>
      </div>
      
      <div className="mt-6 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
        <h4 className="font-medium text-indigo-900 mb-2">Beyond Basic Tabs</h4>
        <p className="text-indigo-800">
          These advanced techniques can be combined to create rich, interactive email experiences. Remember that simplicity often leads to better compatibility - only add complexity when it serves your content and user experience goals.
        </p>
      </div>
    </section>
  );
};

export default TabbedAdvancedExample;