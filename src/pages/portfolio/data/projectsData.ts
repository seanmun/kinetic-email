// src/pages/portfolio/data/projectsData.ts
// Contains metadata for all portfolio projects

// Project data interface
export interface Project {
  id: string;
  name: string;
  brand: string;
  description: string;
  campaignType: string;
  totalEmails: number;
  keywords: string[];
}

// Sample project data
export const projects: Project[] = [
  {
    id: 'daylight',
    name: 'Daylight Savings Campaign',
    brand: 'Daylight Computer',
    description: 'Interactive email campaign highlighting seasonal time changes with dynamic content and user engagement features.',
    campaignType: 'Seasonal',
    totalEmails: 4,
    keywords: ['interactive', 'seasonal', 'retail', 'checkbox-hack']
  },
  {
    id: 'onboarding',
    name: 'User Onboarding Series',
    brand: 'TechFlow',
    description: 'Educational email sequence with interactive tutorials, progress tracking, and personalized tips for new users.',
    campaignType: 'Onboarding',
    totalEmails: 5,
    keywords: ['onboarding', 'education', 'saas', 'accordion']
  },
  {
    id: 'product-launch',
    name: 'Summer Collection Launch',
    brand: 'FashionForward',
    description: 'Product showcase featuring the latest summer fashion with interactive product carousels and dynamic content.',
    campaignType: 'Product Launch',
    totalEmails: 3,
    keywords: ['carousel', 'product-showcase', 'fashion', 'tabbed-content']
  },
  {
    id: 'feedback-survey',
    name: 'Customer Feedback Campaign',
    brand: 'ServiceFirst',
    description: 'Survey-focused email campaign to gather customer feedback with interactive rating system and response collection.',
    campaignType: 'Survey',
    totalEmails: 2,
    keywords: ['survey', 'interactive', 'customer-feedback', 'form-elements']
  },
  {
    id: 'amber-mode',
    name: 'Dark Mode Email Campaign',
    brand: 'NightOwl',
    description: 'Email campaign demonstrating dark mode support with adaptive color schemes and theme switching capabilities.',
    campaignType: 'Technical Demo',
    totalEmails: 3,
    keywords: ['dark-mode', 'adaptive', 'accessibility', 'theme-switching']
  },
  {
    id: 'holiday-campaign',
    name: 'Holiday Promotional Series',
    brand: 'GiftPerfect',
    description: 'Multi-email holiday campaign with interactive gift guides, countdown timers, and personalized recommendations.',
    campaignType: 'Seasonal',
    totalEmails: 6,
    keywords: ['holiday', 'interactive', 'countdown', 'personalization']
  }
];