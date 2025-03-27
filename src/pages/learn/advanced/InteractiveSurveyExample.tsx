// src/pages/learn/advanced/InteractiveSurveyExample.tsx

import React from 'react';

const InteractiveSurveyExample: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Interactive Email Surveys</h2>
      
      <p className="text-gray-700 mb-4">
        Kinetic emails can be used to create interactive surveys directly within the inbox, 
        allowing recipients to provide feedback without clicking through to external websites.
        This can significantly increase response rates and provide valuable data.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <p className="text-blue-800">
          <strong>Survey Benefits:</strong> Email surveys can increase engagement by 20-30% compared to 
          traditional "click-through to website" survey approaches, as they reduce friction in the feedback process.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Simple Rating Survey</h3>
          <p className="text-gray-700 mb-4">
            This basic example collects a 1-5 star rating from the recipient:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto">{`<input type="radio" name="rating" id="star1" class="hidden">
<input type="radio" name="rating" id="star2" class="hidden">
<input type="radio" name="rating" id="star3" class="hidden">
<input type="radio" name="rating" id="star4" class="hidden">
<input type="radio" name="rating" id="star5" class="hidden">

<div class="survey-container">
  <h3>How would you rate our service?</h3>
  
  <div class="rating">
    <label for="star1" class="star">★</label>
    <label for="star2" class="star">★</label>
    <label for="star3" class="star">★</label>
    <label for="star4" class="star">★</label>
    <label for="star5" class="star">★</label>
  </div>
  
  <div class="feedback">
    <div class="feedback-text rating1">
      Very dissatisfied. We'll work to improve!
    </div>
    <div class="feedback-text rating2">
      Somewhat dissatisfied. We appreciate your feedback.
    </div>
    <div class="feedback-text rating3">
      Neutral. Thanks for your input.
    </div>
    <div class="feedback-text rating4">
      Satisfied. We're glad you had a good experience!
    </div>
    <div class="feedback-text rating5">
      Very satisfied! Thanks for your amazing feedback!
    </div>
  </div>
  
  <a href="https://example.com/survey-submit?rating=5" class="submit-btn">
    Submit Feedback
  </a>
</div>`}</pre>
            </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Live Demo</h3>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="bg-white p-6 rounded border border-gray-300">
              <h4 className="font-semibold text-center text-gray-900">How would you rate our service?</h4>
              
              <div className="my-4">
                <div className="flex justify-center space-x-2">
                  <input type="radio" id="demo-star1" name="demo-rating" className="sr-only peer/star1" />
                  <input type="radio" id="demo-star2" name="demo-rating" className="sr-only peer/star2" />
                  <input type="radio" id="demo-star3" name="demo-rating" className="sr-only peer/star3" />
                  <input type="radio" id="demo-star4" name="demo-rating" className="sr-only peer/star4" />
                  <input type="radio" id="demo-star5" name="demo-rating" className="sr-only peer/star5" />
                  
                  <label htmlFor="demo-star1" className="text-3xl cursor-pointer text-gray-300 peer-checked/star1:text-yellow-400">★</label>
                  <label htmlFor="demo-star2" className="text-3xl cursor-pointer text-gray-300 peer-checked/star2:text-yellow-400 peer-checked/star3:text-yellow-400 peer-checked/star4:text-yellow-400 peer-checked/star5:text-yellow-400">★</label>
                  <label htmlFor="demo-star3" className="text-3xl cursor-pointer text-gray-300 peer-checked/star3:text-yellow-400 peer-checked/star4:text-yellow-400 peer-checked/star5:text-yellow-400">★</label>
                  <label htmlFor="demo-star4" className="text-3xl cursor-pointer text-gray-300 peer-checked/star4:text-yellow-400 peer-checked/star5:text-yellow-400">★</label>
                  <label htmlFor="demo-star5" className="text-3xl cursor-pointer text-gray-300 peer-checked/star5:text-yellow-400">★</label>
                </div>
              </div>
              
              <div className="min-h-16 mb-4">
                <div className="hidden peer-checked/star1:block p-3 text-center bg-gray-100 rounded">
                  Very dissatisfied. We'll work to improve!
                </div>
                <div className="hidden peer-checked/star2:block p-3 text-center bg-gray-100 rounded">
                  Somewhat dissatisfied. We appreciate your feedback.
                </div>
                <div className="hidden peer-checked/star3:block p-3 text-center bg-gray-100 rounded">
                  Neutral. Thanks for your input.
                </div>
                <div className="hidden peer-checked/star4:block p-3 text-center bg-gray-100 rounded">
                  Satisfied. We're glad you had a good experience!
                </div>
                <div className="hidden peer-checked/star5:block p-3 text-center bg-gray-100 rounded">
                  Very satisfied! Thanks for your amazing feedback!
                </div>
              </div>
              
              <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                Submit Feedback
              </button>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-2">How It Works</h4>
              <ol className="space-y-2 text-gray-700 list-decimal ml-5">
                <li>Radio buttons are hidden but manage the state</li>
                <li>When a star is clicked, its radio button is checked</li>
                <li>CSS selectors show appropriate feedback text</li>
                <li>The submit button is linked to a URL with the rating parameter</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Multiple Question Survey</h3>
        <p className="text-gray-700 mb-6">
          For more comprehensive feedback, you can create multi-question surveys that show 
          different questions based on previous answers:
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">HTML Structure</h4>
              <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto bg-gray-100 p-3 rounded">{`<!-- Question 1 -->
