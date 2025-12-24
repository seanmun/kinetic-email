// src/components/portfolio/IOSMailSimulator.tsx
// Reusable component that renders an email in an iOS Mail app interface
// Updated to include the header in the scrollable area (accurate to iOS Mail behavior)

import React, { useState, useEffect } from 'react';

interface IOSMailSimulatorProps {
  sender: string;
  subject: string;
  htmlPath?: string; // Path to HTML file (optional)
  htmlContent?: string; // Direct HTML content (optional)
  date: string;
}

const IOSMailSimulator: React.FC<IOSMailSimulatorProps> = ({
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
    }
  }, [htmlPath, initialHtmlContent]);

  return (
    <div className="mx-auto w-[402px]">
      {/* iPhone frame - using iPhone 16 Pro dimensions with proper radius */}
      <div className="bg-[#1A1A1C] rounded-[50px] p-2 shadow-xl">
        {/* Dynamic Island */}
        <div className="bg-black h-[35px] w-[120px] rounded-[20px] mx-auto relative mb-1 z-10"></div>
        
        {/* Screen */}
        <div className="bg-black rounded-[40px] overflow-hidden">
          {/* Status bar */}
          <div className="pt-5 px-7 text-white flex justify-between items-center h-10 text-xs font-semibold">
            <div>9:41</div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5z"></path>
                <path d="M8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7z"></path>
                <path d="M14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0a1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 4A.75.75 0 012.75 8h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 8.75zm0 4a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"></path>
              </svg>
            </div>
          </div>
          
          {/* Mail navigation bar - fixed */}
          <div className="bg-[#F2F2F7] flex justify-between items-center px-4 py-3 border-b border-gray-200">
            <button className="text-blue-500 text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </button>
            <div className="flex gap-6">
              <button className="text-blue-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                </svg>
              </button>
              <button className="text-blue-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Entire scrollable content area (includes header and email body) */}
          <div className="h-[680px] overflow-y-auto bg-white" style={{ overflowY: 'auto' }}>
            {/* Combined content approach - all wrapped in an iframe for better rendering */}
            <iframe
              srcDoc={`
                <!DOCTYPE html>
                <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
                  <link rel="preconnect" href="https://fonts.googleapis.com">
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
                  <style>
                    body {
                      margin: 0;
                      padding: 0;
                      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                    }
                    .email-header {
                      background-color: white;
                      padding: 16px;
                      border-bottom: 1px solid #e5e5e5;
                    }
                    .header-details {
                      display: flex;
                      justify-content: space-between;
                      margin-bottom: 8px;
                    }
                    .date {
                      font-size: 12px;
                      color: #6b7280;
                    }
                    .header-actions {
                      display: flex;
                      gap: 8px;
                    }
                    .header-action-icon {
                      color: #9ca3af;
                    }
                    .subject {
                      font-size: 16px;
                      font-weight: 600;
                      margin-bottom: 4px;
                    }
                    .sender-wrapper {
                      display: flex;
                      align-items: center;
                    }
                    .sender-avatar {
                      width: 32px;
                      height: 32px;
                      border-radius: 50%;
                      background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
                      color: white;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 13px;
                      margin-right: 8px;
                      font-family: 'Orbitron', sans-serif;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                    }
                    .sender-info {
                      font-size: 14px;
                    }
                    .sender-name {
                      font-weight: 500;
                    }
                    .receiver {
                      font-size: 12px;
                      color: #6b7280;
                    }
                    .email-content {
                      padding: 0px;
                    }
                    
                    /* Loading and error states */
                    .loading {
                      padding: 16px;
                      text-align: center;
                      animation: pulse 1.5s infinite;
                    }
                    .error {
                      padding: 16px;
                      text-align: center;
                      color: #ef4444;
                    }
                    .error-path {
                      margin-top: 8px;
                      font-size: 12px;
                      color: #6b7280;
                    }
                    
                    @keyframes pulse {
                      0% { opacity: 0.6; }
                      50% { opacity: 1; }
                      100% { opacity: 0.6; }
                    }
                  </style>
                </head>
                <body>
                  <!-- Email header - part of scrollable area -->
                  <div class="email-header">
                    <div class="header-details">
                      <div class="date">${date}</div>
                      <div class="header-actions">
                        <svg class="header-action-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
                        </svg>
                        <svg class="header-action-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                        <svg class="header-action-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                        </svg>
                      </div>
                    </div>
                    <h2 class="subject">${subject}</h2>
                    <div class="sender-wrapper">
                      <div class="sender-avatar">
                        K.<span style="font-weight: 400;">e</span>
                      </div>
                      <div class="sender-info">
                        <div class="sender-name">${sender}</div>
                        <div class="receiver">To: me</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Email content -->
                  <div class="email-content">
                    ${isLoading ? 
                      '<div class="loading">Loading email content...</div>' : 
                      error ? 
                        `<div class="error">${error}<div class="error-path">Tried to load: ${htmlPath}</div></div>` : 
                        htmlContent
                    }
                  </div>
                </body>
                </html>
              `}
              title="Email Content"
              className="w-full h-full border-0"
              style={{ border: 'none', height: '100%' }}
              sandbox="allow-same-origin allow-scripts"
            />
          </div>
          
          {/* Bottom toolbar */}
          <div className="bg-[#F2F2F7] border-t border-gray-200 p-3 flex justify-between items-center">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
            </svg>
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
            </svg>
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </div>
          
          {/* Home indicator */}
          <div className="bg-black py-2">
            <div className="h-1 bg-white rounded-full mx-auto w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSMailSimulator;