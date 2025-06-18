// src/pages/learn/advanced/AccordionExample.tsx
import React, { useState } from 'react';

const AccordionExample: React.FC = () => {
  const [openSection, setOpenSection] = useState<string>('section1');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Animated Accordion for Kinetic Emails</h2>
      
      <p className="text-gray-700 mb-4">
        An accordion is a perfect way to organize content in emails, allowing recipients to expand 
        sections they're interested in while keeping the overall email compact. By combining the 
        radio button hack with CSS animations, we can create a smooth opening and closing effect.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <p className="text-blue-800">
          <strong>Animation Support:</strong> CSS animations and transitions are primarily supported in Apple Mail, iOS Mail,
          and some versions of Outlook for Mac. Always provide a fallback layout for email clients that
          don't support these features.
        </p>
      </div>
      
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
          
          <ol className="space-y-4">
            <li className="flex">
              <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">1</div>
              <div>
                <p className="text-gray-800"><strong>Radio Button Controls:</strong> We use radio buttons to track which accordion section is expanded.</p>
              </div>
            </li>
            <li className="flex">
              <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">2</div>
              <div>
                <p className="text-gray-800"><strong>CSS Selectors:</strong> We use the <code>:checked</code> pseudo-class to target the selected section.</p>
              </div>
            </li>
            <li className="flex">
              <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">3</div>
              <div>
                <p className="text-gray-800"><strong>CSS Animations:</strong> We use <code>max-height</code> transitions for smooth opening/closing animations.</p>
              </div>
            </li>
            <li className="flex">
              <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">4</div>
              <div>
                <p className="text-gray-800"><strong>Fallback Handling:</strong> For non-supporting clients, content displays in a stacked layout.</p>
              </div>
            </li>
          </ol>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-2">Key Benefits</h4>
            <ul className="space-y-2 text-yellow-800">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Keeps emails concise while providing detailed information</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Encourages engagement with interactive elements</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Gracefully degrades in non-supporting clients</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Demo</h3>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="accordion-demo">
                {/* Section 1 */}
                <div className="mb-2 border rounded-md overflow-hidden">
                  <button 
                    onClick={() => toggleSection('section1')}
                    className={`w-full flex justify-between items-center p-4 text-left cursor-pointer transition-colors ${
                      openSection === 'section1' ? 'bg-blue-100' : 'bg-blue-50 hover:bg-blue-100'
                    }`}
                  >
                    <span className="font-medium">Product Features</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 transition-transform duration-300 ${
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
                    <div className="p-4 border-t">
                      <p>Discover our latest features including seamless integration, advanced analytics, and custom reporting tools that help you make better business decisions.</p>
                    </div>
                  </div>
                </div>
                
                {/* Section 2 */}
                <div className="mb-2 border rounded-md overflow-hidden">
                  <button 
                    onClick={() => toggleSection('section2')}
                    className={`w-full flex justify-between items-center p-4 text-left cursor-pointer transition-colors ${
                      openSection === 'section2' ? 'bg-blue-100' : 'bg-blue-50 hover:bg-blue-100'
                    }`}
                  >
                    <span className="font-medium">Pricing Plans</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 transition-transform duration-300 ${
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
                    <div className="p-4 border-t">
                      <p>We offer flexible pricing options to suit businesses of all sizes. Check out our Starter, Professional, and Enterprise plans designed to scale with your needs.</p>
                    </div>
                  </div>
                </div>
                
                {/* Section 3 */}
                <div className="mb-2 border rounded-md overflow-hidden">
                  <button 
                    onClick={() => toggleSection('section3')}
                    className={`w-full flex justify-between items-center p-4 text-left cursor-pointer transition-colors ${
                      openSection === 'section3' ? 'bg-blue-100' : 'bg-blue-50 hover:bg-blue-100'
                    }`}
                  >
                    <span className="font-medium">Customer Testimonials</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 transition-transform duration-300 ${
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
                    <div className="p-4 border-t">
                      <p>"Your product transformed how we approach our business. The ROI has been incredible and the support team is always there when we need them." - Sarah J., Marketing Director</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-500 text-center">
                Click on a section to expand it
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-2">How the Animation Works</h4>
            <p className="text-gray-700 text-sm mb-3">
              The accordion uses a max-height transition for smooth animation:
            </p>
            <ul className="space-y-1 text-sm text-gray-700 list-disc ml-5">
              <li>Collapsed sections have <code>max-height: 0</code> and <code>overflow: hidden</code></li>
              <li>When expanded, <code>max-height</code> is set to a value that fits the content</li>
              <li>The <code>transition</code> property creates the smooth animation effect</li>
              <li>A rotating arrow provides visual feedback for the open/closed state</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Code</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">HTML Structure</h4>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto">{`<!-- Radio buttons for accordion control -->
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
</div>`}</pre>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">CSS for Animation</h4>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto">{`/* Hide radio buttons */
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
}`}</pre>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Best Practices for Animated Accordions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-blue-800 mb-2">Design Tips</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-800">Limit content length in each accordion section</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-800">Use clear visual cues (like arrows) to indicate expandable sections</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-800">Keep accordion headers short and descriptive</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-blue-800 mb-2">Technical Considerations</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-800">Use the Kinetic Lightswitch for proper fallback detection</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-800">Set a generous max-height for expanded sections</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-800">Pre-check one section to provide an example of functionality</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-100 rounded">
          <h4 className="font-medium text-blue-900 mb-2">Fallback Importance</h4>
          <p className="text-blue-800">
            The stacked fallback is crucial for email clients that don't support the checkbox hack or CSS transitions.
            In these clients, all content will be visible and neatly formatted, ensuring your message is still effectively
            delivered even without the interactive elements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccordionExample;