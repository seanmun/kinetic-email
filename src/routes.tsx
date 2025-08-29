// src/routes.tsx

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/home/HomePage';
import LearnPage from './pages/learn/LearnPage';
import IntroductionModule from './pages/learn/IntroductionModule';
import CheckboxHackModule from './pages/learn/CheckboxHackModule';
import LightswitchModule from './pages/learn/LightswitchModule';
import TabbedElementsModule from './pages/learn/TabbedElementsModule';
import AdvancedTechniquesModule from './pages/learn/AdvancedTechniquesModule';
import TrackingModule from './pages/learn/TrackingModule';
import ExamplesPage from './pages/examples/ExamplesPage';
import TabbedExample from './pages/examples/TabbedExample';
import ShowcaseExample from './pages/examples/ShowcaseExample';
import SurveyExample from './pages/examples/SurveyExample';
import PlaygroundPage from './pages/playground/PlaygroundPage';

// Import portfolio components
import PortfolioPage from './pages/portfolio/PortfolioPage';
import ProjectPage from './pages/portfolio/ProjectPage';

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
          { path: 'tracking', element: <TrackingModule /> },
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
      
      // Portfolio section
      { path: 'portfolio',
        children: [
          { index: true, element: <PortfolioPage /> },
          { path: ':projectId', element: <ProjectPage /> },
        ]
      },
    ]
  }
]);

export default router;