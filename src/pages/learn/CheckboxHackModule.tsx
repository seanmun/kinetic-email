// src/pages/learn/CheckboxHackModule.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Code, Lightbulb, Wand2, Settings, AlertTriangle, Zap, Apple, XCircle, Box, Layers, Rocket, Mail } from 'lucide-react';

// Icon aliases for compatibility
const FaCheckCircle = CheckCircle;
const FaMagic = Wand2;
import PageLayout from '../../components/layout/PageLayout';
import CodeBlock from '../../components/common/CodeBlock';
import ModuleCompletionButton from '../../components/common/ModuleCompletionButton';
import SendEmailModal from '../../components/common/SendEmailModal';
import { checkboxToggleHTML } from './emailExamples';

const CheckboxHackModule: React.FC = () => {
  const [showSendModal, setShowSendModal] = useState(false);

  return (
    <PageLayout>
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Learning Path
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 p-12 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Wand2 className="w-6 h-6 text-emerald-300" />
            </div>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold">
              Module 2 of 6
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            The Checkbox
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
              Hack
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl leading-relaxed">
            Master the core technique that powers all kinetic emails using CSS selectors and HTML form elements.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* What is the Checkbox Hack */}
        <section className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl p-8 md:p-10 border-2 border-emerald-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">What is the Checkbox Hack?</h2>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The <strong className="text-emerald-700">checkbox hack</strong> is a CSS technique that allows you to create interactive elements without using JavaScript. It works by controlling the visibility of content based on the state of checkboxes or radio buttons.
            </p>

            <div className="relative mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25"></div>
              <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 border-l-4 border-emerald-500 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900 mb-2 text-lg">Key Principle</h3>
                    <p className="text-emerald-800 leading-relaxed">
                      When a user clicks on a label associated with a checkbox or radio button, it changes the state of that input element. We can then use CSS to detect this state change and modify the appearance of other elements accordingly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              This technique is the foundation of kinetic emails because it allows us to create interactive elements that respond to user clicks without relying on JavaScript, which is typically stripped out by email clients.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Building Blocks Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white p-6 rounded-xl border-2 border-emerald-200 hover:border-emerald-300 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                    <Box className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-emerald-900 mb-4 text-lg">The Building Blocks</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span><strong className="text-gray-900">Input elements</strong>: Checkboxes or radio buttons that store state</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span><strong className="text-gray-900">Labels</strong>: Elements that users click to change input state</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span><strong className="text-gray-900">CSS selectors</strong>: Rules that detect state and apply styles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span><strong className="text-gray-900">Content elements</strong>: Sections that show or hide based on state</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CSS Selectors Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-2 border-emerald-200 hover:border-emerald-300 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-emerald-900 mb-4 text-lg">CSS Selectors We'll Use</h3>
                  <ul className="space-y-3 text-emerald-800">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span><code className="bg-emerald-100 px-2 py-0.5 rounded font-mono text-sm">:checked</code> pseudo-class to detect checked state</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span><code className="bg-emerald-100 px-2 py-0.5 rounded font-mono text-sm">+</code> adjacent sibling selector</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span><code className="bg-emerald-100 px-2 py-0.5 rounded font-mono text-sm">~</code> general sibling selector</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span><code className="bg-emerald-100 px-2 py-0.5 rounded font-mono text-sm">~*</code> to reach nested elements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Basic Example Section */}
        <section className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl p-8 md:p-10 border-2 border-emerald-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Basic Example: A Simple Toggle</h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let's start with a simple example: a checkbox that shows or hides content when clicked.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-emerald-600" />
                  HTML Structure
                </h3>
                <CodeBlock
                  code={`<input type="checkbox" id="toggle" class="hidden-checkbox">
<label for="toggle" class="toggle-label">Show Details</label>

<div class="content">
  This content will be hidden until the checkbox is checked.
</div>`}
                  language="html"
                />

                <h3 className="text-xl font-bold text-emerald-900 mt-8 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-emerald-600" />
                  CSS Rules
                </h3>
                <CodeBlock
                  code={`.hidden-checkbox {
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
}`}
                  language="css"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-600" />
                  How It Works
                </h3>
                <ol className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">The Input Element</p>
                      <p className="text-gray-700 leading-relaxed">We hide the actual checkbox but keep it in the DOM.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">The Label</p>
                      <p className="text-gray-700 leading-relaxed">We style the label to look like a button. When clicked, it toggles the associated checkbox.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">The Content</p>
                      <p className="text-gray-700 leading-relaxed">Initially hidden with <code className="bg-gray-100 px-2 py-0.5 rounded font-mono text-sm">display: none</code>.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">The CSS Magic</p>
                      <p className="text-gray-700 leading-relaxed"><code className="bg-gray-100 px-2 py-0.5 rounded font-mono text-sm">#toggle:checked ~ .content</code> selects the content element when the checkbox is checked, and makes it visible.</p>
                    </div>
                  </div>
                </ol>

                <div className="mt-6 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-xl border-2 border-emerald-200">
                    <h4 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                      <Wand2 className="w-5 h-5 text-emerald-600" />
                      The CSS Selector Explained
                    </h4>
                    <p className="text-emerald-800 mb-3">
                      <code className="bg-emerald-100 px-2 py-0.5 rounded font-mono text-sm">#toggle:checked ~ .content</code> breaks down as:
                    </p>
                    <ul className="space-y-2 text-emerald-800">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600">•</span>
                        <span><code className="bg-emerald-100 px-2 py-0.5 rounded font-mono text-sm">#toggle</code> - Targets the input with ID "toggle"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600">•</span>
                        <span><code className="bg-emerald-100 px-2 py-0.5 rounded font-mono text-sm">:checked</code> - Only applies when the input is checked</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600">•</span>
                        <span><code className="bg-emerald-100 px-2 py-0.5 rounded font-mono text-sm">~</code> - General sibling selector (selects elements after the input)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600">•</span>
                        <span><code className="bg-emerald-100 px-2 py-0.5 rounded font-mono text-sm">.content</code> - Targets elements with class "content"</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Demo */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-emerald-50 p-8 rounded-xl border-2 border-emerald-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Live Example</h3>
                  <button
                    onClick={() => setShowSendModal(true)}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Send to Inbox
                  </button>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This demonstrates the basic checkbox hack in action. Click the button to toggle the content visibility:
                </p>

                <div className="p-8 bg-white rounded-lg border-2 border-emerald-300 shadow-lg">
                  <style>{`
                    #demo-toggle:checked ~ .toggle-label {
                      background: linear-gradient(to right, rgb(20 184 166), rgb(6 182 212)) !important;
                    }

                    #demo-toggle:checked ~ .toggle-content {
                      max-height: 200px !important;
                    }
                  `}</style>

                  {/* The actual checkbox must be at the top level for sibling selectors to work */}
                  <input type="checkbox" id="demo-toggle" />

                  {/* Educational note about the checkbox */}
                  <div className="mb-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-blue-600" />
                      <p className="text-sm font-bold text-blue-900">The Hidden Checkbox (normally hidden, but visible here for learning):</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <label htmlFor="demo-toggle" className="text-sm text-blue-800 font-mono cursor-pointer flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-gray-400 rounded inline-block relative">
                          <span className="absolute inset-0 bg-blue-500 scale-0" style={{ transition: 'transform 0.2s' }}></span>
                        </span>
                        id="demo-toggle" (click the checkbox above or the button below)
                      </label>
                    </div>
                    <p className="text-xs text-blue-700 mt-2">The real checkbox is above. Try clicking it directly, or use the styled button below - both control the same state!</p>
                  </div>

                  <label
                    htmlFor="demo-toggle"
                    className="toggle-label cursor-pointer py-3 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 inline-block rounded-lg text-white font-bold hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Toggle Content
                  </label>

                  <div className="toggle-content overflow-hidden max-h-0 transition-all duration-500">
                    <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 mt-6 rounded-lg border-2 border-emerald-200">
                      <p className="text-emerald-900 font-medium">This content is now visible because you clicked the toggle button!</p>
                      <p className="text-emerald-800 mt-2">In a real email, this could contain additional information, images, or other content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Example: Tabbed Interface */}
        <section className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl p-8 md:p-10 border-2 border-emerald-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Advanced Example: Tabbed Interface</h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Now let's create something more complex and useful: a tabbed interface. This is one of the most common applications of the checkbox hack in kinetic emails.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-emerald-600" />
                  HTML Structure
                </h3>
                <CodeBlock
                  code={`<input type="radio" id="tab1" name="tabs" checked>
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
</div>`}
                  language="html"
                />

                <h3 className="text-xl font-bold text-emerald-900 mt-8 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-emerald-600" />
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
  background: #10b981;
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
}`}
                  language="css"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4">Key Differences</h3>
                <div className="space-y-4">
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white p-4 rounded-lg border-2 border-emerald-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900">Radio Buttons Instead of Checkboxes</strong>
                          <p className="text-gray-700 mt-1">We use radio buttons with the same <code className="bg-gray-100 px-2 py-0.5 rounded font-mono text-sm">name</code> attribute, which ensures only one can be selected at a time.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white p-4 rounded-lg border-2 border-emerald-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900">Multiple Content Sections</strong>
                          <p className="text-gray-700 mt-1">Each tab has its own content section that's shown/hidden based on which radio button is checked.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white p-4 rounded-lg border-2 border-emerald-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900">Active Tab Styling</strong>
                          <p className="text-gray-700 mt-1">We style the active tab differently to give users visual feedback.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white p-4 rounded-lg border-2 border-emerald-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900">More Complex Selectors</strong>
                          <p className="text-gray-700 mt-1">We target nested elements with more specific selectors.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25"></div>
                  <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-xl border-2 border-emerald-200">
                    <h4 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-emerald-600" />
                      Pro Tips
                    </h4>
                    <ul className="space-y-3 text-emerald-800">
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Use the <code className="bg-emerald-100 px-2 py-0.5 rounded font-mono text-sm">checked</code> attribute to set a default active tab</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Use <code className="bg-emerald-100 px-2 py-0.5 rounded font-mono text-sm">!important</code> for display properties to ensure they work in email clients</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Keep your HTML structure simple, with inputs at the beginning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Demo */}
            <div className="relative mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-emerald-50 p-8 rounded-xl border-2 border-emerald-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Live Example</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This demonstrates a fully functional tabbed interface. Click the tabs to switch between different content sections:
                </p>

                <div className="p-8 bg-white rounded-lg border-2 border-emerald-300 shadow-lg">
                  <style>{`
                    #demo-tab1:checked ~ .tab-labels .tab-label-1,
                    #demo-tab2:checked ~ .tab-labels .tab-label-2,
                    #demo-tab3:checked ~ .tab-labels .tab-label-3 {
                      background: linear-gradient(to right, rgb(16 185 129), rgb(20 184 166)) !important;
                      color: white !important;
                      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
                    }

                    #demo-tab1:checked ~ .tab-content .content-1,
                    #demo-tab2:checked ~ .tab-content .content-2,
                    #demo-tab3:checked ~ .tab-content .content-3 {
                      display: block !important;
                    }
                  `}</style>

                  {/* The actual radio buttons must be at the top level for sibling selectors to work */}
                  <input type="radio" id="demo-tab1" name="demo-tabs" defaultChecked />
                  <input type="radio" id="demo-tab2" name="demo-tabs" />
                  <input type="radio" id="demo-tab3" name="demo-tabs" />

                  {/* Educational note about the radio buttons */}
                  <div className="mb-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-blue-600" />
                      <p className="text-sm font-bold text-blue-900">The Hidden Radio Buttons (normally hidden, but visible here for learning):</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <label htmlFor="demo-tab1" className="text-sm text-blue-800 font-mono cursor-pointer flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-gray-400 rounded-full inline-block"></span>
                        id="demo-tab1"
                      </label>
                      <label htmlFor="demo-tab2" className="text-sm text-blue-800 font-mono cursor-pointer flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-gray-400 rounded-full inline-block"></span>
                        id="demo-tab2"
                      </label>
                      <label htmlFor="demo-tab3" className="text-sm text-blue-800 font-mono cursor-pointer flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-gray-400 rounded-full inline-block"></span>
                        id="demo-tab3"
                      </label>
                    </div>
                    <p className="text-xs text-blue-700 mt-2">The real radio buttons are above. Try clicking them directly, or use the styled tabs below - both control the same state!</p>
                  </div>

                  <div className="tab-labels flex gap-2 mb-6">
                      <label
                        htmlFor="demo-tab1"
                        className="tab-label-1 cursor-pointer flex-1 text-center py-3 px-6 bg-gray-200 text-gray-700 font-bold rounded-lg transition-all hover:bg-gray-300"
                      >
                        Tab 1
                      </label>
                      <label
                        htmlFor="demo-tab2"
                        className="tab-label-2 cursor-pointer flex-1 text-center py-3 px-6 bg-gray-200 text-gray-700 font-bold rounded-lg transition-all hover:bg-gray-300"
                      >
                        Tab 2
                      </label>
                      <label
                        htmlFor="demo-tab3"
                        className="tab-label-3 cursor-pointer flex-1 text-center py-3 px-6 bg-gray-200 text-gray-700 font-bold rounded-lg transition-all hover:bg-gray-300"
                      >
                        Tab 3
                      </label>
                    </div>

                    <div className="tab-content">
                      <div className="content-1 hidden">
                        <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border-2 border-emerald-200">
                          <h4 className="text-xl font-bold text-emerald-900 mb-3">Content for Tab 1</h4>
                          <p className="text-emerald-800 mb-3">This is the content for the first tab. In a real email, this could contain:</p>
                          <ul className="space-y-2 text-emerald-800">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                              <span>Product details and descriptions</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                              <span>Images and media</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                              <span>Call-to-action buttons</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="content-2 hidden">
                        <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border-2 border-teal-200">
                          <h4 className="text-xl font-bold text-teal-900 mb-3">Content for Tab 2</h4>
                          <p className="text-teal-800 mb-3">This is the second tab's content. Notice how it completely replaces the first tab's content.</p>
                          <p className="text-teal-800">Only one tab's content is visible at a time, thanks to radio buttons all sharing the same name attribute!</p>
                        </div>
                      </div>

                      <div className="content-3 hidden">
                        <div className="p-6 bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-lg border-2 border-cyan-200">
                          <h4 className="text-xl font-bold text-cyan-900 mb-3">Content for Tab 3</h4>
                          <p className="text-cyan-800 mb-3">And here's the third tab! This demonstrates how you can have as many tabs as needed.</p>
                          <div className="bg-white p-4 rounded-lg border border-cyan-300 mt-4">
                            <p className="text-cyan-900 font-medium">Pro tip: Keep the number of tabs reasonable (3-5) for the best user experience in emails.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Why This Works in Email */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border-2 border-emerald-200">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-600" />
                  Why This Works in Email
                </h3>
                <p className="text-emerald-800 mb-6 text-lg leading-relaxed">
                  The checkbox hack is particularly well-suited for email because:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-20"></div>
                    <div className="relative bg-white p-6 rounded-lg border-2 border-emerald-200">
                      <h4 className="font-bold text-emerald-900 mb-4">What It Uses</h4>
                      <ul className="space-y-3 text-emerald-800">
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Standard HTML form elements</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Basic CSS selectors and properties</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Native browser behaviors</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-20"></div>
                    <div className="relative bg-white p-6 rounded-lg border-2 border-emerald-200">
                      <h4 className="font-bold text-emerald-900 mb-4">What It Avoids</h4>
                      <ul className="space-y-3 text-emerald-800">
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>JavaScript (often blocked in email clients)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>External dependencies or libraries</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Advanced CSS features not supported in email</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl p-8 md:p-10 border-2 border-emerald-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Best Practices & Common Challenges</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Things to Do */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25"></div>
                <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-2 border-emerald-200">
                  <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-600" />
                    Things to Do
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Place inputs at the start of your HTML</strong>
                        <p className="text-sm mt-1 text-gray-700">This makes it easier to select subsequent elements with the general sibling selector.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Use meaningful IDs</strong>
                        <p className="text-sm mt-1 text-gray-700">Clear, descriptive IDs make your code more maintainable and easier to debug.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Test in target email clients</strong>
                        <p className="text-sm mt-1 text-gray-700">Different clients have different levels of support for CSS selectors.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Add visual feedback</strong>
                        <p className="text-sm mt-1 text-gray-700">Make sure users can tell when they've clicked on something interactive.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Things to Avoid */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur opacity-25"></div>
                <div className="relative bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
                  <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Things to Avoid
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Overly complex CSS selectors</strong>
                        <p className="text-sm mt-1 text-gray-700">Keep selectors simple to ensure maximum compatibility across email clients.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Too many interactive elements</strong>
                        <p className="text-sm mt-1 text-gray-700">Keep it simple. Too many checkboxes can lead to confusing selectors and interactions.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Forgetting about fallbacks</strong>
                        <p className="text-sm mt-1 text-gray-700">Always have a fallback for email clients that don't support these techniques.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Relying on advanced CSS features</strong>
                        <p className="text-sm mt-1 text-gray-700">Stick to basic CSS properties that are widely supported in email clients.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Common Challenges */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border-2 border-amber-200">
                <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Common Challenges
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
                    <h4 className="font-bold text-amber-900 mb-3">Challenge: Nested Elements</h4>
                    <p className="text-amber-800 mb-4 leading-relaxed">
                      Sometimes you need to select deeply nested elements, which can be tricky with sibling selectors.
                    </p>
                    <p className="text-amber-900 font-medium mb-2">Solution:</p>
                    <pre className="text-sm text-amber-900 bg-amber-50 p-3 rounded border border-amber-200 overflow-x-auto">{`/* Use the general sibling + wildcard selector */
