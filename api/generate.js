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

/* Show interactive content when kinetic is supported */
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

/* KINETIC LIGHTSWITCH ADVANCED SELECTORS */
#Kinetic:checked ~* .interactive { display: block !important; }
#Kinetic:checked ~* .fallback { display: none !important; }

/* Sibling combinator examples for kinetic interactions */
/* IMPORTANT: Use ~* for deep nesting, ~ for direct siblings */

/* Example tab structure:
#tab1:checked ~* .content1 { display: block !important; }
#tab2:checked ~* .content2 { display: block !important; }
*/

/* Example accordion structure:
#accordion1:checked ~* .accordion-content1 { display: block !important; }
#accordion1:checked ~* .accordion-arrow1 { transform: rotate(180deg); }
*/

/* Example survey structure:
#q1a:checked ~* .question2 { display: block !important; }
#q1b:checked ~* .question3 { display: block !important; }
*/

/* Add your specific kinetic interaction styles here */

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
   - Wrap kinetic content in: <div class="interactive" style="display: none;">
   - Wrap fallback content in: <div class="fallback" style="display: block;">

2. CSS PSEUDO SELECTORS:
   - Use ~* for nested elements: #tab1:checked ~* .content1 { display: block !important; }
   - Use ~ only for direct siblings: #tab1:checked ~ .tabs label[for="tab1"] { background: blue; }
   - ALWAYS include !important on display properties
   - Test all selectors work with deep nesting

3. FALLBACK CONTENT STRUCTURE:
   - Fallback MUST use table-based layout (no divs for structure)
   - Kinetic content CAN use divs freely
   - For surveys: Fallback = single CTA button "Take Survey" with "View in Browser" link
   - For other content: Fallback should match kinetic content but in static table format

4. CONTENT MATCHING:
   - Fallback content should show same information as kinetic version
   - Exception: Surveys show CTA instead of actual survey
   - Use semantic HTML in fallback (proper headings, paragraphs)

WORKING EXAMPLES:

TABS:
- Radio inputs: <input type="radio" id="tab1" name="tabs" checked style="display: none;">
- Labels: <label for="tab1" style="cursor: pointer;">Tab 1</label>
- Content: <div class="tab-content" id="content1">Content here</div>
- CSS: #tab1:checked ~* #content1 { display: block !important; }

ACCORDION:
- Checkbox inputs: <input type="checkbox" id="acc1" style="display: none;">
- Trigger: <label for="acc1">Click to expand</label>
- Content: <div class="accordion-content">Hidden content</div>
- CSS: #acc1:checked ~* .accordion-content { display: block !important; }

SURVEY:
- Radio inputs for each answer
- Use progressive disclosure: each answer reveals next question
- Fallback: Single table with CTA button

MODIFICATION REQUIREMENTS:
1. Output COMPLETE HTML template from <!DOCTYPE html> to </html>
2. Replace "<!-- KINETIC EMAIL CONTENT GOES HERE -->" with your content
3. Add kinetic-specific CSS in both style sections
4. Include proper lightswitch implementation
5. Create appropriate fallback content

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
    const { prompt, useTemplate = true, complexity = 'intermediate' } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Enhanced user prompt with specific kinetic requirements
    const userPrompt = `Create a kinetic email for: ${prompt}

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

YOU MUST OUTPUT THE COMPLETE MODIFIED HTML TEMPLATE - NO INSTRUCTIONS OR EXPLANATIONS!

Base template to modify:
${BASE_TEMPLATE}

Replace "<!-- KINETIC EMAIL CONTENT GOES HERE -->" with your kinetic email implementation.`;

    console.log('Generating kinetic email for:', prompt);

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
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
        }
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