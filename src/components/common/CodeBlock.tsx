import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy, FaCheck } from 'react-icons/fa';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  title?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'html',
  showLineNumbers = false,
  title,
  className = ''
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={`rounded-lg overflow-hidden border border-gray-700 ${className}`}>
      {title && (
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex justify-between items-center">
          <span className="font-medium text-gray-200 text-sm">{title}</span>
          <button
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors duration-200"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <FaCheck className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <FaCopy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      
      {!title && (
        <div className="relative">
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 z-10 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-md text-sm flex items-center gap-2 transition-all duration-200"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <FaCheck className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <FaCopy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
          <SyntaxHighlighter 
            language={language} 
            style={tomorrow}
            showLineNumbers={showLineNumbers}
            customStyle={{
              margin: 0,
              padding: '1rem',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              borderRadius: title ? '0' : '0.5rem'
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
      
      {title && (
        <SyntaxHighlighter 
          language={language} 
          style={tomorrow}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: '1rem',
            fontSize: '0.875rem',
            lineHeight: '1.5',
            borderRadius: 0
          }}
        >
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
};

export default CodeBlock;