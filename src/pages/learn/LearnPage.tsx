// src/pages/learn/LearnPage.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import {
  FaInfoCircle,
  FaCheckCircle,
  FaLightbulb,
  FaTasks,
  FaBolt,
  FaChartLine,
  FaClock,
  FaTrophy,
  FaStar,
  FaLock,
  FaArrowRight
} from 'react-icons/fa';

// Module definitions with enhanced metadata
interface Module {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: number; // in minutes
  skills: string[];
  preview: string;
}

const modules: Module[] = [
  {
    id: 'introduction',
    title: 'Introduction to Kinetic Emails',
    description: 'Learn what makes emails "kinetic" and why they can dramatically improve engagement.',
    path: '/learn/introduction',
    difficulty: 'Beginner',
    estimatedTime: 10,
    skills: ['Core Concepts', 'Email Marketing'],
    preview: 'Discover the fundamentals of kinetic emails and see real-world examples of how they boost engagement by 5-10x.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'checkbox-hack',
    title: 'The Checkbox Hack',
    description: 'Understand the core technique behind kinetic emails using input elements and CSS selectors.',
    path: '/learn/checkbox-hack',
    difficulty: 'Beginner',
    estimatedTime: 15,
    skills: ['HTML', 'CSS', 'Core Technique'],
    preview: 'Master the checkbox hack - the foundation of all kinetic email interactivity. Build your first interactive element.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'lightswitch',
    title: 'The Kinetic Lightswitch',
    description: 'Learn how to detect if an email client supports kinetic interactivity and provide appropriate fallbacks.',
    path: '/learn/lightswitch',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    skills: ['Feature Detection', 'Fallbacks', 'Best Practices'],
    preview: 'Implement the lightswitch technique to gracefully handle email clients that don\'t support kinetic features.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 'tabbed-elements',
    title: 'Building Tabbed Elements',
    description: 'Create interactive tab interfaces in your emails to organize content.',
    path: '/learn/tabbed-elements',
    difficulty: 'Intermediate',
    estimatedTime: 25,
    skills: ['Tabs', 'Navigation', 'UX Design'],
    preview: 'Build beautiful tabbed interfaces that let users explore multiple content sections without leaving the inbox.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    )
  },
  {
    id: 'advanced-techniques',
    title: 'Advanced Techniques',
    description: 'Explore more complex kinetic email techniques including product showcases and interactive surveys.',
    path: '/learn/advanced-techniques',
    difficulty: 'Advanced',
    estimatedTime: 30,
    skills: ['Carousels', 'Surveys', 'Product Showcases'],
    preview: 'Take your skills to the next level with carousels, interactive surveys, and sophisticated product showcases.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'tracking',
    title: 'Kinetic Email Tracking',
    description: 'Transform kinetic interactions into actionable business intelligence using pixel tracking techniques.',
    path: '/learn/tracking',
    difficulty: 'Advanced',
    estimatedTime: 20,
    skills: ['Analytics', 'Tracking Pixels', 'Data Collection'],
    preview: 'Learn how to track user interactions within kinetic emails and turn them into actionable insights.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

// Difficulty badge component
const DifficultyBadge: React.FC<{ difficulty: Module['difficulty'] }> = ({ difficulty }) => {
  const colors = {
    Beginner: 'bg-green-100 text-green-800 border-green-200',
    Intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Advanced: 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
};

const LearnPage: React.FC = () => {
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('kinetic-learn-progress');
    if (saved) {
      try {
        const progress = JSON.parse(saved);
        setCompletedModules(new Set(progress));
      } catch (e) {
        console.error('Failed to load progress:', e);
      }
    }
  }, []);

  // Calculate overall progress
  const progressPercentage = Math.round((completedModules.size / modules.length) * 100);
  const completedCount = completedModules.size;
  const totalModules = modules.length;

  // Calculate total time
  const totalMinutes = modules.reduce((sum, m) => sum + m.estimatedTime, 0);
  const completedMinutes = modules
    .filter(m => completedModules.has(m.id))
    .reduce((sum, m) => sum + m.estimatedTime, 0);

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -mx-4 px-4 py-16 mb-12 rounded-2xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <FaLightbulb className="text-yellow-500" />
            <span className="text-sm font-medium text-blue-900">Interactive Learning Path</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Master Kinetic Emails
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Step by Step
            </span>
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Follow our structured learning path from basics to advanced techniques.
            <br />
            Build real projects, earn achievements, and track your progress.
          </p>

          {/* Overall Progress Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <FaTrophy className="text-white text-xl" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Your Progress</h3>
                  <p className="text-sm text-gray-600">
                    {completedCount} of {totalModules} modules completed
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-blue-600">{progressPercentage}%</div>
                <p className="text-xs text-gray-500">{completedMinutes} of {totalMinutes} min</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            {/* Achievement badges */}
            {progressPercentage >= 100 && (
              <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center gap-2 text-yellow-800">
                  <FaStar className="text-yellow-500" />
                  <span className="font-semibold">Achievement Unlocked: Kinetic Email Master! 🎉</span>
                </div>
              </div>
            )}
            {progressPercentage >= 50 && progressPercentage < 100 && (
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-2 text-blue-800">
                  <FaBolt className="text-blue-500" />
                  <span className="font-semibold">Halfway there! Keep going! 💪</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Learning Path Visualization */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Your Learning Journey</h2>
        <p className="text-gray-600 text-center mb-8">Follow the path from beginner to expert</p>

        {/* Module Cards with Visual Path */}
        <div className="max-w-5xl mx-auto relative pb-32">
          {modules.map((module, index) => {
            const isCompleted = completedModules.has(module.id);
            const isHovered = hoveredModule === module.id;
            const isLocked = false; // For future: could lock modules based on prerequisites

            return (
              <div
                key={module.id}
                className="relative mb-8 md:mb-12 sticky"
                style={{
                  // Sticky positioning with staggered top values for layering effect
                  // Later modules stack on top of earlier ones
                  // Mobile: smaller offset (1rem), Desktop: larger offset (2rem)
                  top: `${Math.min(index * 1, 5)}rem`,
                  zIndex: index + 1,
                }}
              >
                <Link
                  to={module.path}
                  className={`group block transition-all duration-300 ${isLocked ? 'pointer-events-none' : ''}`}
                  onMouseEnter={() => setHoveredModule(module.id)}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  <div className={`
                    relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300
                    border-2 ${isCompleted ? 'border-green-400' : 'border-gray-200'}
                    ${isHovered ? 'transform scale-[1.02]' : ''}
                    ${isLocked ? 'opacity-50' : ''}
                  `}>
                    {/* Completion Checkmark */}
                    {isCompleted && (
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10 animate-bounce">
                        <FaCheckCircle className="text-white text-2xl" />
                      </div>
                    )}

                    {/* Lock Icon */}
                    {isLocked && (
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center shadow-lg z-10">
                        <FaLock className="text-white text-xl" />
                      </div>
                    )}

                    <div className="grid md:grid-cols-12 gap-6 p-6">
                      {/* Left: Icon & Number */}
                      <div className="md:col-span-2 flex md:flex-col items-center justify-center gap-4">
                        <div className={`
                          w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl
                          ${isCompleted ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 'bg-gradient-to-br from-blue-500 to-indigo-600'}
                          ${isHovered ? 'transform rotate-6 scale-110' : ''}
                          transition-all duration-300
                        `}>
                          {module.icon}
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 font-semibold">Step</div>
                          <div className="text-2xl font-black text-blue-600">{String(index + 1).padStart(2, '0')}</div>
                        </div>
                      </div>

                      {/* Middle: Content */}
                      <div className="md:col-span-7">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {module.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {isHovered ? module.preview : module.description}
                        </p>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {module.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                          <span>{isCompleted ? 'Review Module' : 'Start Learning'}</span>
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Right: Metadata */}
                      <div className="md:col-span-3 flex md:flex-col gap-4 md:items-end justify-between md:justify-start">
                        <DifficultyBadge difficulty={module.difficulty} />

                        <div className="flex items-center gap-2 text-gray-600">
                          <FaClock className="text-blue-500" />
                          <span className="text-sm font-medium">{module.estimatedTime} min</span>
                        </div>

                        {isCompleted && (
                          <div className="flex items-center gap-2 text-green-600">
                            <FaCheckCircle />
                            <span className="text-sm font-semibold">Completed</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 -mx-4 px-4 py-12 rounded-2xl mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You'll Learn</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
              <FaLightbulb className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Core Concepts</h3>
            <p className="text-gray-600 leading-relaxed">
              Understand the fundamentals of kinetic emails, why they work, and when to use them.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <FaTasks className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Practical Techniques</h3>
            <p className="text-gray-600 leading-relaxed">
              Build real interactive components: tabs, carousels, surveys, and product showcases.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
              <FaChartLine className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Real-World Applications</h3>
            <p className="text-gray-600 leading-relaxed">
              See production examples from real campaigns and learn how to track engagement.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 -mx-4 px-4 py-12 rounded-2xl text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to put your knowledge into practice?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Check out our examples gallery to see these techniques in action, or jump straight into the playground to start experimenting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/examples"
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200"
          >
            View Examples
          </Link>
          <Link
            to="/playground"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 text-white font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            <FaBolt />
            AI Playground
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default LearnPage;
