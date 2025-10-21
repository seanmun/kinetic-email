Kinetic.Email Project
Project Overview
Kinetic.Email is a resource hub and educational website for kinetic emails - interactive, engaging, and dynamic email experiences that push the boundaries of traditional email design.
The site serves as:

An educational platform explaining kinetic email concepts
A showcase of practical examples with code and live previews
A portfolio of client projects with interactive email previews
A future playground for creating kinetic emails
Eventually, a service to send example emails to visitors

Technology Stack

Frontend Framework: React with TypeScript
Styling: Tailwind CSS
Routing: React Router
Build Tool: Vite
Code Highlighting: React Syntax Highlighter
Icons: React Icons
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
│   │   ├── examples/       // Components for specific example types
│   │   │   ├── tabs/       // Tabbed interface example components
│   │   │   ├── showcase/   // Product showcase example components
│   │   │   └── survey/     // Survey example components
│   │   └── portfolio/      // Portfolio-specific components
│   │       └── IOSMailSimulator.tsx  // iPhone iOS Mail visualization component
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
│   │   ├── portfolio/      // Portfolio section
│   │   │   ├── PortfolioPage.tsx      // Main portfolio listing page with project cards
│   │   │   ├── ProjectPage.tsx        // Project detail page with email previews
│   │   │   └── data/                  // Data for portfolio projects
│   │   │       ├── projectsData.ts    // Project metadata
│   │   │       └── emailsData.ts      // Email content and metadata
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

Portfolio Section Details
The portfolio section provides:

A grid of project cards showing client campaigns
Individual project pages with detailed information
An iOS Mail simulator to preview HTML emails in a realistic environment
Ability to browse multiple emails within each project
Each project consists of:

Project metadata (name, brand, type, keywords)
Multiple email HTML templates with subject lines and content
Interactive preview capabilities
React icons are used for visual elements to avoid managing image assets

Current Status

Project initialized with Vite, React, TypeScript, and Tailwind CSS
Basic routing and layout structure implemented
Interactive Example component created for displaying code with previews
Tabbed Example fully implemented with detailed explanations
Product Showcase Example partially implemented
Survey Example implementation in progress
Introduction, Checkbox Hack, Lightswitch, and Tabbed Elements modules implemented
ScrollToTop functionality added for better UX
Portfolio section added with project listing and email preview capability
iOS Mail simulator implemented for realistic email previews
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


Add more portfolio projects:

Create additional email HTML examples
Showcase different interactive techniques
Cover more industry use cases

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
Use React Icons for visual elements to minimize asset management


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

## CRITICAL: Local Development - Production-Only API

### Decision: Production-Only Playground & RAG
After multiple failed attempts to run `vercel dev` locally, we've decided to make Playground and RAG features **production-only**.

**Local Development Strategy:**
- Use `npm run dev` for frontend development (components, pages, styles)
- Test API features by deploying to Vercel production/preview environments
- RAG system will ONLY work in production (not locally)

**Why this approach:**
- `vercel dev` has been completely unreliable and unsuccessful locally
- Simpler development workflow without juggling multiple server processes
- No more "zombie server" issues
- Faster iteration on frontend features
- API testing happens in realistic production environment

**For testing Playground/RAG features:**
1. Make changes to `/api/*` files
2. Commit and push to trigger Vercel deployment
3. Test on production or preview URL
4. Iterate based on production results

**This is documented to avoid future attempts to run vercel dev locally.**

## RAG System Integration - IMPLEMENTED ✅

### Goal
Enhance the Playground's AI email generation by storing validated kinetic email examples in Pinecone vector database and retrieving similar examples to improve Claude's output quality.

### Status: FULLY IMPLEMENTED ✅

