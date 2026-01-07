# Blog Implementation Plan

## Overview

Implement a Notion-powered blog system using Incremental Static Regeneration (ISR) that allows you to write articles in Notion and have them automatically appear on the live site without requiring code deployments.

## Key Requirements

1. **No code deployments** - Publishing happens by toggling a "Published" checkbox in Notion
2. **HTML snippet support** - Articles can include HTML code with:
   - Syntax-highlighted code display
   - Live HTML preview rendering
3. **Fast performance** - ISR provides instant page loads with background revalidation
4. **SEO-friendly** - Static generation ensures good search engine indexing

## Technical Stack

### Dependencies to Install

```bash
npm install @notionhq/client notion-to-md react-markdown react-syntax-highlighter dompurify
npm install --save-dev @types/react-syntax-highlighter @types/dompurify
```

### Core Technologies

- **Notion API** - Content management via `@notionhq/client`
- **Notion to Markdown** - Content transformation via `notion-to-md`
- **React Markdown** - Markdown rendering via `react-markdown`
- **Syntax Highlighting** - Code display via `react-syntax-highlighter` with Prism
- **HTML Sanitization** - Security via `dompurify`
- **ISR** - Vercel's Incremental Static Regeneration (revalidate every 60 seconds)

## Architecture

### 1. Notion Database Schema

Create a Notion database with these properties:

| Property | Type | Purpose |
|----------|------|---------|
| Title | Title | Article title (also used for slug generation) |
| Slug | Text | URL-friendly identifier (auto-generated from title) |
| Description | Text | SEO meta description & preview text |
| Author | Text | Article author name |
| Published | Checkbox | Controls visibility on site |
| PublishedDate | Date | When the article was published |
| Tags | Multi-select | Categorization (optional) |
| FeaturedImage | URL | Header image URL (optional) |
| Content | Page content | The actual article body with rich content |

### 2. Environment Variables

Add to `.env.local`:

```bash
# Notion Integration Token
NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxx

# Notion Database ID for blog posts
NOTION_BLOG_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxx
```

**Setup Instructions:**
1. Go to https://www.notion.so/my-integrations
2. Create new integration named "Kinetic Email Blog"
3. Copy the Internal Integration Token → `NOTION_API_KEY`
4. Share your blog database with the integration
5. Copy database ID from the database URL → `NOTION_BLOG_DATABASE_ID`

### 3. File Structure

```
/Users/seanmun/Documents/Github/kinetic-email/
├── api/
│   ├── notion-blog.ts           # NEW: Notion API helpers
│   └── blog/
│       └── [slug].ts            # NEW: ISR API endpoint (optional)
├── src/
│   ├── components/
│   │   └── blog/
│   │       ├── CodeBlock.tsx         # NEW: Syntax highlighting + HTML preview
│   │       ├── NotionContent.tsx     # NEW: Markdown renderer with custom components
│   │       ├── BlogCard.tsx          # NEW: Blog post preview card
│   │       └── BlogLayout.tsx        # NEW: Layout for blog pages
│   ├── pages/
│   │   └── blog/
│   │       ├── BlogListPage.tsx      # NEW: /blog - shows all published posts
│   │       └── BlogPostPage.tsx      # NEW: /blog/[slug] - individual post
│   ├── lib/
│   │   └── notion.ts                 # NEW: Notion client & utilities
│   └── types/
│       └── blog.ts                   # NEW: TypeScript interfaces
└── blog.md                           # THIS FILE
```

## Implementation Plan

### Phase 1: Setup & Configuration (30 min)

**Step 1.1: Install Dependencies**
```bash
npm install @notionhq/client notion-to-md react-markdown react-syntax-highlighter dompurify
npm install --save-dev @types/react-syntax-highlighter @types/dompurify
```

**Step 1.2: Create Notion Database**
- Create new database in Notion
- Add all required properties (see schema above)
- Share with integration
- Copy database ID to `.env.local`

**Step 1.3: Setup Environment Variables**
- Create Notion integration at https://www.notion.so/my-integrations
- Add `NOTION_API_KEY` and `NOTION_BLOG_DATABASE_ID` to `.env.local`

### Phase 2: Core Infrastructure (1 hour)

