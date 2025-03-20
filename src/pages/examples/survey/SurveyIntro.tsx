// src/components/examples/survey/SurveyIntro.tsx

import React from 'react';

export const SurveyIntro: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <p className="text-lg text-gray-700 mb-4">
        This example demonstrates an interactive survey using kinetic email techniques. 
        It allows recipients to answer questions directly in their inbox, providing immediate feedback
        without requiring them to visit a website or fill out a separate form.
      </p>
      <p className="text-gray-700">
        Interactive surveys can significantly boost engagement rates, as they reduce friction in the feedback process
        and make it easy for recipients to provide input with a single click.
      </p>
    </div>
  );
};

export default SurveyIntro;