<input type="radio" name="q1" id="q1-yes" class="hidden">
<input type="radio" name="q1" id="q1-no" class="hidden">

<!-- Question 2 (Yes branch) -->
<input type="radio" name="q2-yes" id="q2-yes-satisfied" class="hidden">
<input type="radio" name="q2-yes" id="q2-yes-very-satisfied" class="hidden">

<!-- Question 2 (No branch) -->
<input type="radio" name="q2-no" id="q2-no-price" class="hidden">
<input type="radio" name="q2-no" id="q2-no-features" class="hidden">
<input type="radio" name="q2-no" id="q2-no-other" class="hidden">

<div class="survey-container">
  <!-- Question 1 -->
  <div class="question q1">
    <h3>Did you purchase our product?</h3>
    <div class="options">
      <label for="q1-yes" class="option">Yes</label>
      <label for="q1-no" class="option">No</label>
    </div>
  </div>
  
  <!-- Question 2 (Yes branch) -->
  <div class="question q2-yes">
    <h3>How satisfied are you with your purchase?</h3>
    <div class="options">
      <label for="q2-yes-satisfied" class="option">Satisfied</label>
      <label for="q2-yes-very-satisfied" class="option">Very Satisfied</label>
    </div>
  </div>
  
  <!-- Question 2 (No branch) -->
  <div class="question q2-no">
    <h3>What prevented you from making a purchase?</h3>
    <div class="options">
      <label for="q2-no-price" class="option">Price</label>
      <label for="q2-no-features" class="option">Features</label>
      <label for="q2-no-other" class="option">Other</label>
    </div>
  </div>
  
  <!-- Thank you messages -->
  <div class="thank-you ty-yes"></div>
  <div class="thank-you ty-no"></div>
</div>`}</pre>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">CSS Implementation</h4>
              <pre className="text-sm text-gray-800 whitespace-pre overflow-x-auto bg-gray-100 p-3 rounded">{`.survey-container {
  max-width: 500px;
  margin: 0 auto;
}

.question {
  padding: 20px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.option {
  padding: 10px 20px;
  background-color: #f0f0f0;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
}

.option:hover {
  background-color: #e0e0e0;
}

/* Initially hide follow-up questions */
.q2-yes, .q2-no, .thank-you {
  display: none;
}

/* Show Yes branch */
#q1-yes:checked ~ .survey-container .q1 {
  display: none !important;
}

#q1-yes:checked ~ .survey-container .q2-yes {
  display: block !important;
}

/* Show No branch */
#q1-no:checked ~ .survey-container .q1 {
  display: none !important;
}

#q1-no:checked ~ .survey-container .q2-no {
  display: block !important;
}

/* Thank you messages */
#q2-yes-satisfied:checked ~ .survey-container .q2-yes,
#q2-yes-very-satisfied:checked ~ .survey-container .q2-yes {
  display: none !important;
}

#q2-yes-satisfied:checked ~ .survey-container .ty-yes,
#q2-yes-very-satisfied:checked ~ .survey-container .ty-yes {
  display: block !important;
  padding: 20px;
  background-color: #e8f5e9;
  border-radius: 8px;
  text-align: center;
}

#q2-no-price:checked ~ .survey-container .q2-no,
#q2-no-features:checked ~ .survey-container .q2-no,
#q2-no-other:checked ~ .survey-container .q2-no {
  display: none !important;
}

#q2-no-price:checked ~ .survey-container .ty-no,
#q2-no-features:checked ~ .survey-container .ty-no,
#q2-no-other:checked ~ .survey-container .ty-no {
  display: block !important;
  padding: 20px;
  background-color: #e8f5e9;
  border-radius: 8px;
  text-align: center;
}`}</pre>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-50 p-4 rounded border border-blue-100">
            <h4 className="font-medium text-blue-800 mb-2">How Branching Surveys Work</h4>
            <ol className="space-y-2 text-blue-800 list-decimal ml-5">
              <li>Each question uses its own set of radio buttons</li>
              <li>When the first question is answered, it's hidden and the appropriate follow-up question is displayed</li>
              <li>The CSS selectors create a logical flow through the survey based on user choices</li>
              <li>Thank you messages specific to each branch are shown when the survey is completed</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-amber-50 p-6 rounded-lg border border-amber-100">
        <h3 className="text-lg font-semibold text-amber-900 mb-3">Survey Best Practices</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-amber-800 mb-2">Design Tips</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-800">Keep surveys concise and focused</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-800">Use clear, simple language in questions</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-800">Provide immediate feedback after selections</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-amber-800 mb-2">Technical Considerations</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-800">Use tracking parameters in form submission URLs</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-800">Ensure compatibility with the Kinetic Lightswitch concept</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-800">Limit the depth of branching to avoid complexity</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-amber-100 p-4 rounded">
          <h4 className="font-medium text-amber-900 mb-2">Important Note on Data Collection</h4>
          <p className="text-amber-800">
            Email survey responses are typically collected when the user clicks a submission link that contains 
            parameters reflecting their choices. You'll need a landing page or form handler on your server to process
            these submissions. For more complex surveys, consider using unique identifiers in the links to associate
            responses with specific users or campaigns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSurveyExample;