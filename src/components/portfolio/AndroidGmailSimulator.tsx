// src/components/portfolio/AndroidGmailSimulator.tsx
// Reusable component that renders an email in an Android Gmail app interface
// Displays the fallback (non-kinetic) version of emails

import React, { useState, useEffect } from 'react';

interface AndroidGmailSimulatorProps {
  sender: string;
  subject: string;
  htmlPath?: string; // Path to HTML file (optional)
  htmlContent?: string; // Direct HTML content (optional)
  date: string;
}

const AndroidGmailSimulator: React.FC<AndroidGmailSimulatorProps> = ({
  sender,
  subject,
  htmlPath,
  htmlContent: initialHtmlContent,
  date
}) => {
  const [htmlContent, setHtmlContent] = useState<string>(initialHtmlContent || 'Loading email...');
  const [isLoading, setIsLoading] = useState<boolean>(!initialHtmlContent && !!htmlPath);
  const [error, setError] = useState<string | null>(null);

  // Only fetch from htmlPath if no direct htmlContent was provided
  useEffect(() => {
    if (htmlPath && !initialHtmlContent) {
      const fetchHtmlContent = async () => {
        try {
          setIsLoading(true);
          setError(null);
          
          console.log('Fetching HTML from path:', htmlPath);
          
          const response = await fetch(htmlPath);
          
          if (!response.ok) {
            throw new Error(`Failed to load email content (${response.status})`);
          }
          
          let html = await response.text();
          
          // Extract project folder from the htmlPath
          const projectPath = htmlPath.substring(0, htmlPath.lastIndexOf('/') + 1);
          
          // Process HTML to ensure relative paths for images work correctly
          html = html.replace(
            /(src|href)=['"]images\/(.*?)['"]/g, 
            `$1="${projectPath}images/$2"`
          );
          
          // Disable kinetic email functionality by finding and unchecking any kinetic checkboxes
          html = html.replace(
            /<input\s+[^>]*?id=["']Kinetic["'][^>]*?checked[^>]*?>/gi,
            (match) => match.replace('checked', '')
          );
          
          setHtmlContent(html);
        } catch (err) {
          console.error('Error loading email HTML:', err);
          const errorMessage = err instanceof Error ? err.message : String(err);
          setError(`Could not load email content: ${errorMessage}`);
          setHtmlContent('<p>Error loading email content</p>');
        } finally {
          setIsLoading(false);
        }
      };

      fetchHtmlContent();
    } else if (initialHtmlContent) {
      // Process the initialHtmlContent to disable kinetic features
      const processedHtml = initialHtmlContent.replace(
        /<input\s+[^>]*?id=["']Kinetic["'][^>]*?checked[^>]*?>/gi,
        (match) => match.replace('checked', '')
      );
      setHtmlContent(processedHtml);
    }
  }, [htmlPath, initialHtmlContent]);

  return (
    <div className="mx-auto w-full max-w-[402px]">
      {/* Android phone frame */}
      <div className="bg-[#202124] rounded-[28px] p-2 shadow-xl">
        {/* Status bar */}
        <div className="bg-[#202124] h-6 px-5 flex justify-between items-center rounded-t-[24px]">
          <div className="text-white text-xs font-medium">9:41</div>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="white" viewBox="0 0 24 24">
              <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
            <svg className="w-3 h-3" fill="white" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
            </svg>
            <svg className="w-4 h-3" fill="white" viewBox="0 0 24 24">
              <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-8h2v8h-2zm.9-10.1c-.39.39-1.02.39-1.41 0A.996.996 0 0110 9c0-.28.11-.53.29-.71.39-.39 1.02-.39 1.41 0 .18.18.29.43.29.71s-.11.53-.29.71z"></path>
            </svg>
          </div>
        </div>
        
        {/* Screen */}
        <div className="bg-white rounded-[24px] overflow-hidden">
          {/* Gmail app bar */}
          <div className="bg-[#C5221F] text-white p-3 flex items-center">
            <div className="flex-1 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
              <span className="font-medium">Gmail</span>
            </div>
            <div>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </div>
          </div>
          
          {/* Email view header */}
          <div className="bg-[#f5f5f5] px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <button className="text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </button>
            <div className="flex gap-3">
              <button className="text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
              <button className="text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
              </button>
              <button className="text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Email content area */}
          <div className="h-[680px] overflow-y-auto" style={{ overflowY: 'auto' }}>
            <iframe
              srcDoc={`
                <!DOCTYPE html>
                <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
                  <style>
                    body {
                      margin: 0;
                      padding: 0;
                      font-family: 'Roboto', Arial, sans-serif;
                      background-color: #ffffff;
                    }
                    .email-header {
                      padding: 16px;
                      border-bottom: 1px solid #e0e0e0;
                    }
                    .subject {
                      font-size: 20px;
                      font-weight: 400;
                      color: #202124;
                      margin-bottom: 12px;
                    }
                    .sender-row {
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-bottom: 8px;
                    }
                    .avatar {
                      width: 40px;
                      height: 40px;
                      border-radius: 50%;
                      background-color: #C5221F;
                      color: white;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 16px;
                      font-weight: 500;
                      margin-right: 12px;
                    }
                    .sender-container {
                      display: flex;
                      align-items: center;
                    }
                    .sender-info {
                      display: flex;
                      flex-direction: column;
                    }
                    .sender-name {
                      font-size: 14px;
                      font-weight: 500;
                      color: #202124;
                    }
                    .sender-email {
                      font-size: 14px;
                      color: #5f6368;
                    }
                    .date {
                      font-size: 14px;
                      color: #5f6368;
                    }
                    .receiver {
                      font-size: 14px;
                      color: #5f6368;
                      margin-top: 4px;
                      margin-left: 52px;
                    }
                    .email-content {
                      padding: 10px;
                    }
                    .loading {
                      padding: 16px;
                      text-align: center;
                      animation: pulse 1.5s infinite;
                    }
                    .error {
                      padding: 16px;
                      text-align: center;
                      color: #D93025;
                    }
                    
                    @keyframes pulse {
                      0% { opacity: 0.6; }
                      50% { opacity: 1; }
                      100% { opacity: 0.6; }
                    }
                  </style>
                </head>
                <body>
                  <!-- Email header -->
                  <div class="email-header">
                    <h1 class="subject">${subject}</h1>
                    <div class="sender-row">
                      <div class="sender-container">
                        <div class="avatar">${sender.charAt(0)}</div>
                        <div class="sender-info">
                          <div class="sender-name">${sender}</div>
                          <div class="sender-email">${sender.toLowerCase().replace(/\s+/g, '')}@example.com</div>
                        </div>
                      </div>
                      <div class="date">${date}</div>
                    </div>
                    <div class="receiver">to me</div>
                  </div>
                  
                  <!-- Email content -->
                  <div class="email-content">
                    ${isLoading ? 
                      '<div class="loading">Loading email content...</div>' : 
                      error ? 
                        `<div class="error">${error}</div>` : 
                        htmlContent
                    }
                  </div>
                </body>
                </html>
              `}
              title="Email Content"
              className="w-full h-full border-0"
              style={{ border: 'none', height: '100%' }}
              sandbox="allow-same-origin"
            />
          </div>
          
          {/* Bottom navigation */}
          <div className="bg-white border-t border-gray-200 p-3 flex justify-around items-center">
            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
            </svg>
            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>
            </svg>
            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"></path>
            </svg>
          </div>
          
          {/* Navigation bar */}
          <div className="bg-white p-1 flex justify-around items-center border-t border-gray-200">
            <div className="h-1 w-16 bg-gray-300 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidGmailSimulator;