// api/generate.js - Vercel serverless function - CommonJS version 2
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
.body { word-wrap: normal; word-spacing:normal; }

/* ANDROID FIXES */
div[style*="margin: 16px 0"] { margin: 0!important; }

/* LAPOSTE WEBMAIL */
#message *{ all:revert }

/* EMAIL CONTAINER */
table#email-container { max-width: 600px; margin-left: auto; margin-right: auto; }

/* RESPONSIVE UTILITY CLASSES */
.hide { display: none !important; width: 0px !important; height: 0px !important; mso-hide: all; font-size: 0px; }
.mobile { width: 0; max-height: 0; overflow: hidden; float: left; display: none; }

@media only screen and (max-width: 600px) { 
    .mobile {display : block !important;width : 100% !important;max-height: inherit !important;overflow : visible !important;float : none !important;}
    .desktop {display: none !important;width: 0px !important;height: 0px !important;mso-hide: all; font-size: 0px;}
    .hidemobile {display: none !important;width: 0px !important;height: 0px !important;}
    .full {width: 100% !important;float: none !important;display: block !important;margin-right: auto !important;margin-left: auto !important;padding-left: 0px !important;padding-right: 0px !important;text-align: center !important;padding-top: 10px !important;padding-bottom: 10px !important;}
    .full0 {width: 100% !important;float: none !important;display: block !important;margin-right: auto !important;margin-left: auto !important;padding-left: 0px !important;padding-right: 0px !important;text-align: center !important;}
    .mobile-center {margin-left: auto !important;margin-right: auto !important;display: table !important;}
    .fluid {width:100% !important;}
}

/* KINETIC EMAIL STYLES - PLACE KINETIC CSS HERE */
</style>

<style data-ignore-inlining>
/* KINETIC INTERACTIVITY CSS GOES HERE */
</style>
</head>
<body id="body" xml:lang="en" class="body">
<div style="display:none">
Preview text here &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
</div>
<div id="body-fix" role="article" aria-roledescription="email" aria-label="kinetic email" lang="en" dir="ltr" style="font-size:medium; font-size:max(16px, 1rem)">
<!--[if (gte mso 9) | IE]>
<table align="center" width="600" style="margin-left:auto; margin-right:auto;" role="none">
<tr><td>
<![endif]-->

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

CRITICAL INSTRUCTIONS:
- You MUST output the COMPLETE modified HTML template
- Do NOT provide instructions or explanations 
- Do NOT break down the template into pieces
- Output the ENTIRE HTML from <!DOCTYPE html> to </html>

EMAIL CONSTRAINTS:
- This is for EMAIL CLIENTS (Apple Mail, iOS Mail)
- NO JavaScript allowed
- Use checkbox hack: hidden inputs + CSS :checked selectors
- Table-based layouts required for email compatibility

BASE TEMPLATE TO MODIFY:
${BASE_TEMPLATE}

MODIFICATION REQUIREMENTS:
1. Keep the entire template structure intact
2. Replace "<!-- KINETIC EMAIL CONTENT GOES HERE -->" with your email content
3. Add kinetic CSS in the "/* KINETIC EMAIL STYLES */" section  
4. Add interactive CSS in the <style data-ignore-inlining> block
5. Include lightswitch pattern and proper content labeling

WORKING KINETIC PATTERN:
- Hidden inputs: <input type="radio" id="tab1" name="tabs" checked style="display:none;">
- Clickable labels: <label for="tab1">Click me</label>
- Content sections with classes: kinetic-content (hidden), fallback-content (shown)
- CSS selectors: #tab1:checked ~ table#email-container .content { display: block !important; }

OUTPUT REQUIREMENT: Complete modified HTML template ready to use in email campaigns.`;

// Helper function to detect kinetic technique
function detectKineticTechnique(html) {
  if (html.includes('type="radio"') && html.includes('name=')) {
    if (html.includes('tab')) return 'tabs';
    if (html.includes('question') || html.includes('survey')) return 'survey';
    if (html.includes('slide') || html.includes('carousel')) return 'carousel';
    return 'navigation';
  }
  if (html.includes('type="checkbox"')) return 'toggle';
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

    const userPrompt = `Create a kinetic email for: ${prompt}

YOU MUST OUTPUT THE COMPLETE MODIFIED HTML TEMPLATE - NOT INSTRUCTIONS!

CRITICAL REQUIREMENTS:
1. Output the ENTIRE base template HTML from <!DOCTYPE html> to </html>
2. Insert your kinetic email content where it says "<!-- KINETIC EMAIL CONTENT GOES HERE -->"
3. Add kinetic CSS in the designated style sections
4. Do NOT give instructions - output the complete working HTML

KINETIC TECHNIQUE:
- Use checkbox hack: hidden inputs + CSS :checked selectors
- Include lightswitch pattern with kinetic-content/fallback-content classes
- Use table layouts for email compatibility
- Add proper mobile responsive behavior

OUTPUT FORMAT: Complete HTML template with your content inserted (no explanations or instructions).`;

    console.log('Generating complete HTML template for:', prompt);

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

    res.status(200).json({
      html: generatedHTML,
      success: true,
      metadata: {
        template: 'base_template_v1',
        complexity,
        hasLightswitch: generatedHTML.includes('id="Kinetic"'),
        technique: detectKineticTechnique(generatedHTML)
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