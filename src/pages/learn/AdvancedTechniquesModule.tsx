// src/pages/learn/AdvancedTechniquesModule.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Rocket, Menu, CheckCircle, Zap, Gauge } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';
import AccordionExample from './advanced/AccordionExample';
import ModuleCompletionButton from '../../components/common/ModuleCompletionButton';

const AdvancedTechniquesModule: React.FC = () => {
  return (
    <PageLayout>
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Learning Path
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-600 p-4 sm:p-8 md:p-10 lg:p-12 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-rose-300" />
            </div>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold">
              Module 5 of 6
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            Advanced
            <br />
            <span className="bg-gradient-to-r from-rose-300 to-pink-200 bg-clip-text text-transparent">
              Techniques
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-rose-100 max-w-3xl leading-relaxed">
            Learn how to create an animated accordion within your kinetic emails to present information in an engaging, space-efficient way.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Introduction Section */}
        <section className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl p-3 sm:p-6 md:p-8 lg:p-10 border-2 border-rose-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Rocket className="text-white w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Taking Kinetic Emails to the Next Level</h2>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Now that you've mastered the core concepts of kinetic emails, including the checkbox hack,
              client detection, and tabbed interfaces, it's time to explore more sophisticated techniques
              that can make your emails truly stand out.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              In this module, we'll focus on creating an animated accordion that allows recipients to expand
              and collapse sections of content directly within their inbox. This technique combines the
              checkbox hack with CSS transitions to create a smooth, engaging experience.
            </p>

            <div className="relative mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border-2 border-rose-200">
                <p className="text-rose-900 leading-relaxed">
                  <strong className="font-bold">Animation Support:</strong> While these techniques offer enhanced interactivity,
                  remember that they're only supported in a limited set of email clients (primarily Apple Mail and iOS Mail).
                  We'll implement proper fallbacks for clients that don't support these features.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl blur opacity-25"></div>
                <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border-2 border-rose-200">
                  <div className="text-rose-600 mb-4">
                    <Menu className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-rose-900 mb-3">Why Use Accordions?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Accordions are perfect for organizing complex information into digestible sections. They keep emails concise while still providing detailed information that users can access if they're interested.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-xl blur opacity-25"></div>
                <div className="relative bg-gradient-to-br from-pink-50 to-fuchsia-50 p-6 rounded-xl border-2 border-pink-200">
                  <div className="text-pink-600 mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-pink-900 mb-3">Animation Benefits</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Adding smooth opening and closing animations creates a more polished, engaging experience.
                    The motion provides clear visual feedback and draws attention to the expanding content.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-rose-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">How to implement an animated accordion in email</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-rose-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">CSS transition techniques that work in supported email clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-rose-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">How to use radio buttons to ensure only one section is open at a time</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-rose-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Creating a stacked fallback layout for non-supporting clients</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accordion Example Section */}
        <AccordionExample />

        {/* Best Practices Section */}
        <section className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl p-3 sm:p-6 md:p-8 lg:p-10 border-2 border-rose-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Gauge className="text-white w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Best Practices for Animated Kinetic Emails</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl blur opacity-25"></div>
                <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border-2 border-rose-200">
                  <h3 className="text-xl font-bold text-rose-900 mb-6">Performance Optimization</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-rose-500 w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Keep Content Light</strong>
                        <p className="text-sm mt-1 text-gray-700">
                          Limit the content in each accordion section to ensure smooth animations and prevent performance issues.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-rose-500 w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Optimize Transition Properties</strong>
                        <p className="text-sm mt-1 text-gray-700">
                          Use the max-height property for height transitions as it provides the most reliable animation in email clients.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-rose-500 w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Limit Animation Duration</strong>
                        <p className="text-sm mt-1 text-gray-700">
                          Keep animations short (0.3-0.5 seconds) to ensure they feel responsive and don't frustrate users.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-xl blur opacity-25"></div>
                <div className="relative bg-gradient-to-br from-pink-50 to-fuchsia-50 p-6 rounded-xl border-2 border-pink-200">
                  <h3 className="text-xl font-bold text-pink-900 mb-6">Compatibility Considerations</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-pink-500 w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Implement the Lightswitch</strong>
                        <p className="text-sm mt-1 text-gray-700">
                          Always use the Kinetic Lightswitch technique to detect client support and provide appropriate fallbacks.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-pink-500 w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Create a Clean Fallback</strong>
                        <p className="text-sm mt-1 text-gray-700">
                          Design your fallback to display all content in a well-structured, stacked format for non-supporting clients.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-pink-500 w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Test Thoroughly</strong>
                        <p className="text-sm mt-1 text-gray-700">
                          Test in both supporting and non-supporting clients to ensure a good experience for all recipients.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border-2 border-yellow-200">
                <h4 className="font-bold text-yellow-900 mb-3">Client Compatibility</h4>
                <p className="text-yellow-800 mb-6 leading-relaxed">
                  The animated accordion technique works best in these email clients:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-yellow-300">
                    <h5 className="text-yellow-900 font-bold mb-3">Supported Clients</h5>
                    <ul className="space-y-2 text-yellow-800">
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        Apple Mail (macOS)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        Mail (iOS)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        Outlook for Mac
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-yellow-300">
                    <h5 className="text-yellow-900 font-bold mb-3">Non-Supporting Clients</h5>
                    <ul className="space-y-2 text-yellow-800">
                      <li className="flex items-center gap-2">
                        <span className="text-red-600">✗</span>
                        Gmail
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-600">✗</span>
                        Outlook
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-600">✗</span>
                        Yahoo
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-600">✗</span>
                        Proton Mail
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-yellow-300">
                    <h5 className="text-yellow-900 font-bold mb-3">Testing Tools</h5>
                    <ul className="space-y-2 text-yellow-800">
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">•</span>
                        Litmus
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">•</span>
                        Email on Acid
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">•</span>
                        Actual devices
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Module Completion */}
        <ModuleCompletionButton
          moduleId="advanced-techniques"
          nextModulePath="/learn/tracking"
          nextModuleTitle="Kinetic Email Tracking"
        />
      </div>
    </PageLayout>
  );
};

export default AdvancedTechniquesModule;
