// src/pages/learn/tabs/TabbedBasicExample.tsx

import React, { useState } from 'react';
import { Code, Settings, Lightbulb } from 'lucide-react';
import CodeBlock from '../../../components/common/CodeBlock';

const TabbedBasicExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl"></div>
      <div className="relative bg-white rounded-2xl p-8 md:p-10 border-2 border-orange-200 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
            <Code className="text-white w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black text-gray-900">Basic Tabbed Interface</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Let's start with a simple example of how to create a basic tabbed interface in an email. This pattern forms the foundation for more complex kinetic email components.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
              <Code className="text-orange-600 w-5 h-5" />
              HTML Structure
            </h3>
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

            <h3 className="text-xl font-bold text-orange-900 mt-8 mb-4 flex items-center gap-2">
              <Settings className="text-orange-600 w-5 h-5" />
              CSS Rules
            </h3>
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
            <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
              <Lightbulb className="text-orange-600 w-5 h-5" />
              How It Works
            </h3>
            <ol className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Radio Buttons as State Storage</p>
                  <p className="text-gray-700 leading-relaxed">We use radio buttons with the same <code className="bg-orange-100 px-2 py-0.5 rounded font-mono text-sm">name</code> attribute to ensure only one tab can be selected at a time.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Labels as Tab Triggers</p>
                  <p className="text-gray-700 leading-relaxed">When a user clicks on a label, it checks the corresponding radio button.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">CSS Selectors for Showing Content</p>
                  <p className="text-gray-700 leading-relaxed">We use sibling selectors to show the content associated with the checked radio button.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Default Selection</p>
                  <p className="text-gray-700 leading-relaxed">The <code className="bg-orange-100 px-2 py-0.5 rounded font-mono text-sm">checked</code> attribute on the first radio button ensures content is visible when the email is first opened.</p>
                </div>
              </div>
            </ol>

            <div className="mt-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border-2 border-orange-200">
                <h4 className="font-bold text-orange-900 mb-3">Key CSS Selectors Explained</h4>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li>
                    <code className="bg-orange-100 px-2 py-0.5 rounded font-mono">#tab1:checked ~ .tabs label[for="tab1"]</code> - This highlights the active tab label when the corresponding radio button is checked.
                  </li>
                  <li>
                    <code className="bg-orange-100 px-2 py-0.5 rounded font-mono">#tab1:checked ~* #content1</code> - This shows the content for tab 1 when the first radio button is checked. The <code className="bg-orange-100 px-1 rounded font-mono">~*</code> selector targets all elements after the radio button.
                  </li>
                  <li>
                    <code className="bg-orange-100 px-2 py-0.5 rounded font-mono">!important</code> - This ensures our styles override any client-specific styles in the email environment.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Live Example */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl blur opacity-20"></div>
          <div className="relative bg-gradient-to-br from-gray-50 to-orange-50 p-8 rounded-xl border-2 border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Live Interactive Example</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Click on the tabs below to see how a basic tabbed interface works:
            </p>

            <div className="bg-white p-6 rounded-lg border-2 border-orange-300 shadow-lg">
              {/* Tab navigation */}
              <div className="flex border-b border-orange-200 mb-4">
                <button
                  className={`px-6 py-3 font-medium transition-all ${
                    activeTab === 1
                      ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50'
                      : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
                  }`}
                  onClick={() => setActiveTab(1)}
                >
                  Products
                </button>
                <button
                  className={`px-6 py-3 font-medium transition-all ${
                    activeTab === 2
                      ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50'
                      : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
                  }`}
                  onClick={() => setActiveTab(2)}
                >
                  Features
                </button>
                <button
                  className={`px-6 py-3 font-medium transition-all ${
                    activeTab === 3
                      ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50'
                      : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
                  }`}
                  onClick={() => setActiveTab(3)}
                >
                  Support
                </button>
              </div>

              {/* Tab content */}
              <div className="p-4 bg-orange-50 rounded-md">
                {activeTab === 1 && (
                  <div>
                    <h3 className="text-lg font-bold text-orange-900 mb-2">Our Products</h3>
                    <p className="text-gray-700">Explore our range of products designed to meet your needs.</p>
                  </div>
                )}
                {activeTab === 2 && (
                  <div>
                    <h3 className="text-lg font-bold text-orange-900 mb-2">Key Features</h3>
                    <p className="text-gray-700">Discover the powerful features that set our products apart.</p>
                  </div>
                )}
                {activeTab === 3 && (
                  <div>
                    <h3 className="text-lg font-bold text-orange-900 mb-2">Customer Support</h3>
                    <p className="text-gray-700">We're here to help. Get in touch with our support team.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 text-xs text-orange-900 p-3 bg-orange-50 rounded border border-orange-200">
              <strong>Note:</strong> This interactive example uses React for demonstration purposes. In an actual email, the tabs would work using only HTML and CSS as shown in the code examples above.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedBasicExample;
