// src/pages/learn/tabs/TabbedIntro.tsx

import React from 'react';
import { Layers, CheckCircle, XCircle, Package, FileText, ClipboardList, Globe, RefreshCw } from 'lucide-react';

const TabbedIntro: React.FC = () => {
  return (
    <section className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl"></div>
      <div className="relative bg-white rounded-2xl p-8 md:p-10 border-2 border-orange-200 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
            <Layers className="text-white w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black text-gray-900">What are Tabbed Interfaces in Email?</h2>
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Tabbed interfaces are one of the most practical and widely used applications of the checkbox hack in kinetic emails. They allow recipients to switch between different content sections without scrolling, creating a more interactive and engaging experience.
        </p>

        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl blur opacity-20"></div>
          <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border-2 border-orange-200">
            <p className="text-orange-900 leading-relaxed">
              <strong className="font-bold">Key Benefit:</strong> Tabbed interfaces let you include more content in your emails without creating a lengthy scroll, allowing recipients to focus on the information that interests them most.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Common Use Cases */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur opacity-25"></div>
            <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border-2 border-orange-200">
              <h3 className="text-xl font-bold text-orange-900 mb-4">Common Use Cases</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Product category navigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Content segmentation (e.g., Details/Specs/Reviews)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardList className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Multi-step processes or forms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Language or region selection</span>
                </li>
                <li className="flex items-start gap-3">
                  <RefreshCw className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Before/After comparisons</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How They Work */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl blur opacity-25"></div>
            <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-4">How They Work</h3>
              <p className="text-amber-800 mb-4 leading-relaxed">
                Tabbed interfaces in emails work by using:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <div>
                    <strong className="text-amber-900">Radio buttons</strong>
                    <span className="text-gray-700"> to track which tab is selected</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <div>
                    <strong className="text-amber-900">Labels</strong>
                    <span className="text-gray-700"> styled as tab headers</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <div>
                    <strong className="text-amber-900">CSS selectors</strong>
                    <span className="text-gray-700"> to show/hide content based on selection</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <div>
                    <span className="text-gray-700">The </span>
                    <strong className="text-amber-900">:checked</strong>
                    <span className="text-gray-700"> pseudo-class to determine active state</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Considerations */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Advantages */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl blur opacity-20"></div>
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
              <h3 className="text-lg font-bold text-green-900 mb-4">Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Saves vertical space in emails</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Improves organization of content</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Encourages engagement through interaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Can be used to track user preferences</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Limitations */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-rose-400 rounded-xl blur opacity-20"></div>
            <div className="relative bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border-2 border-red-200">
              <h3 className="text-lg font-bold text-red-900 mb-4">Limitations</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Only works in supporting email clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Requires fallback for non-supporting clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Complex CSS selectors needed to work reliably</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">Can increase overall email size</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedIntro;
