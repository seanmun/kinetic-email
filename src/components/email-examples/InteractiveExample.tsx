// src/components/email-examples/InteractiveExample.tsx

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSection {
  title: string;
  code: string;
  description: string;
  language: 'html' | 'css' | 'javascript';
}

interface InteractiveExampleProps {
  title: string;
  description: string;
  sections: CodeSection[];
  previewHtml: string;
  fallbackHtml?: string;
}

const InteractiveExample: React.FC<InteractiveExampleProps> = ({
  title,
  description,
  sections,
  previewHtml,
  fallbackHtml
}) => {
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('preview');
  const [activeSection, setActiveSection] = useState<number>(0);
  const [showFallback, setShowFallback] = useState<boolean>(false);

  const copyCodeToClipboard = () => {
    // Combine all code sections for copying
    const fullCode = sections.map(section => section.code).join('\n\n');
    navigator.clipboard.writeText(fullCode);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white mb-8">
      <div className="p-4 border-b bg-gray-50">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex border-b">
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'preview' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'}`}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'code' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'}`}
          onClick={() => setActiveTab('code')}
        >
          Code
        </button>
      </div>
      
      {/* Preview Panel */}
      {activeTab === 'preview' && (
        <div className="p-4">
          <div className="flex justify-end mb-2">
            {fallbackHtml && (
              <button 
                className="text-sm text-gray-600 hover:text-blue-600 underline mr-4"
                onClick={() => setShowFallback(!showFallback)}
              >
                {showFallback ? 'Show Interactive Version' : 'Show Fallback Version'}
              </button>
            )}
          </div>
          <div className="border rounded overflow-hidden bg-gray-50">
            <iframe
              title={`${title} Preview`}
              srcDoc={showFallback ? fallbackHtml : previewHtml}
              className="w-full h-96"
              sandbox="allow-same-origin"
            />
          </div>
          <div className="mt-3 bg-blue-50 p-3 rounded text-blue-800 text-sm border border-blue-100">
            <p className="font-medium mb-1">💡 Client Compatibility:</p>
            <p>This technique works in WebKit-based clients like Apple Mail, iOS Mail, and Outlook for Mac.</p>
          </div>
        </div>
      )}
      
      {/* Code Panel */}
      {activeTab === 'code' && (
        <div className="p-4">
          {/* Code Section Navigation */}
          <div className="flex mb-4 overflow-x-auto">
            {sections.map((section, index) => (
              <button
                key={index}
                className={`px-3 py-1 text-sm font-medium rounded-full mr-2 whitespace-nowrap ${
                  activeSection === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveSection(index)}
              >
                {section.title}
              </button>
            ))}
            <button
              className="ml-auto px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-full flex items-center"
              onClick={copyCodeToClipboard}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mr-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" 
                />
              </svg>
              Copy All
            </button>
          </div>
          
          {/* Active Code Section */}
          <div className="mb-4">
            <SyntaxHighlighter 
              language={sections[activeSection].language}
              style={tomorrow}
              customStyle={{borderRadius: '0.375rem'}}
              showLineNumbers
            >
              {sections[activeSection].code}
            </SyntaxHighlighter>
          </div>
          
          {/* Code Description */}
          <div className="bg-blue-50 p-4 rounded border border-blue-100">
            <h4 className="font-medium text-blue-800 mb-1">Explanation</h4>
            <p className="text-blue-900">{sections[activeSection].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveExample;