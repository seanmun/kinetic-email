// src/routes.tsx

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/home/HomePage';
import LearnPage from './pages/learn/LearnPage';
import IntroductionModule from './pages/learn/IntroductionModule';
import CheckboxHackModule from './pages/learn/CheckboxHackModule';
import LightswitchModule from './pages/learn/LightswitchModule';
import TabbedElementsModule from './pages/learn/TabbedElementsModule';
import ExamplesPage from './pages/examples/ExamplesPage';
import TabbedExample from './pages/examples/TabbedExample';
import ShowcaseExample from './pages/examples/ShowcaseExample';
import SurveyExample from './pages/examples/SurveyExample';
import PlaygroundPage from './pages/playground/PlaygroundPage';

// Add placeholder component for the last module we haven't created yet
const AdvancedTechniquesModule = () => (
  <div className="container mx-auto p-8 pt-24">
    <h1 className="text-3xl font-bold mb-4">Advanced Techniques</h1>
    <p className="text-xl text-gray-600">This module will be implemented soon.</p>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // Learning section with nested routes for each module
      { path: 'learn', 
        children: [
          { index: true, element: <LearnPage /> },
          { path: 'introduction', element: <IntroductionModule /> },
          { path: 'checkbox-hack', element: <CheckboxHackModule /> },
          { path: 'lightswitch', element: <LightswitchModule /> },
          { path: 'tabbed-elements', element: <TabbedElementsModule /> },
          { path: 'advanced-techniques', element: <AdvancedTechniquesModule /> },
        ]
      },
      // Examples section
      { path: 'examples', 
        children: [
          { index: true, element: <ExamplesPage /> },
          { path: 'tabs', element: <TabbedExample /> },
          { path: 'showcase', element: <ShowcaseExample /> },
          { path: 'survey', element: <SurveyExample /> },
        ]
      },
      { path: 'playground', element: <PlaygroundPage /> },
    ]
  }
]);

export default router;