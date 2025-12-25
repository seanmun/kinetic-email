// src/pages/learn/LightswitchModule.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';
import LightswitchIntro from './lightswitch/LightswitchIntro';
import LightswitchExample from './lightswitch/LightswitchExample';
import KineticLightswitchBestPractices from './lightswitch/KineticLightswitchBestPractices';
import ModuleCompletionButton from '../../components/common/ModuleCompletionButton';

const LightswitchModule: React.FC = () => {
  return (
    <PageLayout>
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Learning Path
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 p-4 sm:p-8 md:p-10 lg:p-12 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-yellow-300" />
            </div>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold">
              Module 3 of 6
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            The Kinetic
            <br />
            <span className="bg-gradient-to-r from-purple-300 to-violet-200 bg-clip-text text-transparent">
              Lightswitch
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl leading-relaxed">
            Learn how to detect if an email client supports kinetic interactivity and provide appropriate fallbacks.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <LightswitchIntro />
        <LightswitchExample />
        <KineticLightswitchBestPractices />

        <ModuleCompletionButton
          moduleId="lightswitch"
          nextModulePath="/learn/tabbed-elements"
          nextModuleTitle="Building Tabbed Elements"
        />
      </div>
    </PageLayout>
  );
};

export default LightswitchModule;
