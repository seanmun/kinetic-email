// src/pages/learn/lightswitch/LightswitchIntro.tsx

import React from 'react';
import { Lightbulb, CheckCircle, Zap, ToggleRight } from 'lucide-react';

const LightswitchIntro: React.FC = () => {
  return (
    <section className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl blur-2xl"></div>
      <div className="relative bg-white rounded-2xl p-3 sm:p-6 md:p-8 lg:p-10 border-2 border-purple-200 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-black text-gray-900">What is the Kinetic Lightswitch?</h2>
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The <strong className="text-purple-700">Kinetic Lightswitch</strong> is a crucial concept in kinetic emails. It's a mechanism that detects whether an email client supports interactive elements, and then shows either the interactive content or a fallback version.
        </p>

        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl blur opacity-25"></div>
          <div className="relative bg-gradient-to-br from-purple-50 to-violet-50 border-l-4 border-purple-500 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-purple-900 mb-2 text-lg">Key Principle</h3>
                <p className="text-purple-800 leading-relaxed">
                  Since not all email clients support the CSS selectors needed for kinetic emails, we need a way to determine client compatibility and provide appropriate content for each user.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          The lightswitch works by creating a specially crafted <strong>state-detection system</strong> using a hidden checkbox. When the email is opened, this system automatically determines whether kinetic features will work, and displays the appropriate version of the email.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* If Kinetic Works */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <ToggleRight className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-green-900 mb-4 text-lg">If Kinetic Works</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>The <strong>interactive version</strong> is displayed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>The <strong>fallback version</strong> is hidden</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Users get the <strong>full interactive experience</strong></span>
                </li>
              </ul>
            </div>
          </div>

          {/* If Kinetic Doesn't Work */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-2 border-amber-200 hover:border-amber-300 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <ToggleRight className="w-7 h-7 text-white rotate-180" />
              </div>
              <h3 className="font-bold text-amber-900 mb-4 text-lg">If Kinetic Doesn't Work</h3>
              <ul className="space-y-3 text-amber-800">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>The <strong>interactive version</strong> remains hidden</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>The <strong>fallback version</strong> is displayed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Users still get a <strong>functional experience</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-xl blur opacity-20"></div>
          <div className="relative bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border-2 border-purple-200">
            <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600" />
              How It Works
            </h3>
            <p className="text-purple-800 leading-relaxed">
              The Kinetic Lightswitch relies on a hidden checkbox that's checked by default. Using CSS selectors like <code className="bg-purple-100 px-2 py-0.5 rounded font-mono text-sm">:checked</code> and sibling combinators, we can determine if a client supports these features. If it does, we show the interactive content. If not, we show the fallback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightswitchIntro;
