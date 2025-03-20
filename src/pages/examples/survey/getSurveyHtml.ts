// src/components/examples/survey/getSurveyHtml.ts

// Function to get the interactive preview HTML
export const getSurveyPreviewHtml = () => {
    return `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.5;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background: #f8f8f8;
      }
      
      .email-container {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        padding: 30px;
      }
      
      h1 {
        color: #4a4a4a;
        text-align: center;
        margin-top: 0;
        margin-bottom: 25px;
        font-size: 24px;
      }
      
      h2 {
        color: #2c3e50;
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 20px;
      }
      
      p {
        color: #596677;
        margin-bottom: 15px;
      }
  
      /* Hide radio inputs */
      .survey-input { 
        display: none; 
      }
  
      /* Survey container */
      .survey-wrapper {
        border: 1px solid #eaeaea;
        border-radius: 8px;
        overflow: hidden;
        padding: 25px;
        margin: 20px 0;
        background: #f9f9f9;
      }
  
      /* Survey content */
      .survey-content {
        display: none;
      }
  
      /* Make the initial question visible by default */
      .survey-content.active {
        display: block;
      }
  
      /* Style the answer options */
      .survey-option {
        display: block;
        padding: 15px;
        margin: 12px 0;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
        color: #444;
      }
  
      .survey-option:hover {
        background: #f0f7ff;
        border-color: #3498db;
        transform: translateY(-2px);
        box-shadow: 0 3px 10px rgba(0,0,0,0.05);
      }
      
      .response-container {
        background: #ebf7f9;
        border-radius: 6px;
        padding: 20px;
        margin-top: 20px;
        border-left: 4px solid #3498db;
      }
      
      .response-icon {
        display: block;
        width: 60px;
        height: 60px;
        background: #3498db;
        border-radius: 50%;
        margin: 0 auto 15px;
        position: relative;
      }
      
      .response-icon:before {
        content: "✓";
        font-size: 36px;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
  
      /* Show response based on selected option */
      #q1a:checked ~ .survey-wrapper #question1,
      #q1b:checked ~ .survey-wrapper #question1,
      #q1c:checked ~ .survey-wrapper #question1 {
        display: none;
      }
  
      #q1a:checked ~ .survey-wrapper #response1a,
      #q1b:checked ~ .survey-wrapper #response1b,
      #q1c:checked ~ .survey-wrapper #response1c {
        display: block;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <h1>Tell Us Your Preferences</h1>
      
      <p>We'd love to know what you're interested in so we can personalize your shopping experience.</p>
      
      <input type="radio" id="q1a" name="question1" class="survey-input">
      <input type="radio" id="q1b" name="question1" class="survey-input">
      <input type="radio" id="q1c" name="question1" class="survey-input">
  
      <div class="survey-wrapper">
        <div id="question1" class="survey-content active">
          <h2>What type of products are you interested in?</h2>
          <label for="q1a" class="survey-option">Women's Apparel</label>
          <label for="q1b" class="survey-option">Men's Apparel</label>
          <label for="q1c" class="survey-option">Accessories</label>
        </div>
  
        <div id="response1a" class="survey-content">
          <div class="response-icon"></div>
          <h2>Thanks for your interest in Women's Apparel!</h2>
          <div class="response-container">
            <p>We'll personalize your future emails with our latest women's collections and exclusive offers.</p>
            <p>Watch your inbox for our upcoming summer fashion preview.</p>
          </div>
        </div>
  
        <div id="response1b" class="survey-content">
          <div class="response-icon"></div>
          <h2>Thanks for your interest in Men's Apparel!</h2>
          <div class="response-container">
            <p>We'll personalize your future emails with our latest men's collections and exclusive offers.</p>
            <p>Watch your inbox for our upcoming summer fashion preview.</p>
          </div>
        </div>
  
        <div id="response1c" class="survey-content">
          <div class="response-icon"></div>
          <h2>Thanks for your interest in Accessories!</h2>
          <div class="response-container">
            <p>We'll personalize your future emails with our latest accessories and exclusive offers.</p>
            <p>Watch your inbox for our upcoming summer collection preview.</p>
          </div>
        </div>
      </div>
      
      <p style="text-align: center; color: #888; font-size: 14px; margin-top: 30px;">
        Your feedback helps us provide content that matters to you. Thanks for participating!
      </p>
    </div>
  </body>
  </html>`;
  };
  
  // Function to get the fallback HTML
  export const getSurveyFallbackHtml = () => {
    return `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.5;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background: #f8f8f8;
      }
      
      .email-container {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        padding: 30px;
      }
      
      h1 {
        color: #4a4a4a;
        text-align: center;
        margin-top: 0;
        margin-bottom: 25px;
        font-size: 24px;
      }
      
      h2 {
        color: #2c3e50;
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 20px;
      }
      
      p {
        color: #596677;
        margin-bottom: 15px;
      }
      
      .static-options {
        border: 1px solid #eaeaea;
        border-radius: 8px;
        overflow: hidden;
        padding: 25px;
        margin: 20px 0;
        background: #f9f9f9;
      }
      
      .button {
        display: inline-block;
        padding: 10px 20px;
        background: #3498db;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        font-weight: 500;
        margin-top: 10px;
      }
      
      .note {
        background: #fff8e1;
        border-radius: 6px;
        padding: 15px;
        margin-top: 20px;
        border-left: 4px solid #ffc107;
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <h1>Tell Us Your Preferences</h1>
      
      <p>We'd love to know what you're interested in so we can personalize your shopping experience.</p>
      
      <div class="static-options">
        <h2>What type of products are you interested in?</h2>
        <p>To tell us your preferences, please click the button below to visit our preference center:</p>
        <a href="#" class="button">Update Preferences</a>
        
        <div class="note">
          <p>Note: Some email clients support interactive surveys directly in the email. If you're viewing this message in a supported client, you would be able to make your selection right here.</p>
        </div>
      </div>
      
      <p style="text-align: center; color: #888; font-size: 14px; margin-top: 30px;">
        Your feedback helps us provide content that matters to you. Thanks for participating!
      </p>
    </div>
  </body>
  </html>`;
  };