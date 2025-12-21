// src/pages/learn/IntroductionModule.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import ModuleCompletionButton from '../../components/common/ModuleCompletionButton';
import { ArrowLeft, Zap, Rocket, CheckCircle, AlertTriangle, Code, Palette, Database, Apple, XCircle, Lightbulb, Mail } from 'lucide-react';

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
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-12 text-white">
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

        {/* Benefits Section - Completely Redesigned */}
        <section className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-6 border-b border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <FaRocket className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Why Use Kinetic Emails?</h2>
                  <p className="text-sm text-gray-600">The compelling advantages</p>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Enhanced UX</h3>
                    <p className="text-gray-700 leading-relaxed">Seamless interaction inside the inbox, eliminating the need to visit external websites.</p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white p-6 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Higher Engagement</h3>
                    <p className="text-gray-700 leading-relaxed">Users navigate content and engage with your brand directly in their email client.</p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white p-6 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Rich Data</h3>
                    <p className="text-gray-700 leading-relaxed">Track kinetic interactions for better segmentation and personalization insights.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Limitations & Considerations - Modern Warning Design */}
        <section className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-6 border-b border-amber-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Limitations & Considerations</h2>
                  <p className="text-sm text-gray-600">Important things to know before you start</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl p-6 mb-8 text-white">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Important</h3>
                    <p className="text-yellow-100">
                      While kinetic emails offer powerful interactivity, they do have some limitations
                      you should be aware of before implementation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-2 border-amber-200">
                  <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Client Compatibility</h3>
                  <p className="text-gray-700">
                    Not supported in all email clients. Primarily works in Apple Mail products and some versions of Outlook for Mac.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-2 border-amber-200">
                  <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Rendering Differences</h3>
                  <p className="text-gray-700">
                    Some email clients strip out specific CSS properties, requiring careful testing and fallback strategies.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-2 border-amber-200">
                  <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">AMP Alternative</h3>
                  <p className="text-gray-700">
                    Gmail and Yahoo offer AMP for Email, which provides similar interactivity but requires separate implementation.
                  </p>
                </div>
              </div>

              {/* Client Support */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email Client Support</h3>
                <p className="text-gray-700 mb-6">
                  Kinetic emails work in WebKit-based email clients, which represent approximately <strong className="text-blue-600">51% of all email opens</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-green-800">Supported Clients</h4>
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
