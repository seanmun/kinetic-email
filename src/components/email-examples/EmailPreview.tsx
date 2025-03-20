import React, { useState, useEffect } from 'react';

interface EmailPreviewProps {
  html: string;
  title: string;
  showFallback?: boolean;
  fallbackHtml?: string;
}

const EmailPreview: React.FC<EmailPreviewProps> = ({
  html,
  title,
  showFallback = false,
  fallbackHtml
}) => {
  const [displayHtml, setDisplayHtml] = useState(html);
  
  useEffect(() => {
    setDisplayHtml(showFallback && fallbackHtml ? fallbackHtml : html);
  }, [html, fallbackHtml, showFallback]);
  
  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div className="p-3 bg-gray-100 border-b flex items-center justify-between">
        <span className="font-medium text-gray-700">{title}</span>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="bg-white">
        <iframe
          srcDoc={displayHtml}
          title={title}
          className="w-full h-96 border-0"
          sandbox="allow-same-origin"
        />
      </div>
    </div>
  );
};

export default EmailPreview;