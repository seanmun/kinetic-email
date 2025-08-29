// src/pages/learn/TrackingModule.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import CodeBlock from '../../components/common/CodeBlock';

const TrackingModule: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('basic');
  const [trackedEvents, setTrackedEvents] = useState<Array<{
    userID: string;
    emailID: string;
    questionID?: string;
    answerID?: string;
    event: string;
    timestamp: string;
  }>>([]);
  const [firedPixels, setFiredPixels] = useState<Set<string>>(new Set());

  const simulateTracking = (event: string, questionID?: string, answerID?: string) => {
    const pixelKey = `${questionID}-${answerID}`;
    
    // Check if this pixel has already fired (simulating email DOM limitation)
    if (firedPixels.has(pixelKey)) {
      return; // Pixel already fired, cannot fire again in same email session
    }
    
    const newEvent = {
      userID: '12345',
      emailID: 'WelcomeEmail',
      questionID,
      answerID,
      event,
      timestamp: new Date().toLocaleString()
    };
    
    setTrackedEvents(prev => [newEvent, ...prev.slice(0, 4)]);
    setFiredPixels(prev => new Set([...prev, pixelKey]));
  };

  return (
    <PageLayout>
      <div className="mb-6">
        <Link to="/learn" className="text-blue-600 hover:text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Learning Path
        </Link>
      </div>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Kinetic Email Tracking</h1>
        <p className="text-xl text-gray-600">
          Transform kinetic interactions into actionable business intelligence using pixel tracking techniques.
        </p>
      </div>
      
      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Kinetic Email Tracking?</h2>
          
          <p className="text-gray-700 mb-4">
            <strong className="text-blue-700">Kinetic email tracking</strong> uses invisible pixel images triggered by CSS state changes to capture detailed interaction data. Unlike traditional email tracking that only measures opens and clicks, kinetic tracking reveals exactly what content resonates with your subscribers.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-800">
              <strong>Key Insight:</strong> When a user clicks a kinetic element (tab, accordion, survey option), CSS selectors can trigger background-image pixels that send data to your analytics endpoint - all without JavaScript.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="font-semibold text-green-900 mb-3">🎯 What Gets Tracked</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Tab selections and content preferences</li>
                <li>• Survey responses and completion rates</li>
                <li>• Accordion expansions and content engagement</li>
                <li>• Product interest and feature interactions</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-3">📊 Data Collected</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• <strong>userID:</strong> Anonymous identifier (12345)</li>
                <li>• <strong>emailID:</strong> Campaign name (WelcomeEmail)</li>
                <li>• <strong>questionID:</strong> Survey question identifier</li>
                <li>• <strong>answerID:</strong> Selected response option</li>
                <li>• <strong>timestamp:</strong> Auto-generated server-side when pixel fires</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-3">💡 Business Value</h3>
              <ul className="space-y-2 text-orange-800 text-sm">
                <li>• 10x more granular than traditional metrics</li>
                <li>• Real-time subscriber preference insights</li>
                <li>• Direct revenue attribution from interactions</li>
                <li>• Advanced personalization capabilities</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Basic Implementation */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Basic Pixel Tracking Implementation</h2>
          
          <p className="text-gray-700 mb-6">
            The foundation of kinetic tracking is using CSS <code className="bg-gray-100 px-1 rounded">background-image</code> properties triggered by state changes. Here's how to implement basic interaction tracking:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">HTML Structure with Tracking</h3>
              <CodeBlock
                code={`<!-- Survey with tracking pixels -->
<input type="radio" id="freq-daily" name="email-frequency" style="display: none;">
<input type="radio" id="freq-weekly" name="email-frequency" style="display: none;">
<input type="radio" id="freq-biweekly" name="email-frequency" style="display: none;">

<div class="survey-question">
  <h3>How often would you like to receive emails?</h3>
  
  <label for="freq-daily" class="survey-option">
    <span class="radio-custom"></span>
    Daily Updates
  </label>
  
  <label for="freq-weekly" class="survey-option">
    <span class="radio-custom"></span>
    Weekly Newsletter
  </label>
  
  <label for="freq-biweekly" class="survey-option">
    <span class="radio-custom"></span>
    Bi-weekly Digest
  </label>
</div>

<!-- Hidden tracking pixels -->
<div class="tracking-pixels">
  <div class="track-daily"></div>
  <div class="track-weekly"></div>
  <div class="track-biweekly"></div>
</div>`}
                language="html"
              />
              
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Tracking CSS Rules</h3>
              <CodeBlock
                code={`/* Hide tracking pixel containers */
.tracking-pixels {
  display: none;
}

/* Track Daily selection */
#freq-daily:checked ~* .track-daily {
  background-image: url('https://analytics.yourdomain.com/pixel.gif?userID=12345&emailID=WelcomeEmail&questionID=HowOftenWouldYouLikeEmails&answerID=Daily');
  width: 1px;
  height: 1px;
  display: block !important;
}

/* Track Weekly selection */
#freq-weekly:checked ~* .track-weekly {
  background-image: url('https://analytics.yourdomain.com/pixel.gif?userID=12345&emailID=WelcomeEmail&questionID=HowOftenWouldYouLikeEmails&answerID=Weekly');
  width: 1px;
  height: 1px;
  display: block !important;
}

/* Track Bi-weekly selection */
#freq-biweekly:checked ~* .track-biweekly {
  background-image: url('https://analytics.yourdomain.com/pixel.gif?userID=12345&emailID=WelcomeEmail&questionID=HowOftenWouldYouLikeEmails&answerID=BiWeekly');
  width: 1px;
  height: 1px;
  display: block !important;
}`}
                language="css"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h3>
              <ol className="space-y-4 text-gray-700">
                <li>
                  <div className="flex">
                    <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">1</div>
                    <div>
                      <p><strong>User Interaction:</strong> When a user clicks a survey option, the corresponding radio button becomes <code className="bg-gray-100 px-1 rounded">:checked</code>.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">2</div>
                    <div>
                      <p><strong>CSS Selector Activation:</strong> The <code className="bg-gray-100 px-1 rounded">#freq-daily:checked ~* .track-daily</code> selector targets the tracking pixel.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">3</div>
                    <div>
                      <p><strong>Pixel Request:</strong> The browser requests the background-image URL, sending all query parameters to your analytics endpoint.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div className="bg-blue-100 rounded-full w-6 h-6 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">4</div>
                    <div>
                      <p><strong>Data Capture:</strong> Your server logs the interaction data and returns a 1x1 transparent pixel image.</p>
                    </div>
                  </div>
                </li>
              </ol>
              
              <div className="mt-6 bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-medium text-orange-800 mb-2">⚠️ Critical Email Limitation</h4>
                <p className="text-orange-700 text-sm">
                  <strong>One Fire Per Open:</strong> Unlike web pages, email DOMs cannot be refreshed. Each tracking pixel can only fire <strong>once per email open</strong>. If a user clicks multiple options, only the first interaction will be tracked unless you use unique pixel URLs for each possible state.
                </p>
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Parameter Breakdown</h4>
                <div className="text-blue-800 text-sm space-y-1">
                  <div><code className="bg-blue-100 px-1 rounded">userID=12345</code> - Anonymous user identifier</div>
                  <div><code className="bg-blue-100 px-1 rounded">emailID=WelcomeEmail</code> - Campaign/email identifier</div>
                  <div><code className="bg-blue-100 px-1 rounded">questionID=HowOftenWouldYouLikeEmails</code> - Question being answered</div>
                  <div><code className="bg-blue-100 px-1 rounded">answerID=Daily</code> - Selected response option</div>
                </div>
                <div className="mt-3 text-blue-700 text-xs">
                  <strong>Note:</strong> Timestamp data is automatically generated when the pixel request hits your database server, ensuring accurate server-side timing.
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Live Demo */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interactive Tracking Demo</h2>
          
          <p className="text-gray-700 mb-6">
            Try the survey below to see how kinetic tracking captures your interactions in real-time:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Survey: Email Preferences</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-3">How often would you like to receive emails?</p>
                    <div className="space-y-2">
                      <button
                        onClick={() => simulateTracking('survey_response', 'HowOftenWouldYouLikeEmails', 'Daily')}
                        disabled={firedPixels.has('HowOftenWouldYouLikeEmails-Daily')}
                        className={`block w-full text-left p-3 rounded border transition-colors ${
                          firedPixels.has('HowOftenWouldYouLikeEmails-Daily')
                            ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                        }`}
                      >
                        📅 Daily Updates
                        {firedPixels.has('HowOftenWouldYouLikeEmails-Daily') && <span className="text-xs text-green-600 ml-2">✓ Tracked</span>}
                      </button>
                      <button
                        onClick={() => simulateTracking('survey_response', 'HowOftenWouldYouLikeEmails', 'Weekly')}
                        disabled={firedPixels.has('HowOftenWouldYouLikeEmails-Weekly')}
                        className={`block w-full text-left p-3 rounded border transition-colors ${
                          firedPixels.has('HowOftenWouldYouLikeEmails-Weekly')
                            ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                        }`}
                      >
                        📰 Weekly Newsletter
                        {firedPixels.has('HowOftenWouldYouLikeEmails-Weekly') && <span className="text-xs text-green-600 ml-2">✓ Tracked</span>}
                      </button>
                      <button
                        onClick={() => simulateTracking('survey_response', 'HowOftenWouldYouLikeEmails', 'BiWeekly')}
                        disabled={firedPixels.has('HowOftenWouldYouLikeEmails-BiWeekly')}
                        className={`block w-full text-left p-3 rounded border transition-colors ${
                          firedPixels.has('HowOftenWouldYouLikeEmails-BiWeekly')
                            ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                        }`}
                      >
                        📬 Bi-weekly Digest
                        {firedPixels.has('HowOftenWouldYouLikeEmails-BiWeekly') && <span className="text-xs text-green-600 ml-2">✓ Tracked</span>}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-800 mb-3">What content interests you most?</p>
                    <div className="space-y-2">
                      <button
                        onClick={() => simulateTracking('survey_response', 'ContentInterests', 'ProductUpdates')}
                        disabled={firedPixels.has('ContentInterests-ProductUpdates')}
                        className={`block w-full text-left p-3 rounded border transition-colors ${
                          firedPixels.has('ContentInterests-ProductUpdates')
                            ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'border-gray-300 hover:bg-green-50 hover:border-green-300'
                        }`}
                      >
                        🚀 Product Updates
                        {firedPixels.has('ContentInterests-ProductUpdates') && <span className="text-xs text-green-600 ml-2">✓ Tracked</span>}
                      </button>
                      <button
                        onClick={() => simulateTracking('survey_response', 'ContentInterests', 'IndustryNews')}
                        disabled={firedPixels.has('ContentInterests-IndustryNews')}
                        className={`block w-full text-left p-3 rounded border transition-colors ${
                          firedPixels.has('ContentInterests-IndustryNews')
                            ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'border-gray-300 hover:bg-green-50 hover:border-green-300'
                        }`}
                      >
                        📰 Industry News
                        {firedPixels.has('ContentInterests-IndustryNews') && <span className="text-xs text-green-600 ml-2">✓ Tracked</span>}
                      </button>
                      <button
                        onClick={() => simulateTracking('survey_response', 'ContentInterests', 'TipsAndTutorials')}
                        disabled={firedPixels.has('ContentInterests-TipsAndTutorials')}
                        className={`block w-full text-left p-3 rounded border transition-colors ${
                          firedPixels.has('ContentInterests-TipsAndTutorials')
                            ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'border-gray-300 hover:bg-green-50 hover:border-green-300'
                        }`}
                      >
                        🎓 Tips & Tutorials
                        {firedPixels.has('ContentInterests-TipsAndTutorials') && <span className="text-xs text-green-600 ml-2">✓ Tracked</span>}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-green-400 font-mono text-sm">
                <h3 className="text-white text-base font-sans font-medium mb-4">📊 Live Tracking Data</h3>
                
                {trackedEvents.length === 0 ? (
                  <div className="text-gray-500 italic">Click survey options to see tracking data...</div>
                ) : (
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {trackedEvents.map((event, index) => (
                      <div key={index} className="border border-gray-700 rounded p-3 bg-gray-800">
                        <div className="text-yellow-400">🔥 NEW EVENT TRACKED</div>
                        <div className="mt-1 space-y-1 text-xs">
                          <div><span className="text-blue-400">userID:</span> {event.userID}</div>
                          <div><span className="text-blue-400">emailID:</span> {event.emailID}</div>
                          {event.questionID && <div><span className="text-blue-400">questionID:</span> {event.questionID}</div>}
                          {event.answerID && <div><span className="text-blue-400">answerID:</span> {event.answerID}</div>}
                          <div><span className="text-blue-400">timestamp:</span> {event.timestamp}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-800 mb-2">📧 Email DOM Limitation Demo</h4>
            <p className="text-yellow-700 text-sm">
              Notice how buttons become disabled and show "✓ Tracked" after clicking? This simulates the email DOM limitation where pixels can only fire once per email open. In a real email, users wouldn't be able to "re-click" options to generate new tracking events without re-opening the email.
            </p>
          </div>
        </section>
        
        {/* Analytics Backend Requirements */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics Backend Requirements</h2>
          
          <p className="text-gray-700 mb-6">
            To transform kinetic tracking pixels into actionable business intelligence, you need a backend system that can capture, store, and analyze the interaction data. Here's what's required:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔧 Core System Components</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">Pixel Endpoint</h4>
                  <p className="text-blue-700 text-sm">
                    A web server that receives pixel requests, extracts query parameters (userID, emailID, questionID, answerID, timestamp), and returns a 1x1 transparent GIF image.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">Data Storage</h4>
                  <p className="text-green-700 text-sm">
                    A database optimized for high-volume writes and fast analytical queries. Must handle millions of tracking events with proper indexing on key fields.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-medium text-purple-800 mb-2">Analytics Engine</h4>
                  <p className="text-purple-700 text-sm">
                    Processing system that aggregates raw tracking data into meaningful metrics: completion rates, popular answers, engagement patterns, and revenue attribution.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Key Data Processing Needs</h3>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-800 mb-2">Real-Time Ingestion</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Handle 1000s of simultaneous pixel requests</li>
                    <li>• Parse and validate URL parameters</li>
                    <li>• Store events with microsecond timestamps</li>
                    <li>• Detect and handle duplicate requests</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-medium text-indigo-800 mb-2">Analytics Processing</h4>
                  <ul className="text-indigo-700 text-sm space-y-1">
                    <li>• Survey completion funnel analysis</li>
                    <li>• Cross-campaign engagement correlation</li>
                    <li>• User journey mapping and segmentation</li>
                    <li>• Revenue attribution modeling</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-800 mb-2">Compliance & Privacy</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Automated data retention and deletion</li>
                    <li>• GDPR/CCPA compliance workflows</li>
                    <li>• User consent verification systems</li>
                    <li>• Data anonymization processes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">🚀 Coming Soon: Managed Analytics Platform</h3>
            <p className="text-blue-800 mb-4">
              We're building a comprehensive kinetic email analytics platform that handles all the backend complexity for you. Get enterprise-grade tracking infrastructure without the development overhead.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium text-blue-900 mb-2">Platform Features:</div>
                <ul className="text-blue-700 space-y-1">
                  <li>• Instant pixel endpoint provisioning</li>
                  <li>• Real-time analytics dashboards</li>
                  <li>• Advanced segmentation tools</li>
                  <li>• Revenue attribution reporting</li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-blue-900 mb-2">Developer Benefits:</div>
                <ul className="text-blue-700 space-y-1">
                  <li>• No backend development required</li>
                  <li>• Built-in compliance features</li>
                  <li>• Scalable infrastructure</li>
                  <li>• API integrations ready</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Advanced Analytics */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Business Intelligence</h2>
          
          <p className="text-gray-700 mb-6">
            Transform your tracking data into actionable business insights with these analysis techniques:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-3">📈 Engagement Metrics</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Kinetic interaction rates by campaign</li>
                <li>• Most engaging content sections</li>
                <li>• Time-to-interaction analysis</li>
                <li>• Cross-campaign engagement patterns</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-3">🎯 Survey Intelligence</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• Response distribution analysis</li>
                <li>• Completion funnel optimization</li>
                <li>• Segment-based preference mapping</li>
                <li>• Predictive subscriber modeling</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="font-semibold text-green-900 mb-3">💰 Revenue Attribution</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Conversion path analysis</li>
                <li>• Kinetic interaction ROI measurement</li>
                <li>• Lifetime value correlation</li>
                <li>• A/B test revenue impact</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-World Success Metrics</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">E-commerce Case Study</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Product preference tracking</span>
                    <span className="font-medium text-green-600">+340% page visits</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Survey-driven personalization</span>
                    <span className="font-medium text-green-600">$50k additional revenue</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cart abandonment surveys</span>
                    <span className="font-medium text-green-600">23% recovery rate</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-3">SaaS Platform Results</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Feature interest tracking</span>
                    <span className="font-medium text-blue-600">+67% trial conversion</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Usage pattern analysis</span>
                    <span className="font-medium text-blue-600">-45% churn reduction</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support topic preferences</span>
                    <span className="font-medium text-blue-600">+89% satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Privacy & Compliance */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy & Compliance Considerations</h2>
          
          <p className="text-gray-700 mb-6">
            Implement kinetic tracking responsibly with proper privacy safeguards and regulatory compliance:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🛡️ Privacy Best Practices</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">Anonymous User IDs</h4>
                  <p className="text-green-700 text-sm">
                    Use random, non-reversible identifiers instead of email addresses or personal data. Example: <code className="bg-green-100 px-1 rounded">userID=12345</code>
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">Data Minimization</h4>
                  <p className="text-blue-700 text-sm">
                    Only collect data necessary for your business objectives. Avoid capturing sensitive information in tracking parameters.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-medium text-purple-800 mb-2">Retention Policies</h4>
                  <p className="text-purple-700 text-sm">
                    Implement automatic data deletion after defined periods. Consider business needs vs. privacy requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">⚖️ Regulatory Compliance</h3>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-800 mb-2">GDPR Requirements</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Explicit consent for tracking (where required)</li>
                    <li>• Clear privacy policy disclosure</li>
                    <li>• Right to deletion implementation</li>
                    <li>• Data processing lawful basis</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-800 mb-2">CCPA Considerations</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Opt-out mechanisms for California residents</li>
                    <li>• Data sale disclosure (if applicable)</li>
                    <li>• Consumer rights fulfillment</li>
                    <li>• Third-party data sharing policies</li>
                  </ul>
                </div>
              </div>
              
              <CodeBlock
                code={`<!-- Privacy-compliant pixel with consent check -->
<style>
  /* Only load tracking pixels if consent granted */
  .consent-granted #survey-daily:checked ~* .track-daily {
    background-image: url('https://analytics.yourdomain.com/pixel.gif?userID=12345&emailID=WelcomeEmail&questionID=EmailFrequency&answerID=Daily&timestamp=12/15/2024%2010:30:00&consent=true');
    width: 1px;
    height: 1px;
    display: block !important;
  }
  
  /* Default: no tracking without consent */
  .track-daily {
    display: none !important;
  }
</style>`}
                language="css"
                title="Consent-Based Tracking"
              />
            </div>
          </div>
        </section>
        
        {/* Implementation Checklist */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Checklist</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔧 Technical Setup</h3>
              <div className="space-y-3">
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Analytics endpoint configured and tested</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Database schema implemented with proper indexes</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">URL parameter encoding/decoding verified</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Cross-email client pixel firing tested</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">One-fire-per-open limitation understood and planned for</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Error handling and logging implemented</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Performance impact assessed</span>
                </label>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Business & Legal</h3>
              <div className="space-y-3">
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Privacy policy updated with tracking disclosure</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Consent mechanisms implemented (where required)</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Data retention policies defined</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Analytics dashboard and reporting built</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Team training on data interpretation</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">A/B testing framework established</span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">🚀 Ready to Launch?</h3>
            <p className="text-blue-800 mb-4">
              Once you've completed the checklist, you'll have a powerful kinetic email tracking system that provides unprecedented insights into subscriber behavior and preferences.
            </p>
            <div className="text-blue-700 text-sm">
              <strong>Next Steps:</strong> Start with a small test campaign, analyze the data, and gradually expand tracking to more emails as you refine your analytics processes.
            </div>
          </div>
        </section>
        
        {/* Next Steps Navigation */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-md p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🎉 Congratulations! You've Mastered Kinetic Email Fundamentals</h2>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              You now understand the core concepts, techniques, and tracking strategies for kinetic emails. Ready to see these techniques in action with real-world examples?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/examples"
                className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                See Interactive Examples
              </Link>
              
              <Link
                to="/playground"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Try the AI Generator
              </Link>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="font-medium mb-2">📧 Interactive Examples</div>
                <div className="text-indigo-100">See tabbed interfaces, surveys, and carousels in action with live previews</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="font-medium mb-2">🎨 Real Campaigns</div>
                <div className="text-indigo-100">Browse our portfolio of actual client campaigns with iOS Mail previews</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="font-medium mb-2">🤖 AI Playground</div>
                <div className="text-indigo-100">Generate your own kinetic emails instantly with our AI-powered tool</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default TrackingModule;