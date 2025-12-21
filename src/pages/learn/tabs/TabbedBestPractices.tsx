// src/pages/learn/tabs/TabbedBestPractices.tsx

import React from 'react';
import { CheckCircle, XCircle, Lightbulb, TrendingUp, Smartphone } from 'lucide-react';

const TabbedBestPractices: React.FC = () => {
  return (
    <section className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl"></div>
      <div className="relative bg-white rounded-2xl p-8 md:p-10 border-2 border-orange-200 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
            <Lightbulb className="text-white w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black text-gray-900">Best Practices for Tabbed Interfaces</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          While implementing tabbed interfaces in emails, keep these best practices in mind to ensure optimal performance and compatibility.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Design & User Experience */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur opacity-25"></div>
            <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border-2 border-orange-200">
              <h3 className="text-xl font-bold text-orange-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-orange-600 w-5 h-5" />
                Design & User Experience
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Clear visual indicators</strong>
                    <p className="text-sm mt-1 text-gray-700">Ensure tabs are clearly identifiable as interactive elements with distinct visual styling for active vs. inactive states.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Limit the number of tabs</strong>
                    <p className="text-sm mt-1 text-gray-700">Keep tab count reasonable (3-5 maximum) to avoid overwhelming users and maintain simplicity in your design.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Descriptive tab labels</strong>
                    <p className="text-sm mt-1 text-gray-700">Use concise but descriptive labels that clearly indicate the content behind each tab.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Set a logical default tab</strong>
                    <p className="text-sm mt-1 text-gray-700">Always have one tab selected by default (using the <code className="bg-orange-100 px-1 rounded">checked</code> attribute) so content is visible when the email is opened.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl blur opacity-25"></div>
            <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-amber-600 w-5 h-5" />
                Technical Implementation
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Always include the lightswitch</strong>
                    <p className="text-sm mt-1 text-gray-700">Implement the kinetic lightswitch for proper client detection and fallbacks.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Use descriptive IDs</strong>
                    <p className="text-sm mt-1 text-gray-700">Give your inputs and content divs meaningful IDs to make maintenance easier.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Optimize for touch</strong>
                    <p className="text-sm mt-1 text-gray-700">Make tab labels large enough to be easily tapped on mobile devices (minimum 44×44px).</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Test, test, test</strong>
                    <p className="text-sm mt-1 text-gray-700">Always test your tabbed interfaces in all target email clients to ensure proper functionality.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Pitfalls */}
        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur opacity-25"></div>
          <div className="relative bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
            <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
              <XCircle className="text-red-600 w-5 h-5" />
              Common Pitfalls to Avoid
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Forgetting fallback content</strong> for email clients that don't support the checkbox hack.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Creating overly complex tab structures</strong> that make the code difficult to maintain.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Not including !important</strong> on display properties, which can lead to inconsistent behavior.</span>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Using too many tabs</strong>, making the interface confusing for users.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Making tab labels unclear</strong> or not descriptive enough of their content.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Not checking tab content height</strong>, which can lead to layout jumps when switching tabs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pro Tip: Analytics */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl blur opacity-20"></div>
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <TrendingUp className="text-green-600 w-5 h-5" />
                Pro Tip: Analytics Integration
              </h4>
              <p className="text-green-800 leading-relaxed">
                For more advanced implementations, consider tracking which tabs users click on by using unique tracking pixels or links in each tab's content. This provides valuable insights into what content resonates most with your audience.
              </p>
            </div>
          </div>

          {/* Responsive Considerations */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl blur opacity-20"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Smartphone className="text-blue-600 w-5 h-5" />
                Responsive Considerations
              </h4>
              <p className="text-blue-800 mb-3 leading-relaxed">
                For responsive emails, consider how your tabs will behave on mobile devices. Horizontal tabs can become crowded on small screens, so you might want to:
              </p>
              <ul className="space-y-1 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Switch to vertical tabs on mobile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Reduce the number of tabs for mobile views</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Increase tap target sizes for better touch interaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Use media queries to adjust styling for smaller screens</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedBestPractices;
