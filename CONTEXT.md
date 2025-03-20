# Kinetic.Email Project

## Project Overview

Kinetic.Email is a resource hub and educational website for kinetic emails - interactive, engaging, and dynamic email experiences that push the boundaries of traditional email design.

The site serves as:
1. An educational platform explaining kinetic email concepts
2. A showcase of practical examples with code and live previews
3. A future playground for creating kinetic emails
4. Eventually, a service to send example emails to visitors

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Build Tool**: Vite
- **Code Highlighting**: React Syntax Highlighter
- **Hosting**: Planned for Railway

## Project Structure

```
kinetic-email/
├── public/                 // Static assets
│   ├── images/             // Example images and icons
│   └── favicon.ico
├── src/
│   ├── components/         // Reusable UI components
│   │   ├── common/         // Shared components like buttons, navigation
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
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
│   │   │   └── LearnPage.tsx
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
└── tailwind.config.js
```

## Implementation Approach

We've taken a modular approach, where:

1. Each example type (tabs, showcase, survey) has its own dedicated files
2. Content is broken down into smaller, manageable components
3. Code examples and HTML previews are separated into helper files
4. UI components are reusable across different sections

## Current Status

- Project initialized with Vite, React, TypeScript, and Tailwind CSS
- Basic routing and layout structure implemented
- Interactive Example component created for displaying code with previews
- Tabbed Example fully implemented with detailed explanations
- Product Showcase Example partially implemented
- Survey Example implementation in progress

## Next Steps

1. **Complete the Survey Example**:
   - Finish the component structure for the survey example
   - Ensure all content sections render properly

2. **Implement the Learning Hub**:
   - Create the learning section with educational content about kinetic emails
   - Break down concepts into clear, digestible sections
   - Add interactive elements to demonstrate key principles

3. **Enhance the Homepage**:
   - Improve the hero section with compelling visuals
   - Add feature highlights showcasing the benefits of kinetic emails
   - Create a clear value proposition for visitors

4. **Build the Playground**:
   - Implement a code editor for creating custom kinetic emails
   - Add live preview functionality
   - Integrate with a templating system for easy starting points

5. **Add Email Delivery Service**:
   - Create a backend service for sending example emails
   - Implement user authentication for email delivery
   - Add analytics to track email engagement

## Development Guidelines

1. **Modular Components**:
   - Keep components small and focused on a single responsibility
   - Split large files into multiple smaller files to avoid truncation issues
   - Use helper functions to manage complex HTML/CSS examples

2. **Styling Approach**:
   - Use Tailwind utility classes for most styling
   - Maintain consistent spacing and color schemes
   - Ensure responsive design for all components

3. **Code Organization**:
   - Group related components in subdirectories
   - Extract reusable logic into hooks or utility functions
   - Keep example code separate from UI components

4. **Performance Considerations**:
   - Lazy load content for larger pages
   - Optimize images and assets
   - Avoid unnecessarily complex CSS selectors

## Content Source

The site's educational content is based on a guide that covers:
- Introduction to kinetic emails
- Understanding the checkbox hack
- The kinetic lightswitch concept
- Building tabbed elements
- Creating product showcases
- Implementing interactive surveys

This content should be structured in an educational, step-by-step manner throughout the site.

## Email Client Compatibility

Always include compatibility information with examples:
- Apple Mail (macOS) - Supported
- Mail (iOS) - Supported
- Outlook for Mac - Supported
- Outlook for iOS - Supported
- Gmail (Web) - Not supported
- Outlook (Windows) - Not supported
- Yahoo Mail - Not supported

## Command Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```