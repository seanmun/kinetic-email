// src/pages/learn/advanced/ProductShowcaseExample.tsx

import React from 'react';

const ProductShowcaseExample: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Interactive Product Showcases</h2>
      
      <p className="text-gray-700 mb-4">
        Product showcases are one of the most effective uses of kinetic email techniques. They allow
        recipients to explore products directly within their inbox, viewing different colors, angles,
        or features without clicking through to a website.
      </p>
      
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-6">
        <p className="text-indigo-800">
          <strong>Key Benefit:</strong> Interactive product showcases can increase engagement and conversions
          by allowing recipients to explore products before clicking through, leading to more qualified traffic
          to your product pages.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Color Selector</h3>
          <p className="text-gray-700 mb-4">
            This example shows how to implement a color selector that changes the product image:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto">{`<input type="radio" name="color" id="color-red" checked class="hidden">
<input type="radio" name="color" id="color-blue" class="hidden">
<input type="radio" name="color" id="color-green" class="hidden">

<div class="product-container">
  <!-- Color selection buttons -->
  <div class="color-options">
    <label for="color-red" class="color-btn color-red"></label>
    <label for="color-blue" class="color-btn color-blue"></label>
    <label for="color-green" class="color-btn color-green"></label>
  </div>
  
  <!-- Product images for each color -->
  <div class="product-images">
    <img class="product-img red" src="product-red.jpg" alt="Red Product">
    <img class="product-img blue" src="product-blue.jpg" alt="Blue Product">
    <img class="product-img green" src="product-green.jpg" alt="Green Product">
  </div>
</div>`}</pre>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">CSS for Product Color Selector</h4>
            <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto">{`.color-btn {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  border: 2px solid #ccc;
}

.color-red { background-color: #e74c3c; }
.color-blue { background-color: #3498db; }
.color-green { background-color: #2ecc71; }

/* Hide all product images by default */
.product-img {
  display: none;
  max-width: 100%;
}

/* Show selected color image */
#color-red:checked ~ .product-container .product-img.red,
#color-blue:checked ~ .product-container .product-img.blue,
#color-green:checked ~ .product-container .product-img.green {
  display: block !important;
}

/* Highlight selected color button */
#color-red:checked ~ .product-container .color-red,
#color-blue:checked ~ .product-container .color-blue,
#color-green:checked ~ .product-container .color-green {
  border-color: #333 !important;
  transform: scale(1.1) !important;
}`}</pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Live Demo</h3>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="bg-white p-6 rounded border border-gray-300">
              <div className="text-center mb-4">
                <div className="inline-flex space-x-2">
                  <input type="radio" id="demo-red" name="demo-color" className="sr-only peer/red" defaultChecked />
                  <input type="radio" id="demo-blue" name="demo-color" className="sr-only peer/blue" />
                  <input type="radio" id="demo-green" name="demo-color" className="sr-only peer/green" />
                  
                  <label htmlFor="demo-red" className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-300 cursor-pointer peer-checked/red:border-gray-800 peer-checked/red:scale-110 transition-transform"></label>
                  <label htmlFor="demo-blue" className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-300 cursor-pointer peer-checked/blue:border-gray-800 peer-checked/blue:scale-110 transition-transform"></label>
                  <label htmlFor="demo-green" className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-300 cursor-pointer peer-checked/green:border-gray-800 peer-checked/green:scale-110 transition-transform"></label>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative w-48 h-48 bg-gray-100 rounded">
                  <div className="absolute inset-0 flex items-center justify-center hidden peer-checked/red:block">
                    <div className="bg-red-500 w-32 h-32 rounded-lg shadow-md flex items-center justify-center text-white font-bold">
                      Red Product
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center hidden peer-checked/blue:block">
                    <div className="bg-blue-500 w-32 h-32 rounded-lg shadow-md flex items-center justify-center text-white font-bold">
                      Blue Product
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center hidden peer-checked/green:block">
                    <div className="bg-green-500 w-32 h-32 rounded-lg shadow-md flex items-center justify-center text-white font-bold">
                      Green Product
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center text-sm text-gray-500">
                Click on a color to see the product change
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-2">How It Works</h4>
              <ol className="space-y-2 text-gray-700 list-decimal ml-5">
                <li>Radio buttons are used to ensure only one color is selected at a time</li>
                <li>Each color has a corresponding product image</li>
                <li>CSS selectors show/hide images based on which radio button is checked</li>
                <li>Visual feedback is provided by styling the selected color button</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Product Showcase: Feature Highlights</h3>
        <p className="text-gray-700 mb-6">
          You can take product showcases to the next level by highlighting different features of a product:
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">HTML Structure</h4>
              <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto bg-gray-100 p-3 rounded">{`<input type="radio" name="feature" id="feature1" checked class="hidden">
<input type="radio" name="feature" id="feature2" class="hidden">
<input type="radio" name="feature" id="feature3" class="hidden">

<div class="product-showcase">
  <div class="product-image">
    <!-- Base product image -->
    <img src="product-base.jpg" alt="Product">
    
    <!-- Feature highlight overlays -->
    <div class="highlight highlight1"></div>
    <div class="highlight highlight2"></div>
    <div class="highlight highlight3"></div>
  </div>
  
  <div class="feature-buttons">
    <label for="feature1" class="feature-btn">Feature 1</label>
    <label for="feature2" class="feature-btn">Feature 2</label>
    <label for="feature3" class="feature-btn">Feature 3</label>
  </div>
  
  <div class="feature-descriptions">
    <div class="feature-desc feature1-desc">
      Description of feature 1...
    </div>
    <div class="feature-desc feature2-desc">
      Description of feature 2...
    </div>
    <div class="feature-desc feature3-desc">
      Description of feature 3...
    </div>
  </div>
</div>`}</pre>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">CSS Implementation</h4>
              <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto bg-gray-100 p-3 rounded">{`.product-showcase {
  position: relative;
}

.product-image {
  position: relative;
}

.highlight {
  position: absolute;
  border: 2px solid transparent;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.3s ease;
}

.highlight1 { top: 20%; left: 30%; width: 60px; height: 60px; }
.highlight2 { top: 50%; left: 60%; width: 50px; height: 50px; }
.highlight3 { top: 70%; left: 40%; width: 40px; height: 40px; }

.feature-btn {
  display: inline-block;
  padding: 8px 15px;
  margin: 0 5px;
  background: #eee;
  border-radius: 20px;
  cursor: pointer;
}

.feature-desc {
  display: none;
  padding: 15px;
  margin-top: 15px;
  background: #f8f8f8;
  border-radius: 5px;
}

/* Show selected feature */
#feature1:checked ~ .product-showcase .highlight1,
#feature2:checked ~ .product-showcase .highlight2,
#feature3:checked ~ .product-showcase .highlight3 {
  opacity: 1 !important;
  border-color: #3498db !important;
  transform: scale(1) !important;
  box-shadow: 0 0 0 4px rgba(52,152,219,0.3) !important;
}

#feature1:checked ~ .product-showcase .feature1-desc,
#feature2:checked ~ .product-showcase .feature2-desc,
#feature3:checked ~ .product-showcase .feature3-desc {
  display: block !important;
}

#feature1:checked ~ .product-showcase label[for="feature1"],
#feature2:checked ~ .product-showcase label[for="feature2"],
#feature3:checked ~ .product-showcase label[for="feature3"] {
  background: #3498db !important;
  color: white !important;
}`}</pre>
            </div>
          </div>
          
          <div className="mt-6 bg-indigo-50 p-4 rounded border border-indigo-100">
            <h4 className="font-medium text-indigo-800 mb-2">Implementation Notes</h4>
            <ul className="space-y-2 text-indigo-800">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>This approach uses circular highlights over a single product image to focus attention on specific features.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Subtle animations help draw attention to the highlighted feature.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Additional feature descriptions provide context and more information about each highlighted feature.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-amber-50 p-6 rounded-lg border border-amber-100">
        <h3 className="text-lg font-semibold text-amber-900 mb-3">Best Practices for Product Showcases</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-amber-800 mb-2">Design Tips</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-800">Use high-quality product images optimized for email</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-800">Provide clear visual feedback for selected options</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-800">Keep the user interface simple and intuitive</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-amber-800 mb-2">Technical Considerations</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-800">Use preloaded images to prevent loading delays</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-800">Include fallback content for non-supporting clients</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-800">Test across different email clients thoroughly</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseExample;