// src/pages/learn/advanced/SlideShowExample.tsx

import React from 'react';

const SlideShowExample: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Kinetic Email Slideshow</h2>
      
      <p className="text-gray-700 mb-4">
        A slideshow is a perfect way to showcase multiple products or features within a single email.
        By combining the checkbox hack with CSS animations, we can create a slideshow where new content
        smoothly slides in when users click navigation arrows.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <p className="text-blue-800">
          <strong>Animation Support:</strong> CSS animations are primarily supported in Apple Mail, iOS Mail,
          and some versions of Outlook for Mac. Always provide static alternatives for email clients that
          don't support animations.
        </p>
      </div>
      
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
          
          <ol className="space-y-4">
            <li className="flex">
              <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">1</div>
              <div>
                <p className="text-gray-800"><strong>Radio Button Controls:</strong> We use radio buttons to track which slide is active.</p>
              </div>
            </li>
            <li className="flex">
              <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">2</div>
              <div>
                <p className="text-gray-800"><strong>CSS Selectors:</strong> We use selectors to show only the active slide.</p>
              </div>
            </li>
            <li className="flex">
              <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">3</div>
              <div>
                <p className="text-gray-800"><strong>CSS Animations:</strong> We add animations that create a sliding effect when changing slides.</p>
              </div>
            </li>
            <li className="flex">
              <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">4</div>
              <div>
                <p className="text-gray-800"><strong>Arrow Navigation:</strong> Styled labels trigger the radio buttons when clicked.</p>
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
                <span>Showcase multiple products/features in limited space</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Animations create a more engaging experience</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Works without JavaScript in supported clients</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Demo</h3>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="relative overflow-hidden" style={{ height: '200px' }}>
                <input type="radio" id="demo-slide1" name="demo-slider" className="sr-only peer/slide1" defaultChecked />
                <input type="radio" id="demo-slide2" name="demo-slider" className="sr-only peer/slide2" />
                <input type="radio" id="demo-slide3" name="demo-slider" className="sr-only peer/slide3" />
                
                <div className="absolute inset-0 flex items-center justify-center bg-blue-100 transition-transform duration-500 peer-checked/slide1:translate-x-0 peer-checked/slide2:translate-x-full peer-checked/slide3:translate-x-full">
                  <div className="text-blue-800 text-lg font-semibold">Product 1</div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center bg-green-100 transition-transform duration-500 translate-x-full peer-checked/slide2:translate-x-0 peer-checked/slide1:-translate-x-full peer-checked/slide3:translate-x-full">
                  <div className="text-green-800 text-lg font-semibold">Product 2</div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center bg-purple-100 transition-transform duration-500 translate-x-full peer-checked/slide3:translate-x-0 peer-checked/slide1:-translate-x-full peer-checked/slide2:-translate-x-full">
                  <div className="text-purple-800 text-lg font-semibold">Product 3</div>
                </div>
                
                <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
                  <label htmlFor="demo-slide1" className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer peer-checked/slide1:bg-blue-600"></label>
                  <label htmlFor="demo-slide2" className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer peer-checked/slide2:bg-blue-600"></label>
                  <label htmlFor="demo-slide3" className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer peer-checked/slide3:bg-blue-600"></label>
                </div>
                
                <div className="absolute inset-y-0 left-2 flex items-center">
                  <label htmlFor="demo-slide3" className="peer-checked/slide1:block peer-checked/slide2:hidden peer-checked/slide3:hidden cursor-pointer bg-white/80 p-1 rounded-full shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </label>
                  <label htmlFor="demo-slide1" className="peer-checked/slide1:hidden peer-checked/slide2:block peer-checked/slide3:hidden cursor-pointer bg-white/80 p-1 rounded-full shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </label>
                  <label htmlFor="demo-slide2" className="peer-checked/slide1:hidden peer-checked/slide2:hidden peer-checked/slide3:block cursor-pointer bg-white/80 p-1 rounded-full shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </label>
                </div>
                
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <label htmlFor="demo-slide2" className="peer-checked/slide1:block peer-checked/slide2:hidden peer-checked/slide3:hidden cursor-pointer bg-white/80 p-1 rounded-full shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </label>
                  <label htmlFor="demo-slide3" className="peer-checked/slide1:hidden peer-checked/slide2:block peer-checked/slide3:hidden cursor-pointer bg-white/80 p-1 rounded-full shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </label>
                  <label htmlFor="demo-slide1" className="peer-checked/slide1:hidden peer-checked/slide2:hidden peer-checked/slide3:block cursor-pointer bg-white/80 p-1 rounded-full shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </label>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-500 text-center">
                Click the arrows to navigate between slides
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-2">Navigation Logic</h4>
            <p className="text-gray-700 text-sm mb-3">
              The navigation arrows need special consideration to ensure they always point to the correct "next" and "previous" slides:
            </p>
            <ul className="space-y-1 text-sm text-gray-700 list-disc ml-5">
              <li>When on slide 1, "previous" points to slide 3 (last slide)</li>
              <li>When on slide 3, "next" points to slide 1 (first slide)</li>
              <li>Each arrow is only visible when its associated slide is active</li>
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
              <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto">{`<input type="radio" name="slider" id="slide1" checked class="slide-radio">
