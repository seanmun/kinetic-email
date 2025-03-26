// src/components/learn/lightswitch/LightswitchExample.tsx

import React, { useState } from 'react';

const LightswitchExample: React.FC = () => {
  // State to simulate toggling between supported and unsupported client view
  const [simulateSupported, setSimulateSupported] = useState(true);

  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementing the Lightswitch</h2>
      
      <p className="text-gray-700 mb-4">
        Let's see how to implement the Kinetic Lightswitch in your emails. Here's a basic template that includes both interactive and fallback content:
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">HTML Structure</h3>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <pre className="text-sm text-gray-800 whitespace-pre">{`<!-- The Lightswitch checkbox -->
<input type="checkbox" class="kinetic" 
  name="interactive" id="Kinetic" checked>

<!-- Interactive content container -->
<div class="interactive">
  <!-- Your kinetic email content here -->
</div>

<!-- Fallback content container -->
<div class="fallback">
  <!-- Your fallback content here -->
</div>`}</pre>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">CSS Rules</h3>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <pre className="text-sm text-gray-800 whitespace-pre">{`/* Hide the checkbox */
.kinetic {
  display: none;
}

/* Show interactive content when checkbox is checked */
#Kinetic:checked ~* .interactive { 
  display: block !important; 
}

/* Hide fallback content when checkbox is checked */
#Kinetic:checked ~* .fallback { 
  display: none !important; 
}

/* Fix for AOL/Yahoo */
#Kinetic:checked ~* .& .fallback { 
  display: block !important; 
}
#Kinetic:checked ~* .& .interactive { 
  display: none !important; 
}`}</pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">The Logic Explained</h3>
          <ol className="space-y-4 text-gray-700">
            <li>
              <div className="flex">
                <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">1</div>
                <div>
                  <p><strong>The Hidden Checkbox:</strong> We start with a checkbox that's checked by default. This checkbox is hidden from view.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">2</div>
                <div>
                  <p><strong>Conditional Display:</strong> We use CSS to show interactive content only if the checkbox is checked AND the email client supports the <code className="bg-gray-100 px-1 rounded">:checked</code> and general sibling <code className="bg-gray-100 px-1 rounded">~*</code> selectors.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">3</div>
                <div>
                  <p><strong>Automatic Detection:</strong> In clients that don't support these selectors, the CSS won't apply, so the fallback remains visible.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex">
                <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">4</div>
                <div>
                  <p><strong>AOL/Yahoo Fix:</strong> These clients have unique quirks, so we add specific rules to handle their behavior.</p>
                </div>
              </div>
            </li>
          </ol>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-medium text-blue-800 mb-2">Why This Works</h4>
            <p className="text-blue-800 text-sm">
              The beauty of this approach is that it's <strong>automatic</strong> - the email detects compatibility without user interaction. When a client that doesn't support kinetic emails opens the message, it simply ignores the CSS selectors it doesn't understand, causing the fallback to remain visible.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Complete Example with Tabs</h3>
        <p className="text-gray-700 mb-4">
          This example shows a tabbed interface with a fallback for non-supporting email clients:
        </p>
        
        <div className="bg-white p-4 rounded border border-gray-300">
          <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto">{`<!-- The Lightswitch -->
<input type="checkbox" class="kinetic" name="interactive" id="Kinetic" checked>

<!-- Interactive Tabbed Content -->
<div class="interactive" style="display: none;">
  <!-- Tab inputs -->
  <input type="radio" id="tab1" name="tabs" checked>
  <input type="radio" id="tab2" name="tabs">
  <input type="radio" id="tab3" name="tabs">

  <div class="tabs">
    <label for="tab1">Product A</label>
    <label for="tab2">Product B</label>
    <label for="tab3">Product C</label>
  </div>

  <div class="content">
    <div id="content1" class="tab-content">
      <h2>Product A Details</h2>
      <p>This is the interactive content for Product A.</p>
    </div>
    <div id="content2" class="tab-content">
      <h2>Product B Details</h2>
      <p>This is the interactive content for Product B.</p>
    </div>
    <div id="content3" class="tab-content">
      <h2>Product C Details</h2>
      <p>This is the interactive content for Product C.</p>
    </div>
  </div>
</div>

<!-- Fallback Content -->
<div class="fallback">
  <h2>Our Products</h2>
  <!-- Static version with all products listed vertically -->
  <div class="fallback-item">
    <h3>Product A</h3>
    <p>This is the fallback content for Product A.</p>
  </div>
  <div class="fallback-item">
    <h3>Product B</h3>
    <p>This is the fallback content for Product B.</p>
  </div>
  <div class="fallback-item">
    <h3>Product C</h3>
    <p>This is the fallback content for Product C.</p>
  </div>
