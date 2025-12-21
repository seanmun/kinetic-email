// src/pages/playground/PlaygroundPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import IOSMailSimulator from '../../components/portfolio/IOSMailSimulator';
import AndroidGmailSimulator from '../../components/portfolio/AndroidGmailSimulator';
import { FaApple, FaGoogle, FaCopy, FaCode, FaEye, FaChevronDown, FaChevronUp, FaDatabase, FaThumbsUp, FaThumbsDown, FaRocket, FaInfoCircle } from 'react-icons/fa';

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
  const [useRAG, setUseRAG] = useState(false);
  const [ragModel, setRagModel] = useState<'small' | 'large'>('small');
  const [ragMetadata, setRagMetadata] = useState<any>(null);
  const [showRagExamples, setShowRagExamples] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submissionData, setSubmissionData] = useState({
    userIntent: '',
    userFeedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Function to extract just the HTML from Claude's response
  const extractHTML = (responseText: string) => {
    // Claude should now return pure HTML, but let's handle both cases

    // Check if response starts with DOCTYPE (pure HTML mode)
    if (responseText.trim().startsWith('<!DOCTYPE')) {
      return { html: responseText, explanation: '' };
    }

    // Look for HTML document pattern with explanation text before/after
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
    setFeedbackGiven(false); // Reset feedback for new generation

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          useTemplate: true,
          complexity: 'intermediate',
          useRAG,
          ragModel
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const { html, explanation } = extractHTML(data.html);

      setGeneratedHTML(html);
      setExplanationText(explanation);
      setRagMetadata(data.metadata?.rag || null);
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

  const submitFeedback = async (rating: 'positive' | 'negative') => {
    try {
      await fetch('/api/admin/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          rating,
          ragUsed: useRAG,
          ragModel,
          ragExamplesCount: ragMetadata?.examplesCount || 0,
          generatedHtmlPreview: generatedHTML.substring(0, 500)
        }),
      });
      setFeedbackGiven(true);
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    }
  };

  const handleSubmitForEvaluation = async () => {
    if (!submissionData.userIntent.trim()) {
      alert('Please describe what you were trying to achieve');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/admin/submit-evaluation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userIntent: submissionData.userIntent,
          userFeedback: submissionData.userFeedback,
          userPrompt: prompt,
          generatedCode: generatedHTML,
          modelUsed: ragModel,
          ragUsed: useRAG,
          ragExamplesCount: ragMetadata?.examplesCount || 0
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit evaluation');
      }

      setSubmitSuccess(true);
      setShowSubmitModal(false);
      setFeedbackGiven(true);

      // Reset form after successful submission
      setTimeout(() => {
        setSubmissionData({ userIntent: '', userFeedback: '' });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to submit for evaluation:', error);
      alert('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
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
              Generate interactive emails with AI.
            </p>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto mb-4">
              Currently working on fine-tuning a custom AI model for bullet-proof kinetic email builds.
              This beta version uses general AI - expect improvements soon!
            </p>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <FaInfoCircle />
              How the RAG System Works
            </Link>
          </div>
          
          {/* Main Content - Responsive Layout */}
          <div className="grid lg:grid-cols-12 xl:grid-cols-12 gap-6 lg:gap-8">
            {/* Left Panel - Input Section */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-6">
              {/* Prompt Input Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 lg:p-6">
                  <h2 className="text-lg lg:text-xl font-semibold text-white flex items-center gap-2">
                    <FaRocket className="text-yellow-300" />
                    Generate Email
                  </h2>
                </div>
                
                <div className="p-4 lg:p-6 space-y-4">
                  <div>
                    <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-3">
                      Describe your kinetic email:
                    </label>

                    {/* Prompt Suggestions */}
                    {!prompt && (
                      <div className="mb-3">
                        <p className="text-xs text-gray-600 mb-2">Try these examples:</p>
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => setPrompt("Tabbed product showcase for running shoes with 3 color options, pricing, and features")}
                            className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors border border-blue-200"
                          >
                            Tabbed Product Email
                          </button>
                          <button
                            onClick={() => setPrompt("Accordion FAQ email with 5 expandable questions about shipping and returns")}
                            className="text-xs bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full hover:bg-purple-100 transition-colors border border-purple-200"
                          >
                            Accordion FAQ
                          </button>
                          <button
                            onClick={() => setPrompt("Interactive survey email asking customers about their fitness goals with progressive questions")}
                            className="text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full hover:bg-green-100 transition-colors border border-green-200"
                          >
                            Survey Email
                          </button>
                          <button
                            onClick={() => setPrompt("Product carousel showcasing 4 new arrivals with images and buy now buttons")}
                            className="text-xs bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full hover:bg-orange-100 transition-colors border border-orange-200"
                          >
                            Carousel Showcase
                          </button>
                        </div>
                      </div>
                    )}

                    <textarea
                      id="prompt"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      rows={4}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-sm lg:text-base"
                      placeholder="Example: Create a tabbed product showcase for running shoes with features, specs, and reviews"
                    />
                  </div>

                  {/* RAG Model Selection */}
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ${useRAG ? 'bg-purple-600' : 'bg-gray-300'}`} onClick={() => setUseRAG(!useRAG)}>
                          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${useRAG ? 'translate-x-6' : ''}`}></div>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-900 cursor-pointer" onClick={() => setUseRAG(!useRAG)}>
                          Use RAG Model <span className="text-purple-600 text-xs">(Beta)</span>
                        </label>
                        <p className="text-xs text-gray-600 mt-0.5">Enhanced with example-based learning</p>
                      </div>
                    </div>

                    {/* RAG Model Selector - only show when RAG is enabled */}
                    {useRAG && (
                      <div className="pl-2 space-y-2">
                        <p className="text-xs font-medium text-gray-700">Embedding Model:</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setRagModel('small')}
                            className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                              ragModel === 'small'
                                ? 'bg-purple-600 text-white shadow-md'
                                : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300'
                            }`}
                          >
                            Small Model
                          </button>
                          <button
                            onClick={() => setRagModel('large')}
                            className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                              ragModel === 'large'
                                ? 'bg-purple-600 text-white shadow-md'
                                : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300'
                            }`}
                          >
                            Large Model
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 italic">
                          {ragModel === 'small' ? 'Faster, cost-effective' : 'Better precision, higher cost'}
                        </p>
                      </div>
                    )}
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
                        <FaRocket />
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

              {/* RAG Examples Display */}
              {ragMetadata && ragMetadata.used && ragMetadata.examples && ragMetadata.examples.length > 0 && (
                <div className="bg-purple-50 rounded-2xl shadow-lg border border-purple-200 overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setShowRagExamples(!showRagExamples)}
                    className="w-full p-4 bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 transition-colors duration-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <FaDatabase className="text-purple-600" />
                      <h3 className="text-base lg:text-lg font-semibold text-purple-900">
                        AI Referenced {ragMetadata.examplesCount} Similar Examples ({(ragMetadata.topScore * 100).toFixed(1)}% match)
                      </h3>
                    </div>
                    {showRagExamples ? (
                      <FaChevronUp className="text-purple-700" />
                    ) : (
                      <FaChevronDown className="text-purple-700" />
                    )}
                  </button>

                  {showRagExamples && (
                    <div className="p-4 space-y-2 animate-in slide-in-from-top duration-200">
                      <p className="text-xs text-purple-700 mb-3 italic">
                        These examples from your knowledge base influenced the generated email:
                      </p>
                      {ragMetadata.examples.map((example: any, index: number) => (
                        <div
                          key={index}
                          className="bg-white p-3 rounded-lg border border-purple-200"
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div className="text-sm font-medium text-gray-900 flex-1">
                              {example.description}
                            </div>
                            <div className="text-xs font-semibold text-purple-600 whitespace-nowrap">
                              {(example.score * 100).toFixed(1)}%
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <span className="px-2 py-0.5 bg-gray-100 rounded-full">{example.technique}</span>
                            <span className="px-2 py-0.5 bg-gray-100 rounded-full">{example.type}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

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
                      
                      {/* Submit for Evaluation Section */}
                      {!feedbackGiven && !submitSuccess && (
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
                          <h4 className="font-semibold text-purple-900 mb-3 text-lg">Help Improve Kinetic Email</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Submit this build for AI evaluation and help us improve the model!
                          </p>
                          <button
                            onClick={() => setShowSubmitModal(true)}
                            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                          >
                            <FaRocket /> Submit for Evaluation
                          </button>
                        </div>
                      )}

                      {submitSuccess && (
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4">
                          <p className="text-green-900 font-medium text-center">✓ Submitted successfully! Thank you for helping improve Kinetic Email!</p>
                        </div>
                      )}

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
                              <li>• iOS Mail and iPadOS Mail</li>
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
                  <div className="text-6xl mb-6 flex justify-center">
                    <FaRocket className="text-blue-600" />
                  </div>
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

      {/* Submission Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-t-2xl">
              <h3 className="text-2xl font-bold text-white">Submit for AI Evaluation</h3>
              <p className="text-purple-100 mt-2">Help us improve Kinetic Email by sharing your feedback</p>
            </div>

            <div className="p-6 space-y-6">
              {/* User Intent */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What were you trying to achieve? <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={submissionData.userIntent}
                  onChange={(e) => setSubmissionData({ ...submissionData, userIntent: e.target.value })}
                  placeholder="e.g., I wanted to create a product showcase with tabs for different shoe models..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  rows={4}
                />
              </div>

              {/* User Feedback */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Any feedback on the result? (Optional)
                </label>
                <textarea
                  value={submissionData.userFeedback}
                  onChange={(e) => setSubmissionData({ ...submissionData, userFeedback: e.target.value })}
                  placeholder="e.g., The tabs worked great, but the fallback content could be better..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  rows={4}
                />
              </div>

              {/* Consent Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>Privacy:</strong> By submitting, you consent to this email build being used for training data.
                  Your submission will help our AI learn to generate better kinetic emails.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => {
                    setShowSubmitModal(false);
                    setSubmissionData({ userIntent: '', userFeedback: '' });
                  }}
                  disabled={isSubmitting}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitForEvaluation}
                  disabled={isSubmitting || !submissionData.userIntent.trim()}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaygroundPage;