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
    name: 'The Blue Light Guide',
    brand: 'Daylight Computer Company',
    description: 'Interactive email campaign detailing the negative effects from blue light, highlighted with the introduction of Amber Mode.',
    campaignType: 'Educational',
    totalEmails: 4,
    keywords: ['interactive', 'educational', 'amber mode', 'hardware', 'retail']
  },
  {
    id: 'onboarding',
    name: 'ARES Groundwear',
    brand: 'The Grounded Athlete',
    description: 'Educational email sequence with interactive tutorials, progress tracking, and personalized tips for new users.',
    campaignType: 'Onboarding',
    totalEmails: 5,
    keywords: ['interactive', 'educational', 'retail', 'fun']
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