// src/pages/examples/SurveyExample.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import InteractiveExample from '../../components/email-examples/InteractiveExample';
import { getSurveyCodeSections } from '../../pages/examples/survey/getSurveyCodeSections';
import { SurveyIntro } from '../../pages/examples/survey/SurveyIntro';
import { SurveyHowItWorks } from '../../pages/examples/survey/SurveyHowItWorks';
import { SurveyApplications } from '../../pages/examples/survey/SurveyApplications';
import { SurveyImplementationTips } from '../../pages/examples/survey/SurveyImplementationTips';
import { SurveyCompatibility } from '../../pages/examples/survey/SurveyCompatibility';
import { getSurveyPreviewHtml, getSurveyFallbackHtml } from '../../pages/examples/survey/getSurveyHtml';
import { ArrowLeft, ClipboardList } from 'lucide-react';

const SurveyExample: React.FC = () => {
  // Get code sections from the imported function
  const codeSections = getSurveyCodeSections();
  
  // Get HTML preview strings
  const previewHtml = getSurveyPreviewHtml();
  const fallbackHtml = getSurveyFallbackHtml();
  
  return (
    <PageLayout>
      <div className="mb-6">
        <Link to="/examples" className="text-blue-600 hover:text-blue-800 flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Examples
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 p-12 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <ClipboardList className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-purple-100 uppercase tracking-wide">Form • User Input</div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight">Interactive Survey</h1>
            </div>
          </div>

          <p className="text-xl text-purple-50 leading-relaxed max-w-3xl">
            A simple survey form that dynamically shows content based on user selection.
            Collect feedback, preferences, and responses directly within the email inbox,
            creating an engaging experience that drives higher response rates.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              User Feedback
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Dynamic Content
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Preference Collection
            </div>
          </div>
        </div>
      </div>

      {/* Introduction section */}
      <SurveyIntro />

      {/* Interactive Example */}
      <InteractiveExample
        title="Preference Survey"
        description="An interactive survey that allows users to select their preferences and see personalized responses."
        sections={codeSections}
        previewHtml={previewHtml}
        fallbackHtml={fallbackHtml}
      />

      <div className="mt-12 space-y-12">
        {/* How It Works section */}
        <SurveyHowItWorks />
        
        {/* Practical Applications section */}
        <SurveyApplications />
        
        {/* Implementation Tips section */}
        <SurveyImplementationTips />
        
        {/* Compatibility Chart section */}
        <SurveyCompatibility />
      </div>
    </PageLayout>
  );
};

export default SurveyExample;