// src/pages/examples/ShowcaseExample.tsx

import React from 'react';
import InteractiveExample from '../../components/email-examples/InteractiveExample';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import { ArrowLeft, CheckCircle, XCircle, HelpCircle, ShoppingBag, Calendar, Building2, Eye, Image, Sliders, AlertTriangle, Sparkles, Grid3x3 } from 'lucide-react';

const ShowcaseExample: React.FC = () => {
  // HTML code for the product showcase
  const htmlCode = `<input type="radio" id="slide1" name="showcase" checked>
<input type="radio" id="slide2" name="showcase">
<input type="radio" id="slide3" name="showcase">

<div class="showcase-wrapper">
  <div id="product1" class="showcase-content">
    <h2>Running Shoes</h2>
    <p>Lightweight and perfect for your daily run.</p>
    <label for="slide2" class="nav-arrow right-arrow">&#9654;</label>
  </div>

  <div id="product2" class="showcase-content">
    <h2>Hiking Boots</h2>
    <p>Rugged and waterproof for the trail ahead.</p>
    <label for="slide1" class="nav-arrow left-arrow">&#9664;</label>
    <label for="slide3" class="nav-arrow right-arrow">&#9654;</label>
  </div>

  <div id="product3" class="showcase-content">
    <h2>Casual Sneakers</h2>
    <p>Stylish comfort for everyday wear.</p>
    <label for="slide2" class="nav-arrow left-arrow">&#9664;</label>
  </div>
</div>`;

  // CSS code for the product showcase
  const cssCode = `/* Hide radio buttons */
input[type="radio"] { display: none; }

/* Showcase container styling */
.showcase-wrapper { 
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0;
}

/* Product content styling */
.showcase-content { 
  display: none; 
  padding: 20px;
  text-align: center;
  min-height: 200px;
  position: relative;
}

/* Navigation arrows */
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: #eee;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  font-size: 14px;
  transition: background 0.3s ease;
}

.nav-arrow:hover {
  background: #003366;
  color: white;
}

.left-arrow { left: 10px; }
.right-arrow { right: 10px; }

/* Show the active slide based on checked state */
#slide1:checked ~ .showcase-wrapper #product1,
#slide2:checked ~ .showcase-wrapper #product2,
#slide3:checked ~ .showcase-wrapper #product3 { 
  display: block !important; 
}`;

  // Additional code for indicators
  const indicatorsCode = `<!-- Add these indicators below the showcase-wrapper div -->
<div class="indicators">
  <label for="slide1" class="indicator"></label>
  <label for="slide2" class="indicator"></label>
  <label for="slide3" class="indicator"></label>
</div>

/* Add these styles to your CSS */
.indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ddd;
  margin: 0 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

#slide1:checked ~ .indicators label[for="slide1"],
#slide2:checked ~ .indicators label[for="slide2"],
#slide3:checked ~ .indicators label[for="slide3"] {
  background: #003366;
}`;

  // Complete HTML for the preview
  const previewHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.5;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background: #f8f8f8;
    }
    
    .email-container {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      padding: 20px;
    }
    
    h1 {
      color: #003366;
      text-align: center;
      margin-bottom: 25px;
    }

    /* Hide radio buttons */
    input[type="radio"] { display: none; }

    /* Showcase container styling */
    .showcase-wrapper { 
      position: relative;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      margin: 20px 0;
    }

    /* Product content styling */
    .showcase-content { 
      display: none; 
      padding: 40px 20px;
      text-align: center;
      min-height: 250px;
      position: relative;
      background-size: cover;
      background-position: center;
      color: white;
    }
    
    #product1 {
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://via.placeholder.com/600x300?text=Running+Shoes');
    }
    
    #product2 {
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://via.placeholder.com/600x300?text=Hiking+Boots');
    }
    
    #product3 {
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://via.placeholder.com/600x300?text=Casual+Sneakers');
    }

    .product-details {
      background: rgba(255,255,255,0.85);
      padding: 15px;
      border-radius: 8px;
      color: #333;
      max-width: 80%;
      margin: 0 auto;
    }

    .product-details h2 {
      margin-top: 0;
      color: #003366;
    }

    .product-details p {
      margin-bottom: 10px;
    }

    .price {
      font-weight: bold;
      color: #003366;
      font-size: 1.2em;
      margin-bottom: 10px;
      display: block;
    }

    .cta-button {
      display: inline-block;
      background: #e63946;
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
    }

    /* Navigation arrows */
    .nav-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      background: rgba(255,255,255,0.7);
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 50%;
      font-size: 14px;
      transition: background 0.3s ease;
    }

    .nav-arrow:hover {
      background: #003366;
      color: white;
    }

    .left-arrow { left: 10px; }
    .right-arrow { right: 10px; }

    /* Indicators */
    .indicators {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }

    .indicator {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ddd;
      margin: 0 5px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    /* Show the active slide and indicator based on checked state */
    #slide1:checked ~ .showcase-wrapper #product1,
    #slide2:checked ~ .showcase-wrapper #product2,
    #slide3:checked ~ .showcase-wrapper #product3 { 
      display: block !important; 
    }

    #slide1:checked ~ .indicators label[for="slide1"],
    #slide2:checked ~ .indicators label[for="slide2"],
    #slide3:checked ~ .indicators label[for="slide3"] {
      background: #003366;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <h1>Summer Footwear Collection</h1>
    
    <input type="radio" id="slide1" name="showcase" checked>
    <input type="radio" id="slide2" name="showcase">
    <input type="radio" id="slide3" name="showcase">

    <div class="showcase-wrapper">
      <div id="product1" class="showcase-content">
        <div class="product-details">
          <h2>Running Shoes</h2>
          <p>Lightweight and perfect for your daily run with extra cushioning and breathable fabric.</p>
          <span class="price">$89.99</span>
          <a href="#" class="cta-button">Shop Now</a>
        </div>
        <label for="slide2" class="nav-arrow right-arrow">&#9654;</label>
      </div>

      <div id="product2" class="showcase-content">
        <div class="product-details">
          <h2>Hiking Boots</h2>
          <p>Rugged and waterproof for the trail ahead with superior grip and ankle support.</p>
          <span class="price">$129.99</span>
          <a href="#" class="cta-button">Shop Now</a>
        </div>
        <label for="slide1" class="nav-arrow left-arrow">&#9664;</label>
        <label for="slide3" class="nav-arrow right-arrow">&#9654;</label>
      </div>

      <div id="product3" class="showcase-content">
        <div class="product-details">
          <h2>Casual Sneakers</h2>
          <p>Stylish comfort for everyday wear, made with sustainable materials and available in 5 colors.</p>
          <span class="price">$69.99</span>
          <a href="#" class="cta-button">Shop Now</a>
        </div>
        <label for="slide2" class="nav-arrow left-arrow">&#9664;</label>
      </div>
    </div>

    <div class="indicators">
      <label for="slide1" class="indicator"></label>
      <label for="slide2" class="indicator"></label>
      <label for="slide3" class="indicator"></label>
    </div>
  </div>
