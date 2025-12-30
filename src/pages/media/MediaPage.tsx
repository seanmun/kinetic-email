// src/pages/media/MediaPage.tsx

import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { FaDownload, FaCopy, FaCheck } from 'react-icons/fa';
import { Zap } from 'lucide-react';

const MediaPage: React.FC = () => {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(id);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const brandColors = [
    { name: 'Primary Indigo 600', hex: '#4f46e5', rgb: 'rgb(79, 70, 229)', usage: 'Primary brand color, main accent' },
    { name: 'Primary Indigo 700', hex: '#4338ca', rgb: 'rgb(67, 56, 202)', usage: 'Darker primary, hover states' },
    { name: 'Primary Indigo 500', hex: '#6366f1', rgb: 'rgb(99, 102, 241)', usage: 'Lighter primary variant' },
    { name: 'Cyan 600', hex: '#0891b2', rgb: 'rgb(8, 145, 178)', usage: 'Logo gradient, interactive elements' },
    { name: 'Blue 600', hex: '#2563eb', rgb: 'rgb(37, 99, 235)', usage: 'Logo gradient, links' },
    { name: 'Yellow 500', hex: '#eab308', rgb: 'rgb(234, 179, 8)', usage: 'Lightning bolt icon, energy accents' },
  ];

  const typography = [
    { name: 'Brand Logo', font: 'Orbitron, sans-serif', weight: '900', size: '1.5rem - 2rem', usage: 'Logo "KINETIC" text' },
    { name: 'Logo Domain', font: 'Orbitron, sans-serif', weight: '400', size: '1.5rem - 2rem', usage: 'Logo ".email" text' },
    { name: 'Headings', font: 'System UI (default)', weight: '700', size: '2rem - 3rem', usage: 'Page titles, hero text' },
    { name: 'Body Text', font: 'System UI (default)', weight: '400', size: '1rem', usage: 'Paragraphs, general content' },
    { name: 'Code', font: 'Monospace (default)', weight: '400', size: '0.875rem', usage: 'Code snippets, technical content' },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Brand & Media Kit</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Download logos, learn about our brand colors, typography, and design guidelines for Kinetic.email.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Logo Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Zap className="text-yellow-500 fill-yellow-500" />
              Logo & Icon
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Logo - Dark Background */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-12 flex flex-col items-center justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-12 h-12 text-yellow-500 fill-yellow-500" />
                  <span className="text-3xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-bold" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900 }}>
                    KINETIC<span className="font-normal" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 400 }}>.email</span>
                  </span>
                </div>
                <p className="text-gray-600 text-sm text-center">Primary Logo</p>
              </div>

              {/* Logo Variation - Without Icon */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-12 flex flex-col items-center justify-center">
                <div className="mb-6">
                  <span className="text-3xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-bold" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900 }}>
                    KINETIC<span className="font-normal" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 400 }}>.email</span>
                  </span>
                </div>
                <p className="text-gray-600 text-sm text-center">Logo Without Icon</p>
              </div>

              {/* Icon Only - Yellow */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-12 flex flex-col items-center justify-center">
                <Zap className="w-20 h-20 text-yellow-500 fill-yellow-500 mb-6" />
                <p className="text-gray-600 text-sm text-center">Icon Only</p>
              </div>

              {/* Logo on Dark Background */}
              <div className="bg-gray-900 rounded-xl p-12 flex flex-col items-center justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-12 h-12 text-yellow-500 fill-yellow-500" />
                  <span className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900 }}>
                    KINETIC<span className="font-normal" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 400 }}>.email</span>
                  </span>
                </div>
                <p className="text-gray-400 text-sm text-center">Logo on Dark Background</p>
              </div>

              {/* K.e Monogram - Light */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-12 flex flex-col items-center justify-center">
                <div className="mb-6">
                  <span className="text-5xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-bold" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900 }}>
                    K<span className="font-normal text-3xl" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 400 }}>.e</span>
                  </span>
                </div>
                <p className="text-gray-600 text-sm text-center">Monogram / Short Form</p>
              </div>

              {/* K.e Monogram - Dark */}
              <div className="bg-gray-900 rounded-xl p-12 flex flex-col items-center justify-center">
                <div className="mb-6">
                  <span className="text-5xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900 }}>
                    K<span className="font-normal text-3xl" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 400 }}>.e</span>
                  </span>
                </div>
                <p className="text-gray-400 text-sm text-center">Monogram on Dark Background</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-3">Logo Usage Guidelines</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Maintain minimum clear space around the logo equal to the height of the bolt icon</li>
                <li>• Do not alter the logo colors or proportions</li>
                <li>• Use the dark version on light backgrounds and light version on dark backgrounds</li>
                <li>• Minimum size: 120px wide for the full logo, 40px for icon only</li>
              </ul>
            </div>
          </section>

          {/* Brand Colors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Brand Colors</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandColors.map((color) => (
                <div key={color.hex} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div
                    className="h-32 w-full"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{color.name}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <code className="text-sm text-gray-600">{color.hex}</code>
                        <button
                          onClick={() => copyToClipboard(color.hex, `hex-${color.hex}`)}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          title="Copy HEX"
                        >
                          {copiedColor === `hex-${color.hex}` ? <FaCheck /> : <FaCopy />}
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <code className="text-sm text-gray-600">{color.rgb}</code>
                        <button
                          onClick={() => copyToClipboard(color.rgb, `rgb-${color.hex}`)}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          title="Copy RGB"
                        >
                          {copiedColor === `rgb-${color.hex}` ? <FaCheck /> : <FaCopy />}
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-3">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Typography</h2>

            <div className="bg-white rounded-xl border-2 border-gray-200 p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Primary Font: Inter</h3>
                <p className="text-gray-600 mb-4">
                  Inter is our primary typeface, chosen for its excellent readability and modern appearance across all screen sizes.
                </p>
              </div>

              <div className="space-y-6">
                {typography.map((type) => (
                  <div key={type.name} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{type.name}</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><strong>Font:</strong> {type.font}</p>
                          <p><strong>Weight:</strong> {type.weight}</p>
                          <p><strong>Size:</strong> {type.size}</p>
                          <p><strong>Usage:</strong> {type.usage}</p>
                        </div>
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: type.font,
                            fontWeight: type.weight,
                            fontSize: type.name === 'Headings' ? '2rem' :
                                     type.name === 'Subheadings' ? '1.5rem' : '1rem'
                          }}
                        >
                          {type.name === 'Code' ? (
                            <code>The quick brown fox jumps over the lazy dog</code>
                          ) : (
                            'The quick brown fox jumps over the lazy dog'
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Design Principles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Principles</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-yellow-500 fill-yellow-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Dynamic & Interactive</h3>
                <p className="text-gray-600 text-sm">
                  Our designs emphasize movement, interactivity, and engagement. We use animations and transitions to guide users through experiences.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-blue-600 fill-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Clean & Modern</h3>
                <p className="text-gray-600 text-sm">
                  We maintain clean layouts with ample white space, modern gradients, and clear visual hierarchy to ensure content is easily digestible.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-indigo-600 fill-indigo-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Accessible & Inclusive</h3>
                <p className="text-gray-600 text-sm">
                  Accessibility is core to our design. We ensure sufficient color contrast, clear typography, and semantic HTML structure.
                </p>
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
              <FaDownload className="text-5xl mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl font-bold mb-3">Need Brand Assets?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                If you need high-resolution logos, icons, or other brand assets for articles, presentations, or partnerships, please reach out.
              </p>
              <a
                href="https://www.linkedin.com/in/sean-munley/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default MediaPage;
