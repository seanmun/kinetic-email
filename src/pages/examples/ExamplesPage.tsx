// src/pages/examples/ExamplesPage.tsx

import { Link } from 'react-router-dom';
import { Layers, ShoppingCart, ClipboardList, ChevronRight, BookOpen, Code } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';

const examples = [
  {
    id: 'tabs',
    title: 'Tabbed Interface',
    description: 'A tabbed interface allowing users to navigate between content sections without leaving the email.',
    path: '/examples/tabs',
    image: '/images/example-tabs.jpg',
    tags: ['Basic Technique', 'Navigation'],
    icon: Layers,
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 'showcase',
    title: 'Product Showcase',
    description: 'Interactive product carousel with navigation arrows to display different items.',
    path: '/examples/showcase',
    image: '/images/example-showcase.jpg',
    tags: ['Carousel', 'E-commerce'],
    icon: ShoppingCart,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'survey',
    title: 'Interactive Survey',
    description: 'A simple survey form that dynamically shows content based on user selection.',
    path: '/examples/survey',
    image: '/images/example-survey.jpg',
    tags: ['Form', 'User Input'],
    icon: ClipboardList,
    color: 'from-purple-500 to-violet-500'
  }
];

// Placeholder image URLs for development
const getPlaceholderImage = (exampleId: string) => {
  const placeholders: Record<string, string> = {
    tabs: 'https://via.placeholder.com/600x400?text=Tabbed+Interface',
    showcase: 'https://via.placeholder.com/600x400?text=Product+Showcase',
    survey: 'https://via.placeholder.com/600x400?text=Interactive+Survey'
  };

  return placeholders[exampleId] || 'https://via.placeholder.com/600x400';
};

const ExamplesPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-12 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            Kinetic Email
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Examples
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore practical examples of interactive email techniques that you can implement in your campaigns.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {examples.map((example) => {
          const Icon = example.icon;
          return (
            <Link
              key={example.id}
              to={example.path}
              className="group relative block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r opacity-25 group-hover:opacity-40 rounded-2xl blur transition-opacity" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} className={`absolute -inset-1 bg-gradient-to-r ${example.color} opacity-25 group-hover:opacity-40 rounded-2xl blur transition-opacity`}></div>

              <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 group-hover:border-gray-300 transition-all shadow-lg">
                {/* Icon Header */}
                <div className={`bg-gradient-to-br ${example.color} p-6`}>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {example.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {example.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {example.description}
                  </p>
                  <span className="text-blue-600 font-bold flex items-center gap-2">
                    View Example
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
        <div className="relative bg-white rounded-2xl p-8 md:p-10 border-2 border-blue-200 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Ready to create your own kinetic email?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Check out our learning resources to understand the concepts behind these examples,
                or jump straight into the playground to start experimenting.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/learn"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
                >
                  <BookOpen className="w-5 h-5" />
                  Learn the Concepts
                </Link>
                <Link
                  to="/playground"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg border-2 border-blue-200 hover:bg-blue-50 transition-all"
                >
                  <Code className="w-5 h-5" />
                  Go to Playground
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ExamplesPage;
