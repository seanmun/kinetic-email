// src/pages/about/HowItWorksPage.tsx
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { FaRocket, FaDatabase, FaBrain, FaCode, FaSearch, FaCheckCircle } from 'react-icons/fa';

const HowItWorksPage = () => {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            How the AI Playground Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A deep dive into our RAG-powered kinetic email generation system
          </p>
        </div>

        {/* Overview */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <FaBrain className="text-blue-600" />
            System Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our AI Playground uses a cutting-edge <strong>Retrieval-Augmented Generation (RAG)</strong> system
            to generate production-ready kinetic emails. Instead of relying solely on AI training data, we
            retrieve proven examples from our knowledge base and use them as reference for generating new emails.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This ensures every generated email follows best practices, uses proper HTML email structure,
            and implements working lightswitch fallbacks for maximum compatibility.
          </p>
        </div>

        {/* The RAG Pipeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The RAG Pipeline</h2>

          {/* Step 1: Dual Embedding Generation */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FaDatabase className="text-blue-600" />
                  Embedding Generation
                </h3>
                <p className="text-gray-700 mb-4">
                  We convert your prompt into a vector embedding using OpenAI's embedding models.
                  We support two models for A/B testing:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">text-embedding-3-small</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• 1,536 dimensions</li>
                      <li>• $0.02 per 1M tokens</li>
                      <li>• Fast and cost-effective</li>
                      <li>• Good for most use cases</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">text-embedding-3-large</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• 3,072 dimensions</li>
                      <li>• $0.13 per 1M tokens</li>
                      <li>• Higher accuracy</li>
                      <li>• Better semantic understanding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Hybrid Search */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FaSearch className="text-indigo-600" />
                  Hybrid Search with Pinecone
                </h3>
                <p className="text-gray-700 mb-4">
                  We query our Pinecone vector database using <strong>hybrid search</strong> - combining
                  semantic similarity with metadata filters:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Search Criteria:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Vector Similarity:</strong> Top 10 most semantically similar examples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Metadata Filters:</strong> Optional filtering by technique, complexity, email purpose, or type</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Similarity Threshold:</strong> Only examples with &gt;70% similarity score</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Positive Examples Only:</strong> Excludes negative examples (anti-patterns)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Context Assembly */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FaCode className="text-purple-600" />
                  Context Assembly
                </h3>
                <p className="text-gray-700 mb-4">
                  Retrieved examples are formatted into a rich context block that includes:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 font-mono text-sm">
                  <p className="text-gray-600 mb-2">--- REFERENCE EXAMPLES FROM KNOWLEDGE BASE ---</p>
                  <p className="text-gray-800 mb-3">
                    <strong>EXAMPLE 1 (Similarity: 94.2%):</strong><br />
                    Description: Tabbed product showcase for running shoes...<br />
                    Technique: tabs<br />
                    Purpose: promotional<br />
                    Complexity: intermediate<br />
                    <span className="text-blue-600">Full HTML Code:</span> [Complete working example]
                  </p>
                  <p className="text-gray-600">
                    CRITICAL INSTRUCTIONS:<br />
                    1. STUDY the checkbox hack and label implementation<br />
                    2. COPY the :checked selector patterns exactly<br />
                    3. COPY the lightswitch implementation exactly as shown<br />
                    4. MAINTAIN the same table structure and MSO conditional patterns
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Email Generation */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FaRocket className="text-green-600" />
                  Email Generation
                </h3>
                <p className="text-gray-700 mb-4">
                  Finally, we send your original prompt + RAG context to our AI generation model.
                  The system prompt instructs the AI to:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Use the RAG examples as the PRIMARY reference for structure and patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Copy the checkbox hack, :checked selectors, and lightswitch patterns exactly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Maintain MSO conditional comments and table-based fallback structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Adapt the content to match your specific request</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Output pure HTML with no markdown formatting or explanations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Base Management */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-12 border border-purple-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaDatabase className="text-purple-600" />
            Knowledge Base Management
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Auto-Tagging with AI</h3>
              <p className="text-gray-700 mb-3">
                When uploading new examples to the admin portal, you can use our AI auto-tagging feature
                to analyze the HTML code and automatically suggest:
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                  <span>Description (optimized for RAG retrieval)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                  <span>Technique type (tabs, accordion, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                  <span>Email purpose and complexity level</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                  <span>Key features and best practice tags</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Negative Examples</h3>
              <p className="text-gray-700">
                We support marking examples as "negative" (anti-patterns to avoid). These are stored in
                the database but automatically excluded from RAG retrieval, helping the AI learn what NOT to do
                without polluting generation results.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dual Index Architecture</h3>
              <p className="text-gray-700">
                Every example is embedded with BOTH small and large models and stored in parallel Pinecone indexes.
                This allows us to A/B test embedding models in production without re-indexing the entire knowledge base.
              </p>
            </div>
          </div>
        </div>

        {/* Why This Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why This Approach Works</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-green-700 mb-3">✓ Consistent Quality</h3>
              <p className="text-gray-700">
                By grounding generation in proven examples, we ensure every email follows best practices
                and uses working patterns.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-green-700 mb-3">✓ Proper Email HTML</h3>
              <p className="text-gray-700">
                RAG examples include correct table structures, MSO conditionals, and inline styles that
                Claude learns to replicate exactly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-green-700 mb-3">✓ Working Lightswitch Fallbacks</h3>
              <p className="text-gray-700">
                The most complex part of kinetic emails - lightswitch fallbacks - are copied directly
                from working examples, eliminating trial-and-error.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-green-700 mb-3">✓ Continuous Improvement</h3>
              <p className="text-gray-700">
                As we add more high-quality examples to the knowledge base, the system automatically
                gets better without retraining the AI.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Stack */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Stack</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">AI Models</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• OpenAI text-embedding-3-small</li>
                <li>• OpenAI text-embedding-3-large</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Vector Database</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Pinecone (dual indexes)</li>
                <li>• Cosine similarity search</li>
                <li>• Metadata filtering</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Backend</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Vercel Serverless Functions</li>
                <li>• Lazy loading for dependencies</li>
                <li>• Environment-based config</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default HowItWorksPage;
