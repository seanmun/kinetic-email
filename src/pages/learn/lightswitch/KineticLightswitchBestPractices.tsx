// src/pages/learn/lightswitch/KineticLightswitchBestPractices.tsx

import React from 'react';
import { CheckCircle, AlertTriangle, Lightbulb, X, TrendingUp } from 'lucide-react';

const KineticLightswitchBestPractices: React.FC = () => {
  return (
    <section className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl blur-2xl"></div>
      <div className="relative bg-white rounded-2xl p-3 sm:p-6 md:p-8 lg:p-10 border-2 border-purple-200 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-black text-gray-900">Best Practices for the Kinetic Lightswitch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Implementation Tips */}
          <div className="relative min-w-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl blur opacity-25"></div>
            <div className="relative bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                Implementation Tips
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Always include a fallback</strong>
                    <p className="text-sm mt-1 text-gray-700">Never create a kinetic email without a fallback for non-supporting clients.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Place the lightswitch at the top</strong>
                    <p className="text-sm mt-1 text-gray-700">The lightswitch should be one of the first elements in your HTML to ensure proper detection.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Use the !important flag</strong>
                    <p className="text-sm mt-1 text-gray-700">Always use !important on display properties to override client-specific styles.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Test in multiple clients</strong>
                    <p className="text-sm mt-1 text-gray-700">Always test your kinetic email in multiple email clients to verify the lightswitch works correctly.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Common Pitfalls */}
          <div className="relative min-w-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur opacity-25"></div>
            <div className="relative bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Common Pitfalls
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Forgetting the fallback</strong>
                    <p className="text-sm mt-1 text-gray-700">The most common mistake is not providing a clear fallback for non-supporting clients.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Incorrect CSS selectors</strong>
                    <p className="text-sm mt-1 text-gray-700">Using overly complex selectors that might not work consistently across email clients.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Not testing thoroughly</strong>
                    <p className="text-sm mt-1 text-gray-700">Failing to test in all major email clients to ensure your lightswitch detection works correctly.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Overcomplicating the fallback</strong>
                    <p className="text-sm mt-1 text-gray-700">Creating an overly complex fallback that's difficult to maintain when the email needs updating.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pro Tip: Analytics */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl blur opacity-20"></div>
          <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
            <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Pro Tip: Analytics
            </h4>
            <p className="text-green-800 leading-relaxed">
              You can track which version of your email (kinetic or fallback) users see by using separate tracking pixels
              or links for each version. This provides valuable data on how many of your subscribers can view kinetic content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KineticLightswitchBestPractices;
