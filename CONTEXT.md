Kinetic.Email Project
Project Overview
Kinetic.Email is a resource hub and educational website for kinetic emails - interactive, engaging, and dynamic email experiences that push the boundaries of traditional email design.
The site serves as:

An educational platform explaining kinetic email concepts
A showcase of practical examples with code and live previews
A future playground for creating kinetic emails
Eventually, a service to send example emails to visitors

Technology Stack

Frontend Framework: React with TypeScript
Styling: Tailwind CSS
Routing: React Router
Build Tool: Vite
Code Highlighting: React Syntax Highlighter
Hosting: Vercel

Project Structure
Copykinetic-email/
├── public/                 // Static assets
│   ├── images/             // Example images and icons
│   ├── sitemap.xml         // SEO sitemap
│   ├── robots.txt          // SEO robots file
│   ├── manifest.json       // PWA manifest
│   └── favicon.ico
├── src/
│   ├── components/         // Reusable UI components
│   │   ├── common/         // Shared components like buttons, navigation
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ScrollToTop.tsx  // Scrolls to top on route change
│   │   ├── layout/         // Layout components
│   │   │   ├── MainLayout.tsx
│   │   │   ├── PageLayout.tsx
│   │   │   └── DocsLayout.tsx
│   │   ├── email-examples/ // Components for displaying email examples
│   │   │   ├── InteractiveExample.tsx
│   │   │   └── CodeDisplay.tsx
│   │   └── examples/       // Components for specific example types
│   │       ├── tabs/       // Tabbed interface example components
│   │       ├── showcase/   // Product showcase example components
│   │       └── survey/     // Survey example components
│   ├── pages/              // Page components
│   │   ├── home/           // Home page components
│   │   │   └── HomePage.tsx
│   │   ├── learn/          // Learning content pages
│   │   │   ├── LearnPage.tsx
│   │   │   ├── IntroductionModule.tsx
│   │   │   ├── CheckboxHackModule.tsx
│   │   │   ├── LightswitchModule.tsx  // Modular approach with components
│   │   │   ├── lightswitch/  // Lightswitch module components
│   │   │   │   ├── LightswitchIntro.tsx
│   │   │   │   ├── LightswitchExample.tsx
│   │   │   │   └── LightswitchBestPractices.tsx
│   │   │   ├── TabbedElementsModule.tsx
│   │   │   ├── tabs/  // Tabbed elements module components
│   │   │   │   ├── TabbedIntro.tsx
│   │   │   │   ├── TabbedBasicExample.tsx
│   │   │   │   ├── TabbedAdvancedExample.tsx
│   │   │   │   └── TabbedBestPractices.tsx
│   │   │   └── AdvancedTechniquesModule.tsx  // Planned for CSS animations
│   │   ├── examples/       // Example gallery and detail pages
│   │   │   ├── ExamplesPage.tsx
│   │   │   ├── TabbedExample.tsx
│   │   │   ├── ShowcaseExample.tsx
│   │   │   └── SurveyExample.tsx
│   │   └── playground/     // Future playground pages
│   │       └── PlaygroundPage.tsx
│   ├── styles/             // Global styles
│   │   └── tailwind.css
│   ├── App.tsx             // App component
│   ├── main.tsx            // Entry point
│   └── routes.tsx          // Router configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── vercel.json            // Vercel deployment configuration
Implementation Approach
We've taken a modular approach, where:

Each example type (tabs, showcase, survey) has its own dedicated files
Content is broken down into smaller, manageable components
Code examples and HTML previews are separated into helper files
UI components are reusable across different sections
Learning modules are split into separate component files for better organization

Current Status

Project initialized with Vite, React, TypeScript, and Tailwind CSS
Basic routing and layout structure implemented
Interactive Example component created for displaying code with previews
Tabbed Example fully implemented with detailed explanations
Product Showcase Example partially implemented
Survey Example implementation in progress
Introduction, Checkbox Hack, Lightswitch, and Tabbed Elements modules implemented
ScrollToTop functionality added for better UX
Vercel deployment configured and working
SEO files (sitemap.xml, robots.txt, manifest.json) added

Next Steps

Implement Advanced Techniques Module:

Focus on CSS animations and keyframes in kinetic emails
Show how to create more sophisticated interactive elements
Include examples of product showcases with animations


Enhance the Homepage:

Improve the hero section with compelling visuals
Add feature highlights showcasing the benefits of kinetic emails
Create a clear value proposition for visitors


Build the Playground:

Implement a code editor for creating custom kinetic emails
Add live preview functionality
Integrate with a templating system for easy starting points


Add Email Delivery Service:

Create a backend service for sending example emails
Implement user authentication for email delivery
Add analytics to track email engagement



Development Guidelines

Modular Components:

Keep components small and focused on a single responsibility
Split large files into multiple smaller files to avoid truncation issues
Use helper functions to manage complex HTML/CSS examples
Use proper relative imports for components (e.g., './tabs/ComponentName')


Styling Approach:

Use Tailwind utility classes for most styling
Maintain consistent spacing and color schemes
Ensure responsive design for all components


Code Organization:

Group related components in subdirectories
Extract reusable logic into hooks or utility functions
Keep example code separate from UI components


Performance Considerations:

Lazy load content for larger pages
Optimize images and assets
Avoid unnecessarily complex CSS selectors



Email Client Compatibility
Always include compatibility information with examples:

Apple Mail (macOS) - Supported
Mail (iOS) - Supported
Outlook for Mac - Supported
Outlook for iOS - Supported
Gmail (Web) - Not supported
Outlook (Windows) - Not supported
Yahoo Mail - Not supported

Command Reference
bashCopy# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
Troubleshooting Build Issues
When making changes to the file structure:

Ensure all import paths are updated to reflect the new structure
Use relative paths for imports within the same directory (./)
Pay attention to file casing - TypeScript is case-sensitive
Clear build caches if necessary (rm -rf tsconfig.tsbuildinfo)
Verify all files exist in the locations referenced by imports