**Step 2.1: Create TypeScript Types** (`src/types/blog.ts`)

```typescript
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  published: boolean;
  publishedDate: string;
  tags: string[];
  featuredImage?: string;
  content: string; // Markdown content
}

export interface BlogPostMetadata {
  id: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  publishedDate: string;
  tags: string[];
  featuredImage?: string;
}
```

**Step 2.2: Create Notion Client** (`src/lib/notion.ts`)

Core functions needed:
- `getNotionClient()` - Initialize Notion client
- `getAllPublishedPosts()` - Fetch all published blog posts (for list page)
- `getPostBySlug(slug)` - Fetch single post by slug (for individual page)
- `convertNotionToMarkdown(pageId)` - Convert Notion page to Markdown
- `generateSlug(title)` - Create URL-friendly slug from title

**Step 2.3: Create Notion API Helpers** (`api/notion-blog.ts`)

Serverless functions for:
- Fetching posts from Notion
- Converting to Markdown
- Caching strategies

### Phase 3: Blog Components (1.5 hours)

**Step 3.1: CodeBlock Component** (`src/components/blog/CodeBlock.tsx`)

Features:
- Syntax highlighting using `react-syntax-highlighter`
- Two-tab interface: "Code" and "Preview"
- Preview tab only shows for HTML/XML languages
- Sanitizes HTML with DOMPurify before rendering
- VS Code Dark Plus theme for code display

**Step 3.2: NotionContent Component** (`src/components/blog/NotionContent.tsx`)

Features:
- Renders Markdown with `react-markdown`
- Custom renderers for:
  - Code blocks → CodeBlock component
  - Inline code → styled `<code>` tags
  - Headings → styled with proper hierarchy
  - Links → open in new tab with `noopener noreferrer`
  - Lists → proper spacing and bullets
- Integrates CodeBlock for syntax highlighting

**Step 3.3: BlogCard Component** (`src/components/blog/BlogCard.tsx`)

Features:
- Preview card for blog list page
- Shows: featured image, title, description, author, date, tags
- Hover effects and smooth transitions
- Link to full post

**Step 3.4: BlogLayout Component** (`src/components/blog/BlogLayout.tsx`)

Features:
- Consistent header with back button
- Author info and publish date
- Tags display
- Reading time estimate (optional)
- Social share buttons (optional)

### Phase 4: Blog Pages (1 hour)

**Step 4.1: Blog List Page** (`src/pages/blog/BlogListPage.tsx`)

Route: `/blog`

Features:
- Grid of BlogCard components
- Filter by tags (optional)
- Search functionality (optional)
- Pagination or infinite scroll (optional)
- ISR with 60-second revalidation

Data fetching:
```typescript
// Fetch all published posts sorted by date
const posts = await getAllPublishedPosts();
```

**Step 4.2: Blog Post Page** (`src/pages/blog/BlogPostPage.tsx`)

Route: `/blog/[slug]`

Features:
- Full article content rendered with NotionContent
- Featured image header
- Author and metadata
- Table of contents (optional)
- Related posts (optional)
- ISR with 60-second revalidation

Data fetching:
```typescript
// Fetch single post by slug
const post = await getPostBySlug(slug);
```

### Phase 5: Routing & Integration (30 min)

**Step 5.1: Update App Router**

Add blog routes to your routing configuration:
- `/blog` → BlogListPage
- `/blog/:slug` → BlogPostPage

**Step 5.2: Add Blog Link to Navigation**

Update main navigation to include blog link in header/footer.

**Step 5.3: Setup ISR**

Configure revalidation strategy:
- `revalidate: 60` - Check for new content every 60 seconds
- On-demand revalidation endpoint (optional advanced feature)

### Phase 6: Testing & Polish (1 hour)

**Step 6.1: Test Content Flow**
1. Create test post in Notion
2. Set Published = false → verify it doesn't appear
3. Set Published = true → verify it appears within 60 seconds
4. Test HTML snippets with code blocks
5. Test syntax highlighting for various languages

**Step 6.2: SEO Optimization**
- Add meta tags (title, description, OG tags)
- Add structured data (JSON-LD for Article)
- Test with Google's Rich Results Test

