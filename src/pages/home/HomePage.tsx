// src/pages/home/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-36 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Interactive Emails That Engage Your Audience
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Kinetic.email is your resource hub for building dynamic email experiences that push the boundaries of traditional email design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/examples" className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors">
              See Examples
            </Link>
            <Link to="/learn" className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
              Learn How It Works
            </Link>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <PageLayout className="pt-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learn</h2>
            <p className="text-gray-600 mb-4">Discover how to create engaging interactive emails using HTML and CSS techniques.</p>
            <Link to="/learn" className="text-blue-600 font-medium hover:text-blue-800">
              Start Learning →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Examples</h2>
            <p className="text-gray-600 mb-4">Explore practical examples of kinetic email techniques you can implement.</p>
            <Link to="/examples" className="text-blue-600 font-medium hover:text-blue-800">
              View Examples →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Playground</h2>
            <p className="text-gray-600 mb-4">Experiment with creating your own interactive kinetic emails.</p>
            <Link to="/playground" className="text-blue-600 font-medium hover:text-blue-800">
              Get Started →
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-md mb-16">
          <h2 className="text-2xl font-bold mb-4">What are Kinetic Emails?</h2>
          <p className="text-gray-700 mb-4">
            Kinetic email is a coding technique that enables interactive experiences inside an email. 
            It leverages HTML inputs and labels combined with CSS selectors to create engaging, 
            client-side interactions without requiring JavaScript.
          </p>
          <p className="text-gray-700 mb-4">
            This technique works in email clients that support the <code>:checked</code> pseudo-class 
            and the general sibling combinator, primarily WebKit-based clients like Apple Mail, 
            iOS Mail, and some versions of Outlook for Mac.
          </p>
          <p className="text-gray-700">
            With kinetic emails, you can create tabbed interfaces, carousels, surveys, and other 
            interactive components that significantly increase engagement compared to traditional 
            static emails.
          </p>
        </div>
      </PageLayout>
    </>
  );
};

export default HomePage;