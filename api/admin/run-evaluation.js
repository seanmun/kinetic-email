// api/admin/run-evaluation.js
import Anthropic from '@anthropic-ai/sdk';
import { getSubmissionById, saveEvaluation, updateSubmissionStatus } from '../../src/utils/supabase.js';

const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { submissionId } = req.body;

    if (!submissionId) {
      return res.status(400).json({ error: 'Missing submissionId' });
    }

    // Fetch the submission
    const submission = await getSubmissionById(submissionId);

    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    if (submission.status === 'evaluated') {
      return res.status(400).json({ error: 'This submission has already been evaluated' });
    }

    // Update status to 'evaluating'
    await updateSubmissionStatus(submissionId, 'evaluating');

    // Prepare the evaluation prompt
    const evaluationPrompt = `You are an expert evaluator for kinetic email code generation. Your job is to analyze the generated email code and provide detailed, objective feedback.

USER INTENT: "${submission.user_intent}"
${submission.user_feedback ? `USER FEEDBACK: "${submission.user_feedback}"` : ''}

USER PROMPT: "${submission.user_prompt}"

GENERATED CODE:
\`\`\`html
${submission.generated_code}
\`\`\`

MODEL USED: ${submission.model_used === 'large' ? 'Large Model' : 'Small Model'}
RAG USED: ${submission.rag_used ? `Yes (${submission.rag_examples_count} examples)` : 'No'}

Evaluate this code generation on the following dimensions (score each 0-100):

1. **CODE QUALITY** (0-100):
   - Syntax correctness (valid HTML, CSS)
   - Code structure and organization
   - Best practices (proper table structure, inline styles, etc.)
   - Clean, readable code

2. **KINETIC INTEGRATION** (0-100):
   - Correct use of CSS :checked pseudo-classes
   - Proper lightswitch implementation (if applicable)
   - Interactive elements work as intended
   - Follows kinetic email patterns

3. **FUNCTIONALITY** (0-100):
   - Code is syntactically valid (no obvious errors)
   - Interactive features would work in supported clients
   - No broken logic or missing elements
   - Email structure is complete

4. **FALLBACK QUALITY** (0-100):
   - Static fallback content exists
   - Fallback covers all dynamic content
   - Fallback is properly implemented
   - Maintains design intent without interactivity

5. **USER INTENT MATCH** (0-100):
   - How well does this fulfill the user's stated intent?
   - Does it address what they asked for?
   - Are the requirements met?

6. **CREATIVITY & DESIGN** (0-100):
   - Visual appeal and layout
   - Innovation in approach
   - Professional appearance
   - Attention to detail

For each dimension, provide:
- Score (0-100)
- Brief reasoning (2-3 sentences)
- Specific issues found (if any)

Finally, provide:
- Overall assessment (2-3 sentences summarizing the evaluation)
- Top 3 issues to fix (as an array of strings)
- Top 3 strengths (as an array of strings, what was done well)

Return your response as a JSON object with this exact structure:
{
  "scores": {
    "codeQuality": <number>,
    "kineticIntegration": <number>,
    "functionality": <number>,
    "fallbackQuality": <number>,
    "userIntentMatch": <number>,
    "creativityDesign": <number>
  },
  "detailedFeedback": {
    "codeQuality": {
      "score": <number>,
      "reasoning": "<string>",
      "issues": ["<string>", ...]
    },
    "kineticIntegration": { ... },
    "functionality": { ... },
    "fallbackQuality": { ... },
    "userIntentMatch": { ... },
    "creativityDesign": { ... }
  },
  "overallAssessment": "<string>",
  "topIssues": ["<string>", "<string>", "<string>"],
  "strengths": ["<string>", "<string>", "<string>"]
}`;

    // Call Claude for evaluation
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      temperature: 0.3, // Lower temperature for more consistent evaluations
      messages: [
        {
          role: 'user',
          content: evaluationPrompt
        }
      ]
    });

    // Extract the JSON response
    let evaluationResult;
    try {
      const responseText = message.content[0].text;
      // Try to extract JSON from the response (in case Claude wraps it in markdown)
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        evaluationResult = JSON.parse(jsonMatch[0]);
      } else {
        evaluationResult = JSON.parse(responseText);
      }
    } catch (parseError) {
      console.error('Failed to parse evaluation response:', parseError);
      console.error('Response text:', message.content[0].text);
      throw new Error('Failed to parse evaluation results from AI');
    }

    // Save evaluation to database
    const evaluation = await saveEvaluation({
      submissionId,
      evaluatorVersion: 'v1.0',
      scores: evaluationResult.scores,
      detailedFeedback: evaluationResult.detailedFeedback,
      overallAssessment: evaluationResult.overallAssessment,
      topIssues: evaluationResult.topIssues,
      strengths: evaluationResult.strengths
    });

    console.log('Evaluation completed:', {
      submissionId,
      overallScore: evaluation.score_overall,
      modelUsed: submission.model_used
    });

    return res.status(200).json({
      success: true,
      evaluation: {
        id: evaluation.id,
        score_overall: evaluation.score_overall,
        scores: evaluationResult.scores,
        overallAssessment: evaluation.overall_assessment,
        topIssues: evaluation.top_issues,
        strengths: evaluation.strengths
      }
    });
  } catch (error) {
    console.error('Error running evaluation:', error);

    // Try to update status back to pending if evaluation failed
    try {
      if (req.body.submissionId) {
        await updateSubmissionStatus(req.body.submissionId, 'pending');
      }
    } catch (statusError) {
      console.error('Failed to reset status:', statusError);
    }

    return res.status(500).json({
      error: 'Failed to run evaluation',
      details: error.message
    });
  }
}
