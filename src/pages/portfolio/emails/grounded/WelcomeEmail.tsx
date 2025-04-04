// src/pages/portfolio/emails/daylight/SpringForwardEmail.tsx
// Enhanced responsive email component for Spring Forward campaign

import React, { useMemo } from 'react';

// Note: These exports are used by other components to access metadata and the HTML
// Export metadata for access in ProjectPage or other components
export const emailMetadata = {
  id: 'welcome',
  name: 'Welcome',
  description: 'Reminder email about the upcoming daylight savings time change with interactive checkbox to set a calendar reminder.',
  subject: "Don't forget to Spring Forward this weekend!",
  sender: 'ClockMaster',
  date: 'March 8, 2024',
};

// Helper function to generate image paths
// This function takes a boolean parameter to determine whether to use relative or absolute URLs
const getImagePath = (filename: string, useAbsoluteUrls = false) => {
  const basePath = useAbsoluteUrls 
    ? 'https://kinetic.email/portfolio/daylight/images/' 
    : '/portfolio/daylight/images/';
  return `${basePath}${filename}`;
};

// Generate the email HTML with the given image path function
const generateEmailHTML = (imgFn: (filename: string) => string) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Welcome to TechFlow</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif;">
  <div style="width:100%; max-width:600px; font-family:Arial, sans-serif; margin:0 auto;">
    <header style="background-color:#6366f1; color:white; padding:20px; text-align:center;">
      <img src="images/techflow-logo.png" alt="TechFlow Logo" style="max-width:150px;">
      <h1 style="margin-top:15px;">Welcome to TechFlow!</h1>
    </header>
    
    <div style="padding:20px; background-color:#f3f4f6;">
      <div style="background-color:white; border-radius:8px; padding:20px; margin:20px 0;">
        <h2 style="color:#4f46e5; text-align:center; margin-top:0;">Let's get you started</h2>
        <p style="color:#4b5563; line-height:1.5;">Thank you for joining TechFlow! We're excited to help you streamline your workflow and boost your productivity. Here's how to get started:</p>
      </div>
      
      <!-- Step-by-step guide with accordion -->
      <div style="background-color:white; border-radius:8px; overflow:hidden; margin:20px 0; border:1px solid #d1d5db;">
        <!-- Step 1 -->
        <div style="border-bottom:1px solid #e5e7eb;">
          <input type="checkbox" id="step1" style="display:none;" checked>
          <label for="step1" style="display:block; padding:15px 20px; background-color:#f9fafb; font-weight:600; color:#4f46e5; cursor:pointer; position:relative;">
            Step 1: Complete Your Profile
            <span style="position:absolute; right:20px; top:15px;">▼</span>
          </label>
          <div style="padding:20px; display:block;">
            <p style="color:#4b5563; margin-top:0;">Your profile helps us personalize your experience. Add your details, preferences, and profile picture.</p>
            <img src="images/profile-setup.jpg" alt="Profile Setup" style="width:100%; max-width:400px; display:block; margin:15px auto; border-radius:4px;">
            <a href="#" style="display:inline-block; background-color:#6366f1; color:white; text-decoration:none; padding:10px 20px; border-radius:4px; margin-top:10px;">Complete Profile</a>
          </div>
        </div>
        
        <!-- Step 2 -->
        <div style="border-bottom:1px solid #e5e7eb;">
          <input type="checkbox" id="step2" style="display:none;">
          <label for="step2" style="display:block; padding:15px 20px; background-color:#f9fafb; font-weight:600; color:#4f46e5; cursor:pointer; position:relative;">
            Step 2: Connect Your Apps
            <span style="position:absolute; right:20px; top:15px;">▼</span>
          </label>
          <div style="padding:20px; display:none;">
            <p style="color:#4b5563; margin-top:0;">TechFlow works best when connected to your favorite tools. Set up integrations with your existing workflow.</p>
            <div style="display:flex; flex-wrap:wrap; gap:10px; margin:15px 0;">
              <img src="${imgFn('integration-1.jpg')}" alt="Integration" style="width:80px; height:80px; object-fit:cover; border-radius:4px;">
              <img src="${imgFn('integration-2.jpg')}" alt="Integration" style="width:80px; height:80px; object-fit:cover; border-radius:4px;">
              <img src="${imgFn('integration-3.jpg')}" alt="Integration" style="width:80px; height:80px; object-fit:cover; border-radius:4px;">
              <img src="${imgFn('integration-4.jpg')}" alt="Integration" style="width:80px; height:80px; object-fit:cover; border-radius:4px;">
            </div>
            <a href="#" style="display:inline-block; background-color:#6366f1; color:white; text-decoration:none; padding:10px 20px; border-radius:4px; margin-top:10px;">Connect Apps</a>
          </div>
        </div>
        
        <!-- Step 3 -->
        <div>
          <input type="checkbox" id="step3" style="display:none;">
          <label for="step3" style="display:block; padding:15px 20px; background-color:#f9fafb; font-weight:600; color:#4f46e5; cursor:pointer; position:relative;">
            Step 3: Explore Features
            <span style="position:absolute; right:20px; top:15px;">▼</span>
          </label>
          <div style="padding:20px; display:none;">
            <p style="color:#4b5563; margin-top:0;">Discover the powerful features TechFlow offers to help you work smarter, not harder.</p>
            <img src="images/features-overview.jpg" alt="Features Overview" style="width:100%; max-width:400px; display:block; margin:15px auto; border-radius:4px;">
            <a href="#" style="display:inline-block; background-color:#6366f1; color:white; text-decoration:none; padding:10px 20px; border-radius:4px; margin-top:10px;">Take the Tour</a>
          </div>
        </div>
      </div>
      
      <div style="background-color:#eff6ff; border-radius:8px; padding:20px; margin:20px 0; text-align:center;">
        <h3 style="color:#4f46e5; margin-top:0;">Need assistance?</h3>
        <p style="color:#6366f1;">Our support team is here to help you get the most out of TechFlow.</p>
        <a href="#" style="display:inline-block; background-color:#6366f1; color:white; text-decoration:none; padding:12px 25px; border-radius:6px; margin-top:15px; font-weight:bold;">CONTACT SUPPORT</a>
      </div>
    </div>
    
    <footer style="background-color:#1f2937; color:white; padding:15px; text-align:center; font-size:12px;">
      <p>© 2024 TechFlow. All Rights Reserved.</p>
      <p>Questions? Contact us at support@techflow.example</p>
      <p><a href="#" style="color:#9ca3af;">Unsubscribe</a> | <a href="#" style="color:#9ca3af;">Email Preferences</a></p>
    </footer>
  </div>

  <script>
    // Simple accordion functionality
    document.addEventListener('DOMContentLoaded', function() {
      var accordionItems = document.querySelectorAll('input[type="checkbox"]');
      
      for (var i = 0; i < accordionItems.length; i++) {
        accordionItems[i].addEventListener('change', function() {
          var content = this.nextElementSibling.nextElementSibling;
          var arrow = this.nextElementSibling.querySelector('span');
          
          if (this.checked) {
            content.style.display = 'block';
            arrow.innerHTML = '▼';
          } else {
            content.style.display = 'none';
            arrow.innerHTML = '▶';
          }
        });
        
        // Initialize based on checked state
        var content = accordionItems[i].nextElementSibling.nextElementSibling;
        var arrow = accordionItems[i].nextElementSibling.querySelector('span');
        
        if (accordionItems[i].checked) {
          content.style.display = 'block';
          arrow.innerHTML = '▼';
        } else {
          content.style.display = 'none';
          arrow.innerHTML = '▶';
        }
      }
    });
  </script>
</body>
</html>`;

// The actual email component
const SpringForwardEmail: React.FC = () => {
  // Use memoized HTML to avoid regenerating on every render
  const emailHtml = useMemo(() => {
    // Get image function that uses relative paths for the preview
    const img = (filename: string) => getImagePath(filename, false);
    return generateEmailHTML(img);
  }, []);

  // Return the HTML content in an iframe for proper rendering
  return (
    <iframe 
      srcDoc={emailHtml} 
      title="Spring Forward Email" 
      style={{ 
        width: '100%', 
        height: '100%', 
        border: 'none',
        minHeight: '500px'
      }}
      sandbox="allow-same-origin"
    />
  );
};

// Export function to get the raw HTML for the export button feature
// This is used by ProjectPage.tsx when the user clicks "Export HTML"
export const getEmailHTML = () => {
  // Get image function that uses absolute URLs for the exported HTML
  const img = (filename: string) => getImagePath(filename, true);
  return generateEmailHTML(img);
};

export default SpringForwardEmail;



