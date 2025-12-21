// src/pages/learn/tabs/TabbedAdvancedExample.tsx

import React, { useState } from 'react';
import { Rocket, Palette, ArrowUpDown, Image, Package, Sparkles, Headphones } from 'lucide-react';
import CodeBlock from '../../../components/common/CodeBlock';

const TabbedAdvancedExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl"></div>
      <div className="relative bg-white rounded-2xl p-8 md:p-10 border-2 border-orange-200 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black text-gray-900">Advanced Tabbed Techniques</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Now that we understand the basics, let's explore some advanced techniques to enhance your tabbed interfaces in emails.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Styled Tabs */}
          <div>
            <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
              <Palette className="text-orange-600 w-5 h-5" />
              Styled Tabs
            </h3>
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

            <h3 className="text-xl font-bold text-orange-900 mt-8 mb-4 flex items-center gap-2">
              <Image className="text-orange-600 w-5 h-5" />
              Icons in Tabs
            </h3>
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

          {/* Vertical Tabs & Animations */}
          <div>
            <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
              <ArrowUpDown className="text-orange-600 w-5 h-5" />
              Vertical Tabs
            </h3>
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

            <div className="relative mt-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-xl border-2 border-yellow-200">
                <p className="text-yellow-900 text-sm leading-relaxed">
                  <strong>Note on animations:</strong> CSS transitions work in some email clients but not all. Always test thoroughly and ensure your tabs still function properly even if the animations don't display.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Example of Vertical Tabs */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl blur opacity-20"></div>
          <div className="relative bg-gradient-to-br from-gray-50 to-orange-50 p-8 rounded-xl border-2 border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Live Example: Vertical Tabs</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Here's how vertical tabs look in practice:
            </p>

            <div className="bg-white p-6 rounded-lg border-2 border-orange-300 shadow-lg">
              <div className="flex">
                {/* Tab navigation (vertical) */}
                <div className="w-48 border-r-2 border-orange-200">
                  <div className="flex flex-col space-y-1">
                    <button
                      className={`text-left px-4 py-3 transition-all flex items-center gap-2 ${
                        activeTab === 1
                          ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-600 font-bold'
                          : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'
                      }`}
                      onClick={() => setActiveTab(1)}
                    >
                      <Package className="w-5 h-5" />
                      Products
                    </button>
                    <button
                      className={`text-left px-4 py-3 transition-all flex items-center gap-2 ${
                        activeTab === 2
                          ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-600 font-bold'
                          : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'
                      }`}
                      onClick={() => setActiveTab(2)}
                    >
                      <Sparkles className="w-5 h-5" />
                      Features
                    </button>
                    <button
                      className={`text-left px-4 py-3 transition-all flex items-center gap-2 ${
                        activeTab === 3
                          ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-600 font-bold'
                          : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'
                      }`}
                      onClick={() => setActiveTab(3)}
                    >
                      <Headphones className="w-5 h-5" />
                      Support
                    </button>
                  </div>
                </div>

                {/* Tab content */}
                <div className="flex-1 p-6">
                  {activeTab === 1 && (
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border-2 border-orange-200">
                      <h3 className="text-lg font-bold text-orange-900 mb-2">Our Products</h3>
                      <p className="text-gray-700 mb-3">Explore our range of products designed to meet your needs.</p>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Premium Widgets</li>
                        <li>Super Solutions</li>
                        <li>Pro Services</li>
                      </ul>
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-lg border-2 border-amber-200">
                      <h3 className="text-lg font-bold text-amber-900 mb-2">Key Features</h3>
                      <p className="text-gray-700 mb-3">Discover the powerful features that set our products apart:</p>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Advanced Analytics</li>
                        <li>Cloud Integration</li>
                        <li>Real-time Collaboration</li>
                      </ul>
                    </div>
                  )}
                  {activeTab === 3 && (
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border-2 border-orange-200">
                      <h3 className="text-lg font-bold text-orange-900 mb-2">Customer Support</h3>
                      <p className="text-gray-700 mb-3">We're here to help. Get in touch with our support team:</p>
                      <div className="bg-white p-4 rounded-md border border-orange-200 mt-2">
                        <p className="text-orange-800">Email: support@example.com</p>
                        <p className="text-orange-800">Phone: (555) 123-4567</p>
                        <p className="text-orange-800">Hours: Mon-Fri, 9am-5pm ET</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-orange-900 p-3 bg-orange-50 rounded border border-orange-200">
              <strong>Note:</strong> In email, vertical tabs work especially well for mobile-responsive layouts, allowing for better space usage on smaller screens.
            </div>
          </div>
        </div>

        <div className="mt-8 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-xl blur opacity-20"></div>
          <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200">
            <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
              <Rocket className="text-amber-600 w-5 h-5" />
              Beyond Basic Tabs
            </h4>
            <p className="text-amber-800 leading-relaxed">
              These advanced techniques can be combined to create rich, interactive email experiences. Remember that simplicity often leads to better compatibility - only add complexity when it serves your content and user experience goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedAdvancedExample;
