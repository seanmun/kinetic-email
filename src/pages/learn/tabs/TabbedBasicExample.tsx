// src/pages/learn/tabs/TabbedBasicExample.tsx

import React, { useState } from 'react';
import { Code, Settings, Lightbulb, Mail } from 'lucide-react';
import CodeBlock from '../../../components/common/CodeBlock';
import SendEmailModal from '../../../components/common/SendEmailModal';
import { tabbedInterfaceHTML } from '../emailExamples';

const TabbedBasicExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showSendModal, setShowSendModal] = useState(false);

  return (
    <section className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl"></div>
      <div className="relative bg-white rounded-2xl p-3 sm:p-6 md:p-8 lg:p-10 border-2 border-orange-200 shadow-xl">
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
          <div className="min-w-0">
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

          <div className="min-w-0">
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
          <div className="relative bg-gradient-to-br from-gray-50 to-orange-50 p-3 sm:p-6 md:p-8 rounded-xl border-2 border-orange-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Live Interactive Example</h3>
              <button
                onClick={() => setShowSendModal(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
              >
                <Mail className="w-4 h-4" />
                Send to Inbox
              </button>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Click the tabs below to see how the content changes. The radio buttons are hidden but control which content is displayed:
            </p>

            <div className="bg-white p-3 sm:p-6 rounded-lg border-2 border-orange-300 shadow-lg">
              <style>{`
                /* Hide radio buttons */
                input[type="radio"][name="demo-tabs"] {
                  position: absolute;
                  opacity: 0;
                  pointer-events: none;
                }

                /* Hide all content by default */
                .tab-content > div {
                  display: none;
                }

                /* Active tab styling */
                #demo-tab1:checked ~ .tab-labels .tab-label-1,
                #demo-tab2:checked ~ .tab-labels .tab-label-2,
                #demo-tab3:checked ~ .tab-labels .tab-label-3 {
                  background: linear-gradient(to right, rgb(249 115 22), rgb(251 146 60)) !important;
                  color: white !important;
                  border-bottom-color: rgb(249 115 22) !important;
                }

                /* Show content based on checked radio */
                #demo-tab1:checked ~ .tab-content .content-1,
                #demo-tab2:checked ~ .tab-content .content-2,
                #demo-tab3:checked ~ .tab-content .content-3 {
                  display: block !important;
                }
              `}</style>

              {/* Radio buttons (hidden) */}
              <input type="radio" id="demo-tab1" name="demo-tabs" defaultChecked />
              <input type="radio" id="demo-tab2" name="demo-tabs" />
              <input type="radio" id="demo-tab3" name="demo-tabs" />

              {/* Tab navigation */}
              <div className="tab-labels flex border-b border-orange-200 mb-4">
                <label
                  htmlFor="demo-tab1"
                  className="tab-label-1 cursor-pointer px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 font-medium transition-all text-gray-500 hover:text-gray-700 border-b-2 border-transparent text-sm sm:text-base flex-1 text-center"
                >
                  Products
                </label>
                <label
                  htmlFor="demo-tab2"
                  className="tab-label-2 cursor-pointer px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 font-medium transition-all text-gray-500 hover:text-gray-700 border-b-2 border-transparent text-sm sm:text-base flex-1 text-center"
                >
                  Features
                </label>
                <label
                  htmlFor="demo-tab3"
                  className="tab-label-3 cursor-pointer px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 font-medium transition-all text-gray-500 hover:text-gray-700 border-b-2 border-transparent text-sm sm:text-base flex-1 text-center"
                >
                  Support
                </label>
              </div>

              {/* Tab content */}
              <div className="tab-content">
                <div className="content-1 p-4 bg-orange-50 rounded-md">
                  <h3 className="text-lg font-bold text-orange-900 mb-2">Our Products</h3>
                  <p className="text-gray-700">Explore our range of products designed to meet your needs.</p>
                </div>
                <div className="content-2 p-4 bg-orange-50 rounded-md">
                  <h3 className="text-lg font-bold text-orange-900 mb-2">Key Features</h3>
                  <p className="text-gray-700">Discover the powerful features that set our products apart.</p>
                </div>
                <div className="content-3 p-4 bg-orange-50 rounded-md">
                  <h3 className="text-lg font-bold text-orange-900 mb-2">Customer Support</h3>
                  <p className="text-gray-700">We're here to help. Get in touch with our support team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Send Email Modal */}
      <SendEmailModal
        isOpen={showSendModal}
        onClose={() => setShowSendModal(false)}
        emailHTML={tabbedInterfaceHTML}
        defaultSubject="Learn Kinetic Emails - Tabbed Interface Example"
        emailType="learning"
      />
    </section>
  );
};

export default TabbedBasicExample;