<input type="radio" name="slider" id="slide2" class="slide-radio">
<input type="radio" name="slider" id="slide3" class="slide-radio">

<div class="slideshow-container">
  <!-- Slides with integrated navigation -->
  <div class="slides-wrapper">
    <div class="slide slide1">
      <img src="product1.jpg" alt="Product 1">
      <div class="slide-content">
        <h3>Product 1 Title</h3>
        <p>Product 1 description goes here...</p>
      </div>
      
      <!-- Navigation arrows within the slide -->
      <label for="slide3" class="arrow prev"></label>
      <label for="slide2" class="arrow next"></label>
    </div>
    
    <div class="slide slide2">
      <img src="product2.jpg" alt="Product 2">
      <div class="slide-content">
        <h3>Product 2 Title</h3>
        <p>Product 2 description goes here...</p>
      </div>
      
      <!-- Navigation arrows within the slide -->
      <label for="slide1" class="arrow prev"></label>
      <label for="slide3" class="arrow next"></label>
    </div>
    
    <div class="slide slide3">
      <img src="product3.jpg" alt="Product 3">
      <div class="slide-content">
        <h3>Product 3 Title</h3>
        <p>Product 3 description goes here...</p>
      </div>
      
      <!-- Navigation arrows within the slide -->
      <label for="slide2" class="arrow prev"></label>
      <label for="slide1" class="arrow next"></label>
    </div>
  </div>
  
  <!-- Slide Indicators -->
  <div class="slide-dots">
    <label for="slide1" class="dot"></label>
    <label for="slide2" class="dot"></label>
    <label for="slide3" class="dot"></label>
  </div>
</div>`}</pre>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">CSS for Animation</h4>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto">{`/* Hide radio buttons */
.slide-radio {
  position: absolute;
  opacity: 0;
}

/* Main container */
.slideshow-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
}

/* Slides wrapper and individual slides */
.slides-wrapper {
  position: relative;
  height: 300px;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s ease;
  transform: translateX(100%);
}

.slide img {
  width: 100%;
  height: auto;
  display: block;
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 15px;
}

/* Show only 2 slides at a time with animation */
/* Active slide (centered) */
#slide1:checked ~ .slideshow-container .slide1,
#slide2:checked ~ .slideshow-container .slide2,
#slide3:checked ~ .slideshow-container .slide3 {
  opacity: 1 !important;
  transform: translateX(0) !important;
  z-index: 2;
}

/* Next slide (peeking from right) */
#slide1:checked ~ .slideshow-container .slide2,
#slide2:checked ~ .slideshow-container .slide3,
#slide3:checked ~ .slideshow-container .slide1 {
  opacity: 0.7 !important;
  transform: translateX(85%) !important;
  z-index: 1;
}

/* Previous slide (hidden off-screen left) */
#slide1:checked ~ .slideshow-container .slide3,
#slide2:checked ~ .slideshow-container .slide1,
#slide3:checked ~ .slideshow-container .slide2 {
  opacity: 0 !important;
  transform: translateX(-100%) !important;
  z-index: 0;
}

/* Navigation arrows */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.5);
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  /* Arrows are visible by default within their slide */
  display: block;
}

.arrow:before {
  content: '';
  position: absolute;
  top: 50%;
  width: 10px;
  height: 10px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
}

.arrow.prev {
  left: 10px;
}

.arrow.next {
  right: 10px;
}

.arrow.prev:before {
  left: 16px;
  transform: translateY(-50%) rotate(-135deg);
}

.arrow.next:before {
  right: 16px;
  transform: translateY(-50%) rotate(45deg);
}

/* Slide indicators/dots */
.slide-dots {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 2;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background: rgba(255,255,255,0.5);
  border-radius: 50%;
  cursor: pointer;
}

/* Active dot */
#slide1:checked ~ .slideshow-container .slide-dots label:nth-child(1),
#slide2:checked ~ .slideshow-container .slide-dots label:nth-child(2),
#slide3:checked ~ .slideshow-container .slide-dots label:nth-child(3) {
  background: white !important;
}`}</pre>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Best Practices for Animated Slideshows</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-blue-800 mb-2">Performance Tips</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-800">Optimize images for minimal file sizes</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-800">Limit the number of slides (3-5 max)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-800">Prioritize transform and opacity for animations</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-blue-800 mb-2">Compatibility Considerations</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-800">Show the first slide by default for non-supporting clients</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-800">Use conditional code with the Kinetic Lightswitch</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-800">Include direct links to individual product pages</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideShowExample;