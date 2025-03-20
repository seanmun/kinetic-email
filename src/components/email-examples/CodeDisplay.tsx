import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeDisplayProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  title?: string;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({
  code,
  language,
  showLineNumbers = true,
  title
}) => {
  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };
  
  return (
    <div className="rounded-lg overflow-hidden border">
      {title && (
        <div className="bg-gray-100 px-4 py-2 border-b flex justify-between items-center">
          <span className="font-medium text-gray-700">{title}</span>
          <button
            onClick={copyCodeToClipboard}
            className="text-gray-500 hover:text-gray-700 text-sm flex items-center"
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
            Copy
          </button>
        </div>
      )}
      <SyntaxHighlighter 
        language={language} 
        style={tomorrow}
        showLineNumbers={showLineNumbers}
        customStyle={{margin: 0, borderRadius: title ? '0' : '0.375rem'}}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;