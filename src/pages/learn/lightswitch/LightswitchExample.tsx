import React, { useState } from 'react';
import { Code, Settings, Layers, Wand2, Mail } from 'lucide-react';
import CodeBlock from '../../../components/common/CodeBlock';
import SendEmailModal from '../../../components/common/SendEmailModal';
import { lightswitchDemoHTML } from '../emailExamples';

const LightswitchExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [showSendModal, setShowSendModal] = useState(false);

  return (
    <section className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl blur-2xl"></div>
      <div className="relative bg-white rounded-2xl p-3 sm:p-6 md:p-8 lg:p-10 border-2 border-purple-200 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
            <Wand2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-black text-gray-900">Implementing the Lightswitch</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Let's see how to implement the Kinetic Lightswitch in your emails. Here's a basic template that includes both interactive and fallback content:
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-600" />
              HTML Structure
            </h3>
            <CodeBlock
              code={`<!-- The Lightswitch checkbox -->
<input type="checkbox" class="kinetic"
  name="interactive" id="Kinetic" checked>

<!-- Interactive content container -->
<div class="interactive">
  <!-- Your kinetic email content here -->
</div>

<!-- Fallback content container -->
<div class="fallback">
  <!-- Your fallback content here -->
</div>`}
              language="html"
            />

            <h3 className="text-xl font-bold text-purple-900 mt-8 mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-purple-600" />
              CSS Rules
            </h3>
            <CodeBlock
              code={`/* Hide the checkbox */
.kinetic {
  display: none;
}

/* Show interactive content when checkbox is checked */
#Kinetic:checked ~* .interactive {
  display: block !important;
}

/* Hide fallback content when checkbox is checked */
#Kinetic:checked ~* .fallback {
  display: none !important;
}

/* Fix for AOL/Yahoo */
#Kinetic:checked ~* .& .fallback {
  display: block !important;
}
#Kinetic:checked ~* .& .interactive {
  display: none !important;
}`}
              language="css"
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-600" />
              The Logic Explained
            </h3>
            <ol className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">The Hidden Checkbox</p>
                  <p className="text-gray-700 leading-relaxed">We start with a checkbox that's checked by default. This checkbox is hidden from view.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Conditional Display</p>
                  <p className="text-gray-700 leading-relaxed">We use CSS to show interactive content only if the checkbox is checked AND the email client supports the <code className="bg-gray-100 px-2 py-0.5 rounded font-mono text-sm">:checked</code> and general sibling <code className="bg-gray-100 px-2 py-0.5 rounded font-mono text-sm">~*</code> selectors.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Automatic Detection</p>
                  <p className="text-gray-700 leading-relaxed">In clients that don't support these selectors, the CSS won't apply, so the fallback remains visible.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">AOL/Yahoo Fix</p>
                  <p className="text-gray-700 leading-relaxed">These clients have unique quirks, so we add specific rules to handle their behavior.</p>
                </div>
              </div>
            </ol>

            <div className="mt-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border-2 border-purple-200">
                <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-purple-600" />
                  Why This Works
                </h4>
                <p className="text-purple-800 text-sm leading-relaxed">
                  The beauty of this approach is that it's <strong>automatic</strong> - the email detects compatibility without user interaction. When a client that doesn't support kinetic emails opens the message, it simply ignores the CSS selectors it doesn't understand, causing the fallback to remain visible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Example */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-xl blur opacity-20"></div>
          <div className="relative bg-gradient-to-br from-gray-50 to-purple-50 p-3 sm:p-6 md:p-8 rounded-xl border-2 border-purple-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Live Interactive Example</h3>
              <button
                onClick={() => setShowSendModal(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
              >
                <Mail className="w-4 h-4" />
                Send to Inbox
              </button>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Kinetic Lightswitch checkbox is exposed below to demonstrate how it controls content visibility. In a real email, this checkbox would be hidden with CSS. Toggle it to see how the lightswitch automatically detects client support:
            </p>

            {/* Email Header - Outside of email content */}
            <div className="mb-6 p-4 bg-gray-100 rounded-lg border-2 border-gray-300">
              <div className="text-xs sm:text-sm text-gray-600">From: Kinetic Email Team &lt;team@kinetic.email&gt;</div>
              <div className="text-base sm:text-lg font-bold text-gray-900">Our Spring Collection</div>
            </div>

            {/* Email Content Container */}
            <div className="bg-white p-3 sm:p-6 md:p-8 rounded-lg border-2 border-purple-300 shadow-lg">
              <style>{`
                /* Hide interactive content by default (when unchecked) */
                #kinetic-lightswitch ~ .demo-interactive {
                  display: none !important;
                }

                /* Show fallback content by default (when unchecked) */
                #kinetic-lightswitch ~ .demo-fallback {
                  display: block !important;
                }

                /* Show interactive content when checkbox is checked */
                #kinetic-lightswitch:checked ~ .demo-interactive {
                  display: block !important;
                }

                /* Hide fallback content when checkbox is checked */
                #kinetic-lightswitch:checked ~ .demo-fallback {
                  display: none !important;
                }
              `}</style>

              {/* The Kinetic Lightswitch - exposed for demo */}
              <input
                type="checkbox"
                id="kinetic-lightswitch"
                name="interactive"
                defaultChecked
                className="w-5 h-5 text-purple-600 mr-2 align-middle"
              />
              <label htmlFor="kinetic-lightswitch" className="font-medium text-purple-900 cursor-pointer align-middle mb-6 inline-block p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
                Kinetic Lightswitch (checked = client supports interactivity)
              </label>

              <br />
              <br />

              {/* Interactive content - shown when checkbox is checked */}
              <div className="demo-interactive">
                <p className="text-gray-700 mb-6">Check out our latest products below:</p>

                {/* Tabbed Interface */}
                <div className="mb-6">
                  <div className="tabs flex border-b border-purple-200 mb-4">
                    <button
                      onClick={() => setActiveTab('tab1')}
                      className={`px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 border-b-2 font-medium transition-colors text-sm sm:text-base ${
                        activeTab === 'tab1'
                          ? 'border-purple-600 text-purple-600'
                          : 'border-transparent text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      Sneakers
                    </button>
                    <button
                      onClick={() => setActiveTab('tab2')}
                      className={`px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 border-b-2 font-medium transition-colors text-sm sm:text-base ${
                        activeTab === 'tab2'
                          ? 'border-purple-600 text-purple-600'
                          : 'border-transparent text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      Sandals
                    </button>
                    <button
                      onClick={() => setActiveTab('tab3')}
                      className={`px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 border-b-2 font-medium transition-colors text-sm sm:text-base ${
                        activeTab === 'tab3'
                          ? 'border-purple-600 text-purple-600'
                          : 'border-transparent text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      Boots
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="tab-content">
                    {activeTab === 'tab1' && (
                      <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 sm:p-6 rounded-lg border-2 border-purple-200">
                        <h3 className="font-bold text-base sm:text-lg text-purple-900 mb-2">Spring Sneaker Collection</h3>
                        <p className="text-sm sm:text-base text-purple-800 mb-4">Our lightweight, breathable sneakers are perfect for spring walks and casual outings.</p>
                        <button className="px-4 py-2 sm:px-6 sm:py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg font-bold hover:from-purple-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-md text-sm sm:text-base">
                          Shop Now
                        </button>
                      </div>
                    )}

                    {activeTab === 'tab2' && (
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-lg border-2 border-green-200">
                        <h3 className="font-bold text-base sm:text-lg text-green-900 mb-2">Spring Sandal Collection</h3>
                        <p className="text-sm sm:text-base text-green-800 mb-4">Get ready for warmer days with our comfortable and stylish sandals in vibrant colors.</p>
                        <button className="px-4 py-2 sm:px-6 sm:py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-md text-sm sm:text-base">
                          Shop Now
                        </button>
                      </div>
                    )}

                    {activeTab === 'tab3' && (
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6 rounded-lg border-2 border-amber-200">
                        <h3 className="font-bold text-base sm:text-lg text-amber-900 mb-2">Spring Boot Collection</h3>
                        <p className="text-sm sm:text-base text-amber-800 mb-4">Our weather-resistant spring boots are perfect for those unexpected spring showers.</p>
                        <button className="px-4 py-2 sm:px-6 sm:py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-bold hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-md text-sm sm:text-base">
                          Shop Now
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-xs text-purple-900 p-3 bg-purple-50 rounded border border-purple-200">
                  <strong>What you're seeing:</strong> This is how the email appears in clients that support the checkbox hack, like Apple Mail. The tabbed interface is fully interactive!
                </div>
              </div>

              {/* Fallback content - shown when checkbox is unchecked */}
              <div className="demo-fallback">
                <p className="text-gray-700 mb-6">Check out our latest products below:</p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 sm:p-6 rounded-lg border-2 border-purple-200">
                    <h3 className="font-bold text-base sm:text-lg text-purple-900 mb-2">Spring Sneaker Collection</h3>
                    <p className="text-sm sm:text-base text-purple-800 mb-4">Our lightweight, breathable sneakers are perfect for spring walks and casual outings.</p>
                    <button className="px-4 py-2 sm:px-6 sm:py-2 bg-purple-600 text-white rounded-lg font-bold text-sm sm:text-base">Shop Now</button>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-lg border-2 border-green-200">
                    <h3 className="font-bold text-base sm:text-lg text-green-900 mb-2">Spring Sandal Collection</h3>
                    <p className="text-sm sm:text-base text-green-800 mb-4">Get ready for warmer days with our comfortable and stylish sandals in vibrant colors.</p>
                    <button className="px-4 py-2 sm:px-6 sm:py-2 bg-green-600 text-white rounded-lg font-bold text-sm sm:text-base">Shop Now</button>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6 rounded-lg border-2 border-amber-200">
                    <h3 className="font-bold text-base sm:text-lg text-amber-900 mb-2">Spring Boot Collection</h3>
                    <p className="text-sm sm:text-base text-amber-800 mb-4">Our weather-resistant spring boots are perfect for those unexpected spring showers.</p>
                    <button className="px-4 py-2 sm:px-6 sm:py-2 bg-amber-600 text-white rounded-lg font-bold text-sm sm:text-base">Shop Now</button>
                  </div>
                </div>

                <div className="text-xs text-red-900 p-3 bg-red-50 rounded border border-red-200">
                  <strong>What you're seeing:</strong> This is how the email appears in clients that don't support the checkbox hack, like Gmail. All content is displayed in a static, vertical layout.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl blur opacity-20"></div>
          <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-xl border-2 border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-2">How This Works In Practice</h4>
            <p className="text-indigo-800 text-sm leading-relaxed mb-2">
              In a real email, the Kinetic Lightswitch checkbox would be hidden with CSS (<code className="bg-indigo-100 px-2 py-0.5 rounded font-mono text-xs">display: none</code>). The checkbox is checked by default, so clients that support the <code className="bg-indigo-100 px-2 py-0.5 rounded font-mono text-xs">:checked</code> selector will show the interactive content, while unsupported clients simply ignore the CSS and show the fallback.
            </p>
            <p className="text-indigo-800 text-sm leading-relaxed">
              Try toggling the checkbox above to see how it controls which content is visible. This detection happens instantly and automatically - no user interaction required in production emails!
            </p>
          </div>
        </div>
      </div>

      {/* Send Email Modal */}
      <SendEmailModal
        isOpen={showSendModal}
        onClose={() => setShowSendModal(false)}
        emailHTML={lightswitchDemoHTML}
        defaultSubject="Learn Kinetic Emails - Lightswitch Demo"
        emailType="learning"
      />
    </section>
  );
};

export default LightswitchExample;
