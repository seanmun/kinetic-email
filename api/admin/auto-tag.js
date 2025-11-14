// api/admin/auto-tag.js - Auto-tag HTML content with AI

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
    const { htmlContent } = req.body;

    if (!htmlContent) {
      return res.status(400).json({ error: 'HTML content is required' });
    }

    console.log('Auto-tagging HTML content...');

    // Lazy load Anthropic
    const Anthropic = (await import('@anthropic-ai/sdk')).default;
    const anthropic = new Anthropic({
      apiKey: process.env.CLAUDE_API_KEY
    });

    // Analyze HTML with Claude
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      temperature: 0.3,
      messages: [{
        role: "user",
        content: `You are an expert at analyzing kinetic email HTML code. Analyze this HTML and extract metadata.

HTML Code:
${htmlContent.substring(0, 5000)}

Extract the following information and return ONLY a JSON object (no explanations):

{
  "description": "A concise prompt that would generate this email (e.g., 'Tabbed product showcase for running shoes with 3 color options, pricing, and features')",
  "technique": "tabs | accordion | survey | carousel | toggle | hybrid | static",
  "emailPurpose": "promotional | transactional | newsletter | survey | educational",
  "complexity": "beginner | intermediate | advanced",
  "keyFeatures": ["lightswitch", "mobileResponsive", "ctaButtons", "productImages", "progressiveDisclosure", "cssAnimations", "multipleInteractions"],
  "bestPracticeTags": ["tableStructure", "msoConditionals", "inlineStyles", "fallbackContent", "accessibility", "darkMode"]
}

Guidelines:
- description: Should be specific about technique, content, and purpose
- technique: Identify the main kinetic interaction pattern (or "static" if none)
- emailPurpose: What is the email's primary goal?
- complexity: Based on code structure and features
- keyFeatures: Only include features that are actually present
- bestPracticeTags: Only include practices that are implemented

Return ONLY the JSON object, no other text.`
      }]
    });

    const responseText = response.content[0].text.trim();

    // Extract JSON from response (handle cases where Claude adds backticks)
    let jsonText = responseText;
    if (responseText.includes('```json')) {
      jsonText = responseText.split('```json')[1].split('```')[0].trim();
    } else if (responseText.includes('```')) {
      jsonText = responseText.split('```')[1].split('```')[0].trim();
    }

    const tags = JSON.parse(jsonText);

    console.log('Auto-tagging successful:', tags);

    res.status(200).json(tags);

  } catch (error) {
    console.error('Auto-tagging error:', error);
    res.status(500).json({
      error: 'Failed to auto-tag content',
      details: error.message
    });
  }
}
