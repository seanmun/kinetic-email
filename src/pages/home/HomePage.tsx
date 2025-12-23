// src/pages/home/HomePage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import IOSMailSimulator from '../../components/portfolio/IOSMailSimulator';
import { FaRocket, FaCode, FaPaperPlane, FaChartLine, FaApple, FaMagic, FaCheckCircle, FaBolt, FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'static' | 'kinetic'>('kinetic');
  const [mobileComparisonView, setMobileComparisonView] = useState<'static' | 'kinetic'>('kinetic');
  const [trackingEvents, setTrackingEvents] = useState<Array<{
    userId: string;
    emailName: string;
    action: string;
    timestamp: string;
  }>>([]);
  const [firedEvents, setFiredEvents] = useState<Set<string>>(new Set());

  // Generate a visitor ID (persistent for session)
  const visitorId = React.useMemo(() => {
    return `visitor_${Math.random().toString(36).substring(2, 9)}`;
  }, []);

  // Function to log tracking event
  const logTrackingEvent = (action: string) => {
    // Only fire once per action
    if (firedEvents.has(action)) return;

    const now = new Date();
    const timestamp = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }) + '.' + now.getMilliseconds().toString().padStart(3, '0');

    const event = {
      userId: visitorId,
      emailName: 'Product Showcase Demo',
      action: action,
      timestamp: timestamp
    };

    setTrackingEvents(prev => [...prev, event]);
    setFiredEvents(prev => new Set([...prev, action]));
  };

  // Listen for messages from iframe
  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'kinetic_tracking') {
        logTrackingEvent(event.data.action);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [firedEvents, visitorId]);

  // Automatically fire the first tab on mount to mimic real email behavior
  React.useEffect(() => {
    // Small delay to ensure iframe is loaded
    const timer = setTimeout(() => {
      logTrackingEvent('tab_1_survey');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Sample kinetic email HTML for the hero demo with tracking
  const heroKineticEmail = `
<!DOCTYPE html>
<html>
<head>
<script>
  // Track tab clicks and send to parent window
  window.addEventListener('DOMContentLoaded', function() {
    // Track tab navigation
    const tabLabels = document.querySelectorAll('.tab-labels label');
    tabLabels.forEach(function(label) {
      label.addEventListener('click', function() {
        const forAttr = this.getAttribute('for');
        let action = '';
        if (forAttr === 'tab1') action = 'tab_1_survey';
        if (forAttr === 'tab2') action = 'tab_2_benefits';
        if (forAttr === 'tab3') action = 'tab_3_get_started';

        if (action && window.parent) {
          window.parent.postMessage({ type: 'kinetic_tracking', action: action }, '*');
        }
      });
    });

    // Track survey submissions
    const submitLabel = document.querySelector('label[for="survey_submit"]');
    if (submitLabel) {
      submitLabel.addEventListener('click', function() {
        // Check which features are selected and fire tracking for each
        const featureNames = {
          'feature1': 'survey_features_tabs_navigation',
          'feature2': 'survey_features_product_carousels',
          'feature3': 'survey_features_email_surveys',
          'feature4': 'survey_features_tracking_analytics'
        };

        Object.keys(featureNames).forEach(function(featureId) {
          const checkbox = document.getElementById(featureId);
          if (checkbox && checkbox.checked) {
            const action = featureNames[featureId];
            if (window.parent) {
              window.parent.postMessage({ type: 'kinetic_tracking', action: action }, '*');
            }
          }
        });
      });
    }
  });
</script>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 20px; background: #f5f5f7; }

  /* Hide radio and checkbox inputs */
  input[type="radio"], input[type="checkbox"] {
    position: absolute !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  /* Tab container */
  .tab-container {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  /* Tab buttons */
  .tab-labels {
    display: flex;
    border-bottom: 1px solid #e5e5e7;
    background: #fafafa;
  }

  .tab-labels label {
    flex: 1;
    padding: 16px;
    text-align: center;
    cursor: pointer;
    font-weight: 500;
    color: #666;
    transition: all 0.3s;
    border-bottom: 3px solid transparent;
  }

  .tab-labels label:hover {
    background: #f0f0f0;
    color: #000;
  }

  /* Active tab styling */
  #tab1:checked ~ * .tab-labels label[for="tab1"],
  #tab2:checked ~ * .tab-labels label[for="tab2"],
  #tab3:checked ~ * .tab-labels label[for="tab3"] {
    color: #0066FF;
    border-bottom-color: #0066FF;
    background: white;
  }

  /* Content sections - hide all by default */
  .content { display: none; padding: 24px; }

  /* Show content based on checked radio */
  #tab1:checked ~* .content1,
  #tab2:checked ~* .content2,
  #tab3:checked ~* .content3 {
    display: block !important;
  }

  /* Survey form styling */
  .survey-form { display: block; }
  .survey-thanks { display: none; }

  /* When survey is submitted, hide form and show thanks */
  #survey_submit:checked ~ * .survey-form { display: none !important; }
  #survey_submit:checked ~ * .survey-thanks { display: block !important; }

  .content h3 {
    color: #0066FF;
    margin-bottom: 12px;
    font-size: 20px;
  }

  .content p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  /* Custom checkbox styling */
  .checkbox-item {
    display: flex;
    align-items: center;
    padding: 12px;
    margin-bottom: 8px;
    background: #f8f8f8;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .checkbox-item:hover {
    background: #e8f4ff;
  }

  .checkbox-visual {
    width: 20px;
    height: 20px;
    border: 2px solid #0066FF;
    border-radius: 4px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .checkbox-visual::after {
    content: '';
    display: none;
  }

  /* Show checkmark when checked */
  #feature1:checked ~ * label[for="feature1"] .checkbox-visual::after,
  #feature2:checked ~ * label[for="feature2"] .checkbox-visual::after,
  #feature3:checked ~ * label[for="feature3"] .checkbox-visual::after,
  #feature4:checked ~ * label[for="feature4"] .checkbox-visual::after {
    content: '✓';
    display: block;
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  #feature1:checked ~ * label[for="feature1"] .checkbox-visual,
  #feature2:checked ~ * label[for="feature2"] .checkbox-visual,
  #feature3:checked ~ * label[for="feature3"] .checkbox-visual,
  #feature4:checked ~ * label[for="feature4"] .checkbox-visual {
    background: #0066FF;
    border-color: #0066FF;
  }

  .submit-button {
    display: inline-block;
    padding: 12px 24px;
    background: linear-gradient(135deg, #0066FF, #00D4FF);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: transform 0.2s;
  }

  .submit-button:hover {
    transform: scale(1.05);
  }

  .cta-button {
    display: inline-block;
    padding: 12px 24px;
    background: transparent;
    color: #0066FF;
    text-decoration: none;
    border: 2px solid #0066FF;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s;
  }

  .cta-button:hover {
    background: #0066FF;
    color: white;
  }
</style>
</head>
<body>
  <!-- Tab Navigation -->
  <input type="radio" name="tabs" id="tab1" checked>
  <input type="radio" name="tabs" id="tab2">
  <input type="radio" name="tabs" id="tab3">

  <!-- Survey checkboxes -->
  <input type="checkbox" id="feature1">
  <input type="checkbox" id="feature2">
  <input type="checkbox" id="feature3">
  <input type="checkbox" id="feature4">
  <input type="checkbox" id="survey_submit">

  <div class="tab-container">
    <div class="tab-labels">
      <label for="tab1">Survey</label>
      <label for="tab2">Benefits</label>
      <label for="tab3">Get Started</label>
    </div>

    <div class="content content1">
      <div class="survey-container">
        <!-- Survey Form (shown by default) -->
        <div class="survey-form">
          <h3>Which features interest you most?</h3>
          <p style="margin-bottom: 20px;">Select all that apply:</p>

          <label for="feature1" class="checkbox-item">
            <div class="checkbox-visual"></div>
            <span>Interactive Tabs & Navigation</span>
          </label>

          <label for="feature2" class="checkbox-item">
            <div class="checkbox-visual"></div>
            <span>Product Carousels</span>
          </label>

          <label for="feature3" class="checkbox-item">
            <div class="checkbox-visual"></div>
            <span>In-Email Surveys</span>
          </label>

          <label for="feature4" class="checkbox-item">
            <div class="checkbox-visual"></div>
            <span>Event Tracking & Analytics</span>
          </label>

          <label for="survey_submit" class="submit-button" style="margin-top: 16px; display: inline-block;">
            Submit Survey
          </label>
        </div>

        <!-- Thank You Message (shown after submit) -->
        <div class="survey-thanks">
          <h3>Thanks for your feedback!</h3>
          <p>We've recorded your preferences.<br>(check out the tracking demo below)</p>
          <p style="color: #0066FF; font-weight: 600; margin-top: 20px;">
            Click on Tab 2 to learn more benefits
          </p>
        </div>
      </div>
    </div>

    <div class="content content2">
      <h3>Why Kinetic Emails Work</h3>
      <p><strong>Psychology meets design:</strong> When people start interacting (clicking tabs, completing surveys), they're more likely to finish and take action.</p>
      <p><strong>Better data collection:</strong> Capture granular engagement data - which tabs were clicked, survey responses, product interests - all without leaving the email.</p>
      <p><strong>Reduced friction:</strong> No scrolling through long emails or clicking multiple links. Everything users need is right there, organized and interactive.</p>
    </div>

    <div class="content content3">
      <h3>Ready to Build Your Own?</h3>
      <p>Our AI-powered playground makes it easy to create kinetic emails in minutes.</p>
      <a href="#" class="cta-button">Try the Playground →</a>
    </div>
  </div>
</body>
</html>
  `;

  const staticEmailHTML = `
<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 20px; background: #f5f5f7; }

  .email-container {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    padding: 24px;
  }

  h3 {
    color: #0066FF;
    margin-bottom: 12px;
    font-size: 20px;
  }

  p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .cta-button {
    display: inline-block;
    padding: 12px 24px;
    background: transparent;
    color: #0066FF;
    text-decoration: none;
    border: 2px solid #0066FF;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s;
  }

  .cta-button:hover {
    background: #0066FF;
    color: white;
  }

  .divider {
    height: 1px;
    background: #e5e5e7;
    margin: 20px 0;
  }

  .section {
    margin-bottom: 24px;
  }
</style>
</head>
<body>
  <div class="email-container">
    <!-- Survey Section -->
    <div class="section">
      <h3>Which features interest you most?</h3>
      <p>We'd love to hear from you! Please visit our survey page to share your preferences:</p>
      <p style="color: #666; font-size: 14px;">
        • Interactive Tabs & Navigation<br>
        • Product Carousels<br>
        • In-Email Surveys<br>
        • Event Tracking & Analytics
      </p>
      <a href="#" class="cta-button">Take Survey →</a>
    </div>

    <div class="divider"></div>

    <!-- Benefits Section -->
    <div class="section">
      <h3>Why Kinetic Emails Work</h3>
      <p><strong>Psychology meets design:</strong> When people start interacting (clicking tabs, completing surveys), they're more likely to finish and take action.</p>
      <p><strong>Better data collection:</strong> Capture granular engagement data - which tabs were clicked, survey responses, product interests - all without leaving the email.</p>
      <p><strong>Reduced friction:</strong> No scrolling through long emails or clicking multiple links. Everything users need is right there, organized and interactive.</p>
    </div>

    <div class="divider"></div>

    <!-- Get Started Section -->
    <div class="section">
      <h3>Ready to Build Your Own?</h3>
      <p>Our AI-powered playground makes it easy to create kinetic emails in minutes.</p>
      <a href="#" class="cta-button">Try the Playground →</a>
    </div>
  </div>
</body>
</html>
  `;

  return (
    <>
      {/* Hero Section - Full viewport with interactive demo */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white pt-32 pb-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Copy + Tracking Console */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <FaBolt className="text-yellow-400" />
                <span className="text-sm font-medium">AI-Powered Email Generation</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Emails That{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Do&nbsp;More
                </span>
                <br />
                Than Sit There
              </h1>

              <p className="text-xl md:text-2xl mb-4 text-blue-100 leading-relaxed">
                Generate interactive kinetic emails with AI. No coding required. Just describe what you want.
              </p>

              <p className="text-base text-blue-200 mb-8 max-w-xl">
                Create tabbed interfaces, product showcases, surveys, and carousels that work
                directly in the inbox. Used by leading brands to boost engagement by 5-10x.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/playground"
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl shadow-lg shadow-blue-500/50 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaRocket className="group-hover:animate-bounce" />
                  Generate Your First Email
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/learn"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FaMagic />
                  Learn About Kinetic
                </Link>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-sm text-blue-200">CSS-Only</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">No JS</div>
                  <div className="text-sm text-blue-200">Required</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">Event</div>
                  <div className="text-sm text-blue-200">Tracking Included</div>
                </div>
              </div>

              {/* Tracking Console Header */}
              <div className="mt-8 mb-4 text-center lg:text-left">
                <h3 className="text-lg font-semibold text-blue-100 mb-2">
                  See It In Action
                </h3>
                <p className="text-sm text-blue-200/80">
                  Every interaction in the email fires a tracking event. Click the tabs to see real-time data capture.
                </p>
              </div>

              {/* Tracking Console */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-slate-950 rounded-2xl overflow-hidden border border-green-500/30 shadow-2xl">
                  {/* Terminal Header */}
                  <div className="bg-slate-900 border-b border-green-500/30 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-green-400 font-mono text-sm">kinetic-tracking.log</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400 text-xs">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                      </span>
                      <span className="font-mono">LIVE</span>
                    </div>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-3 font-mono text-xs h-36 overflow-y-auto bg-slate-950">
                    {trackingEvents.length === 0 ? (
                      <div className="text-green-500/50 italic text-[10px] leading-tight">
                        <p className="mb-1"># Kinetic Email Event Tracking Console</p>
                        <p className="mb-1"># Waiting for user interactions...</p>
                        <p className="mb-2"># Click the tabs in the email to see events fire in real-time</p>
                        <p className="text-green-400/30">_</p>
                      </div>
                    ) : (
                      <div>
                        {/* Column Headers */}
                        <div className="grid grid-cols-12 gap-1 pb-1 mb-1 border-b border-green-500/30 text-green-500 font-semibold text-[10px]">
                          <div className="col-span-3">TIMESTAMP</div>
                          <div className="col-span-2">USER</div>
                          <div className="col-span-4">EMAIL</div>
                          <div className="col-span-3">ACTION</div>
                        </div>

                        {/* Data Rows */}
                        <div className="space-y-0.5">
                          {trackingEvents.map((event, idx) => (
                            <div key={idx} className="grid grid-cols-12 gap-1 text-green-400 animate-in fade-in slide-in-from-left-2 duration-300 text-[10px] leading-tight">
                              <div className="col-span-3 text-green-600">{event.timestamp}</div>
                              <div className="col-span-2 text-green-300">{event.userId.replace('visitor_', '')}</div>
                              <div className="col-span-4 text-cyan-400">{event.emailName}</div>
                              <div className="col-span-3 text-yellow-300">{event.action.replace('clicked_tab_', '').replace('survey_features_', '')}</div>
                            </div>
                          ))}
                        </div>

                        <div className="text-green-400 animate-pulse mt-1 text-[10px]">_</div>
                      </div>
                    )}
                  </div>

                  {/* Terminal Footer */}
                  <div className="bg-slate-900 border-t border-green-500/30 px-4 py-2 flex items-center justify-between text-xs">
                    <span className="text-green-500/70 font-mono">
                      {trackingEvents.length} event{trackingEvents.length !== 1 ? 's' : ''} tracked
                    </span>
                    <span className="text-green-500/50 font-mono">
                      Each action fires once • Real-time tracking
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Demo */}
            <div>
              {/* Email Simulator */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative">
                  <IOSMailSimulator
                    sender="Kinetic.email Demo"
                    subject="This isn't a video. It's an EMAIL ⚡"
                    htmlContent={heroKineticEmail}
                    date="Just now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Ticker */}
      <div className="bg-slate-100 border-y border-slate-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 text-sm text-slate-600 flex-wrap">
            <span className="font-semibold text-slate-700">Trusted by leading brands:</span>
            <span className="font-medium">Daylight Computer</span>
            <span className="font-medium">Chroma</span>
            <span className="font-medium">The Grounded Athlete</span>
            <span className="font-medium">Dr. Cate Shanahan, M.D.</span>
            <span className="text-slate-400">+2 more</span>
          </div>
        </div>
      </div>

      {/* Interactive Comparison Section */}
      <PageLayout className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See The Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare traditional static emails with kinetic interactive experiences
          </p>

          {/* Mobile Toggle */}
          <div className="md:hidden mt-8 flex justify-center">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setMobileComparisonView('static')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  mobileComparisonView === 'static'
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-600'
                }`}
              >
                Traditional
              </button>
              <button
                onClick={() => setMobileComparisonView('kinetic')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  mobileComparisonView === 'kinetic'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                    : 'text-gray-600'
                }`}
              >
                Kinetic
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Static Email */}
          <div className={`relative group ${mobileComparisonView === 'kinetic' ? 'hidden md:block' : ''}`}>
            <div className="absolute -inset-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-200"></div>
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-200">
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-700">Traditional Static Email</h3>
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
                    Static
                  </span>
                </div>
              </div>
              <div className="p-2">
                <div className="transform scale-90 origin-top">
                  <IOSMailSimulator
                    sender="Old School Marketing"
                    subject="Check out our products"
                    htmlContent={staticEmailHTML}
                    date="Yesterday"
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    No interaction
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    Multiple clicks required
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    Low engagement
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kinetic Email */}
          <div className={`relative group ${mobileComparisonView === 'static' ? 'hidden md:block' : ''}`}>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-blue-300">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4 border-b border-blue-400">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Kinetic Interactive Email</h3>
                </div>
              </div>
              <div className="p-2">
                <div className="transform scale-90 origin-top">
                  <IOSMailSimulator
                    sender="Kinetic.email"
                    subject="Interactive product showcase ⚡"
                    htmlContent={heroKineticEmail}
                    date="Today"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-t border-blue-200">
                <ul className="text-sm text-blue-900 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 text-lg">✓</span>
                    <span className="font-medium">Rich engagement data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 text-lg">✓</span>
                    <span className="font-medium">Better UX - no scrolling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 text-lg">✓</span>
                    <span className="font-medium">Interaction drives action</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            👆 The kinetic email above is fully functional - click the tabs to see it in action!
          </p>
        </div>
      </PageLayout>

      {/* 3-Step Pitch - Bento Grid */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Create Kinetic Emails in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform makes it easy to build interactive emails
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <FaCode className="text-white text-2xl" />
                </div>
                <div className="text-blue-600 font-black text-5xl mb-4">01</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Describe Your Email</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tell our AI what you want in plain English. "Create a tabbed product showcase"
                  or "Build an interactive survey" - it's that simple.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-purple-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <FaMagic className="text-white text-2xl" />
                </div>
                <div className="text-purple-600 font-black text-5xl mb-4">02</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Generates HTML</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our RAG-powered system retrieves proven examples and generates production-ready
                  HTML with proper lightswitch fallbacks.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-green-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <FaPaperPlane className="text-white text-2xl" />
                </div>
                <div className="text-green-600 font-black text-5xl mb-4">03</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send & Track Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Copy the HTML, send via your ESP, and watch engagement soar. Track clicks,
                  tab interactions, and conversions.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/playground"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-200 transform hover:scale-105"
            >
              <FaRocket />
              Try It Now - It's Free
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* AI Technology Showcase */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              RAG-based generation with continuous evaluation and quality improvement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                title: 'RAG System',
                description: 'Retrieval-Augmented Generation pulls proven examples from our knowledge base to ensure accurate, tested code.',
                icon: '🔍',
                color: 'from-purple-500 to-indigo-500'
              },
              {
                title: 'AI Evaluations',
                description: 'Every generation is evaluated for correctness, fallback implementation, and email client compatibility.',
                icon: '✅',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Continuous Learning',
                description: 'Our system learns from every generation, improving quality and expanding the knowledge base over time.',
                icon: '📈',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors"
            >
              Learn How It Works
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Final CTA - Dark Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to Send Emails
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              That Work Like Apps?
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join the brands revolutionizing email marketing with interactive kinetic experiences.
            No signup required to start generating.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/playground"
              className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl shadow-2xl shadow-blue-500/50 transition-all duration-200 transform hover:scale-105 flex items-center gap-3 text-lg"
            >
              <FaRocket className="text-2xl group-hover:animate-bounce" />
              Start Generating Now
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/learn"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 text-lg"
            >
              <FaChartLine />
              Learn the Techniques
            </Link>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default HomePage;
