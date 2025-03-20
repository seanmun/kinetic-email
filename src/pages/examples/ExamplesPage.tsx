// src/pages/examples/ExamplesPage.tsx

import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';

const examples = [
  {
    id: 'tabs',
    title: 'Tabbed Interface',
    description: 'A tabbed interface allowing users to navigate between content sections without leaving the email.',
    path: '/examples/tabs',
    image: '/images/example-tabs.jpg',
    tags: ['Basic Technique', 'Navigation']
  },
  {
    id: 'showcase',
    title: 'Product Showcase',
    description: 'Interactive product carousel with navigation arrows to display different items.',
    path: '/examples/showcase',
    image: '/images/example-showcase.jpg',
    tags: ['Carousel', 'E-commerce']
  },
  {
    id: 'survey',
    title: 'Interactive Survey',
    description: 'A simple survey form that dynamically shows content based on user selection.',
    path: '/examples/survey',
    image: '/images/example-survey.jpg',
    tags: ['Form', 'User Input']
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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Kinetic Email Examples
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore practical examples of interactive email techniques that you can implement in your campaigns.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {examples.map((example) => (
          <Link 
            key={example.id}
            to={example.path}
            className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={example.image || getPlaceholderImage(example.id)} 
                alt={example.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {example.tags?.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {example.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {example.description}
              </p>
              <span className="text-blue-600 font-medium flex items-center">
                View Example
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-100">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to create your own kinetic email?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Check out our learning resources to understand the concepts behind these examples, 
              or jump straight into the playground to start experimenting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/learn"
                className="px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn the Concepts
              </Link>
              <Link
                to="/playground"
                className="px-5 py-2 bg-white text-blue-600 font-medium rounded-md border border-blue-200 hover:bg-blue-50 transition-colors"
              >
                Go to Playground
              </Link>
            </div>
          </div>
          <div className="md:w-1/3">
            <img 
              src="https://via.placeholder.com/400x300?text=Email+Playground" 
              alt="Email Playground" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ExamplesPage;