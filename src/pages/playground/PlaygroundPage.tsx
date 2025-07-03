// src/pages/playground/PlaygroundPage.tsx
import React, { useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import IOSMailSimulator from '../../components/portfolio/IOSMailSimulator';
import AndroidGmailSimulator from '../../components/portfolio/AndroidGmailSimulator';
import { FaApple, FaGoogle, FaCopy, FaCode, FaEye, FaChevronDown, FaChevronUp, FaStar } from 'react-icons/fa';

type EmailClient = 'ios' | 'gmail';
type ViewMode = 'preview' | 'code';

const PlaygroundPage = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedHTML, setGeneratedHTML] = useState('');
  const [explanationText, setExplanationText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailClient, setEmailClient] = useState<EmailClient>('ios');
  const [viewMode, setViewMode] = useState<ViewMode>('preview');
  const [showExamples, setShowExamples] = useState(true);
  const [hasGenerated, setHasGenerated] = useState(false);

  // Function to extract just the HTML from Claude's response
  const extractHTML = (responseText: string) => {
    // Look for HTML document pattern
    const htmlMatch = responseText.match(/<!DOCTYPE html>[\s\S]*?<\/html>/i);
    
    if (htmlMatch) {
      const html = htmlMatch[0];
      const explanation = responseText.replace(htmlMatch[0], '').trim();
      return { html, explanation };
    }
    
    // Fallback: if no DOCTYPE found, look for any <html> tag
    const htmlTagMatch = responseText.match(/<html[\s\S]*?<\/html>/i);
    if (htmlTagMatch) {
      const html = htmlTagMatch[0];
      const explanation = responseText.replace(htmlTagMatch[0], '').trim();
      return { html, explanation };
    }
    
    // If no HTML structure found, treat entire response as explanation
    return { html: '', explanation: responseText };
  };

  const generateEmail = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setIsLoading(true);
    setError('');
    setExplanationText('');
    setHasGenerated(true);
    setShowExamples(false); // Hide examples after first generation

    try {
      const response = await fetch('https://kinetic-email.vercel.app/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          prompt,
          useTemplate: true,
          complexity: 'intermediate'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const { html, explanation } = extractHTML(data.html);
      
      setGeneratedHTML(html);
      setExplanationText(explanation);
      setViewMode('preview');
    } catch (err) {
      console.error('Error generating email:', err);
      setError('Failed to generate email. Make sure the API server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedHTML);
      // Simple visual feedback - you could add a toast here
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const examplePrompts = [
    'Create a tabbed product showcase for running shoes',
    'Make an interactive survey about customer preferences',
    'Build a carousel showing 3 different laptops',
    'Create a toggle for product specifications',
    'Design size guides for a clothing brand',
    'Make a survey about vacation destinations'
  ];

  const handleExampleClick = (example: string) => {
    setPrompt(example);
    setShowExamples(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <PageLayout>
        <div className="max-w-[95%] mx-auto py-8">
          {/* Hero Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Kinetic Email Playground (Beta)
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-3">
              Generate interactive emails with AI. Test them in real email clients instantly.
            </p>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto">
              Currently working on fine-tuning a custom AI model for bullet-proof kinetic email builds. 
              This beta version uses general AI - expect improvements soon!
            </p>
          </div>
          
          {/* Main Content - Responsive Layout */}
          <div className="grid lg:grid-cols-12 xl:grid-cols-12 gap-6 lg:gap-8">
            {/* Left Panel - Input Section */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-6">
              {/* Prompt Input Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 lg:p-6">
                  <h2 className="text-lg lg:text-xl font-semibold text-white flex items-center gap-2">
                    <FaStar className="text-yellow-300" />
                    Generate Email
                  </h2>
                </div>
                
                <div className="p-4 lg:p-6 space-y-4">
                  <div>
                    <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-3">
                      Describe your kinetic email:
                    </label>
                    <textarea
                      id="prompt"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      rows={4}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-sm lg:text-base"
                      placeholder="Example: Create a tabbed product showcase for running shoes with features, specs, and reviews"
                    />
                  </div>
                  
                  <button
                    onClick={generateEmail}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 lg:py-4 px-4 lg:px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-base lg:text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Generating Magic...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <FaStar />
                        Generate Email
                      </div>
                    )}
                  </button>
                  
                  {error && (
                    <div className="text-red-600 text-sm p-4 bg-red-50 rounded-xl border border-red-200 animate-in fade-in duration-200">
                      {error}
                    </div>
                  )}
                </div>
              </div>

              {/* Example Prompts - Collapsible */}
              {!hasGenerated || showExamples ? (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setShowExamples(!showExamples)}
                    className="w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                  >
                    <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                      Try These Examples
                    </h3>
                    {showExamples ? (
                      <FaChevronUp className="text-gray-500" />
                    ) : (
                      <FaChevronDown className="text-gray-500" />
                    )}
                  </button>
                  
                  {showExamples && (
                    <div className="p-4 space-y-2 animate-in slide-in-from-top duration-200">
                      {examplePrompts.map((example, index) => (
                        <button
                          key={index}
                          onClick={() => handleExampleClick(example)}
                          className="block w-full text-left text-xs lg:text-sm bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-blue-700 py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                        >
                          "{example}"
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Collapsed state after generation */
                <button 
                  onClick={() => setShowExamples(true)}
                  className="w-full p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 flex items-center justify-between group"
                >
                  <span className="text-sm lg:text-base text-gray-600 group-hover:text-gray-900 transition-colors">
                    Show example prompts
                  </span>
                  <FaChevronDown className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
              )}

              {/* Claude's Explanation Text */}
              {explanationText && (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-100">
                    <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                      AI Explanation
                    </h3>
                  </div>
                  <div className="p-4 lg:p-6">
                    <div className="prose prose-sm max-w-none text-gray-700">
                      <pre className="whitespace-pre-wrap font-sans text-xs lg:text-sm leading-relaxed bg-gray-50 p-4 rounded-xl">
                        {explanationText}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Panel - Preview Section */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-6">
              {generatedHTML ? (
                <>
                  {/* Controls Bar */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3 lg:p-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      {/* Email Client Toggle */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs lg:text-sm font-medium text-gray-700">Preview in:</span>
                        <div className="flex bg-gray-100 rounded-xl p-1">
                          <button
                            onClick={() => setEmailClient('ios')}
                            className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 ${
                              emailClient === 'ios'
                                ? 'bg-white text-gray-900 shadow-sm transform scale-105'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            <FaApple size={12} />
                            <span className="hidden sm:inline">iOS Mail</span>
                            <span className="sm:hidden">iOS</span>
                          </button>
                          <button
                            onClick={() => setEmailClient('gmail')}
                            className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 ${
                              emailClient === 'gmail'
                                ? 'bg-white text-gray-900 shadow-sm transform scale-105'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            <FaGoogle size={12} />
                            <span className="hidden sm:inline">Gmail</span>
                            <span className="sm:hidden">Gmail</span>
                          </button>
                        </div>
                      </div>

                      {/* View Mode & Actions */}
                      <div className="flex items-center gap-3">
                        <div className="flex bg-gray-100 rounded-xl p-1">
                          <button
                            onClick={() => setViewMode('preview')}
                            className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 ${
                              viewMode === 'preview'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            <FaEye size={12} />
                            <span className="hidden sm:inline">Preview</span>
                          </button>
                          <button
                            onClick={() => setViewMode('code')}
                            className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 ${
                              viewMode === 'code'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            <FaCode size={12} />
                            <span className="hidden sm:inline">Code</span>
                          </button>
                        </div>
                        
                        <button
                          onClick={copyToClipboard}
                          className="flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-3 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                          <FaCopy size={12} />
                          <span className="hidden sm:inline">Copy HTML</span>
                          <span className="sm:hidden">Copy</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Preview Content */}
                  {viewMode === 'preview' ? (
                    <div className="space-y-6">
                      {/* Email Client Preview */}
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 lg:p-8">
                        <div className="text-center mb-4 lg:mb-6">
                          <div className="flex items-center justify-center gap-2 lg:gap-3 text-sm lg:text-lg font-medium text-gray-700 mb-2">
                            {emailClient === 'ios' ? (
                              <>
                                <FaApple className="text-gray-600" />
                                <span className="hidden sm:inline">iOS Mail Preview</span>
                                <span className="sm:hidden">iOS Mail</span>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                  Interactive ✅
                                </span>
                              </>
                            ) : (
                              <>
                                <FaGoogle className="text-red-500" />
                                <span className="hidden sm:inline">Gmail Preview</span>
                                <span className="sm:hidden">Gmail</span>
                                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                                  Static ⚠️
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex justify-center">
                          <div className="transform scale-90 sm:scale-95 lg:scale-100 origin-top">
                            {emailClient === 'ios' ? (
                              <IOSMailSimulator
                                sender="Kinetic Email"
                                subject="Generated Kinetic Email"
                                htmlContent={generatedHTML}
                                date="Just now"
                              />
                            ) : (
                              <AndroidGmailSimulator
                                sender="Kinetic Email"
                                subject="Generated Kinetic Email"
                                htmlContent={generatedHTML}
                                date="Just now"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Compatibility Note */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                        <h4 className="font-semibold text-blue-900 mb-4 text-lg">Email Client Compatibility</h4>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                          <div className="bg-white rounded-xl p-4">
                            <div className="font-medium text-green-700 mb-3 flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Interactive Support
                            </div>
                            <ul className="text-green-600 space-y-2">
                              <li>• Apple Mail (macOS)</li>
                              <li>• iOS Mail</li>
                              <li>• Outlook for Mac</li>
                              <li>• Outlook for iOS</li>
                            </ul>
                          </div>
                          <div className="bg-white rounded-xl p-4">
                            <div className="font-medium text-orange-700 mb-3 flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              Fallback Required
                            </div>
                            <ul className="text-orange-600 space-y-2">
                              <li>• Gmail (Web)</li>
                              <li>• Outlook (Windows)</li>
                              <li>• Yahoo Mail</li>
                              <li>• Most webmail clients</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Code View */
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 px-6 py-4">
                        <h3 className="text-lg font-semibold text-gray-900">Generated HTML Code</h3>
                      </div>
                      <div className="p-6">
                        <pre className="bg-gray-50 p-6 rounded-xl overflow-x-auto text-sm leading-relaxed border border-gray-200">
                          <code>{generatedHTML}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Empty State */
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-12 text-center">
                  <div className="text-6xl mb-6">🎪</div>
                  <div className="text-2xl font-semibold text-gray-900 mb-4">Ready to create kinetic emails!</div>
                  <p className="text-lg text-gray-600 max-w-md mx-auto">
                    Enter a prompt and click "Generate Email" to see your interactive email come to life.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default PlaygroundPage;