</div>`}</pre>
        </div>
      </div>
      
      {/* Live Interactive Example */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Live Interactive Example</h3>
        <p className="text-gray-700 mb-4">
          This demonstrates how the lightswitch works in practice. Toggle between supported and unsupported modes to see how different email clients would display the content:
        </p>
        
        <div className="mb-4">
          <button 
            onClick={() => setSimulateSupported(!simulateSupported)}
            className={`px-4 py-2 font-medium rounded-md ${simulateSupported 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-600 text-white'}`}
          >
            {simulateSupported 
              ? 'Currently Simulating: Supported Client (Apple Mail)' 
              : 'Currently Simulating: Unsupported Client (Gmail)'}
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-300">
          {/* Simulated Email Content */}
          <div className="border-b border-gray-200 pb-2 mb-4">
            <div className="text-sm text-gray-500">From: Kinetic Email Team &lt;team@kinetic.email&gt;</div>
            <div className="text-lg font-medium">Our Spring Collection</div>
          </div>
          
          {simulateSupported ? (
            // Kinetic Version (supported client)
            <div>
              <p className="text-gray-700 mb-4">Check out our latest products below:</p>
              
              <div className="relative mb-6">
                {/* Interactive Tabs UI */}
                <div className="mb-4">
                  <div className="tabs flex border-b">
                    <input type="radio" name="demo-tabs" id="demo-tab1" className="sr-only peer/tab1" defaultChecked />
                    <input type="radio" name="demo-tabs" id="demo-tab2" className="sr-only peer/tab2" />
                    <input type="radio" name="demo-tabs" id="demo-tab3" className="sr-only peer/tab3" />
                    
                    <label htmlFor="demo-tab1" className="px-4 py-2 cursor-pointer border-b-2 border-transparent peer-checked/tab1:border-blue-600 peer-checked/tab1:text-blue-600 font-medium">
                      Sneakers
                    </label>
                    <label htmlFor="demo-tab2" className="px-4 py-2 cursor-pointer border-b-2 border-transparent peer-checked/tab2:border-blue-600 peer-checked/tab2:text-blue-600 font-medium">
                      Sandals
                    </label>
                    <label htmlFor="demo-tab3" className="px-4 py-2 cursor-pointer border-b-2 border-transparent peer-checked/tab3:border-blue-600 peer-checked/tab3:text-blue-600 font-medium">
                      Boots
                    </label>
                  </div>
                  
                  <div className="tab-content hidden peer-checked/tab1:block bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg">Spring Sneaker Collection</h3>
                    <p>Our lightweight, breathable sneakers are perfect for spring walks and casual outings.</p>
                    <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded">Shop Now</button>
                  </div>
                  
                  <div className="tab-content hidden peer-checked/tab2:block bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg">Spring Sandal Collection</h3>
                    <p>Get ready for warmer days with our comfortable and stylish sandals in vibrant colors.</p>
                    <button className="mt-2 px-4 py-1 bg-green-600 text-white rounded">Shop Now</button>
                  </div>
                  
                  <div className="tab-content hidden peer-checked/tab3:block bg-amber-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg">Spring Boot Collection</h3>
                    <p>Our weather-resistant spring boots are perfect for those unexpected spring showers.</p>
                    <button className="mt-2 px-4 py-1 bg-amber-600 text-white rounded">Shop Now</button>
                  </div>
                </div>
                
                <div className="text-xs text-blue-800 p-2 bg-blue-50 rounded">
                  <strong>What you're seeing:</strong> This is how the email appears in clients that support the checkbox hack, like Apple Mail. The tabbed interface is fully interactive!
                </div>
              </div>
            </div>
          ) : (
            // Fallback Version (unsupported client)
            <div>
              <p className="text-gray-700 mb-4">Check out our latest products below:</p>
              
              <div className="mb-6">
                {/* Static Fallback Content */}
                <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-lg">Spring Sneaker Collection</h3>
                  <p>Our lightweight, breathable sneakers are perfect for spring walks and casual outings.</p>
                  <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded">Shop Now</button>
                </div>
                
                <div className="mb-4 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-medium text-lg">Spring Sandal Collection</h3>
                  <p>Get ready for warmer days with our comfortable and stylish sandals in vibrant colors.</p>
                  <button className="mt-2 px-4 py-1 bg-green-600 text-white rounded">Shop Now</button>
                </div>
                
                <div className="mb-4 p-4 bg-amber-50 rounded-lg">
                  <h3 className="font-medium text-lg">Spring Boot Collection</h3>
                  <p>Our weather-resistant spring boots are perfect for those unexpected spring showers.</p>
                  <button className="mt-2 px-4 py-1 bg-amber-600 text-white rounded">Shop Now</button>
                </div>
                
                <div className="text-xs text-red-800 p-2 bg-red-50 rounded">
                  <strong>What you're seeing:</strong> This is how the email appears in clients that don't support the checkbox hack, like Gmail. All content is displayed in a static, vertical layout.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
        <h4 className="font-medium text-indigo-900 mb-2">How This Works In Practice</h4>
        <p className="text-indigo-800 text-sm">
          In a real email, the content shown is determined automatically based on the email client's capabilities. The checkbox is always checked by default, but only clients that support the <code className="bg-indigo-100 px-1 rounded">:checked</code> selector will process the CSS rules that toggle visibility.
        </p>
        <p className="text-indigo-800 text-sm mt-2">
          This demo uses a button to simulate different email clients, but in an actual email, this detection happens instantly and seamlessly without any user interaction.
        </p>
      </div>
    </section>
  );
};

export default LightswitchExample;