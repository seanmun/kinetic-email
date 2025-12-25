// src/pages/learn/TabbedElementsModule.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FolderOpen } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';
import TabbedIntro from '../../pages/learn/tabs/TabbedIntro';
import TabbedBasicExample from '../../pages/learn/tabs/TabbedBasicExample';
import TabbedAdvancedExample from '../../pages/learn/tabs/TabbedAdvancedExample';
import TabbedBestPractices from '../../pages/learn/tabs/TabbedBestPractices';
import ModuleCompletionButton from '../../components/common/ModuleCompletionButton';

const TabbedElementsModule: React.FC = () => {
  return (
    <PageLayout>
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Learning Path
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 p-4 sm:p-8 md:p-10 lg:p-12 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <FolderOpen className="w-6 h-6 text-orange-300" />
            </div>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold">
              Module 4 of 6
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            Building Tabbed
            <br />
            <span className="bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
              Elements
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl leading-relaxed">
            Create interactive tab interfaces in your emails to organize content and improve user experience.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <TabbedIntro />
        <TabbedBasicExample />
        <TabbedAdvancedExample />
        <TabbedBestPractices />

        <ModuleCompletionButton
          moduleId="tabbed-elements"
          nextModulePath="/learn/advanced-techniques"
          nextModuleTitle="Advanced Techniques"
        />
      </div>
    </PageLayout>
  );
};

export default TabbedElementsModule;