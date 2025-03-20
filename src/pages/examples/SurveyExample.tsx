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
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Examples
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Interactive Survey</h1>
      
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