**Step 6.3: Performance**
- Optimize images (lazy loading, responsive)
- Minimize bundle size
- Test ISR revalidation timing

**Step 6.4: Error Handling**
- 404 page for invalid slugs
- Error state for Notion API failures
- Loading states during revalidation

## ISR Implementation Details

### How ISR Works

1. **First Request:**
   - Page is statically generated at build time (or first request)
   - Served instantly to user
   - No Notion API call on this request

2. **Subsequent Requests (within 60s):**
   - Cached static page served instantly
   - No Notion API call

3. **After 60 seconds:**
   - First request still gets cached version (instant)
   - Background: Notion API is called to check for updates
   - If content changed: new static page is generated
   - Next request gets the updated page

### Publishing Flow

```
1. Write article in Notion
2. Check "Published" checkbox
3. Within 60 seconds: Article appears on site
4. No git commit, no deployment, no build step
```

### Code Example

```typescript
// In your page component
export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const posts = await getAllPublishedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <NotionContent markdown={post.content} />;
}
```

## HTML Snippets in Blog Posts

### In Notion

When writing a blog post, use code blocks with language set to "HTML":

```
Here's a kinetic email example:

[Select "HTML" as the language]
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .interactive { display: none; }
      #Kinetic:checked ~ .interactive { display: block; }
    </style>
  </head>
  <body>
    <input type="checkbox" id="Kinetic" checked>
    <div class="interactive">This is kinetic!</div>
  </body>
</html>
```

### On Your Site

The CodeBlock component will render this with:
- **Code tab**: Syntax-highlighted HTML with line numbers
- **Preview tab**: Live rendering of the HTML (sanitized)

Users can toggle between viewing the code and seeing it in action.

## Security Considerations

### HTML Sanitization

All HTML snippets are sanitized with DOMPurify before rendering:
- Removes dangerous tags (`<script>`, `<iframe>` with unsafe src, etc.)
- Strips event handlers (`onclick`, `onerror`, etc.)
- Prevents XSS attacks

### Iframe Sandboxing (Alternative)

For even stronger isolation, can render HTML in sandboxed iframe:
```typescript
<iframe
  srcDoc={sanitizedHTML}
  sandbox="allow-scripts"
  className="w-full h-96"
/>
```

## Optional Enhancements

### Phase 7: Advanced Features (Future)

1. **Table of Contents**
   - Auto-generate from H2/H3 headings
   - Sticky sidebar navigation
   - Scroll spy highlighting

2. **Search**
   - Full-text search across all posts
   - Tag filtering
   - Fuzzy matching

3. **Analytics**
   - Track post views
   - Reading time analytics
   - Popular posts widget

4. **Comments**
   - Integration with commenting system (Disqus, etc.)
   - Or build custom with database

5. **Newsletter Integration**
   - Email subscription form
   - Send new posts to subscribers
   - RSS feed generation

6. **On-Demand Revalidation**
   - Webhook from Notion to trigger immediate revalidation
   - No 60-second wait for updates

## Estimated Timeline

- **Phase 1** (Setup): 30 minutes
- **Phase 2** (Infrastructure): 1 hour
- **Phase 3** (Components): 1.5 hours
- **Phase 4** (Pages): 1 hour
- **Phase 5** (Integration): 30 minutes
- **Phase 6** (Testing): 1 hour

**Total: ~5.5 hours** for complete implementation

## Next Steps

1. Review this plan and confirm approach
2. Create Notion database with required schema
3. Setup Notion integration and get API credentials
4. Begin Phase 1 implementation
5. Test with sample blog post
6. Iterate and refine

## Questions to Address

Before starting implementation:

1. **Notion Database**: Do you already have a Notion workspace, or need to create one?
2. **Design**: Should blog match the existing site design, or have its own unique style?
3. **Features**: Which optional features (search, comments, analytics) are must-haves for v1?
4. **URL Structure**: Confirm `/blog` and `/blog/[slug]` routes work for you
5. **Author Info**: Single author (you) or support for multiple authors?
6. **Images**: Where will images be hosted? (Notion's CDN, your own, Cloudinary, etc.)

---

**Ready to begin implementation?** Let me know if you want to proceed with Phase 1, or if you'd like to discuss/modify any part of this plan first.
