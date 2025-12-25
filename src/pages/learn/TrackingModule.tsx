// src/pages/learn/TrackingModule.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, CheckCircle, Database, Shield, Code, Settings, Target, BarChart3, Lightbulb, Calendar, Newspaper, Mail, Rocket, GraduationCap, Wrench, Activity, AlertCircle, Lock, Scale } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';
import CodeBlock from '../../components/common/CodeBlock';
import ModuleCompletionButton from '../../components/common/ModuleCompletionButton';

const TrackingModule: React.FC = () => {
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
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Learning Path
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 p-4 sm:p-8 md:p-10 lg:p-12 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-indigo-300" />
            </div>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold">
              Module 6 of 6
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            Kinetic Email
            <br />
            <span className="bg-gradient-to-r from-indigo-300 to-cyan-200 bg-clip-text text-transparent">
              Tracking
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl leading-relaxed">
            Transform kinetic interactions into actionable business intelligence using pixel tracking techniques.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Introduction Section */}
        <section className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl p-3 sm:p-6 md:p-8 lg:p-10 border-2 border-indigo-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">What is Kinetic Email Tracking?</h2>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong className="text-indigo-700">Kinetic email tracking</strong> uses invisible pixel images triggered by CSS state changes to capture detailed interaction data. Unlike traditional email tracking that only measures opens and clicks, kinetic tracking reveals exactly what content resonates with your subscribers.
            </p>

            <div className="relative mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-indigo-50 to-cyan-50 p-6 rounded-xl border-2 border-indigo-200">
                <p className="text-indigo-900 leading-relaxed">
                  <strong className="font-bold">Key Insight:</strong> When a user clicks a kinetic element (tab, accordion, survey option), CSS selectors can trigger background-image pixels that send data to your analytics endpoint - all without JavaScript.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-xl blur opacity-20"></div>
                <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 p-5 rounded-xl border-2 border-indigo-200">
                  <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-indigo-600" />
                    What Gets Tracked
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Tab selections and content preferences</li>
                    <li>• Survey responses and completion rates</li>
                    <li>• Accordion expansions and content engagement</li>
                    <li>• Product interest and feature interactions</li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-20"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-600" />
                    Data Collected
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>userID:</strong> Anonymous identifier (12345)</li>
                    <li>• <strong>emailID:</strong> Campaign name (WelcomeEmail)</li>
                    <li>• <strong>questionID:</strong> Survey question identifier</li>
                    <li>• <strong>answerID:</strong> Selected response option</li>
                    <li>• <strong>timestamp:</strong> Auto-generated server-side</li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-xl blur opacity-20"></div>
                <div className="relative bg-gradient-to-br from-cyan-50 to-indigo-50 p-5 rounded-xl border-2 border-cyan-200">
                  <h3 className="text-xl font-bold text-cyan-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-cyan-600" />
                    Business Value
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• 10x more granular than traditional metrics</li>
                    <li>• Real-time subscriber preference insights</li>
                    <li>• Direct revenue attribution from interactions</li>
                    <li>• Advanced personalization capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Basic Implementation */}
        <section className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl p-3 sm:p-6 md:p-8 lg:p-10 border-2 border-indigo-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Basic Pixel Tracking Implementation</h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The foundation of kinetic tracking is using CSS <code className="bg-indigo-100 px-2 py-0.5 rounded font-mono text-sm">background-image</code> properties triggered by state changes. Here's how to implement basic interaction tracking:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-indigo-600" />
                  HTML Structure with Tracking
                </h3>
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

                <h3 className="text-xl font-bold text-cyan-900 mt-8 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-cyan-600" />
                  Tracking CSS Rules
                </h3>
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

              <div className="min-w-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
                <ol className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">User Interaction</p>
                      <p className="text-gray-700 leading-relaxed">When a user clicks a survey option, the corresponding radio button becomes <code className="bg-indigo-100 px-1 rounded">:checked</code>.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">CSS Selector Activation</p>
                      <p className="text-gray-700 leading-relaxed">The <code className="bg-indigo-100 px-1 rounded">#freq-daily:checked ~* .track-daily</code> selector targets the tracking pixel.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Pixel Request</p>
                      <p className="text-gray-700 leading-relaxed">The browser requests the background-image URL, sending all query parameters to your analytics endpoint.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Data Capture</p>
                      <p className="text-gray-700 leading-relaxed">Your server logs the interaction data and returns a 1x1 transparent pixel image.</p>
                    </div>
                  </div>
                </ol>

                <div className="mt-6 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-indigo-50 to-cyan-50 p-5 rounded-xl border-2 border-indigo-200">
                    <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-indigo-600" />
                      Critical Email Limitation
                    </h4>
                    <p className="text-indigo-800 text-sm leading-relaxed">
                      <strong>One Fire Per Open:</strong> Unlike web pages, email DOMs cannot be refreshed. Each tracking pixel can only fire <strong>once per email open</strong>. If a user clicks multiple options, only the first interaction will be tracked unless you use unique pixel URLs for each possible state.
                    </p>
                  </div>
                </div>

                <div className="mt-6 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-indigo-50 to-cyan-50 p-5 rounded-xl border-2 border-indigo-200">
                    <h4 className="font-bold text-indigo-900 mb-3">Parameter Breakdown</h4>
                    <div className="text-indigo-800 text-sm space-y-2">
                      <div><code className="bg-indigo-100 px-2 py-0.5 rounded font-mono">userID=12345</code> - Anonymous user identifier</div>
                      <div><code className="bg-indigo-100 px-2 py-0.5 rounded font-mono">emailID=WelcomeEmail</code> - Campaign/email identifier</div>
                      <div><code className="bg-indigo-100 px-2 py-0.5 rounded font-mono">questionID=HowOftenWouldYouLikeEmails</code> - Question being answered</div>
                      <div><code className="bg-indigo-100 px-2 py-0.5 rounded font-mono">answerID=Daily</code> - Selected response option</div>
                    </div>
                    <div className="mt-3 text-indigo-700 text-xs">
                      <strong>Note:</strong> Timestamp data is automatically generated when the pixel request hits your database server, ensuring accurate server-side timing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo */}
        <section className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl p-3 sm:p-6 md:p-8 lg:p-10 border-2 border-indigo-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Interactive Tracking Demo</h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Try the survey below to see how kinetic tracking captures your interactions in real-time:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-gray-50 to-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Survey: Email Preferences</h3>

                    <div className="space-y-6">
                      <div>
                        <p className="font-bold text-gray-800 mb-3">How often would you like to receive emails?</p>
                        <div className="space-y-2">
                          <button
                            onClick={() => simulateTracking('survey_response', 'HowOftenWouldYouLikeEmails', 'Daily')}
                            disabled={firedPixels.has('HowOftenWouldYouLikeEmails-Daily')}
                            className={`block w-full text-left p-3 rounded-lg border-2 transition-all ${
                              firedPixels.has('HowOftenWouldYouLikeEmails-Daily')
                                ? 'border-green-300 bg-green-50 text-gray-500 cursor-not-allowed'
                                : 'border-indigo-300 hover:bg-indigo-50 hover:border-indigo-400'
                            }`}
                          >
                            <span className="font-medium flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              Daily Updates
                            </span>
                            {firedPixels.has('HowOftenWouldYouLikeEmails-Daily') && <span className="text-xs text-green-600 ml-2 font-bold">✓ Tracked</span>}
                          </button>
                          <button
                            onClick={() => simulateTracking('survey_response', 'HowOftenWouldYouLikeEmails', 'Weekly')}
                            disabled={firedPixels.has('HowOftenWouldYouLikeEmails-Weekly')}
                            className={`block w-full text-left p-3 rounded-lg border-2 transition-all ${
                              firedPixels.has('HowOftenWouldYouLikeEmails-Weekly')
                                ? 'border-green-300 bg-green-50 text-gray-500 cursor-not-allowed'
                                : 'border-indigo-300 hover:bg-indigo-50 hover:border-indigo-400'
                            }`}
                          >
                            <span className="font-medium flex items-center gap-2">
                              <Newspaper className="w-4 h-4" />
                              Weekly Newsletter
                            </span>
                            {firedPixels.has('HowOftenWouldYouLikeEmails-Weekly') && <span className="text-xs text-green-600 ml-2 font-bold">✓ Tracked</span>}
                          </button>
                          <button
                            onClick={() => simulateTracking('survey_response', 'HowOftenWouldYouLikeEmails', 'BiWeekly')}
                            disabled={firedPixels.has('HowOftenWouldYouLikeEmails-BiWeekly')}
                            className={`block w-full text-left p-3 rounded-lg border-2 transition-all ${
                              firedPixels.has('HowOftenWouldYouLikeEmails-BiWeekly')
                                ? 'border-green-300 bg-green-50 text-gray-500 cursor-not-allowed'
                                : 'border-indigo-300 hover:bg-indigo-50 hover:border-indigo-400'
                            }`}
                          >
                            <span className="font-medium flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              Bi-weekly Digest
                            </span>
                            {firedPixels.has('HowOftenWouldYouLikeEmails-BiWeekly') && <span className="text-xs text-green-600 ml-2 font-bold">✓ Tracked</span>}
                          </button>
                        </div>
                      </div>

                      <div>
                        <p className="font-bold text-gray-800 mb-3">What content interests you most?</p>
                        <div className="space-y-2">
                          <button
                            onClick={() => simulateTracking('survey_response', 'ContentInterests', 'ProductUpdates')}
                            disabled={firedPixels.has('ContentInterests-ProductUpdates')}
                            className={`block w-full text-left p-3 rounded-lg border-2 transition-all ${
                              firedPixels.has('ContentInterests-ProductUpdates')
                                ? 'border-green-300 bg-green-50 text-gray-500 cursor-not-allowed'
                                : 'border-cyan-300 hover:bg-cyan-50 hover:border-cyan-400'
                            }`}
                          >
                            <span className="font-medium flex items-center gap-2">
                              <Rocket className="w-4 h-4" />
                              Product Updates
                            </span>
                            {firedPixels.has('ContentInterests-ProductUpdates') && <span className="text-xs text-green-600 ml-2 font-bold">✓ Tracked</span>}
                          </button>
                          <button
                            onClick={() => simulateTracking('survey_response', 'ContentInterests', 'IndustryNews')}
                            disabled={firedPixels.has('ContentInterests-IndustryNews')}
                            className={`block w-full text-left p-3 rounded-lg border-2 transition-all ${
                              firedPixels.has('ContentInterests-IndustryNews')
                                ? 'border-green-300 bg-green-50 text-gray-500 cursor-not-allowed'
                                : 'border-cyan-300 hover:bg-cyan-50 hover:border-cyan-400'
                            }`}
                          >
                            <span className="font-medium flex items-center gap-2">
                              <Newspaper className="w-4 h-4" />
                              Industry News
                            </span>
                            {firedPixels.has('ContentInterests-IndustryNews') && <span className="text-xs text-green-600 ml-2 font-bold">✓ Tracked</span>}
                          </button>
                          <button
                            onClick={() => simulateTracking('survey_response', 'ContentInterests', 'TipsAndTutorials')}
                            disabled={firedPixels.has('ContentInterests-TipsAndTutorials')}
                            className={`block w-full text-left p-3 rounded-lg border-2 transition-all ${
                              firedPixels.has('ContentInterests-TipsAndTutorials')
                                ? 'border-green-300 bg-green-50 text-gray-500 cursor-not-allowed'
                                : 'border-cyan-300 hover:bg-cyan-50 hover:border-cyan-400'
                            }`}
                          >
                            <span className="font-medium flex items-center gap-2">
                              <GraduationCap className="w-4 h-4" />
                              Tips & Tutorials
                            </span>
                            {firedPixels.has('ContentInterests-TipsAndTutorials') && <span className="text-xs text-green-600 ml-2 font-bold">✓ Tracked</span>}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-900 p-6 rounded-xl border-2 border-gray-700 text-green-400 font-mono text-sm shadow-xl">
                  <h3 className="text-white text-base font-sans font-bold mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-green-400" />
                    Live Tracking Data
                  </h3>

                  {trackedEvents.length === 0 ? (
                    <div className="text-gray-500 italic">Click survey options to see tracking data...</div>
                  ) : (
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {trackedEvents.map((event, index) => (
                        <div key={index} className="border-2 border-green-600 rounded-lg p-3 bg-gray-800">
                          <div className="text-yellow-400 font-bold flex items-center gap-2">
                            <Activity className="w-4 h-4" />
                            NEW EVENT TRACKED
                          </div>
                          <div className="mt-2 space-y-1 text-xs">
                            <div><span className="text-cyan-400 font-bold">userID:</span> {event.userID}</div>
                            <div><span className="text-cyan-400 font-bold">emailID:</span> {event.emailID}</div>
                            {event.questionID && <div><span className="text-cyan-400 font-bold">questionID:</span> {event.questionID}</div>}
                            {event.answerID && <div><span className="text-cyan-400 font-bold">answerID:</span> {event.answerID}</div>}
                            <div><span className="text-cyan-400 font-bold">timestamp:</span> {event.timestamp}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-indigo-50 to-cyan-50 p-5 rounded-xl border-2 border-indigo-200">
                <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-indigo-600" />
                  Email DOM Limitation Demo
                </h4>
                <p className="text-indigo-800 text-sm leading-relaxed">
                  Notice how buttons become disabled and show "✓ Tracked" after clicking? This simulates the email DOM limitation where pixels can only fire once per email open. In a real email, users wouldn't be able to "re-click" options to generate new tracking events without re-opening the email.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Backend Requirements */}
        <section className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl p-3 sm:p-6 md:p-8 lg:p-10 border-2 border-indigo-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Analytics Backend Requirements</h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              To transform kinetic tracking pixels into actionable business intelligence, you need a backend system that can capture, store, and analyze the interaction data. Here's what's required:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4 min-w-0">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-indigo-600" />
                  Core System Components
                </h3>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl border-2 border-indigo-200">
                    <h4 className="font-bold text-indigo-900 mb-2">Pixel Endpoint</h4>
                    <p className="text-indigo-800 text-sm leading-relaxed">
                      A web server that receives pixel requests, extracts query parameters (userID, emailID, questionID, answerID, timestamp), and returns a 1x1 transparent GIF image.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border-2 border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">Data Storage</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      A database optimized for high-volume writes and fast analytical queries. Must handle millions of tracking events with proper indexing on key fields.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-cyan-50 to-indigo-50 p-4 rounded-xl border-2 border-cyan-200">
                    <h4 className="font-bold text-cyan-900 mb-2">Analytics Engine</h4>
                    <p className="text-cyan-800 text-sm leading-relaxed">
                      Processing system that aggregates raw tracking data into meaningful metrics: completion rates, popular answers, engagement patterns, and revenue attribution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 min-w-0">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-cyan-600" />
                  Key Data Processing Needs
                </h3>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl border-2 border-indigo-200">
                    <h4 className="font-bold text-indigo-900 mb-2">Real-Time Ingestion</h4>
                    <ul className="text-indigo-800 text-sm space-y-1">
                      <li>• Handle 1000s of simultaneous pixel requests</li>
                      <li>• Parse and validate URL parameters</li>
                      <li>• Store events with microsecond timestamps</li>
                      <li>• Detect and handle duplicate requests</li>
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border-2 border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">Analytics Processing</h4>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• Survey completion funnel analysis</li>
                      <li>• Cross-campaign engagement correlation</li>
                      <li>• User journey mapping and segmentation</li>
                      <li>• Revenue attribution modeling</li>
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-cyan-50 to-indigo-50 p-4 rounded-xl border-2 border-cyan-200">
                    <h4 className="font-bold text-cyan-900 mb-2">Compliance & Privacy</h4>
                    <ul className="text-cyan-800 text-sm space-y-1">
                      <li>• Automated data retention and deletion</li>
                      <li>• GDPR/CCPA compliance workflows</li>
                      <li>• User consent verification systems</li>
                      <li>• Data anonymization processes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-indigo-50 to-cyan-50 p-6 rounded-xl border-2 border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-indigo-600" />
                  Coming Soon: Managed Analytics Platform
                </h3>
                <p className="text-indigo-800 mb-4 leading-relaxed">
                  We're building a comprehensive kinetic email analytics platform that handles all the backend complexity for you. Get enterprise-grade tracking infrastructure without the development overhead.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-bold text-indigo-900 mb-2">Platform Features:</div>
                    <ul className="text-indigo-700 space-y-1">
                      <li>• Instant pixel endpoint provisioning</li>
                      <li>• Real-time analytics dashboards</li>
                      <li>• Advanced segmentation tools</li>
                      <li>• Revenue attribution reporting</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-bold text-indigo-900 mb-2">Developer Benefits:</div>
                    <ul className="text-indigo-700 space-y-1">
                      <li>• No backend development required</li>
                      <li>• Built-in compliance features</li>
                      <li>• Scalable infrastructure</li>
                      <li>• API integrations ready</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy & Compliance */}
        <section className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl p-3 sm:p-6 md:p-8 lg:p-10 border-2 border-indigo-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Privacy & Compliance Considerations</h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Implement kinetic tracking responsibly with proper privacy safeguards and regulatory compliance:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 min-w-0">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-indigo-600" />
                  Privacy Best Practices
                </h3>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl border-2 border-indigo-200">
                    <h4 className="font-bold text-indigo-900 mb-2">Anonymous User IDs</h4>
                    <p className="text-indigo-800 text-sm leading-relaxed">
                      Use random, non-reversible identifiers instead of email addresses or personal data. Example: <code className="bg-indigo-100 px-1 rounded">userID=12345</code>
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border-2 border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">Data Minimization</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      Only collect data necessary for your business objectives. Avoid capturing sensitive information in tracking parameters.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-cyan-50 to-indigo-50 p-4 rounded-xl border-2 border-cyan-200">
                    <h4 className="font-bold text-cyan-900 mb-2">Retention Policies</h4>
                    <p className="text-cyan-800 text-sm leading-relaxed">
                      Implement automatic data deletion after defined periods. Consider business needs vs. privacy requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 min-w-0">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-cyan-600" />
                  Regulatory Compliance
                </h3>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl border-2 border-indigo-200">
                    <h4 className="font-bold text-indigo-900 mb-2">GDPR Requirements</h4>
                    <ul className="text-indigo-800 text-sm space-y-1">
                      <li>• Explicit consent for tracking (where required)</li>
                      <li>• Clear privacy policy disclosure</li>
                      <li>• Right to deletion implementation</li>
                      <li>• Data processing lawful basis</li>
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border-2 border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">CCPA Considerations</h4>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• Opt-out mechanisms for California residents</li>
                      <li>• Data sale disclosure (if applicable)</li>
                      <li>• Consumer rights fulfillment</li>
                      <li>• Third-party data sharing policies</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold text-gray-900 mb-3">Consent-Based Tracking Example</h4>
                  <CodeBlock
                    code={`<!-- Privacy-compliant pixel with consent check -->
<style>
  /* Only load tracking pixels if consent granted */
  .consent-granted #survey-daily:checked ~* .track-daily {
    background-image: url('https://analytics.yourdomain.com/pixel.gif?userID=12345&emailID=WelcomeEmail&questionID=EmailFrequency&answerID=Daily&consent=true');
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
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Checklist */}
        <section className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl p-3 sm:p-6 md:p-8 lg:p-10 border-2 border-indigo-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Implementation Checklist</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-indigo-600" />
                  Technical Setup
                </h3>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Analytics endpoint configured and tested</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Database schema implemented with proper indexes</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">URL parameter encoding/decoding verified</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Cross-email client pixel firing tested</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">One-fire-per-open limitation understood and planned for</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Error handling and logging implemented</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Performance impact assessed</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-cyan-600" />
                  Business & Legal
                </h3>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Privacy policy updated with tracking disclosure</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Consent mechanisms implemented (where required)</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Data retention policies defined</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Analytics dashboard and reporting built</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Team training on data interpretation</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">A/B testing framework established</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-8 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-indigo-50 to-cyan-50 p-6 rounded-xl border-2 border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-indigo-600" />
                  Ready to Launch?
                </h3>
                <p className="text-indigo-800 mb-4 leading-relaxed">
                  Once you've completed the checklist, you'll have a powerful kinetic email tracking system that provides unprecedented insights into subscriber behavior and preferences.
                </p>
                <div className="text-indigo-700 text-sm">
                  <strong>Next Steps:</strong> Start with a small test campaign, analyze the data, and gradually expand tracking to more emails as you refine your analytics processes.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Module Completion */}
        <ModuleCompletionButton
          moduleId="tracking"
        />
      </div>
    </PageLayout>
  );
};

export default TrackingModule;
