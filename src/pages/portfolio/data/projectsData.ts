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
    id: 'grounded',
    name: 'ARES Groundwear',
    brand: 'The Grounded Athlete',
    description: 'Educational email sequence with interactive tutorials, progress tracking, and personalized tips for new users.',
    campaignType: 'Educational',
    totalEmails: 5,
    keywords: ['interactive', 'educational', 'retail', 'fun', 'product-showcase']
  },
  {
    id: 'dr-cate',
    name: 'Dr. Cate',
    brand: 'Dr. Cate Shanahan, M.D.',
    description: 'Product showcase featuring the latest summer fashion with interactive product carousels and dynamic content.',
    campaignType: 'Educational',
    totalEmails: 3,
    keywords: ['interactive', 'educational', 'quiz', 'health']
  },
  {
    id: 'meraki',
    name: 'Meraki',
    brand: 'Meraki Medicinal',
    description: 'Meraki formulas are fueled by Methylene Blue, a superhero compound that powers your mitochondria and ignites your cellular energy',
    campaignType: 'Educational',
    totalEmails: 2,
    keywords: ['survey', 'interactive', 'Educational', 'carousel']
  },
  {
    id: 'amber-mode',
    name: 'Amber Mode Email technique',
    brand: 'Seanmun',
    description: 'Email campaign demonstrating amber mode support with adaptive color schemes and theme switching capabilities.',
    campaignType: 'Technical Demo',
    totalEmails: 3,
    keywords: ['amber-mode', 'adaptive', 'accessibility', 'theme-switching']
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