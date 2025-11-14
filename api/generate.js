// api/generate.js - Updated with proper kinetic email instructions
import Anthropic from '@anthropic-ai/sdk';

// Initialize Claude (Vercel will handle environment variables)
const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY
});

// Your base template and prompts (same as before)
const BASE_TEMPLATE = `<!DOCTYPE html>
<html lang="en" dir="ltr" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
  <meta name="x-apple-disable-message-reformatting">
  
<title>Kinetic Email</title>

<!--[if mso]>
<noscript>
  <xml>
    <o:OfficeDocumentSettings>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
</noscript>
<![endif]-->

<!--[if mso]><xml>
<w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
<w:DontUseAdvancedTypographyReadingMail/>
</w:WordDocument>
</xml><![endif]-->

<!--[if mso]>
<style type="text/css">
  sup { font-size: 100% !important; }
  body { font-family: Arial, sans-serif; font-size: 16px; }
  .ExternalClass * { line-height: 100%; padding: 0px; margin: 0px; }
  v\\:* { behavior: url(#default#VML); display: inline-block; }
</style>
<![endif]-->

<style>
/* CSS RESET & NORMALIZATION */
html, body { margin: 0 auto; padding: 0; height: 100%; width: 100%; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; }
body { margin: 0; padding: 0; }
div#body-fix { box-sizing: border-box; width: 100%; font-size: 14px; }
table { border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0; }
h1 { margin:0.67em 0; font-size:2em; }
h2 { margin:0.83em 0; font-size:1.5em; }
html[dir] h3, h3 { margin:1em 0; font-size:1.17em; }

/* OUTLOOK FIXES */
span.MsoHyperlink { color: inherit !important; mso-style-priority: 99 !important; }
span.MsoHyperlinkFollowed { color: inherit !important; mso-style-priority: 99 !important; }

/* APPLE MAIL FIXES */
#root [x-apple-data-detectors=true], a[x-apple-data-detectors=true]{ color: inherit !important; text-decoration: inherit !important; }
[x-apple-data-detectors-type="calendar-event"] { color: inherit !important; -webkit-text-decoration-color: inherit !important; }

/* GMAIL FIXES */
u + .body a { color: inherit; text-decoration: none; font-size: inherit; font-weight: inherit; line-height: inherit; }
/* Hide from display */
.a6S { display: none !important; opacity: 0.01 !important; }
.im { color: inherit !important; }

/* KINETIC EMAIL STYLES */
/* Hide all form inputs */
input[type="radio"], input[type="checkbox"] { 
  display: none !important; 
  -webkit-appearance: none !important; 
  mso-hide: all !important; 
}

/* KINETIC LIGHTSWITCH - Critical for email client compatibility */
.kinetic { display: none !important; }

/* LIGHTSWITCH CORE FUNCTIONALITY - Always include these exact selectors */
#Kinetic:checked ~* .interactive { display: block !important; }
#Kinetic:checked ~* .fallback { display: none !important; }

/* AOL/Yahoo Compatibility Fixes */
#Kinetic:checked ~* .& .fallback { display: block !important; }
#Kinetic:checked ~* .& .interactive { display: none !important; }

/* Interactive content hidden by default */
.interactive { display: none !important; }
.fallback { display: block !important; }

/* Add your kinetic styles here */

</style>

<style data-ignore-inlining>
/* ADVANCED KINETIC STYLES - Not inlined for interaction preservation */

/* LIGHTSWITCH CORE FUNCTIONALITY - Always include these exact selectors */
#Kinetic:checked ~* .interactive { display: block !important; }
#Kinetic:checked ~* .fallback { display: none !important; }

/* CSS SELECTOR RULES FOR KINETIC INTERACTIONS:
   
   USE ~* (general sibling + universal) when:
   - Target is nested inside another element after the input
   - Most common case in email layouts
   - Example: input -> table -> tr -> td -> div.content
   
   USE ~ (general sibling only) when:
   - Target is a direct sibling of the input
   - Less common in email due to table structures
   - Example: input -> div.content (direct siblings)
*/

/* WORKING SELECTOR PATTERNS:

For TABS (most common):
#tab1:checked ~* .content1 { display: block !important; }
#tab2:checked ~* .content2 { display: block !important; }

For ACCORDIONS:
#acc1:checked ~* .accordion-content1 { display: block !important; }
#acc1:checked ~* .accordion-arrow1 { transform: rotate(180deg); }

For SURVEYS (progressive disclosure):
#q1a:checked ~* .question2 { display: block !important; }
#q1b:checked ~* .question3 { display: block !important; }

For STYLING active states:
#tab1:checked ~* .tab-label1 { background: #007bff !important; color: white !important; }

CRITICAL: Always use !important on display and visibility properties
*/

</style>
</head>
<body class="body">
<!--[if mso]>
<table width="100%" cellspacing="0" cellpadding="0" border="0" role="none">
<tr><td width="600">
<![endif]-->

<div id="body-fix">

<!-- KINETIC LIGHTSWITCH - CRITICAL: This must be first -->
<input type="checkbox" class="kinetic" name="interactive" id="Kinetic" checked style="display: none !important;">

<table id="email-container" width="100%" cellspacing="0" cellpadding="0" border="0" role="none">
<!-- KINETIC EMAIL CONTENT GOES HERE -->
</table>

<!--[if mso]>
</td></tr>
</table>
<![endif]-->
</div>
</body>
</html>`;