**Components Created:**
- ✅ Admin Portal UI (`/admin` route) with password protection
- ✅ Dual upload system (HTML emails + Blog content)
- ✅ API endpoint `/api/admin/submit-content.js` for uploading to Pinecone
- ✅ RAG retrieval integrated into `/api/generate.js`
- ✅ Playground toggle for "Use RAG Model (Beta)"
- ✅ How To modal with best practices guide

### Architecture Overview

**User Flow for Submitting Examples (Admin Portal at `/admin`):**
1. Admin navigates to `/admin` and enters password (Sheba)
2. Chooses upload type: HTML Email or Blog Content
3. Fills out comprehensive metadata form
4. System generates OpenAI embedding from description + metadata
5. Stores in Pinecone with full HTML/content + metadata
6. Success confirmation displayed

**User Flow for Generating Emails (Playground with RAG):**
1. User enters prompt in Playground
2. User toggles "Use RAG Model (Beta)" ON
3. System creates OpenAI embedding of user prompt
4. Queries Pinecone for top 5 similar examples
5. Retrieved examples (HTML + blog content) injected into Claude system prompt
6. Claude generates email based on proven examples
7. Returns improved kinetic email HTML with RAG metadata

### Implemented Components

#### 1. API Routes ✅
```
api/
├── generate.js                      (MODIFIED - includes RAG retrieval)
└── admin/
    └── submit-content.js           (NEW - stores HTML/blog to Pinecone)
```

#### 2. Admin Portal Page ✅
```
src/pages/admin/
└── AdminPortal.tsx                 (NEW - dual upload system)
```

**Features:**
- Password protection (env: ADMIN_PASSWORD)
- Upload type selection: HTML Email or Blog Content
- HTML Email fields:
  - HTML content (textarea)
  - Description/prompt
  - Technique type (tabs/accordion/survey/carousel/toggle/hybrid/static)
  - Email purpose (promotional/transactional/newsletter/survey/educational)
  - Complexity level (beginner/intermediate/advanced)
  - HTML type (complete/component)
  - Key features (multi-select checkboxes)
  - Best practice tags (multi-select)
  - Notes (optional)
- Blog Content fields:
  - Blog title
  - Blog content (textarea)
  - Topic (kinetic-techniques/email-best-practices/case-studies/tutorials)
  - Learning level
  - Techniques covered (multi-select)
  - Key takeaways
- "How To Use This Portal" modal with comprehensive guide
- Success/error feedback
- Form auto-resets after successful submission

#### 3. Pinecone Schema ✅

**Index Configuration:**
- Index name: `kinetic-emails` (configured in .env)
- Dimensions: 1536 (OpenAI text-embedding-3-small)
- Metric: cosine similarity

**Vector Structure (HTML):**
```javascript
{
  id: "html-1729534567890-abc123",
  values: [0.123, 0.456, ...],  // 1536-dimension embedding
  metadata: {
    type: "html",
    html: "<!DOCTYPE html>...",  // Full kinetic email HTML
    description: "Tabbed product showcase for running shoes",
    technique: "tabs",
    emailPurpose: "promotional",
    complexity: "intermediate",
    htmlType: "complete",
    keyFeatures: ["lightswitch", "mobileResponsive", "ctaButtons"],
    bestPracticeTags: ["tableStructure", "fallbackContent", "darkMode"],
    notes: "Optional notes",
    submittedAt: "2025-10-20T12:00:00Z"
  }
}
```

**Vector Structure (Blog):**
```javascript
{
  id: "blog-1729534567890-def456",
  values: [0.123, 0.456, ...],
  metadata: {
    type: "blog",
    blogTitle: "How to Build Tabbed Emails in Apple Mail",
    blogContent: "Full blog post content...",
    blogTopic: "kinetic-techniques",
    learningLevel: "intermediate",
    techniquesCovered: ["tabs", "lightswitch", "mobileResponsive"],
    keyTakeaways: "Summary of learnings...",
    submittedAt: "2025-10-20T12:00:00Z"
  }
}
```

#### 4. OpenAI Integration ✅

**Embedding Generation:**
- Model: `text-embedding-3-small` (1536 dimensions)
- Input: Description + metadata (rich context for better matching)
- Cost: ~$0.00002 per 1K tokens

**HTML Embedding Text:**
```
{description}. {technique} technique. {emailPurpose} email. {complexity} complexity.
Features: {keyFeatures}. Best practices: {bestPracticeTags}.
```

**Blog Embedding Text:**
```
{blogTitle}. {keyTakeaways}. Topic: {blogTopic}. Covers: {techniquesCovered}.
```

#### 5. RAG-Enhanced Generation Flow ✅

**When user enables RAG toggle:**
1. User prompt received by `/api/generate.js`
2. Generate OpenAI embedding of prompt
3. Query Pinecone for top 5 similar vectors
4. Build RAG context from retrieved examples:
   - HTML examples: Include full code + metadata
   - Blog examples: Include title, takeaways, and excerpt
5. Inject RAG context into Claude system prompt as reference examples
6. Claude generates email using proven patterns from examples
7. Return generated HTML + RAG metadata (examplesCount, topScore)

### Environment Variables (Required)
```
CLAUDE_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-proj-...
PINECONE_API_KEY=pcsk_...
PINECONE_INDEX_NAME=kinetic-emails
ADMIN_PASSWORD=Sheba
```

### Implementation Status

All phases complete! ✅

### Usage Strategy

**Initial Seeding (10-15 examples):**
1. Navigate to `/admin` in production
2. Upload your best working kinetic emails (tabs, accordion, survey, etc.)
3. Upload 2-3 static email best practice examples (dark mode, responsive tables)
4. Upload 2-3 blog posts explaining kinetic techniques

**Velocity Loop:**
1. Use Playground with RAG toggle ON
2. Generate kinetic emails
3. Test in iOS Mail / Apple Mail
4. If successful → Upload back to `/admin` to improve RAG
5. Repeat → AI quality compounds over time

**Quality Control:**
- Only upload tested, working emails
- Be descriptive in prompts/descriptions
- Tag everything thoroughly
- Diversity matters (different techniques, purposes, complexity)

### Design Decisions Made

1. **Admin Portal Access**: Simple password protection (no OAuth needed for single admin)
2. **Embedding Strategy**: Rich metadata embedding (description + all tags/features)
3. **Retrieval Count**: Top 5 examples (balances context vs token limits)
4. **Upload Types**: Dual system (HTML emails + Blog content)
5. **Error Handling**: RAG failures gracefully fall back to non-RAG generation
6. **Cost Management**: No caching (embeddings are cheap, freshness matters)

## Command Reference
```bash
# LOCAL DEVELOPMENT: Frontend only (Playground/RAG won't work)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to production (triggers Vercel build)
git push origin main

# Kill processes if needed
lsof -ti:5173 | xargs kill -9
pkill -9 node
```

## Testing RAG System

**To test RAG features:**
1. Commit changes to API files
2. Push to GitHub (triggers Vercel deployment)
3. Wait for deployment (check Vercel dashboard)
4. Navigate to production URL
5. Go to `/admin` and upload examples
6. Test Playground with RAG toggle enabled
7. Monitor console logs in Vercel for debugging

## Troubleshooting Build Issues
When making changes to the file structure:

- Ensure all import paths are updated to reflect the new structure
- Use relative paths for imports within the same directory (./)
- Pay attention to file casing - TypeScript is case-sensitive
- Clear build caches if necessary (rm -rf tsconfig.tsbuildinfo)
- Verify all files exist in the locations referenced by imports
- Check for apostrophes in strings - use double quotes for strings containing apostrophes

### Git Security Reminder
- NEVER commit .env file (already in .gitignore)
- Previous incident in July 2025: .env was committed with live API keys
- All keys were rotated after that incident
- Always verify .gitignore before committing sensitive files