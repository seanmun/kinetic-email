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
    name: 'Dr. Cate Education Series',
    brand: 'Dr. Cate Shanahan, M.D.',
    description: 'Product showcase featuring the latest summer fashion with interactive product carousels and dynamic content.',
    campaignType: 'Educational',
    totalEmails: 3,
    keywords: ['interactive', 'educational', 'quiz', 'health']
  },
  {
    id: 'meraki',
    name: 'Meraki Educational Series',
    brand: 'Meraki Medicinal',
    description: 'Meraki formulas are fueled by Methylene Blue, a superhero compound that powers your mitochondria and ignites your cellular energy',
    campaignType: 'Educational',
    totalEmails: 2,
    keywords: ['survey', 'interactive', 'Educational', 'carousel']
  },
  {
    id: 'chroma',
    name: 'Product Showcase Series',
    brand: 'Chroma',
    description: 'Interactive e-commerce program designed to showcase health centric lighting devices from getChroma.com',
    campaignType: 'Seasonal',
    totalEmails: 6,
    keywords: ['product', 'interactive', 'carousel', 'lighting']
  },
  {
    id: 'pls',
    name: 'Pulsechain Newsletter',
    brand: 'Pulsechain',
    description: 'Interactive newsletter reporting on the latest updates and proposals of the the latest layer-one EVM blockchain',
    campaignType: 'Newsletter',
    totalEmails: 6,
    keywords: ['newsletter', 'crypto', 'newspaper', 'interactive']
  }
];