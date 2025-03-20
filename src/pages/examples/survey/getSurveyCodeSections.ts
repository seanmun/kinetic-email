// src/components/examples/survey/getSurveyCodeSections.ts

export const getSurveyCodeSections = () => {
    // HTML code for the survey
    const htmlCode = `<input type="radio" id="q1a" name="question1" class="survey-input">
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
      <h2>Women's Apparel</h2>
      <p>Thanks for your interest in our women's collection!</p>
      <p>We'll send you updates on new arrivals and special offers.</p>
    </div>
  
    <div id="response1b" class="survey-content">
      <h2>Men's Apparel</h2>
      <p>Thanks for your interest in our men's collection!</p>
      <p>We'll send you updates on new arrivals and special offers.</p>
    </div>
  
    <div id="response1c" class="survey-content">
      <h2>Accessories</h2>
      <p>Thanks for your interest in our accessories!</p>
      <p>We'll send you updates on new arrivals and special offers.</p>
    </div>
  </div>`;
  
    // CSS code for the survey
    const cssCode = `/* Hide radio inputs */
  .survey-input { 
    display: none; 
  }
  
  /* Survey container */
  .survey-wrapper {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    padding: 20px;
    margin: 20px 0;
  }
  
  /* Survey content */
  .survey-content {
    display: none;
    margin-bottom: 10px;
  }
  
  /* Make the initial question visible by default */
  .survey-content.active {
    display: block;
  }
  
  /* Style the answer options */
  .survey-option {
    display: block;
    padding: 12px 15px;
    margin: 10px 0;
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .survey-option:hover {
    background: #e9e9e9;
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
  }`;
  
    // Additional code for multi-step survey
    const multiStepCode = `<input type="radio" id="q1a" name="question1" class="survey-input">
  <input type="radio" id="q1b" name="question1" class="survey-input">
  <input type="radio" id="q2a" name="question2" class="survey-input">
  <input type="radio" id="q2b" name="question2" class="survey-input">
  
  <div class="survey-wrapper">
    <!-- Question 1 -->
    <div id="question1" class="survey-content active">
      <h2>Do you prefer in-store or online shopping?</h2>
      <label for="q1a" class="survey-option">In-store</label>
      <label for="q1b" class="survey-option">Online</label>
    </div>
  
    <!-- Question 2 for in-store preference -->
    <div id="question2a" class="survey-content">
      <h2>What's most important in your in-store experience?</h2>
      <label for="q2a" class="survey-option">Customer service</label>
      <label for="q2b" class="survey-option">Product selection</label>
    </div>
  
    <!-- Question 2 for online preference -->
    <div id="question2b" class="survey-content">
      <h2>What's most important in your online shopping experience?</h2>
      <label for="q2a" class="survey-option">Fast shipping</label>
      <label for="q2b" class="survey-option">Easy returns</label>
    </div>
  
    <!-- Final responses -->
    <div id="final-a" class="survey-content">
      <h2>Thank you for your feedback!</h2>
      <p>We'll focus on enhancing our customer service in our stores.</p>
    </div>
  
    <div id="final-b" class="survey-content">
      <h2>Thank you for your feedback!</h2>
      <p>We'll continue to expand our in-store product selection.</p>
    </div>
  
    <div id="final-c" class="survey-content">
      <h2>Thank you for your feedback!</h2>
      <p>We'll work to make our shipping even faster.</p>
    </div>
  
    <div id="final-d" class="survey-content">
      <h2>Thank you for your feedback!</h2>
      <p>We'll streamline our online return process.</p>
    </div>
  </div>
  
  /* Additional CSS for multi-step survey */
  #q1a:checked ~ .survey-wrapper #question1,
  #q1b:checked ~ .survey-wrapper #question1 {
    display: none;
  }
  
  #q1a:checked ~ .survey-wrapper #question2a,
  #q1b:checked ~ .survey-wrapper #question2b {
    display: block;
  }
  
  #q1a:checked ~ .survey-wrapper #q2a:checked ~ #final-a,
  #q1a:checked ~ .survey-wrapper #q2b:checked ~ #final-b,
  #q1b:checked ~ .survey-wrapper #q2a:checked ~ #final-c,
  #q1b:checked ~ .survey-wrapper #q2b:checked ~ #final-d {
    display: block;
  }
  
  #q2a:checked ~ .survey-wrapper #question2a,
  #q2a:checked ~ .survey-wrapper #question2b,
  #q2b:checked ~ .survey-wrapper #question2a,
  #q2b:checked ~ .survey-wrapper #question2b {
    display: none;
  }`;
  
    // Define code sections for the example
    return [
      {
        title: 'HTML Structure',
        language: 'html' as const,
        code: htmlCode,
        description: 'The HTML structure uses radio inputs to control which content is displayed. When a user selects an option, the question is hidden and the corresponding response is shown.'
      },
      {
        title: 'CSS Styling',
        language: 'css' as const,
        code: cssCode,
        description: 'The CSS hides the radio inputs and styles the options as clickable buttons. When an option is selected, the question is hidden and the answer is displayed using the :checked selector.'
      },
      {
        title: 'Multi-Step Survey (Advanced)',
        language: 'html' as const,
        code: multiStepCode,
        description: 'For more complex surveys, you can create a multi-step form where answers to one question determine which follow-up question is shown. This creates a branching survey experience.'
      }
    ];
  };