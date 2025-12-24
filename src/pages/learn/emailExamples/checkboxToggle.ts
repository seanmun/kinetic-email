// Email-ready HTML for Checkbox Toggle example from CheckboxHackModule
export const checkboxToggleHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Checkbox Hack - Simple Toggle Example</title>
  <style>
    body {
      margin: 0;
      padding: 40px 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      padding: 40px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }

    h1 {
      color: #1a202c;
      font-size: 32px;
      margin: 0 0 12px 0;
      font-weight: 800;
    }

    .subtitle {
      color: #4a5568;
      font-size: 16px;
      margin: 0 0 32px 0;
    }

    .description {
      background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%);
      padding: 20px;
      border-radius: 12px;
      border: 2px solid #60a5fa;
      margin-bottom: 24px;
    }

    .description p {
      margin: 0;
      color: #1e3a8a;
      line-height: 1.6;
    }

    /* Hide the checkbox */
    #demo-toggle {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    /* Style the toggle button (label) */
    .toggle-label {
      display: inline-block;
      padding: 16px 32px;
      background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%);
      color: white;
      font-weight: 700;
      font-size: 16px;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
      user-select: none;
    }

    .toggle-label:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5);
    }

    /* When checkbox is checked, change button color */
    #demo-toggle:checked ~ .toggle-label {
      background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
    }

    /* Hide content by default */
    .toggle-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease;
    }

    /* Show content when checkbox is checked */
    #demo-toggle:checked ~ .toggle-content {
      max-height: 300px;
    }

    .content-box {
      margin-top: 24px;
      padding: 24px;
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      border-radius: 12px;
      border: 2px solid #10b981;
    }

    .content-box h2 {
      margin: 0 0 12px 0;
      color: #065f46;
      font-size: 20px;
      font-weight: 700;
    }

    .content-box p {
      margin: 0;
      color: #047857;
      line-height: 1.6;
    }

    .footer {
      margin-top: 32px;
      padding-top: 24px;
      border-top: 2px solid #e5e7eb;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
    }

    .footer a {
      color: #3b82f6;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 The Checkbox Hack</h1>
    <p class="subtitle">Learn kinetic email interactivity - no JavaScript required!</p>

    <div class="description">
      <p><strong>Try it now:</strong> Click the button below to toggle content visibility. This uses pure HTML + CSS to create interactivity inside an email!</p>
    </div>

    <!-- The hidden checkbox - this is the key to kinetic emails -->
    <input type="checkbox" id="demo-toggle">

    <!-- The visible button (actually a label linked to the checkbox) -->
    <label for="demo-toggle" class="toggle-label">
      Toggle Content
    </label>

    <!-- The content that appears when checkbox is checked -->
    <div class="toggle-content">
      <div class="content-box">
        <h2>✨ You did it!</h2>
        <p>This content is now visible because you clicked the toggle button. In a real email campaign, this could contain:</p>
        <ul style="margin: 12px 0 0 0; padding-left: 20px; color: #047857;">
          <li>Additional product details</li>
          <li>Hidden discount codes</li>
          <li>Expandable FAQs</li>
          <li>Image galleries</li>
        </ul>
      </div>
    </div>

    <div class="footer">
      <p>This email was sent from <a href="https://kinetic.email">Kinetic.Email</a></p>
      <p style="margin-top: 8px; font-size: 12px;">Learn how to build interactive emails without JavaScript</p>
    </div>
  </div>
</body>
</html>
`;
