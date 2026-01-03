// src/pages/learn/IntroductionModule.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import ModuleCompletionButton from '../../components/common/ModuleCompletionButton';
import { ArrowLeft, Zap, Rocket, CheckCircle, AlertTriangle, Code, Palette, Database, Apple, XCircle, Lightbulb, Mail, TrendingUp, GlassWater } from 'lucide-react';

// Icon aliases for compatibility
const FaRocket = Rocket;

const IntroductionModule: React.FC = () => {
  return (
    <PageLayout>
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Learning Path
        </Link>
      </div>

      {/* Hero Header */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-4 sm:p-8 md:p-10 lg:p-12 text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-yellow-300" />
            </div>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold">
              Module 1 of 6
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            Introduction to
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
              Kinetic Emails
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl leading-relaxed">
            Learn what makes emails "kinetic" and why they can dramatically improve engagement without requiring JavaScript.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Rocket className="w-5 h-5 text-cyan-300" />
              <span className="text-sm">5 min read</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span className="text-sm">Beginner Friendly</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Code className="w-5 h-5 text-purple-300" />
              <span className="text-sm">HTML + CSS Only</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {/* What Are Kinetic Emails - Enhanced Design */}
        <section className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">What are Kinetic Emails?</h2>
                  <p className="text-sm text-gray-600">Understanding the fundamentals</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong className="text-blue-600">Kinetic email</strong> is a coding technique that enables <strong>interactive experiences</strong> inside an email.
                It leverages <strong>HTML inputs and labels</strong> combined with <strong>CSS selectors</strong> to create
                <strong> engaging, client-side interactions</strong> without requiring JavaScript.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Unlike traditional static emails, kinetic emails allow recipients to interact with content directly in their inbox.
                This can include tabbed interfaces, product carousels, image galleries, surveys, and more - all without
                requiring the user to click through to a website.
              </p>

              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 mb-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Key Point</h3>
                    <p className="text-blue-100">
                      Kinetic emails work without JavaScript, making them compatible with email clients
                      that strip out scripts for security reasons. Pure HTML + CSS magic!
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Traditional Email */}
                <div className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl blur opacity-25"></div>
                  <div className="relative bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Traditional Email</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>Static content only</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>Requires click-through to websites</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>Limited to images, text, and links</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Kinetic Email */}
                <div className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-300 hover:border-blue-400 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-blue-900 text-lg">Kinetic Email</h3>
                    </div>
                    <ul className="space-y-3 text-blue-900">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Interactive elements in the inbox</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Tabs, carousels, accordions, forms</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>No JavaScript - just HTML and CSS</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Kinetic Emails Work - Psychology + Design */}
        <section className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-6 border-b border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <FaRocket className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Why Kinetic Emails Work</h2>
                  <p className="text-sm text-gray-600">Psychology meets design</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white p-6 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">The Zeigarnik Effect</h3>
                    <p className="text-gray-700 leading-relaxed">When people start interacting with elements like tabs or surveys, they're more likely to finish and take action due to psychological tension from incomplete tasks.</p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white p-6 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Kinesthetic Learning</h3>
                    <p className="text-gray-700 leading-relaxed">Physical interaction through clicking and tapping creates stronger memory formation and emotional connection to your brand than passive reading.</p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white p-6 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Reduced Friction</h3>
                    <p className="text-gray-700 leading-relaxed">No scrolling through long emails or clicking multiple links. Everything users need is right there, organized and interactive.</p>
                  </div>
                </div>
              </div>

              {/* Better Data Collection Callout */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Better Data Collection</h3>
                    <p className="text-green-100 leading-relaxed">
                      Capture <strong>granular engagement data</strong> that traditional emails can't provide. Track which tabs were clicked,
                      survey responses, product interests, and user preferences—all without leaving the email. This rich behavioral data
                      helps you understand what resonates with your audience and personalize future communications, leading to higher
                      conversion rates and better ROI on your email campaigns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Glass Half Full - Positive Framing */}
        <section className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-8 py-6 border-b border-orange-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <GlassWater className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">The Glass Half Full</h2>
                  <p className="text-sm text-gray-600">51% enhanced experience vs. 0% without kinetic</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-6 mb-8 text-white">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 flex-shrink-0 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2">The Smart Choice</h3>
                    <p className="text-orange-100">
                      Without kinetic emails, <strong>0%</strong> of your audience gets an interactive experience.
                      With kinetic emails, <strong>~51%</strong> get an enhanced, engaging experience while the other 49%
                      receive the same fallback email you would have designed anyway. It's a pure win.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white p-6 rounded-xl border-2 border-orange-200 hover:border-orange-300 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                      <Apple className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Works on Apple Mail</h3>
                    <p className="text-gray-700">
                      Fully supported on Apple Mail (iOS, macOS, iPadOS), representing 51% of all email opens.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white p-6 rounded-xl border-2 border-orange-200 hover:border-orange-300 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Graceful Fallbacks</h3>
                    <p className="text-gray-700">
                      Design once with fallback content—the other 49% see your beautiful static email, no extra work required.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white p-6 rounded-xl border-2 border-orange-200 hover:border-orange-300 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Pure Upside</h3>
                    <p className="text-gray-700">
                      Zero downside risk. Those who can't see kinetic features get the exact same email you'd send without kinetic, so no one loses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Client Support */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email Client Support</h3>
                <p className="text-gray-700 mb-6">
                  Kinetic emails work in WebKit-based email clients, which represent approximately <strong className="text-orange-600">51% of all email opens</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-orange-300">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-orange-800">Supported Clients</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Apple className="w-5 h-5 text-gray-500" />
                        Apple Mail (macOS)
                      </li>
                      <li className="flex items-center gap-2">
                        <Apple className="w-5 h-5 text-gray-500" />
                        Mail (iOS)
                      </li>
                      <li className="flex items-center gap-2">
                        <Apple className="w-5 h-5 text-gray-500" />
                        Apple Mail (iPadOS)
                      </li>
                      <li className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-gray-500" />
                        Samsung Mail
                      </li>
                      <li className="flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-gray-500" />
                        View in Browser
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-red-800">Unsupported Clients</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-gray-500" />
                        Gmail
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-gray-500" />
                        Outlook
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-gray-500" />
                        Yahoo
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-gray-500" />
                        Proton Mail
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-2 border-yellow-300">
                <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  The Fallback Requirement
                </h4>
                <p className="text-yellow-800">
                  Because of these compatibility limitations, all kinetic emails <strong>must include a fallback version</strong> for
                  clients that don't support interactivity. We'll cover fallback strategies in detail in the Kinetic Lightswitch module.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Visual Diagram Style */}
        <section className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-8 py-6 border-b border-indigo-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">How Kinetic Emails Work</h2>
                  <p className="text-sm text-gray-600">The technical foundation</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At their core, kinetic emails use a technique known as the <strong className="text-indigo-600">"checkbox hack"</strong> (or radio button hack) to create
                interactive elements without JavaScript. This approach leverages native HTML form elements and CSS to control
                content visibility and appearance based on user interaction.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-25"></div>
                  <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200 hover:border-indigo-300 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-indigo-900 mb-2 text-lg">HTML Structure</h3>
                    <p className="text-indigo-800">
                      Using hidden input elements (checkboxes or radio buttons) and labels to create interactive
                      controls that users can click on.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-25"></div>
                  <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200 hover:border-indigo-300 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-indigo-900 mb-2 text-lg">CSS Selectors</h3>
                    <p className="text-indigo-800">
                      Using the <code className="bg-indigo-100 px-1 rounded">:checked</code> pseudo-class and sibling combinators to show or hide content
                      based on which input is selected.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-25"></div>
                  <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200 hover:border-indigo-300 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-indigo-900 mb-2 text-lg">State Management</h3>
                    <p className="text-indigo-800">
                      The checked/unchecked state of inputs creates a simple state management system that
                      controls what content is visible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <Rocket className="w-6 h-6 flex-shrink-0 text-cyan-300" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Coming Up Next</h3>
                    <p className="text-blue-100">
                      In the next module, we'll dive deeper into the "checkbox hack" and show you
                      exactly how it works with practical code examples you can try yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Module Completion */}
        <ModuleCompletionButton
          moduleId="introduction"
          nextModulePath="/learn/checkbox-hack"
          nextModuleTitle="The Checkbox Hack"
        />
      </div>
    </PageLayout>
  );
};

export default IntroductionModule;
