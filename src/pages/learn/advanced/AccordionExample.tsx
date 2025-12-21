// src/pages/learn/advanced/AccordionExample.tsx
import React, { useState } from 'react';
import { Code, Settings, CheckCircle, Menu } from 'lucide-react';
import CodeBlock from '../../../components/common/CodeBlock';

const AccordionExample: React.FC = () => {
  const [openSection, setOpenSection] = useState<string>('section1');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  return (
    <section className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
      <div className="relative bg-white rounded-2xl p-8 md:p-10 border-2 border-rose-200 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Menu className="text-white w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black text-gray-900">Animated Accordion for Kinetic Emails</h2>
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          An accordion is a perfect way to organize content in emails, allowing recipients to expand
          sections they're interested in while keeping the overall email compact. By combining the
          radio button hack with CSS animations, we can create a smooth opening and closing effect.
        </p>

        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-xl blur opacity-20"></div>
          <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border-2 border-rose-200">
            <p className="text-rose-900 leading-relaxed">
              <strong className="font-bold">Animation Support:</strong> CSS animations and transitions are primarily supported in Apple Mail, iOS Mail,
              and some versions of Outlook for Mac. Always provide a fallback layout for email clients that
              don't support these features.
            </p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-rose-900 mb-4">How It Works</h3>

            <ol className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Radio Button Controls</p>
                  <p className="text-gray-700 leading-relaxed">We use radio buttons to track which accordion section is expanded.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">CSS Selectors</p>
                  <p className="text-gray-700 leading-relaxed">We use the <code className="bg-rose-100 px-1 rounded">:checked</code> pseudo-class to target the selected section.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">CSS Animations</p>
                  <p className="text-gray-700 leading-relaxed">We use <code className="bg-rose-100 px-1 rounded">max-height</code> transitions for smooth opening/closing animations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Fallback Handling</p>
                  <p className="text-gray-700 leading-relaxed">For non-supporting clients, content displays in a stacked layout.</p>
                </div>
              </div>
            </ol>

            <div className="mt-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 p-5 rounded-xl border-2 border-yellow-200">
                <h4 className="font-bold text-yellow-900 mb-3">Key Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-yellow-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-800">Keeps emails concise while providing detailed information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-yellow-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-800">Encourages engagement with interactive elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-yellow-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-800">Gracefully degrades in non-supporting clients</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-rose-900 mb-4">Live Demo</h3>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-rose-50 p-6 rounded-xl border-2 border-rose-200">
                <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-rose-300">
                  <div className="accordion-demo">
                    {/* Section 1 */}
                    <div className="mb-2 border-2 border-rose-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('section1')}
                        className={`w-full flex justify-between items-center p-4 text-left cursor-pointer transition-colors ${
                          openSection === 'section1' ? 'bg-rose-100 border-b-2 border-rose-300' : 'bg-rose-50 hover:bg-rose-100'
                        }`}
                      >
                        <span className="font-bold text-rose-900">Product Features</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 text-rose-600 transition-transform duration-300 ${
                            openSection === 'section1' ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <div className={`overflow-hidden transition-all duration-500 ${
                        openSection === 'section1' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-4 bg-white">
                          <p className="text-gray-700">Discover our latest features including seamless integration, advanced analytics, and custom reporting tools that help you make better business decisions.</p>
                        </div>
                      </div>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-2 border-2 border-pink-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('section2')}
                        className={`w-full flex justify-between items-center p-4 text-left cursor-pointer transition-colors ${
                          openSection === 'section2' ? 'bg-pink-100 border-b-2 border-pink-300' : 'bg-pink-50 hover:bg-pink-100'
                        }`}
                      >
                        <span className="font-bold text-pink-900">Pricing Plans</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 text-pink-600 transition-transform duration-300 ${
                            openSection === 'section2' ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <div className={`overflow-hidden transition-all duration-500 ${
                        openSection === 'section2' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-4 bg-white">
                          <p className="text-gray-700">We offer flexible pricing options to suit businesses of all sizes. Check out our Starter, Professional, and Enterprise plans designed to scale with your needs.</p>
                        </div>
                      </div>
                    </div>

                    {/* Section 3 */}
                    <div className="mb-2 border-2 border-fuchsia-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('section3')}
                        className={`w-full flex justify-between items-center p-4 text-left cursor-pointer transition-colors ${
                          openSection === 'section3' ? 'bg-fuchsia-100 border-b-2 border-fuchsia-300' : 'bg-fuchsia-50 hover:bg-fuchsia-100'
                        }`}
                      >
                        <span className="font-bold text-fuchsia-900">Customer Testimonials</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 text-fuchsia-600 transition-transform duration-300 ${
                            openSection === 'section3' ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <div className={`overflow-hidden transition-all duration-500 ${
                        openSection === 'section3' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-4 bg-white">
                          <p className="text-gray-700">"Your product transformed how we approach our business. The ROI has been incredible and the support team is always there when we need them." - Sarah J., Marketing Director</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-rose-900 p-2 bg-rose-50 rounded text-center">
                    Click on a section to expand it
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-bold text-gray-900 mb-2">How the Animation Works</h4>
              <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                The accordion uses a max-height transition for smooth animation:
              </p>
              <ul className="space-y-1 text-sm text-gray-700 list-disc ml-5">
                <li>Collapsed sections have <code className="bg-gray-100 px-1 rounded">max-height: 0</code> and <code className="bg-gray-100 px-1 rounded">overflow: hidden</code></li>
                <li>When expanded, <code className="bg-gray-100 px-1 rounded">max-height</code> is set to a value that fits the content</li>
                <li>The <code className="bg-gray-100 px-1 rounded">transition</code> property creates the smooth animation effect</li>
                <li>A rotating arrow provides visual feedback for the open/closed state</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Code</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold text-rose-900 mb-4 flex items-center gap-2">
                <Code className="text-rose-600 w-5 h-5" />
                HTML Structure
              </h4>
              <CodeBlock
                code={`<!-- Radio buttons for accordion control -->
<input type="radio" name="accordion" id="section1" class="accordion-radio" checked>
<input type="radio" name="accordion" id="section2" class="accordion-radio">
<input type="radio" name="accordion" id="section3" class="accordion-radio">

<!-- Main wrapper with lightswitch detection -->
<div class="kinetic-email">
  <!-- Lightswitch - checks if :checked selector works -->
  <input type="checkbox" id="kinetic-check" class="lightswitch" checked>

  <!-- Interactive version (for supporting clients) -->
  <div class="kinetic-content">
    <div class="accordion-container">
      <!-- Section 1 -->
      <div class="accordion-item">
        <label for="section1" class="accordion-header">
          <span>Product Features</span>
          <span class="accordion-icon">▼</span>
        </label>
        <div class="accordion-content">
          <div class="accordion-body">
            <p>Discover our latest features including seamless integration,
            advanced analytics, and custom reporting tools.</p>
          </div>
        </div>
      </div>

      <!-- Section 2 -->
      <div class="accordion-item">
        <label for="section2" class="accordion-header">
          <span>Pricing Plans</span>
          <span class="accordion-icon">▼</span>
        </label>
        <div class="accordion-content">
          <div class="accordion-body">
            <p>We offer flexible pricing options to suit businesses of all sizes.
            Check out our Starter, Professional, and Enterprise plans.</p>
          </div>
        </div>
      </div>

      <!-- Section 3 -->
      <div class="accordion-item">
        <label for="section3" class="accordion-header">
          <span>Customer Testimonials</span>
          <span class="accordion-icon">▼</span>
        </label>
        <div class="accordion-content">
          <div class="accordion-body">
            <p>"Your product transformed how we approach our business.
            The ROI has been incredible!" - Sarah J., Marketing Director</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Fallback version (for non-supporting clients) -->
  <div class="fallback-content">
    <div class="fallback-section">
      <h3>Product Features</h3>
      <p>Discover our latest features including seamless integration,
      advanced analytics, and custom reporting tools.</p>
    </div>
    <div class="fallback-section">
      <h3>Pricing Plans</h3>
      <p>We offer flexible pricing options to suit businesses of all sizes.
      Check out our Starter, Professional, and Enterprise plans.</p>
    </div>
    <div class="fallback-section">
      <h3>Customer Testimonials</h3>
      <p>"Your product transformed how we approach our business.
      The ROI has been incredible!" - Sarah J., Marketing Director</p>
    </div>
  </div>
</div>`}
                language="html"
              />
            </div>

            <div>
              <h4 className="text-xl font-bold text-pink-900 mb-4 flex items-center gap-2">
                <Settings className="text-pink-600 w-5 h-5" />
                CSS for Animation
              </h4>
              <CodeBlock
                code={`/* Hide radio buttons */
.accordion-radio {
  position: absolute;
  opacity: 0;
}

/* Lightswitch setup */
.lightswitch {
  position: absolute;
  opacity: 0;
}

/* Hide fallback content for supporting clients */
.lightswitch:checked ~ .fallback-content {
  display: none !important;
}

/* Hide interactive content for non-supporting clients */
.lightswitch:not(:checked) ~ .kinetic-content {
  display: none !important;
}

/* Main accordion container */
.accordion-container {
  max-width: 600px;
  margin: 0 auto;
}

/* Accordion item styling */
.accordion-item {
  margin-bottom: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

/* Header styling */
.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f1f5f9;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.accordion-header:hover {
  background-color: #e2e8f0;
}

/* Content area styling */
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.accordion-body {
  padding: 15px;
  border-top: 1px solid #e2e8f0;
}

/* Icon rotation */
.accordion-icon {
  transition: transform 0.3s ease;
}

/* Show selected section with animation */
#section1:checked ~ .kinetic-content .accordion-item:nth-child(1) .accordion-content {
  max-height: 500px !important;
}

#section2:checked ~ .kinetic-content .accordion-item:nth-child(2) .accordion-content {
  max-height: 500px !important;
}

#section3:checked ~ .kinetic-content .accordion-item:nth-child(3) .accordion-content {
  max-height: 500px !important;
}

/* Rotate icon for active accordions */
#section1:checked ~ .kinetic-content .accordion-item:nth-child(1) .accordion-icon,
#section2:checked ~ .kinetic-content .accordion-item:nth-child(2) .accordion-icon,
#section3:checked ~ .kinetic-content .accordion-item:nth-child(3) .accordion-icon {
  transform: rotate(180deg) !important;
}

/* Active header styles */
#section1:checked ~ .kinetic-content .accordion-item:nth-child(1) .accordion-header,
#section2:checked ~ .kinetic-content .accordion-item:nth-child(2) .accordion-header,
#section3:checked ~ .kinetic-content .accordion-item:nth-child(3) .accordion-header {
  background-color: #cbd5e1 !important;
}

/* Fallback content styling */
.fallback-content {
  max-width: 600px;
  margin: 0 auto;
}

.fallback-section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.fallback-section h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 600;
}`}
                language="css"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-xl blur opacity-20"></div>
          <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border-2 border-rose-200">
            <h3 className="text-xl font-bold text-rose-900 mb-4">Best Practices for Animated Accordions</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-rose-800 mb-3">Design Tips</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-rose-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Limit content length in each accordion section</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-rose-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Use clear visual cues (like arrows) to indicate expandable sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-rose-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Keep accordion headers short and descriptive</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-pink-800 mb-3">Technical Considerations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-pink-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Use the Kinetic Lightswitch for proper fallback detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-pink-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Set a generous max-height for expanded sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-pink-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Pre-check one section to provide an example of functionality</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-rose-100 rounded-lg border border-rose-300">
              <h4 className="font-bold text-rose-900 mb-2">Fallback Importance</h4>
              <p className="text-rose-800 leading-relaxed">
                The stacked fallback is crucial for email clients that don't support the checkbox hack or CSS transitions.
                In these clients, all content will be visible and neatly formatted, ensuring your message is still effectively
                delivered even without the interactive elements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionExample;