</body>
</html>`;

  // Fallback version (without interactivity)
  const fallbackHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.5;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background: #f8f8f8;
    }
    
    .email-container {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      padding: 20px;
    }
    
    h1 {
      color: #003366;
      text-align: center;
      margin-bottom: 25px;
    }
    
    .product-card {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
    }
    
    .product-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    
    .product-info {
      padding: 15px;
    }
    
    .product-info h2 {
      margin-top: 0;
      color: #003366;
    }
    
    .price {
      font-weight: bold;
      color: #003366;
      font-size: 1.2em;
      margin-bottom: 10px;
      display: block;
    }
    
    .cta-button {
      display: inline-block;
      background: #e63946;
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
    }
    
    .fallback-note {
      background: #f8f8f8;
      border: 1px dashed #ddd;
      padding: 10px;
      margin-top: 20px;
      font-style: italic;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <h1>Summer Footwear Collection</h1>
    
    <div class="product-card">
      <img src="https://via.placeholder.com/600x200?text=Running+Shoes" alt="Running Shoes" class="product-image">
      <div class="product-info">
        <h2>Running Shoes</h2>
        <p>Lightweight and perfect for your daily run with extra cushioning and breathable fabric.</p>
        <span class="price">$89.99</span>
        <a href="#" class="cta-button">Shop Now</a>
      </div>
    </div>
    
    <div class="fallback-note">
      <p>In email clients that support interactive features, you would be able to browse through our entire footwear collection.</p>
    </div>
  </div>
</body>
</html>`;

  // Define code sections for the example
  const codeSections = [
    {
      title: 'HTML Structure',
      language: 'html' as const,
      code: htmlCode,
      description: 'The HTML structure uses radio inputs to control which product is displayed. Each product has navigation arrows (labels) that, when clicked, will check a different radio button to show a different product.'
    },
    {
      title: 'CSS Styling',
      language: 'css' as const,
      code: cssCode,
      description: 'The CSS hides all product content by default and positions the navigation arrows. When a radio button is checked, the corresponding product content is displayed using the :checked selector and general sibling combinator.'
    },
    {
      title: 'Indicators (Optional)',
      language: 'html' as const,
      code: indicatorsCode,
      description: 'Adding dot indicators provides a visual cue of how many products are in the showcase and which one is currently active. These work the same way as the arrows, using labels that target specific radio buttons.'
    }
  ];

  return (
    <PageLayout>
      <div className="mb-6">
        <Link to="/examples" className="text-blue-600 hover:text-blue-800 flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Examples
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-12 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-emerald-100 uppercase tracking-wide">E-commerce • Carousel</div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight">Product Showcase Carousel</h1>
            </div>
          </div>

          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl">
            This example demonstrates a product showcase carousel using kinetic email techniques.
            It allows recipients to browse through multiple products without leaving their inbox,
            creating an interactive shopping experience that can significantly boost engagement and conversions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Interactive Shopping
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Product Display
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Navigation Arrows
            </div>
          </div>
        </div>
      </div>

      <InteractiveExample
        title="Interactive Product Showcase"
        description="A carousel that allows users to browse through different products with navigation arrows and indicators."
        sections={codeSections}
        previewHtml={previewHtml}
        fallbackHtml={fallbackHtml}
      />

      <div className="mt-12 space-y-12">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Core Mechanism</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Radio inputs control which product slide is visible at any time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Navigation arrows and indicators are styled <code className="bg-gray-100 px-1 rounded text-blue-600">label</code> elements that control the radio inputs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The <code className="bg-gray-100 px-1 rounded text-blue-600">:checked</code> pseudo-class determines which slide is visible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Clicking an arrow checks a different radio button, changing which product is displayed</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Benefits for Email Marketing</h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                  <span>Showcase multiple products in the space of one</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                  <span>Increase engagement through interactivity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                  <span>Create a mini-catalog experience inside the inbox</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-blue-600" />
                  <span>Track which products receive the most interaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Applications</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="text-blue-600 mb-3">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">E-commerce</h3>
              <p className="text-gray-700">
                Showcase products from your latest collection or featured sale items with prices and direct buy links.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="text-blue-600 mb-3">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Event Promotion</h3>
              <p className="text-gray-700">
                Display different event dates, featured speakers, or venue details in a scrollable format.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="text-blue-600 mb-3">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real Estate</h3>
              <p className="text-gray-700">
                Showcase multiple property listings with images, details, and pricing in an interactive gallery.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customization Options</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 text-blue-600 mr-4 flex-shrink-0">
                <Eye className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Auto-Advancing Showcase</h3>
                <p className="text-gray-700">
                  While pure CSS animations can't be triggered by user interaction in emails, you can use CSS animations to create
                  a carousel that automatically advances through products on supported email clients.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 text-blue-600 mr-4 flex-shrink-0">
                <Image className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Thumbnail Navigation</h3>
                <p className="text-gray-700">
                  Instead of (or in addition to) dot indicators, you can use small thumbnail images as navigation to preview
                  the products in the carousel.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 text-blue-600 mr-4 flex-shrink-0">
                <Sliders className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Feature Comparison</h3>
                <p className="text-gray-700">
                  Adapt the carousel to show product comparisons, with each slide highlighting different feature sets or pricing tiers.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Best Practices</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-green-600" />
                  <span>Limit the number of products to 3-5 for optimal performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-green-600" />
                  <span>Ensure navigation elements are large enough for mobile tapping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-green-600" />
                  <span>Include clear visual indicators for navigation controls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 text-green-600" />
                  <span>Optimize images for fast loading in email clients</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Common Pitfalls to Avoid
              </h3>
              <ul className="space-y-3 text-yellow-800">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0 text-yellow-600" />
                  <span>Overcomplicated CSS that might break in email clients</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0 text-yellow-600" />
                  <span>Not providing a good fallback experience</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0 text-yellow-600" />
                  <span>Using too many high-resolution images that slow loading</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0 text-yellow-600" />
                  <span>Trying to implement too many slides in a single carousel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-md mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Client Compatibility</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-semibold text-green-800 flex items-center mb-3">
                <CheckCircle className="h-5 w-5 mr-2" />
                Supported Clients
              </h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Apple Mail (macOS)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mail (iOS)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Outlook for Mac
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Outlook for iOS
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
              <h3 className="font-semibold text-red-800 flex items-center mb-3">
                <XCircle className="h-5 w-5 mr-2" />
                Unsupported Clients
              </h3>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-center">
                  <XCircle className="h-4 w-4 mr-2" />
                  Gmail (Web)
                </li>
                <li className="flex items-center">
                  <XCircle className="h-4 w-4 mr-2" />
                  Outlook (Windows)
                </li>
                <li className="flex items-center">
                  <XCircle className="h-4 w-4 mr-2" />
                  Yahoo Mail
                </li>
                <li className="flex items-center">
                  <XCircle className="h-4 w-4 mr-2" />
                  Gmail (Mobile App)
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-800 flex items-center mb-3">
                <HelpCircle className="h-5 w-5 mr-2" />
                Fallback Strategy
              </h3>
              <p className="text-blue-800 text-sm mb-3">
                For unsupported clients, display a single static product card with a clear call-to-action link to view all products.
              </p>
              <p className="text-blue-800 text-sm">
                Consider including thumbnail images of all products to provide a preview of the full range.
              </p>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-blue-800 text-sm font-medium">Pro Tip:</p>
                <p className="text-blue-800 text-sm mt-1">
                  Include tracking parameters in your fallback links to measure which products generate the most interest.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Animation Effects</h3>
              <p className="text-gray-700 mb-4">
                For supported clients, enhance the showcase with subtle CSS transitions when navigating between products:
              </p>
              <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm font-mono whitespace-pre">
                {`.showcase-content {
  transition: opacity 0.3s ease;
  opacity: 0;
}

#slide1:checked ~ .showcase-wrapper #product1,
#slide2:checked ~ .showcase-wrapper #product2,
#slide3:checked ~ .showcase-wrapper #product3 {
  opacity: 1;
}`}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <Grid3x3 className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Thumbnail Navigation</h3>
              <p className="text-gray-700 mb-4">
                Replace or supplement the dot indicators with thumbnail images for more visual navigation:
              </p>
              <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm font-mono whitespace-pre">
                {`.thumbnail-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.thumbnail {
  width: 60px;
  height: 40px;
  object-fit: cover;
  border: 2px solid transparent;
  cursor: pointer;
}

#slide1:checked ~ .thumbnail-nav label[for="slide1"] img,
#slide2:checked ~ .thumbnail-nav label[for="slide2"] img,
#slide3:checked ~ .thumbnail-nav label[for="slide3"] img {
  border-color: #003366;
}`}
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Showcasing Product Features</h3>
            <p className="text-gray-700 mb-4">
              For more complex product information, you can create nested tabs within each showcase slide:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">HTML Structure</h4>
                <div className="text-sm text-gray-600 font-mono whitespace-pre">
                  {`<div id="product1" class="showcase-content">
  <h2>Running Shoes</h2>

  <input type="radio" id="p1-overview" name="p1-tabs" checked>
  <input type="radio" id="p1-features" name="p1-tabs">

  <div class="product-tabs">
    <label for="p1-overview">Overview</label>
    <label for="p1-features">Features</label>
  </div>

  <div id="p1-overview-content" class="product-content">
    Overview content here...
  </div>

  <div id="p1-features-content" class="product-content">
    Features content here...
  </div>

  <label for="slide2" class="nav-arrow right"></label>
</div>`}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Additional CSS</h4>
                <div className="text-sm text-gray-600 font-mono whitespace-pre">
                  {`.product-tabs {
  display: flex;
  margin: 15px 0;
}

.product-tabs label {
  padding: 8px 15px;
  border-bottom: 2px solid transparent;
}

.product-content {
  display: none;
}

#p1-overview:checked ~ .product-tabs label[for="p1-overview"],
#p1-features:checked ~ .product-tabs label[for="p1-features"] {
  border-color: #003366;
}

#p1-overview:checked ~ #p1-overview-content,
#p1-features:checked ~ #p1-features-content {
  display: block;
}`}
                </div>
              </div>
            </div>
          </div>
        </div>
    </PageLayout>
  );
};

export default ShowcaseExample;