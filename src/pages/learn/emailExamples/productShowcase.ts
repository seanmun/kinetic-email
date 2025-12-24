// Email-ready HTML for Product Showcase Carousel example
export const productShowcaseHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Showcase Carousel - Kinetic Email</title>
  <style>
    body {
      margin: 0;
      padding: 40px 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
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
      background: linear-gradient(135deg, #831843 0%, #581c87 100%);
      color: white;
      text-align: center;
    }

    .header h1 {
      margin: 0 0 8px 0;
      font-size: 32px;
      font-weight: 800;
    }

    .header p {
      margin: 0;
      opacity: 0.9;
    }

    /* Hide radio buttons */
    input[type="radio"] {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    /* Carousel navigation */
    .carousel-nav {
      display: flex;
      justify-content: center;
      gap: 12px;
      padding: 24px;
      background: #f9fafb;
    }

    .carousel-dot {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #e5e7eb;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: #9ca3af;
      user-select: none;
    }

    .carousel-dot:hover {
      background: #d1d5db;
    }

    /* Active dot */
    #product1:checked ~ .carousel-nav .carousel-dot[for="product1"],
    #product2:checked ~ .carousel-nav .carousel-dot[for="product2"],
    #product3:checked ~ .carousel-nav .carousel-dot[for="product3"] {
      background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
      color: white;
      transform: scale(1.1);
    }

    /* Product slides */
    .carousel-content {
      position: relative;
      min-height: 450px;
    }

    .product-slide {
      display: none;
      padding: 32px;
    }

    /* Show active slide */
    #product1:checked ~ .carousel-content .product-slide:nth-of-type(1),
    #product2:checked ~ .carousel-content .product-slide:nth-of-type(2),
    #product3:checked ~ .carousel-content .product-slide:nth-of-type(3) {
      display: block;
    }

    .product-image {
      width: 100%;
      height: 250px;
      background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 80px;
      margin-bottom: 24px;
    }

    .product-slide h2 {
      margin: 0 0 12px 0;
      color: #1f2937;
      font-size: 28px;
      font-weight: 700;
    }

    .product-slide .price {
      font-size: 32px;
      font-weight: 800;
      color: #ec4899;
      margin-bottom: 16px;
    }

    .product-slide p {
      margin: 0 0 16px 0;
      color: #4b5563;
      line-height: 1.6;
    }

    .features {
      list-style: none;
      padding: 0;
      margin: 0 0 24px 0;
    }

    .features li {
      padding: 8px 0;
      color: #374151;
      border-bottom: 1px solid #e5e7eb;
    }

    .features li:before {
      content: "✓ ";
      color: #10b981;
      font-weight: 700;
      margin-right: 8px;
    }

    .buy-button {
      display: inline-block;
      padding: 16px 32px;
      background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
      color: white;
      text-decoration: none;
      border-radius: 12px;
      font-weight: 700;
      font-size: 16px;
      transition: transform 0.2s ease;
    }

    .buy-button:hover {
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
      color: #ec4899;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🛍️ Product Showcase</h1>
      <p>Click the numbers below to browse our products</p>
    </div>

    <!-- Radio buttons for carousel state -->
    <input type="radio" name="products" id="product1" checked>
    <input type="radio" name="products" id="product2">
    <input type="radio" name="products" id="product3">

    <!-- Carousel navigation dots -->
    <div class="carousel-nav">
      <label for="product1" class="carousel-dot">1</label>
      <label for="product2" class="carousel-dot">2</label>
      <label for="product3" class="carousel-dot">3</label>
    </div>

    <!-- Product slides -->
    <div class="carousel-content">
      <!-- Product 1 -->
      <div class="product-slide">
        <div class="product-image">👟</div>
        <h2>Running Shoes Pro</h2>
        <div class="price">$129.99</div>
        <p>Experience ultimate comfort and performance with our flagship running shoes.</p>
        <ul class="features">
          <li>Advanced cushioning technology</li>
          <li>Breathable mesh upper</li>
          <li>Durable rubber outsole</li>
          <li>Available in 8 colors</li>
        </ul>
        <a href="#" class="buy-button">Add to Cart</a>
      </div>

      <!-- Product 2 -->
      <div class="product-slide">
        <div class="product-image">🎧</div>
        <h2>Wireless Headphones</h2>
        <div class="price">$199.99</div>
        <p>Immerse yourself in crystal-clear audio with active noise cancellation.</p>
        <ul class="features">
          <li>30-hour battery life</li>
          <li>Active noise cancellation</li>
          <li>Premium sound quality</li>
          <li>Foldable design</li>
        </ul>
        <a href="#" class="buy-button">Add to Cart</a>
      </div>

      <!-- Product 3 -->
      <div class="product-slide">
        <div class="product-image">⌚</div>
        <h2>Smart Watch Ultra</h2>
        <div class="price">$399.99</div>
        <p>Track your fitness, health, and stay connected with our most advanced smartwatch.</p>
        <ul class="features">
          <li>Heart rate & sleep tracking</li>
          <li>GPS & water resistant</li>
          <li>7-day battery life</li>
          <li>100+ workout modes</li>
        </ul>
        <a href="#" class="buy-button">Add to Cart</a>
      </div>
    </div>

    <div class="footer">
      <p>This interactive carousel was built with <a href="https://kinetic.email">Kinetic.Email</a></p>
      <p style="margin-top: 8px; font-size: 12px;">No JavaScript required - pure HTML & CSS</p>
    </div>
  </div>
</body>
</html>
`;
