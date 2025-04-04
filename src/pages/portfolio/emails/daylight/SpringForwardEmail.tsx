// src/pages/portfolio/emails/daylight/SpringForwardEmail.tsx
// Enhanced responsive email component for Spring Forward campaign

import React, { useMemo } from 'react';

// Note: These exports are used by other components to access metadata and the HTML
// Export metadata for access in ProjectPage or other components
export const emailMetadata = {
  id: 'spring-forward',
  name: 'Spring Forward Reminder',
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
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Spring Forward Reminder</title>
    <style>
      /* Universal Resets */
      html, body {
        margin: 0;
        padding: 0;
        height: 100% !important;
        width: 100% !important;
      }
      /* Prevent Outlook from adding extra spacing */
      table, td {
        border-collapse: collapse !important;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      /* Remove spacing around images in Outlook */
      img {
        -ms-interpolation-mode: bicubic;
        display: block;
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }
      /* iOS auto-link fix */
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      /* Gmail fixes */
      u + #body a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
      /* Responsive image */
      .fluid {
        max-width: 100% !important;
        height: auto !important;
        width: 100%;
      }
      /* Prevent Gmail from adjusting font size */
      body, table, td, a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        font-family: Arial, Helvetica, sans-serif;
      }
      
      /* Button styles */
      .button {
        display: inline-block;
        background-color: #3b82f6;
        color: #ffffff;
        text-decoration: none;
        padding: 12px 25px;
        border-radius: 6px;
        font-weight: bold;
      }
      
      /* Additional styles */
      .header {
        background-color: #3b82f6;
        color: white;
        padding: 20px;
        text-align: center;
      }
      
      .content {
        padding: 20px;
        background-color: #f3f4f6;
      }
      
      .white-box {
        background-color: white;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
      }
      
      .footer {
        background-color: #1f2937;
        color: white;
        padding: 15px;
        text-align: center;
        font-size: 12px;
      }
      
      .footer a {
        color: #9ca3af;
      }

      /* Main container - the width is determined by media queries */
      .container {
        width: 600px;
        margin: 0 auto;
      }
      
      /* Media Queries for Responsiveness */
      @media screen and (max-width: 600px) {
        /* Adjusts main container to device width */
        .container {
          width: 100% !important;
          max-width: 100% !important;
        }
        
        /* Ensures tables respect container width */
        table.container {
          width: 100% !important;
        }
        
        /* Smaller heading text on mobile */
        h1 {
          font-size: 24px !important;
        }
        
        h2 {
          font-size: 20px !important;
        }
        
        h3 {
          font-size: 18px !important;
        }
        
        /* Adjusting padding for mobile */
        .header, .content, .white-box {
          padding: 15px !important;
        }
        
        /* Smaller text on mobile */
        p {
          font-size: 16px !important;
        }
        
        /* Adjust button for better mobile tapping */
        .button {
          display: block !important;
          width: 100% !important;
          padding: 15px 0 !important;
          text-align: center !important;
        }
        
        /* Handle date size on mobile */
        .date-text {
          font-size: 20px !important;
        }
      }
      
      /* Extra small devices */
      @media screen and (max-width: 400px) {
        /* Even smaller text for very small screens */
        h1 {
          font-size: 22px !important;
        }
        
        h2 {
          font-size: 18px !important;
        }
        
        p {
          font-size: 14px !important;
        }
        
        /* Reduce padding further */
        .header, .content, .white-box {
          padding: 10px !important;
        }
      }
    </style>
  </head>
  <body id="body" style="background-color: #ffffff; margin: 0; padding: 0;">
    <!--[if mso]>
      <center>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" class="container">
        <tr><td>
    <![endif]-->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center" valign="top">
          <!-- Email content -->
          <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
            <!-- Header -->
            <tr>
              <td class="header">
                <img src="${imgFn('logo.png')}" alt="ClockMaster Logo" width="150" style="max-width: 150px;" />
                <h1 style="margin-top: 15px; font-size: 28px;">Spring Forward This Weekend!</h1>
              </td>
            </tr>
            
            <!-- Content -->
            <tr>
              <td class="content">
                <h2 style="color: #1f2937; text-align: center; font-size: 22px;">Don't forget to change your clocks!</h2>
                
                <!-- Daylight Savings Info -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="white-box">
                  <tr>
                    <td style="text-align: center; padding: 20px;">
                      <p style="font-size: 18px; color: #374151; margin: 10px 0;">Daylight Savings Time begins on</p>
                      <p class="date-text" style="font-size: 24px; font-weight: bold; color: #1f2937; margin: 10px 0;">Sunday, March 10th, 2024</p>
                      <p style="font-size: 18px; color: #374151; margin: 10px 0;">
                        Set your clocks <span style="color: #3b82f6; font-weight: bold;">ONE HOUR FORWARD</span> at 2:00 AM
                      </p>
                      
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 25px 0; border: 2px dashed #d1d5db; border-radius: 8px;">
                        <tr>
                          <td style="padding: 15px;">
                            <table role="presentation" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="30" valign="top">
                                  <img src="${imgFn('hero.png')}" alt="Checkbox" width="20" height="20" style="margin-right: 10px;" />
                                </td>
                                <td>
                                  <span style="font-size: 16px; color: #4b5563;">Set a reminder on my calendar</span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                
                <!-- Why We Change Our Clocks -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="white-box">
                  <tr>
                    <td style="padding: 20px;">
                      <h3 style="color: #1f2937; font-size: 20px; margin-top: 0;">Why We Change Our Clocks</h3>
                      <p style="color: #4b5563; line-height: 1.5; font-size: 16px;">
                        Daylight Saving Time gives us more sunlight during summer evenings. By moving clocks forward 
                        one hour in the spring, we "save" natural daylight. Most phones and smart devices will update 
                        automatically, but manual clocks need to be changed by hand.
                      </p>
                      <img src="${imgFn('clock-change.jpg')}" alt="Changing Clock" width="100%" style="margin-top: 15px; border-radius: 4px;" class="fluid" />
                    </td>
                  </tr>
                </table>
                
                <!-- Promotion -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #eff6ff; border-radius: 8px; margin: 20px 0;">
                  <tr>
                    <td style="padding: 20px; text-align: center;">
                      <h3 style="color: #1e40af; font-size: 20px; margin-top: 0;">Need a new clock?</h3>
                      <p style="color: #3b82f6; font-size: 16px;">Shop our Daylight Savings collection and get 20% off!</p>
                      <img src="${imgFn('clock-collection.jpg')}" alt="Clock Collection" width="400" style="max-width: 100%; margin: 15px auto; border-radius: 4px;" class="fluid" />
                      <br />
                      <a href="#" class="button" style="max-width: 200px;">SHOP NOW</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
            <!-- Footer -->
            <tr>
              <td class="footer">
                <p style="margin: 5px 0;">© 2024 ClockMaster. All Rights Reserved.</p>
                <p style="margin: 5px 0;">Questions? Contact us at support@clockmaster.example</p>
                <p style="margin: 5px 0;"><a href="#">Unsubscribe</a> | <a href="#">View in Browser</a></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <!--[if mso]>
        </td></tr></table>
      </center>
    <![endif]-->
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