const ENHANCED_SYSTEM_PROMPT = `You are an expert EMAIL developer creating KINETIC EMAILS using ONLY HTML and CSS.

CRITICAL KINETIC EMAIL RULES:

1. KINETIC LIGHTSWITCH (MANDATORY):
   - ALWAYS include: <input type="checkbox" class="kinetic" name="interactive" id="Kinetic" checked style="display: none !important;">
   - This MUST be the first element after <table id="email-container">
   - Always include the kinetic lightswitch
   - Place kineitc module within a table, use firt td to separate kinetic from fallback
   - Wrap kinetic content in: <!--[if !mso]><!--> <td class="interactive" style="display: none;"></td><!--<![endif]-->
   - Must wrap opening interactive td with mso code to hide it on outlook
   - for actual kinetic fucntioning code, use <div>'s
   - Wrap fallback content in:  <td class="fallback"></td>
   - Fallback content must use <tr><td><table> structure to to limitations in outlook

2. CSS PSEUDO SELECTORS (CRITICAL UNDERSTANDING):
   
   **USE ~* (99% of cases in email):**
   - When target element is nested inside other elements after the input
   - Email table structures create deep nesting: input -> table -> tr -> td -> content
   - Example: #tab1:checked ~* .content1 { display: block !important; }
   - The ~* means "any element that comes after AND any nested element within those"
   
   **USE ~ (rare in email):**
   - ONLY when target is a direct sibling of the input (same parent, no nesting)
   - Example: input and div are both direct children of same container
   - Email layouts rarely have this structure due to table requirements
   
   **ALWAYS INCLUDE !important on display/visibility properties**
   
   **COMMON EMAIL STRUCTURE requiring ~*:**
   
   Structure: input -> table -> tr -> td -> div.content
   The input is followed by a table, then nested tr, td, and finally the target content.
   This deep nesting is why ~* is required instead of just ~.
   
   Selector: #tab1:checked ~* .content1 { display: block !important; }

3. FALLBACK CONTENT STRUCTURE:
   - Fallback MUST use table-based layout (no divs for structure)
   - Kinetic content CAN use divs freely
   - For surveys: Fallback = single CTA button "Take Survey" with "View in Browser" link
   - For other content: Fallback should match kinetic content but in static table format

4. CONTENT MATCHING:
   - Fallback content should show same information as kinetic version
   - Exception: Surveys show CTA instead of actual survey
   - Use semantic HTML in fallback (proper headings, paragraphs)

WORKING EXAMPLES WITH CORRECT SELECTORS:

TABS EXAMPLE:
HTML Structure: input -> table -> tr -> td -> content (requires ~*)
- Radio inputs: <input type="radio" id="tab1" name="tabs" checked style="display: none;">
- Labels inside table: <label for="tab1">Tab 1</label>
- Content nested in table cells: <div class="content1">Content 1</div>
- CSS: #tab1:checked ~* .content1 { display: block !important; }
- CSS: #tab2:checked ~* .content2 { display: block !important; }
- Active styling: #tab1:checked ~* label[for="tab1"] { background: #007bff !important; }

ACCORDION EXAMPLE:
HTML Structure: input -> table -> tr -> td -> content (requires ~*)
- Checkbox input: <input type="checkbox" id="acc1" style="display: none;">
- Trigger label: <label for="acc1">Click to expand</label>
- Hidden content: <div class="accordion-content" style="display: none;">Hidden content</div>
- CSS: #acc1:checked ~* .accordion-content { display: block !important; }

SURVEY PROGRESSIVE DISCLOSURE:
HTML Structure: input -> table -> tr -> td -> questions (requires ~*)
- Answer inputs: <input type="radio" id="q1a" name="q1" style="display: none;">
- Labels: <label for="q1a">Yes</label>
- Next questions: <div class="question2" style="display: none;">Question 2...</div>
- CSS: #q1a:checked ~* .question2 { display: block !important; }
- CSS: #q1b:checked ~* .question3 { display: block !important; }
- For the fallback on Surveys use a simple CTA button to "take the survey" we will use a view in brower link to get subscribers into kinetic version

SELECTOR PATH EXPLANATION:
input (start) -> table (sibling ~) -> tr (nested *) -> td (nested *) -> content (nested * TARGET)
This is why ~* is required - content is nested multiple levels deep in table structure.

MODIFICATION REQUIREMENTS:
1. Output COMPLETE HTML template from <!DOCTYPE html> to </html>
2. Replace "<!-- KINETIC EMAIL CONTENT GOES HERE -->" with your content
3. Add kinetic-specific CSS in both style sections
4. Include proper lightswitch implementation
5. Create appropriate fallback content
6. Prioritize mobile responsiveness

OUTPUT: Complete modified HTML template ready for email campaigns.`;

// Helper function to detect kinetic technique
function detectKineticTechnique(html) {
  if (html.includes('type="radio"') && html.includes('name=')) {
    if (html.includes('tab')) return 'tabs';
    if (html.includes('question') || html.includes('survey')) return 'survey';
    if (html.includes('slide') || html.includes('carousel')) return 'carousel';
    return 'navigation';
  }
  if (html.includes('type="checkbox"')) {
    if (html.includes('accordion')) return 'accordion';
    return 'toggle';
  }
  return 'unknown';
}

// Main serverless function
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      prompt,
      useTemplate = true,
      complexity = 'intermediate',
      useRAG = false,
      ragModel = 'small',
      metadataFilters = {} // New: optional metadata filters
    } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // RAG: Retrieve similar examples from Pinecone if enabled
    let ragExamples = '';
    let ragMetadata = { used: false, examplesCount: 0, model: ragModel };

    if (useRAG) {
      try {
        console.log(`RAG mode enabled (${ragModel} model) - querying Pinecone for similar examples...`);

        // Lazy load RAG dependencies only when needed
        const { Pinecone } = await import('@pinecone-database/pinecone');
        const OpenAI = (await import('openai')).default;

        const pinecone = new Pinecone({
          apiKey: process.env.PINECONE_API_KEY
        });

        const openai = new OpenAI({
          apiKey: process.env.OPENAI_API_KEY
        });

        // Select embedding model and index based on ragModel parameter
        const embeddingModel = ragModel === 'large' ? 'text-embedding-3-large' : 'text-embedding-3-small';
        const indexName = ragModel === 'large' ? process.env.PINECONE_INDEX_NAME_LARGE : process.env.PINECONE_INDEX_NAME;

        console.log(`Using embedding model: ${embeddingModel}, index: ${indexName}`);

        // Query Rewriting: Use Claude to reformulate the prompt for better retrieval
        let searchQuery = prompt;
        try {
          console.log('Rewriting query with Claude for better retrieval...');
          const rewriteResponse = await anthropic.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 200,
            temperature: 0.3,
            messages: [{
              role: "user",
              content: `You are a search query optimizer for a kinetic email example database.

The user wants: "${prompt}"

Rewrite this into a concise search query (1-2 sentences) that captures:
1. The kinetic technique needed (tabs, accordion, carousel, checkbox hack, etc.)
2. The email purpose (promotional, educational, transactional, etc.)
3. Key features or functionality

Output ONLY the rewritten query, no explanations.`
            }]
          });

          searchQuery = rewriteResponse.content[0].text.trim();
          console.log('Original prompt:', prompt);
          console.log('Rewritten query:', searchQuery);
        } catch (error) {
          console.error('Query rewriting failed, using original prompt:', error);
          searchQuery = prompt;
        }

        // Generate embedding for the rewritten query
        const embeddingResponse = await openai.embeddings.create({
          model: embeddingModel,
          input: searchQuery,
        });

        const queryEmbedding = embeddingResponse.data[0].embedding;

        // Build Pinecone query with optional metadata filters
        const queryOptions = {
          vector: queryEmbedding,
          topK: 10,
          includeMetadata: true,
        };

        // Add metadata filters if provided (hybrid search)
        if (metadataFilters && Object.keys(metadataFilters).length > 0) {
          queryOptions.filter = {};

          // Filter by technique (tabs, accordion, carousel, etc.)
          if (metadataFilters.technique) {
            queryOptions.filter.technique = { $eq: metadataFilters.technique };
          }

          // Filter by complexity (beginner, intermediate, advanced)
          if (metadataFilters.complexity) {
            queryOptions.filter.complexity = { $eq: metadataFilters.complexity };
          }

          // Filter by email purpose (promotional, transactional, educational)
          if (metadataFilters.emailPurpose) {
            queryOptions.filter.emailPurpose = { $eq: metadataFilters.emailPurpose };
          }

          // Filter by type (html or blog)
          if (metadataFilters.type) {
            queryOptions.filter.type = { $eq: metadataFilters.type };
          }

          console.log('Applying metadata filters:', queryOptions.filter);
        }

        // Query Pinecone with hybrid search (vector + metadata)
        const index = pinecone.index(indexName);
        const queryResponse = await index.query(queryOptions);

        console.log(`Found ${queryResponse.matches.length} similar examples from ${ragModel} model`);

        // Filter by similarity threshold (>0.7) and exclude negative examples
        const relevantMatches = queryResponse.matches.filter(match => {
          const isAboveThreshold = match.score > 0.7;
          const isPositiveExample = !match.metadata.exampleType || match.metadata.exampleType === 'positive';
          return isAboveThreshold && isPositiveExample;
        });

        console.log(`Filtered to ${relevantMatches.length} positive examples above 0.7 similarity threshold`);

        // Build RAG context from retrieved examples
        if (relevantMatches.length > 0) {
          ragExamples = '\n\n--- REFERENCE EXAMPLES FROM KNOWLEDGE BASE ---\n\n';
          ragExamples += 'Here are proven examples similar to what the user is requesting. Use these as reference for structure, patterns, and best practices:\n\n';

          relevantMatches.forEach((match, index) => {
            const meta = match.metadata;
            ragExamples += `\nEXAMPLE ${index + 1} (Similarity: ${(match.score * 100).toFixed(1)}%):\n`;

            if (meta.type === 'html') {
              ragExamples += `Description: ${meta.description}\n`;
              ragExamples += `Technique: ${meta.technique}\n`;
              ragExamples += `Purpose: ${meta.emailPurpose}\n`;
              ragExamples += `Complexity: ${meta.complexity}\n`;
              if (meta.keyFeatures && meta.keyFeatures.length > 0) {
                ragExamples += `Features: ${meta.keyFeatures.join(', ')}\n`;
              }
              ragExamples += `\nHTML Code:\n${meta.html}\n`;
              ragExamples += '\n---\n';
            } else if (meta.type === 'blog') {
              ragExamples += `Blog Title: ${meta.blogTitle}\n`;
              ragExamples += `Topic: ${meta.blogTopic}\n`;
              ragExamples += `Key Takeaways: ${meta.keyTakeaways}\n`;
              ragExamples += `\nContent (excerpt):\n${meta.blogContent.substring(0, 1000)}...\n`;
              ragExamples += '\n---\n';
            }
          });

          ragExamples += '\n⚠️ CRITICAL INSTRUCTIONS FOR USING THESE EXAMPLES:\n';
          ragExamples += '1. Study the HTML structure, CSS selectors, and kinetic patterns in the examples above\n';
          ragExamples += '2. REPLICATE the exact CSS selector patterns (especially ~* usage and !important)\n';
          ragExamples += '3. COPY the lightswitch implementation exactly as shown\n';
          ragExamples += '4. MAINTAIN the same table structure and MSO conditional patterns\n';
          ragExamples += '5. Use these as your PRIMARY reference - they are proven working code\n';
          ragExamples += '6. Adapt the content to match the user request, but keep the technical structure identical\n';
          ragExamples += '\n--- END REFERENCE EXAMPLES ---\n\n';

          ragMetadata = {
            used: true,
            examplesCount: relevantMatches.length,
            topScore: relevantMatches[0]?.score || 0,
            examples: relevantMatches.map(match => ({
              description: match.metadata.description || match.metadata.blogTitle || 'Untitled',
              score: match.score,
              technique: match.metadata.technique || match.metadata.blogTopic || 'N/A',
              type: match.metadata.type
            }))
          };
        }
      } catch (error) {
        console.error('RAG retrieval error (continuing without RAG):', error);
        // Continue without RAG if there's an error
      }
    }

    // Enhanced user prompt with specific kinetic requirements
    const userPrompt = `${ragExamples}Create a kinetic email for: ${prompt}

SPECIFIC REQUIREMENTS FOR THIS EMAIL:

1. KINETIC LIGHTSWITCH:
   - Include the lightswitch checkbox as first element
   - Wrap interactive version in <div class="interactive" style="display: none;">
   - Create table-based fallback in <div class="fallback" style="display: block;">

2. CSS SELECTORS:
   - Use correct ~* syntax for nested elements
   - Include !important on all display properties
   - Test that selectors work with email client restrictions

3. FALLBACK STRATEGY:
   ${prompt.toLowerCase().includes('survey') || prompt.toLowerCase().includes('quiz') || prompt.toLowerCase().includes('form') ? 
     '- Create a CTA button "Take Survey" instead of showing actual survey\n   - Include "View in Browser" text in the CTA' :
     '- Match the kinetic content but use static table layout\n   - Show all content that would be available interactively'
   }

4. STRUCTURE:
   - Kinetic content: Can use divs freely for layout
   - Fallback content: Must use table-based structure for email compatibility
   - Both versions should serve the same purpose

CRITICAL OUTPUT REQUIREMENTS:
- Output ONLY the complete HTML document starting with <!DOCTYPE html>
- DO NOT include any explanatory text before or after the HTML
- DO NOT include any markdown formatting or code blocks
- The first line of your response MUST be <!DOCTYPE html>
- The last line of your response MUST be </html>
- NO additional text, explanations, or commentary

Base template to modify:
${BASE_TEMPLATE}

Replace "<!-- KINETIC EMAIL CONTENT GOES HERE -->" with your kinetic email implementation.

BEGIN OUTPUT NOW - HTML ONLY:`;

    console.log('Generating kinetic email for:', prompt);

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4000,
      temperature: 0.7,
      system: ENHANCED_SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: userPrompt
        }
      ]
    });

    const generatedHTML = response.content[0].text;

    // Enhanced validation
    const hasLightswitch = generatedHTML.includes('id="Kinetic"');
    const hasInteractiveClass = generatedHTML.includes('class="interactive"');
    const hasFallbackClass = generatedHTML.includes('class="fallback"');
    const hasProperSelectors = generatedHTML.includes('~*');

    res.status(200).json({
      html: generatedHTML,
      success: true,
      metadata: {
        template: 'enhanced_kinetic_v2',
        complexity,
        hasLightswitch,
        hasInteractiveClass,
        hasFallbackClass,
        hasProperSelectors,
        technique: detectKineticTechnique(generatedHTML),
        validation: {
          lightswitch: hasLightswitch,
          properStructure: hasInteractiveClass && hasFallbackClass,
          cssSelectors: hasProperSelectors
        },
        rag: ragMetadata
      }
    });

  } catch (error) {
    console.error('Generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate email',
      details: error.message 
    });
  }
};