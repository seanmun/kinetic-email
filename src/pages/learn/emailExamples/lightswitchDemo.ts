// Email-ready HTML for Kinetic Lightswitch example
export const lightswitchDemoHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kinetic Lightswitch - Spring Collection</title>
  <style>
    body {
      margin: 0;
      padding: 40px 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
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
      background: linear-gradient(135deg, #6d28d9 0%, #5b21b6 100%);
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

    .content {
      padding: 32px;
    }

    /* Hide the kinetic lightswitch checkbox */
    .kinetic {
      display: none;
    }

    /* Interactive content - shown when checkbox is checked (kinetic support) */
    .interactive {
      display: none;
    }

    /* Show interactive content when checkbox is checked */
    #Kinetic:checked ~* .interactive {
      display: block !important;
    }

    /* Hide fallback content when checkbox is checked */
    #Kinetic:checked ~* .fallback {
      display: none !important;
    }

    /* Fix for AOL/Yahoo */
    #Kinetic:checked ~* .& .fallback {
      display: block !important;
    }
    #Kinetic:checked ~* .& .interactive {
      display: none !important;
    }

    /* Tab styles for interactive version */
    .tabs {
      display: flex;
      border-bottom: 2px solid #e9d5ff;
      margin-bottom: 24px;
    }

    .tab-label {
      flex: 1;
      padding: 12px 20px;
      text-align: center;
      cursor: pointer;
      font-weight: 600;
      color: #6b7280;
      transition: all 0.3s ease;
      border-bottom: 3px solid transparent;
      user-select: none;
    }

    .tab-label:hover {
      background: #faf5ff;
      color: #7c3aed;
    }

    /* Hide all radio buttons */
    input[type="radio"] {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    /* Active tab styling */
    #tab1:checked ~ .tabs .tab-label[for="tab1"],
    #tab2:checked ~ .tabs .tab-label[for="tab2"],
    #tab3:checked ~ .tabs .tab-label[for="tab3"] {
      background: white;
      color: #7c3aed;
      border-bottom-color: #7c3aed;
    }

    /* Tab content */
    .tab-content {
      min-height: 200px;
    }

    .content-panel {
      display: none;
    }

    #tab1:checked ~* .content-panel:nth-of-type(1),
    #tab2:checked ~* .content-panel:nth-of-type(2),
    #tab3:checked ~* .content-panel:nth-of-type(3) {
      display: block !important;
    }

    /* Product card styles */
    .product-card {
      padding: 24px;
      border-radius: 12px;
      margin-bottom: 16px;
    }

    .product-card h3 {
      margin: 0 0 12px 0;
      font-size: 20px;
      font-weight: 700;
    }

    .product-card p {
      margin: 0 0 16px 0;
      color: #4b5563;
      line-height: 1.6;
    }

    .product-card.purple {
      background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
      border: 2px solid #e9d5ff;
    }

    .product-card.purple h3 { color: #6d28d9; }
    .product-card.purple .price { color: #7c3aed; }

    .product-card.green {
      background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
      border: 2px solid #bbf7d0;
    }

    .product-card.green h3 { color: #15803d; }
    .product-card.green .price { color: #16a34a; }

    .product-card.amber {
      background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
      border: 2px solid #fde68a;
    }

    .product-card.amber h3 { color: #b45309; }
    .product-card.amber .price { color: #d97706; }

    .cta-button {
      display: inline-block;
      padding: 12px 24px;
      background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: transform 0.2s ease;
    }

    .cta-button:hover {
      transform: translateY(-2px);
    }

    .cta-button.green {
      background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
    }

    .cta-button.amber {
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
    }

    .price {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 16px;
    }

    .footer {
      padding: 24px 32px;
      background: #faf5ff;
      border-top: 2px solid #e9d5ff;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
    }

    .footer a {
      color: #7c3aed;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🌸 Spring Collection 2025</h1>
      <p>Discover our latest footwear styles</p>
    </div>

    <div class="content">
      <!-- The Kinetic Lightswitch checkbox (hidden) -->
      <input type="checkbox" class="kinetic" name="interactive" id="Kinetic" checked>

      <!-- Interactive content - shown in clients that support kinetic emails -->
      <div class="interactive">
        <p style="color: #4b5563; margin-bottom: 24px;">Browse our spring collection by category:</p>

        <!-- Radio buttons for tabs (hidden) -->
        <input type="radio" name="tabs" id="tab1" checked>
        <input type="radio" name="tabs" id="tab2">
        <input type="radio" name="tabs" id="tab3">

        <!-- Tab navigation -->
        <div class="tabs">
          <label for="tab1" class="tab-label">Sneakers</label>
          <label for="tab2" class="tab-label">Sandals</label>
          <label for="tab3" class="tab-label">Boots</label>
        </div>

        <!-- Tab content -->
        <div class="tab-content">
          <!-- Sneakers -->
          <div class="content-panel">
            <div class="product-card purple">
              <h3>Spring Sneaker Collection</h3>
              <p>Our lightweight, breathable sneakers are perfect for spring walks and casual outings.</p>
              <div class="price">$89.99</div>
              <a href="#" class="cta-button">Shop Now</a>
            </div>
          </div>

          <!-- Sandals -->
          <div class="content-panel">
            <div class="product-card green">
              <h3>Spring Sandal Collection</h3>
              <p>Get ready for warmer days with our comfortable and stylish sandals in vibrant colors.</p>
              <div class="price">$59.99</div>
              <a href="#" class="cta-button green">Shop Now</a>
            </div>
          </div>

          <!-- Boots -->
          <div class="content-panel">
            <div class="product-card amber">
              <h3>Spring Boot Collection</h3>
              <p>Our weather-resistant spring boots are perfect for those unexpected spring showers.</p>
              <div class="price">$129.99</div>
              <a href="#" class="cta-button amber">Shop Now</a>
            </div>
          </div>
        </div>

        <p style="margin-top: 24px; padding: 16px; background: #f3e8ff; border-radius: 8px; color: #6d28d9; font-size: 14px; border: 2px solid #e9d5ff;">
          <strong>✨ You're seeing the interactive version!</strong> Your email client supports kinetic emails. Click the tabs above to explore different categories.
        </p>
      </div>

      <!-- Fallback content - shown in clients that don't support kinetic emails -->
      <div class="fallback">
        <p style="color: #4b5563; margin-bottom: 24px;">Check out our latest products below:</p>

        <div class="product-card purple">
          <h3>Spring Sneaker Collection</h3>
          <p>Our lightweight, breathable sneakers are perfect for spring walks and casual outings.</p>
          <div class="price">$89.99</div>
          <a href="#" class="cta-button">Shop Now</a>
        </div>

        <div class="product-card green">
          <h3>Spring Sandal Collection</h3>
          <p>Get ready for warmer days with our comfortable and stylish sandals in vibrant colors.</p>
          <div class="price">$59.99</div>
          <a href="#" class="cta-button green">Shop Now</a>
        </div>

        <div class="product-card amber">
          <h3>Spring Boot Collection</h3>
          <p>Our weather-resistant spring boots are perfect for those unexpected spring showers.</p>
          <div class="price">$129.99</div>
          <a href="#" class="cta-button amber">Shop Now</a>
        </div>

        <p style="margin-top: 24px; padding: 16px; background: #fee2e2; border-radius: 8px; color: #991b1b; font-size: 14px; border: 2px solid #fecaca;">
          <strong>📧 Standard version:</strong> Your email client doesn't support interactive features, so we're showing all products in a simple list format.
        </p>
      </div>
    </div>

    <div class="footer">
      <p>This email demonstrates the <strong>Kinetic Lightswitch</strong> technique</p>
      <p style="margin-top: 8px;">Built with <a href="https://kinetic.email">Kinetic.Email</a></p>
    </div>
  </div>
</body>
</html>
`;