#checkbox:checked ~* .target-element {
  display: block !important;
}`}</pre>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
                    <h4 className="font-bold text-amber-900 mb-3">Challenge: Email Client Limitations</h4>
                    <p className="text-amber-800 mb-4 leading-relaxed">
                      Some email clients strip or modify certain CSS properties.
                    </p>
                    <p className="text-amber-900 font-medium mb-2">Solution:</p>
                    <ul className="space-y-2 text-amber-800">
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Use <code className="bg-amber-50 px-2 py-0.5 rounded font-mono text-sm">!important</code> to override client styles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Test in target email clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Implement a robust fallback strategy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Applications */}
        <section className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl p-8 md:p-10 border-2 border-emerald-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Real-World Applications</h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The checkbox hack can be used to create a variety of interactive elements in kinetic emails. Here are some common applications:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white p-6 rounded-xl border-2 border-emerald-200 hover:border-emerald-300 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-emerald-900 mb-2 text-lg">Tabbed Interfaces</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Organize content into tabs to save space and allow users to navigate between different sections.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white p-6 rounded-xl border-2 border-emerald-200 hover:border-emerald-300 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-emerald-900 mb-2 text-lg">Accordions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Expandable sections that allow users to show/hide content, perfect for FAQs or product details.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white p-6 rounded-xl border-2 border-emerald-200 hover:border-emerald-300 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                    <Box className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-emerald-900 mb-2 text-lg">Product Carousels</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Showcase multiple products with navigation controls, allowing users to browse without leaving the email.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white p-6 rounded-xl border-2 border-emerald-200 hover:border-emerald-300 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-emerald-900 mb-2 text-lg">Simple Surveys</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Collect user feedback directly in the email, with different content displayed based on their selection.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white p-6 rounded-xl border-2 border-emerald-200 hover:border-emerald-300 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                    <FaMagic className="text-white text-2xl" />
                  </div>
                  <h3 className="font-bold text-emerald-900 mb-2 text-lg">Image Galleries</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Allow users to browse through multiple images with navigation controls and thumbnail previews.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white p-6 rounded-xl border-2 border-emerald-200 hover:border-emerald-300 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-emerald-900 mb-2 text-lg">Multi-Step Forms</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Create simple form-like experiences where each selection reveals the next step in a process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Module Completion */}
        <ModuleCompletionButton
          moduleId="checkbox-hack"
          nextModulePath="/learn/lightswitch"
          nextModuleTitle="The Kinetic Lightswitch"
        />
      </div>

      {/* Send Email Modal */}
      <SendEmailModal
        isOpen={showSendModal}
        onClose={() => setShowSendModal(false)}
        emailHTML={checkboxToggleHTML}
        defaultSubject="Learn Kinetic Emails - Checkbox Toggle Example"
        emailType="learning"
      />
    </PageLayout>
  );
};

export default CheckboxHackModule;
