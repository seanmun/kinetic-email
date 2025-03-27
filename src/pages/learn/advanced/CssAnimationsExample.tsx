// src/pages/learn/advanced/CssAnimationsExample.tsx

import React from 'react';

const CssAnimationsExample: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">CSS Animations in Emails</h2>
      
      <p className="text-gray-700 mb-4">
        CSS animations can bring your kinetic emails to life, drawing attention to important elements
        and creating a more engaging user experience. When properly implemented, CSS animations work in
        many email clients without requiring JavaScript.
      </p>
      
      <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-6">
        <p className="text-purple-800">
          <strong>Animation Support:</strong> CSS animations are primarily supported in Apple Mail, iOS Mail,
          and some versions of Outlook for Mac. Always provide static alternatives for email clients that
          don't support animations.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Animation Basics</h3>
          <p className="text-gray-700 mb-4">
            CSS animations in emails rely on two primary techniques:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">CSS Keyframes</h4>
              <p className="text-gray-700 mb-2">
                Define the stages and properties of your animation with keyframes.
              </p>
              <div className="bg-gray-100 p-3 rounded">
                <pre className="text-sm text-gray-800 whitespace-pre">{`@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animated-element {
  animation: fadeIn 2s ease-in-out;
}`}</pre>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">CSS Transitions</h4>
              <p className="text-gray-700 mb-2">
                Smooth property changes when states change (like hovering or checking a checkbox).
              </p>
              <div className="bg-gray-100 p-3 rounded">
                <pre className="text-sm text-gray-800 whitespace-pre">{`.transition-element {
  transition: all 0.3s ease;
  background-color: #f0f0f0;
}

.transition-element:hover {
  background-color: #e0e0e0;
}

/* Or with checkbox hack */
#toggle:checked ~ .transition-element {
  transform: translateX(20px);
}`}</pre>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Animation Examples</h3>
          
          <div className="space-y-4">
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
              <h4 className="font-medium text-purple-900 mb-2">Attention-Grabbing Button</h4>
              <div className="bg-gray-100 p-3 rounded mb-3">
                <pre className="text-sm text-gray-800 whitespace-pre">{`@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.cta-button {
  animation: pulse 2s infinite;
  /* Rest of your button styling */
}`}</pre>
              </div>
              <div className="bg-white p-4 rounded border border-purple-200 flex justify-center">
                <button 
                  className="px-6 py-2 bg-purple-600 text-white font-medium rounded animate-pulse"
                >
                  Shop Now
                </button>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h4 className="font-medium text-indigo-900 mb-2">Countdown Timer Effect</h4>
              <div className="bg-gray-100 p-3 rounded mb-3">
                <pre className="text-sm text-gray-800 whitespace-pre">{`@keyframes countdown {
  0% { width: 100%; }
  100% { width: 0%; }
}

.timer-bar {
  animation: countdown 60s linear forwards;
  /* Bar styling */
}`}</pre>
              </div>
              <div className="bg-white p-4 rounded border border-indigo-200">
                <p className="text-center mb-2 font-medium text-indigo-900">Sale Ends In:</p>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Combining Animations with Interactivity</h3>
        <p className="text-gray-700 mb-4">
          The real power of animations in kinetic emails comes when you combine them with the checkbox hack
          to create interactive, animated elements:
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">Example: Animated Tab Switching</h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-3 rounded">
              <pre className="text-sm text-gray-800 whitespace-pre">{`.tab-content {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  /* Hide by default */
  display: none;
}

/* Show selected tab with animation */
#tab1:checked ~ .content #content1,
#tab2:checked ~ .content #content2 {
  display: block !important;
  opacity: 1;
  transform: translateY(0);
}`}</pre>
            </div>
            
            <div className="bg-white p-4 rounded border border-gray-300">
              <div className="mb-4">
                <div className="flex space-x-2">
                  <input type="radio" id="demo-tab1" name="demo-tabs" className="sr-only peer/tab1" defaultChecked />
                  <input type="radio" id="demo-tab2" name="demo-tabs" className="sr-only peer/tab2" />
                  
                  <label htmlFor="demo-tab1" className="cursor-pointer py-2 px-4 bg-gray-200 rounded-t transition-colors peer-checked/tab1:bg-blue-600 peer-checked/tab1:text-white">
                    Tab 1
                  </label>
                  
                  <label htmlFor="demo-tab2" className="cursor-pointer py-2 px-4 bg-gray-200 rounded-t transition-colors peer-checked/tab2:bg-blue-600 peer-checked/tab2:text-white">
                    Tab 2
                  </label>
                </div>
                
                <div className="border border-gray-300 p-4 rounded-b bg-blue-50">
                  <div className="hidden peer-checked/tab1:block transition-all duration-300">
                    Content for Tab 1
                  </div>
                  <div className="hidden peer-checked/tab2:block transition-all duration-300">
                    Content for Tab 2
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 italic">Note: This is a simplified version for demonstration. The actual email code would be more complex.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-amber-50 p-6 rounded-lg border border-amber-100">
        <h3 className="text-lg font-semibold text-amber-900 mb-3">Animation Best Practices for Email</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-amber-800 mb-2">Things to Do</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-800">Keep animations subtle and purposeful</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Complete Animation Example</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Image Reveal on Hover</h4>
            <div className="bg-gray-100 p-3 rounded">
              <pre className="text-sm text-gray-800 whitespace-pre">{`<style>
  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .product-card:hover .product-details {
    display: block !important;
    animation: slideIn 0.3s forwards !important;
  }

  .product-details {
    display: none;
  }
</style>

<div class="product-card">
  <img src="product.jpg" alt="Product Image">
  <div class="product-details">
    <h3>Product Name</h3>
    <p>Product description with features and benefits.</p>
    <a href="#" class="cta-button">Buy Now</a>
  </div>
</div>`}</pre>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">How This Works in Email</h4>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside ml-4">
              <li>
                <span className="font-medium">Hover State Detection:</span> The hover state is used to trigger the animation in supported clients.
              </li>
              <li>
                <span className="font-medium">Keyframe Animation:</span> The <code className="bg-gray-100 px-1 rounded">slideIn</code> animation is applied to reveal the product details with a smooth motion.
              </li>
              <li>
                <span className="font-medium">Default Hidden State:</span> The product details are hidden by default for a clean initial appearance.
              </li>
              <li>
                <span className="font-medium">Progressive Enhancement:</span> Clients that don't support hover will still display the product image, maintaining a functional experience.
              </li>
            </ol>
            
            <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200 text-blue-800">
              <p><strong>Pro Tip:</strong> You can also combine this with the checkbox hack for clients that don't support hover states, providing an even more robust solution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CssAnimationsExample;