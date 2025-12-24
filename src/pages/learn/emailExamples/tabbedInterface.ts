// Email-ready HTML for Tabbed Interface example
export const tabbedInterfaceHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tabbed Interface - Kinetic Email Example</title>
  <style>
    body {
      margin: 0;
      padding: 40px 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      min-height: 100vh;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }

    .header {
      padding: 40px;
      background: linear-gradient(135deg, #312e81 0%, #4c1d95 100%);
      color: white;
    }

    .header h1 {
      margin: 0 0 8px 0;
      font-size: 32px;
      font-weight: 800;
    }

    .header p {
      margin: 0;
      opacity: 0.9;
      font-size: 16px;
    }

    /* Hide all radio buttons */
    input[type="radio"] {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    /* Tab navigation */
    .tabs {
      display: flex;
      background: #f3f4f6;
      border-bottom: 2px solid #e5e7eb;
    }

    .tab-label {
      flex: 1;
      padding: 16px 24px;
      text-align: center;
      cursor: pointer;
      font-weight: 600;
      color: #6b7280;
      transition: all 0.3s ease;
      border-bottom: 3px solid transparent;
      user-select: none;
    }

    .tab-label:hover {
      background: #e5e7eb;
      color: #374151;
    }

    /* Active tab styling */
    #tab1:checked ~ .tabs .tab-label[for="tab1"],
    #tab2:checked ~ .tabs .tab-label[for="tab2"],
    #tab3:checked ~ .tabs .tab-label[for="tab3"] {
      background: white;
      color: #6366f1;
      border-bottom-color: #6366f1;
    }

    /* Tab content container */
    .tab-content {
      padding: 32px;
      min-height: 250px;
    }

    /* Hide all content by default */
    .content-panel {
      display: none;
    }

    /* Show content when corresponding radio is checked */
    #tab1:checked ~ .tab-content .content-panel:nth-of-type(1),
    #tab2:checked ~ .tab-content .content-panel:nth-of-type(2),
    #tab3:checked ~ .tab-content .content-panel:nth-of-type(3) {
      display: block;
    }

    .content-panel h2 {
      margin: 0 0 16px 0;
      color: #1f2937;
      font-size: 24px;
      font-weight: 700;
    }

    .content-panel p {
      margin: 0 0 16px 0;
      color: #4b5563;
      line-height: 1.6;
    }

    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .feature-list li {
      padding: 12px 16px;
      margin-bottom: 8px;
      background: linear-gradient(135deg, #ede9fe 0%, #e0e7ff 100%);
      border-radius: 8px;
      border-left: 4px solid #6366f1;
      color: #4338ca;
      font-weight: 500;
    }

    .cta-button {
      display: inline-block;
      margin-top: 16px;
      padding: 14px 28px;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: transform 0.2s ease;
    }

    .cta-button:hover {
      transform: translateY(-2px);
    }

    .footer {
      padding: 24px 32px;
      background: #f9fafb;
      border-top: 2px solid #e5e7eb;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
    }

    .footer a {
      color: #6366f1;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📑 Tabbed Email Interface</h1>
      <p>Click the tabs below to explore different sections</p>
    </div>

    <!-- Radio buttons for tab state (hidden) -->
    <input type="radio" name="tabs" id="tab1" checked>
    <input type="radio" name="tabs" id="tab2">
    <input type="radio" name="tabs" id="tab3">

    <!-- Tab navigation -->
    <div class="tabs">
      <label for="tab1" class="tab-label">Features</label>
      <label for="tab2" class="tab-label">Benefits</label>
      <label for="tab3" class="tab-label">Pricing</label>
    </div>

    <!-- Tab content -->
    <div class="tab-content">
      <!-- Tab 1: Features -->
      <div class="content-panel">
        <h2>✨ Powerful Features</h2>
        <p>Discover what makes our product stand out from the competition:</p>
        <ul class="feature-list">
          <li>🚀 Lightning-fast performance</li>
          <li>🔒 Enterprise-grade security</li>
          <li>🎨 Beautiful, customizable design</li>
          <li>📱 Works seamlessly across devices</li>
        </ul>
        <a href="#" class="cta-button">Learn More</a>
      </div>

      <!-- Tab 2: Benefits -->
      <div class="content-panel">
        <h2>💎 Key Benefits</h2>
        <p>See how our solution transforms your workflow:</p>
        <ul class="feature-list">
          <li>⏱️ Save 10+ hours per week</li>
          <li>📈 Increase productivity by 40%</li>
          <li>💰 Reduce costs significantly</li>
          <li>😊 Improve team satisfaction</li>
        </ul>
        <a href="#" class="cta-button">Start Free Trial</a>
      </div>

      <!-- Tab 3: Pricing -->
      <div class="content-panel">
        <h2>💵 Simple Pricing</h2>
        <p>Choose the plan that works best for you:</p>
        <ul class="feature-list">
          <li>🎁 Starter: $0/month - Perfect for individuals</li>
          <li>💼 Pro: $29/month - For growing teams</li>
          <li>🏢 Enterprise: Custom - For large organizations</li>
        </ul>
        <a href="#" class="cta-button">View All Plans</a>
      </div>
    </div>

    <div class="footer">
      <p>This interactive email was created with <a href="https://kinetic.email">Kinetic.Email</a></p>
      <p style="margin-top: 8px; font-size: 12px;">Build engaging emails without JavaScript</p>
    </div>
  </div>
</body>
</html>
`;
