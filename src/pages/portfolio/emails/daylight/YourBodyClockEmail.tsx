// src/pages/portfolio/emails/daylight/SleepTipsEmail.tsx
// Email component for Sleep Tips email in the daylight savings campaign

import React, { useMemo } from 'react';

// Export metadata for access in ProjectPage or other components
export const emailMetadata = {
  id: 'your-body-clock',
  name: 'Blue Light vs. Your Body Clock',
  description: 'Blue Light vs. Your Body Clock (Why Late Nights = Big Problems)',
  subject: "Trouble sleeping? We've got you Is Blue Light Making You Sick? (The Circadian Connection)",
  sender: 'Daylight Computer Company',
  date: 'March 14, 2024',
};

// Function to transform HTML with image paths
// Automatically replaces "image/" with the appropriate path
const transformHtml = (html: string, useAbsoluteUrls = false): string => {
  const basePath = useAbsoluteUrls 
    ? 'https://kinetic.email/portfolio/daylight/images/' 
    : '/portfolio/daylight/images/';
  
  // Replace src="image/filename.jpg" with the correct path
  return html.replace(/src="image\//g, `src="${basePath}`);
};

// Generate the email HTML
const generateEmailHTML = (): string => {
  return `<!DOCTYPE html>
<html lang="en" dir="ltr" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
  <meta name="x-apple-disable-message-reformatting">
<!-- 
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark"> 
-->
  
<title>Email</title>

<!-- Fix 120-DPI for Outlook -->
<!--[if mso]>
<noscript>
  <xml>
    <o:OfficeDocumentSettings>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
</noscript>
<![endif]-->

<!-- prevent outlook classic from adjusting text alignment -->
<!--[if mso]>
<xml>
<w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
<w:DontUseAdvancedTypographyReadingMail/>
</w:WordDocument>
</xml>
<![endif]-->

<!--[if mso]>
<style type=”text/css”>
  sup {
        font-size: 100% !important;
    }
    body {
        font-family: Arial, sans-serif;
        font-size: 16px;
    }
    .ExternalClass * { 
       line-height: 100%;
       padding: 0px;
       margin: 0px;
    }
    v\\:* {
       behavior: url(#default#VML);
       display: inline-block;
    }
</style>
<![endif]-->
<!-- Add reset css style block here -->

 <title>Daylight Kinetic Email</title>
<style>
/* General CSS normalisation - investigating common CSS seen in emails */
html,
body {
  margin: 0 auto;
  padding: 0;
  height: 100%;
  width: 100% ;
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: none;
}
/* 
Normalise on all email clients
Apple Mail, iOS Mail plus many more have preset margin and padding for the email body - 
this normalises it so rendering is consistent and designers can choose.
*/
body {
  margin: 0;
  padding: 0;
  }

  div#body-fix {  
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
}

/*  
Fix for Outlook on Windows
border-collapse to stop spaces between tables caused by border size 
mso-table-lspace / mso-table-rspace to ensure no left and right space is added next to tables - Outlook specific CSS attributes
 */
table {
  border-collapse:collapse;
  mso-table-lspace:0;
  mso-table-rspace:0; 
  }

/* 
Older versions of Samsung mail reset the font-size on <h1>-<h6> elements - But the newer versions don’t. 
Mail.ru resets font-size on <h1> & <h3> but other <h*> are left
outlook.com resets margin on an <h3> but others are left
So I think a “normalise” on <h1>-<h3> would make sense 
*/
h1 {
  margin:0.67em 0;
  font-size:2em;
  }
h2 {
  margin:0.83em 0;
  font-size:1.5em;
  }

/* html[dir] h3 is to increase specificity to override Outlook.com */
html[dir] h3, h3 {
  margin:1em 0;
  font-size:1.17em;
  }

/* From here - all CSS normalisation is based on a specific email client situation */

/* Fix for Outlook links color fix for links and visited links */
span.MsoHyperlink {
  color: inherit !important;
  mso-style-priority: 99 !important;
  }

span.MsoHyperlinkFollowed {
  color: inherit !important;
  mso-style-priority: 99 !important;
      }

/* normalise link attributes in Apple Mail / iOS Mail apps - to match the parent element */

#root [x-apple-data-detectors=true],
a[x-apple-data-detectors=true]{
  color: inherit !important;
  text-decoration: inherit !important;
}

/* normalise link attributes in Apple Mail / iOS Mail apps for the date calendar event- to match the parent element */
[x-apple-data-detectors-type="calendar-event"] {
      color: inherit !important;
      -webkit-text-decoration-color: inherit !important;
}

/* normalise link attributes in Gmail - to match the parent element. 
NOTE: Need to add class="body" to the body element and a DOCTYPE must be present. */
u + .body a {
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  }

.body {
   word-wrap: normal;
   word-spacing:normal;
  }

/* centre email on Android 4.4 - margin reset */
 div[style*="margin: 16px 0"] {
  margin: 0!important;
  }

/* revert all styles for LaPoste webmail */
#message *{
  all:revert
}

table#email-container { 
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hide {
    display: none !important;
    width: 0px !important;
    height: 0px !important;
    mso-hide: all; 
    font-size: 0px;
}
.mobile { 
    width: 0;
    max-height: 0;
    overflow: hidden;
    float: left;
    display: none;
}

    
@media only screen and (max-width: 600px) { 
    .mobile {display : block !important;width : 100% !important;max-height: inherit !important;overflow : visible !important;float : none !important;}
    .desktop {display: none !important;width: 0px !important;height: 0px !important;mso-hide: all; font-size: 0px;}
    .hidemobile {display: none !important;width: 0px !important;height: 0px !important;}
    .full {width: 100% !important;float: none !important;display: block !important;margin-right: auto !important;margin-left: auto !important;padding-left: 0px !important;padding-right: 0px !important;text-align: center !important;padding-top: 10px !important;padding-bottom: 10px !important;}
    .full0 {width: 100% !important;float: none !important;display: block !important;margin-right: auto !important;margin-left: auto !important;padding-left: 0px !important;padding-right: 0px !important;text-align: center !important;}
    .mobile-center {margin-left: auto !important;margin-right: auto !important;display: table !important;}
    .fluid {width:100% !important;}
}


</style>
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background-color: #F9F4F2;
      font-family: ROM, Helvetica, Arial, sans-serif;
      font-weight: 400;
    }
    h1 {
      color: #413C3C;
      font-weight: 400;
      font-size: 36px;
      letter-spacing: -1px;
      line-height: 1.2;
    }
    p {
      font-size: 18px;
      line-height: 1.6;
      color: #17190F;
      margin: 0 0 20px;
    }
    a {
      color: #FEC984;
      text-decoration: underline;
      font-weight: 400;
    }
    input[type=radio] {
      display: none;
    }

    /* handle toggle */
    #amberToggle:checked ~ #email-container .toggleCircle {
      transform: translateX(26px);
      background-color: #fff !important;
    }
    #amberToggle:checked ~ #email-container .toggleBg {
      background-color: #FEC984 !important;
    }

    /* Amber mode bg and copy */
    #amberToggle:checked ~ #email-container .content,
    #amberToggle:checked ~ #email-container .footer,
    #amberToggle:checked ~ #email-container h1,
    #amberToggle:checked ~ #email-container p,
    #amberToggle:checked ~ #email-container a {
      background-color: #FEC984 !important;
      color: #802b00 !important;
    }

    /* amber tint images */
    #amberToggle:checked ~ #email-container .amber {
      filter: sepia(1) hue-rotate(-10deg) saturate(1.5) brightness(1.1) !important;
    }
    /* brown tint light color images */
    #amberToggle:checked ~ #email-container .light-amber {
    filter: sepia(1) hue-rotate(-30deg) brightness(0.6) saturate(1.5) !important;
    }
    #amberToggle:checked ~ .btn-bg {
      background-color: #FFEAD6 !important;
      color: #802b00 !important;
    }

    #amberToggle:checked ~ #email-container .quiz-option {
      background-color: #FFEAD6 !important;
      color: #802b00 !important;
    }


    .quiz-reveal { display: none; }
    #a1:checked ~ .quiz-reveal.wrong,
    #a2:checked ~ .quiz-reveal.correct,
    #a3:checked ~ .quiz-reveal.wrong {
      display: block;
      margin-top: 12px;
      font-weight: bold;
    }
    label.quiz-option {
      display: block;
      padding: 10px 16px;
      margin: 8px 0;
      background-color: #EEE;
      border-radius: 6px;
      cursor: pointer;
    }
  </style>
  <style>

          /* Hide the checkbox */
      .kinetic {
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
      #Kinetic:checked ~ .& .fallback { 
        display: block !important; 
      }
      #Kinetic:checked ~ .& .interactive { 
        display: none !important; 
      }
  </style>
