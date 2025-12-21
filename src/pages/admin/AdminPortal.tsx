// src/pages/admin/AdminPortal.tsx
import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Modal from '../../components/common/Modal';
import { FaLock, FaUpload, FaCheckCircle, FaQuestionCircle, FaCode, FaBook, FaList, FaTrash, FaEye, FaClock, FaStar, FaClipboardCheck, FaPlay, FaFilter } from 'react-icons/fa';

type UploadType = 'html' | 'blog';
type TechniqueType = 'tabs' | 'accordion' | 'survey' | 'carousel' | 'toggle' | 'hybrid' | 'static';
type EmailPurpose = 'promotional' | 'transactional' | 'newsletter' | 'survey' | 'educational';
type ComplexityLevel = 'beginner' | 'intermediate' | 'advanced';
type HTMLType = 'complete' | 'component';
type BlogTopic = 'kinetic-techniques' | 'email-best-practices' | 'case-studies' | 'tutorials';

const AdminPortal = () => {
  // Authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Upload type
  const [uploadType, setUploadType] = useState<UploadType>('html');

  // HTML Email fields
  const [htmlContent, setHtmlContent] = useState('');
  const [description, setDescription] = useState('');
  const [technique, setTechnique] = useState<TechniqueType>('tabs');
  const [emailPurpose, setEmailPurpose] = useState<EmailPurpose>('promotional');
  const [complexity, setComplexity] = useState<ComplexityLevel>('intermediate');
  const [htmlType, setHtmlType] = useState<HTMLType>('complete');
  const [exampleType, setExampleType] = useState<'positive' | 'negative'>('positive');
  const [notes, setNotes] = useState('');

  // Key Features (multi-select)
  const [keyFeatures, setKeyFeatures] = useState({
    lightswitch: false,
    mobileResponsive: false,
    ctaButtons: false,
    productImages: false,
    progressiveDisclosure: false,
    cssAnimations: false,
    multipleInteractions: false,
  });

  // Best Practice Tags (multi-select)
  const [bestPracticeTags, setBestPracticeTags] = useState({
    tableStructure: false,
    msoConditionals: false,
    inlineStyles: false,
    fallbackContent: false,
    accessibility: false,
    darkMode: false,
  });

  // Blog Content fields
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogTopic, setBlogTopic] = useState<BlogTopic>('kinetic-techniques');
  const [learningLevel, setLearningLevel] = useState<ComplexityLevel>('beginner');
  const [techniquesCovered, setTechniquesCovered] = useState({
    tabs: false,
    accordion: false,
    lightswitch: false,
    darkMode: false,
    mobileResponsive: false,
    animations: false,
  });
  const [keyTakeaways, setKeyTakeaways] = useState('');

  // UI State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showHowToModal, setShowHowToModal] = useState(false);

  // Library/Tab State
  const [activeTab, setActiveTab] = useState<'upload' | 'library' | 'evaluations'>('upload');
  const [libraryItems, setLibraryItems] = useState<any[]>([]);
  const [isLoadingLibrary, setIsLoadingLibrary] = useState(false);
  const [libraryError, setLibraryError] = useState('');

  // Preview & Delete State
  const [previewItem, setPreviewItem] = useState<any>(null);
  const [deleteConfirmItem, setDeleteConfirmItem] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Auto-tagging State
  const [isAutoTagging, setIsAutoTagging] = useState(false);
  const [autoTagError, setAutoTagError] = useState('');

  // Evaluations State
  const [evaluations, setEvaluations] = useState<any[]>([]);
  const [isLoadingEvaluations, setIsLoadingEvaluations] = useState(false);
  const [evaluationsError, setEvaluationsError] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [isRunningEval, setIsRunningEval] = useState(false);
  const [evalFilter, setEvalFilter] = useState<'all' | 'pending' | 'evaluated'>('pending');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'Sheba') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect password');
    }
  };

  const handleAutoTag = async () => {
    if (!htmlContent) {
      setAutoTagError('Please paste HTML content first');
      return;
    }

    setIsAutoTagging(true);
    setAutoTagError('');

    try {
      const response = await fetch('/api/admin/auto-tag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ htmlContent }),
      });

      if (!response.ok) {
        throw new Error('Auto-tagging failed');
      }

      const data = await response.json();

      // Apply suggested tags
      if (data.description) setDescription(data.description);
      if (data.technique) setTechnique(data.technique);
      if (data.emailPurpose) setEmailPurpose(data.emailPurpose);
      if (data.complexity) setComplexity(data.complexity);
      if (data.keyFeatures) {
        setKeyFeatures({
          lightswitch: data.keyFeatures.includes('lightswitch'),
          mobileResponsive: data.keyFeatures.includes('mobileResponsive'),
          ctaButtons: data.keyFeatures.includes('ctaButtons'),
          productImages: data.keyFeatures.includes('productImages'),
          progressiveDisclosure: data.keyFeatures.includes('progressiveDisclosure'),
          cssAnimations: data.keyFeatures.includes('cssAnimations'),
          multipleInteractions: data.keyFeatures.includes('multipleInteractions'),
        });
      }
      if (data.bestPracticeTags) {
        setBestPracticeTags({
          tableStructure: data.bestPracticeTags.includes('tableStructure'),
          msoConditionals: data.bestPracticeTags.includes('msoConditionals'),
          inlineStyles: data.bestPracticeTags.includes('inlineStyles'),
          fallbackContent: data.bestPracticeTags.includes('fallbackContent'),
          accessibility: data.bestPracticeTags.includes('accessibility'),
          darkMode: data.bestPracticeTags.includes('darkMode'),
        });
      }
    } catch (error) {
      console.error('Auto-tagging error:', error);
      setAutoTagError('Failed to auto-tag. Please try again.');
    } finally {
      setIsAutoTagging(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const payload = uploadType === 'html' ? {
        uploadType: 'html',
        htmlContent,
        description,
        technique,
        emailPurpose,
        complexity,
        htmlType,
        exampleType,
        keyFeatures: Object.entries(keyFeatures)
          .filter(([_, value]) => value)
          .map(([key]) => key),
        bestPracticeTags: Object.entries(bestPracticeTags)
          .filter(([_, value]) => value)
          .map(([key]) => key),
        notes,
      } : {
        uploadType: 'blog',
        blogTitle,
        blogContent,
        blogTopic,
        learningLevel,
        techniquesCovered: Object.entries(techniquesCovered)
          .filter(([_, value]) => value)
          .map(([key]) => key),
        keyTakeaways,
      };

      const response = await fetch('/api/admin/submit-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit content');
      }

      setSubmitSuccess(true);

      // Reset form
      if (uploadType === 'html') {
        setHtmlContent('');
        setDescription('');
        setNotes('');
        setExampleType('positive');
        setKeyFeatures({
          lightswitch: false,
          mobileResponsive: false,
          ctaButtons: false,
          productImages: false,
          progressiveDisclosure: false,
          cssAnimations: false,
          multipleInteractions: false,
        });
        setBestPracticeTags({
          tableStructure: false,
          msoConditionals: false,
          inlineStyles: false,
          fallbackContent: false,
          accessibility: false,
          darkMode: false,
        });
      } else {
        setBlogTitle('');
        setBlogContent('');
        setKeyTakeaways('');
        setTechniquesCovered({
          tabs: false,
          accordion: false,
          lightswitch: false,
          darkMode: false,
          mobileResponsive: false,
          animations: false,
        });
      }

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitError('Failed to submit content. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleKeyFeature = (feature: keyof typeof keyFeatures) => {
    setKeyFeatures(prev => ({ ...prev, [feature]: !prev[feature] }));
  };

  const toggleBestPracticeTag = (tag: keyof typeof bestPracticeTags) => {
    setBestPracticeTags(prev => ({ ...prev, [tag]: !prev[tag] }));
  };

  const toggleTechniqueCovered = (tech: keyof typeof techniquesCovered) => {
    setTechniquesCovered(prev => ({ ...prev, [tech]: !prev[tech] }));
  };

  // Load library when switching to library tab
  useEffect(() => {
    if (activeTab === 'library' && isAuthenticated) {
      loadLibrary();
    }
  }, [activeTab, isAuthenticated]);

  // Load evaluations when switching to evaluations tab
  useEffect(() => {
    if (activeTab === 'evaluations' && isAuthenticated) {
      loadEvaluations();
    }
  }, [activeTab, isAuthenticated, evalFilter]);

  const loadLibrary = async () => {
    setIsLoadingLibrary(true);
    setLibraryError('');
    try {
      const response = await fetch('/api/admin/list-content');
      if (!response.ok) {
        throw new Error('Failed to load library');
      }
      const data = await response.json();
      setLibraryItems(data.items || []);
    } catch (error) {
      console.error('Library load error:', error);
      setLibraryError('Failed to load library. Make sure you are in production.');
    } finally {
      setIsLoadingLibrary(false);
    }
  };

  const handleDelete = async (id: string) => {
    setIsDeleting(true);
    try {
      const response = await fetch('/api/admin/delete-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete');
      }

      // Remove from local state
      setLibraryItems(prev => prev.filter(item => item.id !== id));
      setDeleteConfirmItem(null);
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete item. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  // Evaluation functions
  const loadEvaluations = async () => {
    setIsLoadingEvaluations(true);
    setEvaluationsError('');
    try {
      const statusParam = evalFilter === 'all' ? '' : `?status=${evalFilter}`;
      const response = await fetch(`/api/admin/list-evaluations${statusParam}`);
      if (!response.ok) {
        throw new Error('Failed to load evaluations');
      }
      const data = await response.json();
      setEvaluations(data.submissions || []);
    } catch (error) {
      console.error('Evaluations load error:', error);
      setEvaluationsError('Failed to load evaluations.');
    } finally {
      setIsLoadingEvaluations(false);
    }
  };

  const runEvaluation = async (submissionId: string) => {
    setIsRunningEval(true);
    try {
      const response = await fetch('/api/admin/run-evaluation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ submissionId }),
      });

      if (!response.ok) {
        throw new Error('Failed to run evaluation');
      }

      const data = await response.json();

      // Reload evaluations to get updated status
      await loadEvaluations();

      // Show the results
      alert(`Evaluation complete!\nOverall Score: ${data.evaluation.score_overall}/100`);
      setSelectedSubmission(null);
    } catch (error) {
      console.error('Evaluation error:', error);
      alert('Failed to run evaluation. Please try again.');
    } finally {
      setIsRunningEval(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Authentication screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4">
              <FaLock className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">RAG Admin Portal</h1>
            <p className="text-gray-600">Enter password to access</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                id="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password"
              />
            </div>

            {authError && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 font-medium transition-all duration-200"
            >
              Unlock Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Main admin portal
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <PageLayout>
        <div className="max-w-5xl mx-auto py-8 px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
              RAG Knowledge Base Portal
            </h1>
            <p className="text-gray-600 mb-4">
              Upload examples to train the AI for better kinetic email generation
            </p>
            <button
              onClick={() => setShowHowToModal(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-sm font-medium"
            >
              <FaQuestionCircle />
              How To Use This Portal
            </button>
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 animate-in fade-in duration-200">
              <FaCheckCircle className="text-green-600 text-xl" />
              <div>
                <p className="text-green-900 font-medium">Content submitted successfully!</p>
                <p className="text-green-700 text-sm">It's now part of the RAG knowledge base.</p>
              </div>
            </div>
          )}

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === 'upload'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow border border-gray-200'
              }`}
            >
              <FaUpload />
              Upload Content
            </button>
            <button
              onClick={() => setActiveTab('library')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === 'library'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow border border-gray-200'
              }`}
            >
              <FaList />
              Library ({libraryItems.length})
            </button>
            <button
              onClick={() => setActiveTab('evaluations')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === 'evaluations'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow border border-gray-200'
              }`}
            >
              <FaClipboardCheck />
              Evaluations ({evaluations.length})
            </button>
          </div>

          {/* Upload Tab Content */}
          {activeTab === 'upload' && (
            <>
          {/* Upload Type Selection */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">What are you uploading?</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setUploadType('html')}
                className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                  uploadType === 'html'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                <FaCode className={`text-3xl mb-3 ${uploadType === 'html' ? 'text-blue-600' : 'text-gray-400'}`} />
                <h3 className="font-semibold text-gray-900 mb-1">HTML Email</h3>
                <p className="text-sm text-gray-600">Kinetic or static email code</p>
              </button>
              <button
                onClick={() => setUploadType('blog')}
                className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                  uploadType === 'blog'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                <FaBook className={`text-3xl mb-3 ${uploadType === 'blog' ? 'text-blue-600' : 'text-gray-400'}`} />
                <h3 className="font-semibold text-gray-900 mb-1">Blog Content</h3>
                <p className="text-sm text-gray-600">Educational content & techniques</p>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
            {uploadType === 'html' ? (
              <>
                {/* HTML Email Fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    HTML Content <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={htmlContent}
                    onChange={(e) => setHtmlContent(e.target.value)}
                    rows={12}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                    placeholder="Paste your full HTML email code here..."
                  />
                  <div className="mt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleAutoTag}
                      disabled={isAutoTagging || !htmlContent}
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAutoTagging ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <FaStar />
                          Auto-Tag with AI
                        </>
                      )}
                    </button>
                    {autoTagError && (
                      <p className="text-sm text-red-600">{autoTagError}</p>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    AI will analyze your HTML and suggest description, technique, tags, and features
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description / Prompt <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Tabbed product showcase for running shoes with 3 color options, pricing, and features"
                  />
                  <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-xs font-semibold text-blue-900 mb-1.5">💡 Description Engineering Tips:</p>
                    <ul className="text-xs text-blue-800 space-y-1">
                      <li>• Be specific about the <strong>technique</strong> (tabs, accordion, carousel, etc.)</li>
                      <li>• Include <strong>what content</strong> is displayed (products, survey, features, etc.)</li>
                      <li>• Mention <strong>key details</strong> (number of options, specific features, purpose)</li>
                      <li>• Good: "Tabbed product showcase for running shoes with 3 color options, pricing, and features"</li>
                      <li>• Bad: "Product email" (too vague, won't match well)</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Technique Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={technique}
                      onChange={(e) => setTechnique(e.target.value as TechniqueType)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="tabs">Tabs</option>
                      <option value="accordion">Accordion</option>
                      <option value="survey">Survey</option>
                      <option value="carousel">Carousel</option>
                      <option value="toggle">Toggle</option>
                      <option value="hybrid">Hybrid (Multiple techniques)</option>
                      <option value="static">Static (No kinetic interactivity)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Purpose
                    </label>
                    <select
                      value={emailPurpose}
                      onChange={(e) => setEmailPurpose(e.target.value as EmailPurpose)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="promotional">Promotional</option>
                      <option value="transactional">Transactional</option>
                      <option value="newsletter">Newsletter</option>
                      <option value="survey">Survey</option>
                      <option value="educational">Educational</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Complexity Level
                    </label>
                    <select
                      value={complexity}
                      onChange={(e) => setComplexity(e.target.value as ComplexityLevel)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      HTML Type
                    </label>
                    <div className="flex gap-4 pt-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="complete"
                          checked={htmlType === 'complete'}
                          onChange={(e) => setHtmlType(e.target.value as HTMLType)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm text-gray-700">Complete Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="component"
                          checked={htmlType === 'component'}
                          onChange={(e) => setHtmlType(e.target.value as HTMLType)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm text-gray-700">Component/Module</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Example Type - Positive/Negative */}
                <div className="bg-gradient-to-r from-green-50 to-red-50 border-2 border-gray-200 rounded-xl p-4">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Example Type
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer px-4 py-3 bg-white rounded-lg border-2 border-green-300 hover:border-green-500 transition-colors">
                      <input
                        type="radio"
                        value="positive"
                        checked={exampleType === 'positive'}
                        onChange={(e) => setExampleType(e.target.value as 'positive' | 'negative')}
                        className="w-4 h-4 text-green-600"
                      />
                      <div>
                        <span className="text-sm font-semibold text-green-800">✓ Positive Example</span>
                        <p className="text-xs text-green-600">Good pattern to follow</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer px-4 py-3 bg-white rounded-lg border-2 border-red-300 hover:border-red-500 transition-colors">
                      <input
                        type="radio"
                        value="negative"
                        checked={exampleType === 'negative'}
                        onChange={(e) => setExampleType(e.target.value as 'positive' | 'negative')}
                        className="w-4 h-4 text-red-600"
                      />
                      <div>
                        <span className="text-sm font-semibold text-red-800">✗ Negative Example</span>
                        <p className="text-xs text-red-600">Anti-pattern to avoid</p>
                      </div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    Negative examples help the AI learn what NOT to do. They won't be used as reference, but will help avoid bad patterns.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Key Features
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {Object.entries({
                      lightswitch: 'Uses lightswitch fallback',
                      mobileResponsive: 'Mobile responsive',
                      ctaButtons: 'Includes CTA buttons',
                      productImages: 'Product images',
                      progressiveDisclosure: 'Progressive disclosure',
                      cssAnimations: 'CSS animations',
                      multipleInteractions: 'Multiple interaction points',
                    }).map(([key, label]) => (
                      <label key={key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={keyFeatures[key as keyof typeof keyFeatures]}
                          onChange={() => toggleKeyFeature(key as keyof typeof keyFeatures)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="text-sm text-gray-700">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Best Practice Tags
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {Object.entries({
                      tableStructure: 'Proper table structure',
                      msoConditionals: 'MSO conditionals',
                      inlineStyles: 'Inline styles',
                      fallbackContent: 'Fallback content',
                      accessibility: 'Accessibility features',
                      darkMode: 'Dark mode support',
                    }).map(([key, label]) => (
                      <label key={key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={bestPracticeTags[key as keyof typeof bestPracticeTags]}
                          onChange={() => toggleBestPracticeTag(key as keyof typeof bestPracticeTags)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="text-sm text-gray-700">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes (Optional)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Special considerations, bugs fixed, client-specific quirks..."
                  />
                </div>
              </>
            ) : (
              <>
                {/* Blog Content Fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blog Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., How to Build Tabbed Emails in Apple Mail"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blog Content <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                    rows={12}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Full blog post content (markdown supported)..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Topic <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={blogTopic}
                      onChange={(e) => setBlogTopic(e.target.value as BlogTopic)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="kinetic-techniques">Kinetic Techniques</option>
                      <option value="email-best-practices">Email Best Practices</option>
                      <option value="case-studies">Case Studies</option>
                      <option value="tutorials">Tutorials</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Learning Level
                    </label>
                    <select
                      value={learningLevel}
                      onChange={(e) => setLearningLevel(e.target.value as ComplexityLevel)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Techniques Covered
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {Object.entries({
                      tabs: 'Tabs',
                      accordion: 'Accordion',
                      lightswitch: 'Lightswitch',
                      darkMode: 'Dark Mode',
                      mobileResponsive: 'Mobile Responsive',
                      animations: 'CSS Animations',
                    }).map(([key, label]) => (
                      <label key={key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={techniquesCovered[key as keyof typeof techniquesCovered]}
                          onChange={() => toggleTechniqueCovered(key as keyof typeof techniquesCovered)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="text-sm text-gray-700">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Key Takeaways <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={keyTakeaways}
                    onChange={(e) => setKeyTakeaways(e.target.value)}
                    rows={4}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Summary of main learnings from this blog post..."
                  />
                  <p className="text-xs text-gray-500 mt-1">This helps generate better embeddings for retrieval</p>
                </div>
              </>
            )}

            {/* Submit Error */}
            {submitError && (
              <div className="text-red-600 text-sm bg-red-50 p-4 rounded-lg border border-red-200">
                {submitError}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Uploading to RAG...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <FaUpload />
                  Submit to Knowledge Base
                </div>
              )}
            </button>
          </form>
            </>
          )}

          {/* Library Tab Content */}
          {activeTab === 'library' && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Knowledge Base Library</h2>
                <button
                  onClick={loadLibrary}
                  disabled={isLoadingLibrary}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-all duration-200 text-sm"
                >
                  {isLoadingLibrary ? 'Refreshing...' : 'Refresh'}
                </button>
              </div>

              {libraryError && (
                <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  {libraryError}
                </div>
              )}

              {isLoadingLibrary ? (
                <div className="text-center py-12">
                  <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600">Loading library...</p>
                </div>
              ) : libraryItems.length === 0 ? (
                <div className="text-center py-12">
                  <FaBook className="text-6xl text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">No content in library yet</p>
                  <p className="text-gray-500 text-sm mt-2">Upload your first example to get started!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {libraryItems.map((item) => {
                    const meta = item.metadata;
                    const isHtml = meta.type === 'html';

                    return (
                      <div
                        key={item.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {isHtml ? (
                                <FaCode className="text-blue-600 text-lg" />
                              ) : (
                                <FaBook className="text-purple-600 text-lg" />
                              )}
                              <h3 className="font-semibold text-gray-900">
                                {isHtml ? meta.description : meta.blogTitle}
                              </h3>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                isHtml ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                              }`}>
                                {isHtml ? 'HTML Email' : 'Blog Post'}
                              </span>

                              {isHtml && (
                                <>
                                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                    {meta.technique}
                                  </span>
                                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                    {meta.complexity}
                                  </span>
                                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                    {meta.emailPurpose}
                                  </span>
                                </>
                              )}

                              {!isHtml && (
                                <>
                                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                    {meta.blogTopic}
                                  </span>
                                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                    {meta.learningLevel}
                                  </span>
                                </>
                              )}
                            </div>

                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <FaClock />
                              <span>{formatDate(meta.submittedAt)}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setPreviewItem(item)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                              title="Preview"
                            >
                              <FaEye />
                            </button>
                            <button
                              onClick={() => setDeleteConfirmItem(item)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                              title="Delete"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Evaluations Tab Content */}
          {activeTab === 'evaluations' && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Evaluation Queue</h2>
                <p className="text-gray-600">Review and evaluate playground submissions to improve the AI model</p>
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setEvalFilter('pending')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    evalFilter === 'pending'
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FaFilter /> Pending
                </button>
                <button
                  onClick={() => setEvalFilter('evaluated')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    evalFilter === 'evaluated'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FaFilter /> Evaluated
                </button>
                <button
                  onClick={() => setEvalFilter('all')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    evalFilter === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FaFilter /> All
                </button>
              </div>

              {/* Loading State */}
              {isLoadingEvaluations && (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                  <p className="text-gray-600 mt-4">Loading evaluations...</p>
                </div>
              )}

              {/* Error State */}
              {evaluationsError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700">
                  {evaluationsError}
                </div>
              )}

              {/* Empty State */}
              {!isLoadingEvaluations && evaluations.length === 0 && (
                <div className="text-center py-12">
                  <FaClipboardCheck className="text-gray-300 text-6xl mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">No submissions {evalFilter !== 'all' ? `with status "${evalFilter}"` : ''}</p>
                  <p className="text-gray-500 text-sm mt-2">Submissions from the playground will appear here</p>
                </div>
              )}

              {/* Submissions List */}
              {!isLoadingEvaluations && evaluations.length > 0 && (
                <div className="space-y-4">
                  {evaluations.map((submission: any) => (
                    <div key={submission.id} className="border border-gray-200 rounded-xl p-5 hover:border-purple-300 transition-all duration-200">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              submission.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                              submission.status === 'evaluated' ? 'bg-green-100 text-green-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {submission.status}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              submission.model_used === 'large' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                            }`}>
                              {submission.model_used === 'large' ? 'Large Model' : 'Small Model'}
                            </span>
                            {submission.rag_used && (
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
                                RAG ({submission.rag_examples_count} examples)
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 flex items-center gap-2">
                            <FaClock />
                            {formatDate(submission.created_at)}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedSubmission(submission)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                          >
                            <FaEye /> View
                          </button>
                          {submission.status === 'pending' && (
                            <button
                              onClick={() => runEvaluation(submission.id)}
                              disabled={isRunningEval}
                              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
                            >
                              <FaPlay /> {isRunningEval ? 'Running...' : 'Run Eval AI'}
                            </button>
                          )}
                        </div>
                      </div>

                      {/* User Intent Preview */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm font-semibold text-gray-700 mb-1">User Intent:</p>
                        <p className="text-gray-600 text-sm">{submission.user_intent}</p>
                      </div>

                      {/* Evaluation Results (if evaluated) */}
                      {submission.evaluations && submission.evaluations.length > 0 && (
                        <div className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-green-900">Overall Score:</p>
                            <p className="text-2xl font-bold text-green-700">{submission.evaluations[0].score_overall}/100</p>
                          </div>
                          <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
                            <div>
                              <p className="text-gray-600">Code Quality:</p>
                              <p className="font-semibold">{submission.evaluations[0].score_code_quality}/100</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Functionality:</p>
                              <p className="font-semibold">{submission.evaluations[0].score_functionality}/100</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Fallback:</p>
                              <p className="font-semibold">{submission.evaluations[0].score_fallback_quality}/100</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </PageLayout>

      {/* Preview Modal */}
      <Modal
        isOpen={!!previewItem}
        onClose={() => setPreviewItem(null)}
        title={previewItem?.metadata.type === 'html' ? 'HTML Email Preview' : 'Blog Post Preview'}
      >
        {previewItem && (
          <div className="p-6">
            {previewItem.metadata.type === 'html' ? (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Description:</h3>
                  <p className="text-gray-600">{previewItem.metadata.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">HTML Code:</h3>
                  <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-xs max-h-96 overflow-y-auto border border-gray-200">
                    <code>{previewItem.metadata.html}</code>
                  </pre>
                </div>
                {previewItem.metadata.notes && (
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Notes:</h3>
                    <p className="text-gray-600 text-sm">{previewItem.metadata.notes}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Title:</h3>
                  <p className="text-gray-900 text-lg">{previewItem.metadata.blogTitle}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Key Takeaways:</h3>
                  <p className="text-gray-600">{previewItem.metadata.keyTakeaways}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Content:</h3>
                  <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto border border-gray-200">
                    <pre className="whitespace-pre-wrap text-sm text-gray-700">{previewItem.metadata.blogContent}</pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!deleteConfirmItem}
        onClose={() => setDeleteConfirmItem(null)}
        title="Confirm Delete"
      >
        {deleteConfirmItem && (
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold text-gray-900">
                {deleteConfirmItem.metadata.type === 'html'
                  ? deleteConfirmItem.metadata.description
                  : deleteConfirmItem.metadata.blogTitle}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {deleteConfirmItem.metadata.type === 'html' ? 'HTML Email' : 'Blog Post'}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirmItem(null)}
                disabled={isDeleting}
                className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 disabled:opacity-50 font-medium transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmItem.id)}
                disabled={isDeleting}
                className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 disabled:opacity-50 font-medium transition-all duration-200"
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Submission Detail Modal */}
      <Modal
        isOpen={!!selectedSubmission}
        onClose={() => setSelectedSubmission(null)}
        title="Submission Details"
      >
        {selectedSubmission && (
          <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Header Info */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 font-medium">Model Used:</p>
                  <p className="text-gray-900">{selectedSubmission.model_used === 'large' ? 'Large Model' : 'Small Model'}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Status:</p>
                  <p className="text-gray-900 capitalize">{selectedSubmission.status}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">RAG Used:</p>
                  <p className="text-gray-900">{selectedSubmission.rag_used ? `Yes (${selectedSubmission.rag_examples_count} examples)` : 'No'}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Submitted:</p>
                  <p className="text-gray-900">{formatDate(selectedSubmission.created_at)}</p>
                </div>
              </div>
            </div>

            {/* User Intent */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">User Intent:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700">{selectedSubmission.user_intent}</p>
              </div>
            </div>

            {/* User Feedback */}
            {selectedSubmission.user_feedback && (
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">User Feedback:</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700">{selectedSubmission.user_feedback}</p>
                </div>
              </div>
            )}

            {/* User Prompt */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">User Prompt:</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700">{selectedSubmission.user_prompt}</p>
              </div>
            </div>

            {/* Generated Code */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Generated Code:</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs max-h-96 overflow-y-auto">
                <code>{selectedSubmission.generated_code}</code>
              </pre>
            </div>

            {/* Evaluation Results */}
            {selectedSubmission.evaluations && selectedSubmission.evaluations.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Evaluation Results:</h3>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Overall Score</p>
                    <p className="text-4xl font-bold text-green-700">{selectedSubmission.evaluations[0].score_overall}/100</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="text-gray-600">Code Quality</p>
                      <p className="text-xl font-bold text-gray-900">{selectedSubmission.evaluations[0].score_code_quality}/100</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="text-gray-600">Kinetic Integration</p>
                      <p className="text-xl font-bold text-gray-900">{selectedSubmission.evaluations[0].score_kinetic_integration}/100</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="text-gray-600">Functionality</p>
                      <p className="text-xl font-bold text-gray-900">{selectedSubmission.evaluations[0].score_functionality}/100</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="text-gray-600">Fallback Quality</p>
                      <p className="text-xl font-bold text-gray-900">{selectedSubmission.evaluations[0].score_fallback_quality}/100</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="text-gray-600">User Intent Match</p>
                      <p className="text-xl font-bold text-gray-900">{selectedSubmission.evaluations[0].score_user_intent_match}/100</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="text-gray-600">Creativity & Design</p>
                      <p className="text-xl font-bold text-gray-900">{selectedSubmission.evaluations[0].score_creativity_design}/100</p>
                    </div>
                  </div>

                  {selectedSubmission.evaluations[0].overall_assessment && (
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-700 mb-2">Overall Assessment:</p>
                      <p className="text-gray-600 text-sm">{selectedSubmission.evaluations[0].overall_assessment}</p>
                    </div>
                  )}

                  {selectedSubmission.evaluations[0].top_issues && selectedSubmission.evaluations[0].top_issues.length > 0 && (
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-700 mb-2">Top Issues:</p>
                      <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                        {selectedSubmission.evaluations[0].top_issues.map((issue: string, idx: number) => (
                          <li key={idx}>{issue}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedSubmission.evaluations[0].strengths && selectedSubmission.evaluations[0].strengths.length > 0 && (
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-700 mb-2">Strengths:</p>
                      <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                        {selectedSubmission.evaluations[0].strengths.map((strength: string, idx: number) => (
                          <li key={idx}>{strength}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* How To Modal */}
      <Modal
        isOpen={showHowToModal}
        onClose={() => setShowHowToModal(false)}
        title="How to Build the Perfect RAG Knowledge Base"
      >
        <div className="p-6">
          <div className="prose prose-sm max-w-none space-y-4 text-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 mt-6">🎯 Goal</h3>
            <p>
              Create an AI that generates <strong>functional, best-practice HTML/CSS emails</strong> by learning from
              real, validated examples.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">📝 What to Upload</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Working kinetic emails</strong> - Emails you've tested in real clients (iOS Mail, Apple Mail, etc.)</li>
              <li><strong>Static email best practices</strong> - Dark mode, mobile-responsive layouts, table structures</li>
              <li><strong>Blog posts & tutorials</strong> - Educational content explaining techniques and patterns</li>
              <li><strong>Edge cases & fixes</strong> - Solutions to tricky client compatibility issues</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">✅ Quality Checklist</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-900 mb-2">Before uploading HTML emails, verify:</p>
              <ul className="list-disc pl-5 space-y-1 text-blue-800">
                <li>Tested in iOS Mail or Apple Mail (for kinetic emails)</li>
                <li>Interactive features work as expected</li>
                <li>Fallback displays correctly in Gmail/Outlook</li>
                <li>Mobile-responsive on real devices</li>
                <li>No broken images or layout issues</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">🚀 Velocity Strategy</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Seed Phase:</strong> Upload 10-15 high-quality, diverse examples (tabs, accordion, survey, static)</li>
              <li><strong>Generation Phase:</strong> Use Playground to create new kinetic emails</li>
              <li><strong>Validation Phase:</strong> Test generated emails in real clients</li>
              <li><strong>Feedback Loop:</strong> If successful → upload back to RAG → AI improves!</li>
            </ol>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">💡 Pro Tips</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Descriptive prompts:</strong> Write descriptions as you'd ask the AI ("Tabbed product showcase for shoes")</li>
              <li><strong>Tag everything:</strong> More metadata = better matching during retrieval</li>
              <li><strong>Diversity matters:</strong> Upload different techniques, purposes, and complexity levels</li>
              <li><strong>Blog content helps:</strong> Explanations improve AI understanding beyond just code patterns</li>
              <li><strong>Static emails count:</strong> Dark mode, tables, MSO conditionals - these teach general email HTML quality</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">🔄 How RAG Works</h3>
            <div className="bg-purple-50 p-4 rounded-lg text-sm">
              <p className="mb-2">When a user asks for "tabbed product email":</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>System finds 3-5 most similar examples from your uploads</li>
                <li>Injects those examples into Claude's prompt as references</li>
                <li>Claude sees: "Here's how we built tabs before... now build this"</li>
                <li>Output matches YOUR proven patterns and style</li>
              </ol>
              <div className="mt-4 pt-4 border-t border-purple-200">
                <a
                  href="/how-it-works"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 font-medium transition-colors"
                >
                  <FaQuestionCircle />
                  Read Full Technical Deep Dive →
                </a>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">⚠️ What NOT to Upload</h3>
            <ul className="list-disc pl-5 space-y-2 text-red-700">
              <li>Untested or broken code</li>
              <li>Emails with placeholder/missing content</li>
              <li>Overly client-specific code that won't generalize</li>
              <li>Duplicate examples (unless they show different approaches)</li>
            </ul>

            <p className="mt-6 text-sm italic text-gray-600">
              Remember: Quality over quantity. 20 excellent examples beat 100 mediocre ones.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminPortal;