</head>
<body id="body" xml:lang="en">
<div style="display:none">
This is my preheader text 

&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; 
&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; 
&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; 
&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; 
&nbsp;
</div>
<div id="body-fix" role="article" aria-roledescription="email" aria-label="email name" lang="en" dir="ltr" style="font-size:medium; font-size:max(16px, 1rem)">
<!--[if (gte mso 9) | IE]>
<table align="center" width="600" style="margin-left:auto; margin-right:auto;" role="none">
<tr>
<td>
<![endif]-->

<!-- kinetic light switch controls kinetic vs fallback presentation -->
  <input type="checkbox" class="kinetic" name="interactive" id="Kinetic" checked>
  <!-- amber mode toggle -->
  <input type="checkbox" id="amberToggle" style="display:none;">


<!-- Stack components here -->
  <table id="email-container" role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; margin: 0 auto;">

    <!-- Header with Logo and Toggle -->
    <!--[if !mso]><!-->
    <tr>
      <td class="interactive" style="padding: 20px;display:none;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="left">
              <img src="https://d3k81ch9hvuctc.cloudfront.net/company/VCR5MS/images/cff8a50c-7884-4a87-87fe-5f07453fced1.png" width="72" alt="Daylight Logo" style="display:block; height:auto;">
            </td>
            <td align="right" class="interactive" style="display:none;">
            <span style="margin-left: 10px; vertical-align:top;font-size: 16px;">Amber Mode</span>
              <label for="amberToggle" class="toggleBg" style="display: inline-block; background-color: #ccc; border-radius: 20px; width: 50px; height: 24px; position: relative; cursor: pointer;">
                <span class="toggleCircle" style="display: block; width: 20px; height: 20px; background-color: #fff; border-radius: 50%; position: absolute; top: 2px; left: 2px; transition: all 0.3s ease;"></span>
              </label>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!--<![endif]-->

    <tr>
      <td class="fallback" style="padding: 20px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center">
              <img src="https://d3k81ch9hvuctc.cloudfront.net/company/VCR5MS/images/cff8a50c-7884-4a87-87fe-5f07453fced1.png" width="72" alt="Daylight Logo" style="display:block; height:auto;">
            </td>

          </tr>
        </table>
      </td>
    </tr>

    <!-- Main Content -->
    <tr>
      <td class="content" style="background-color: #ffffff; padding: 36px 24px; text-align: left;">
         <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
              <!-- Hero Image Slot -->
            <tr>
              <td style="text-align: center;">
                <img src="/portfolio/daylight/images/hero.png" class="amber" width="100%" alt="Hero Image" style="display:block; border-radius: 8px;">
              </td>
            </tr>
            <tr>
                <td class="">
        <h1>Sunlight vs. Screens</h1>
        <p>Have you ever wondered why staring at a screen feels harsher than a sunny day outside? Blue light is blue light, right?</p>
        <p>Wrong. <strong>Blue light from the sun</strong> is part of a balanced spectrum — it's delivered alongside generous amounts of red and infrared light, which help repair and protect your cells. In contrast, <strong>screens and LED bulbs</strong> blast isolated, high-energy blue light with <em>zero infrared</em> to counteract the stress it causes.</p>
        <p>And it gets worse: most modern screens also <strong>flicker</strong> rapidly (even if you can't see it), which puts constant stress on your brain and eyes. No wonder you feel drained after a day indoors.</p>
        <p><strong>Natural blue light</strong> is your body's cue to wake up and be alert. But when it's delivered out of context — in an <em>imbalanced spectrum</em>, without red or IR, and at the wrong time of day — it becomes toxic.</p>
        <p>Think of it like this: sunlight is a nourishing meal. Screens are like eating sugar straight from the bag.</p>
        
                </td>
              </tr>

              <!--[if !mso]><!-->
              <tr>
                  <td class="interactive">
                      <div class="interactive" style="display:none;">
                        <p><strong>QUIZ:</strong> What percent infrared does your screen emit?</p>
                        <input type="radio" id="a1" name="quiz">
                        <input type="radio" id="a2" name="quiz">
                        <input type="radio" id="a3" name="quiz">

                        <label for="a1" class="quiz-option">A) 20%</label>
                        <label for="a2" class="quiz-option">B) 0%</label>
                        <label for="a3" class="quiz-option">C) 35%</label>

                        <div class="quiz-reveal correct">✅ Correct! Most screens emit virtually <strong>0% infrared</strong>.</div>
                        <div class="quiz-reveal wrong">❌ Not quite — screens emit <strong>zero infrared</strong>, unlike sunlight.</div>
                      </div>
                   </td>
              </tr>
              <!--<![endif]-->

              
              <!-- Fallback Stat -->
              <tr>
                <td class="fallback">
                     <p><em>Did you know?</em> The sun is about 40% infrared. Most screens are <strong>0%</strong>.</p>
                </td>
            </tr>

          </table>


        <!-- Bulletproof Button -->
        <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin: 20px 0;">
          <tr>
            <td align="center" class="btn-bg" style="border-radius: 8px;background-color:#FF9D00;">
              <a href="https://daylightcomputer.com/guides/blue-light-101" target="_blank" style="color: #000000;font-size: 18px; font-family: ROM, Helvetica, Arial, sans-serif; font-weight: 700;  text-decoration: none; padding: 14px 24px; display: inline-block; border-radius: 8px;">
              See Why Infrared Light Matters&nbsp;&rarr;
              </a>
            </td>
          </tr>
        </table>

      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td class="footer" style="background-color: #F9F4F2; padding: 36px 24px; text-align: center; font-size: 14px; color: #727272;">
        <p style="margin: 0 0 8px;">Daylight Computer Company</p>
        <p style="margin: 0 0 8px;">430 Shotwell Street, San Francisco, CA 94110</p>
        <p style="margin: 0 0 16px;">
          <a href="#">Unsubscribe</a> | <a href="#">View in Browser</a>
        </p>
        <!-- Social Icons -->
        <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding: 0 6px;">
              <a href="https://twitter.com/daylightco" target="_blank">
                <img src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/subtle/x_twitter_96.png" class="light-amber" alt="Bluesky" width="32" style="display:block;">
              </a>
            </td>
            <td style="padding: 0 6px;">
              <a href="https://twitter.com/daylightco" target="_blank">
                <img src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/subtle/x_twitter_96.png" class="light-amber" alt="Twitter" width="32" style="display:block;">
              </a>
            </td>
            <td style="padding: 0 6px;">
              <a href="https://instagram.com/daylightcomputer" target="_blank">
                <img src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/subtle/instagram_96.png" class="light-amber" alt="Instagram" width="32" style="display:block;">
              </a>
            </td>
            <td style="padding: 0 6px;">
              <a href="https://youtube.com/@daylightcomputer" target="_blank">
                <img src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/subtle/youtube_96.png" class="light-amber" alt="YouTube" width="32" style="display:block;">
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

  </table>

    

<!--[if mso]>
</td>
</tr>
</table>
<![endif]-->
</div>
<!-- Tracking Scripts Here -->
</body>
</html>
`;
};

// The actual email component
const YourBodyClockEmail: React.FC = () => {
  // Use memoized HTML to avoid regenerating on every render
  const emailHtml = useMemo(() => {
    return transformHtml(generateEmailHTML(), false);
  }, []);

  // Return the HTML content in an iframe with enhanced permissions
  return (
    <iframe 
      srcDoc={emailHtml} 
      title="Your Body Clock" 
      style={{ 
        width: '100%', 
        height: '100%', 
        border: 'none',
        minHeight: '500px'
      }}
      sandbox="allow-same-origin allow-scripts"
    />
  );
};

// Export function to get the raw HTML for the export button feature
// This is used by ProjectPage.tsx when the user clicks "Export HTML"
export const getEmailHTML = (): string => {
  return transformHtml(generateEmailHTML(), true);
};

export default YourBodyClockEmail;