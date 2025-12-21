// api/admin/submit-evaluation.js
import { submitEvaluation } from '../../src/utils/supabase.js';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      userIntent,
      userFeedback,
      userPrompt,
      generatedCode,
      modelUsed,
      ragUsed,
      ragExamplesCount
    } = req.body;

    // Validation
    if (!userIntent || !userPrompt || !generatedCode || !modelUsed) {
      return res.status(400).json({
        error: 'Missing required fields: userIntent, userPrompt, generatedCode, modelUsed'
      });
    }

    if (!['small', 'large'].includes(modelUsed)) {
      return res.status(400).json({
        error: 'modelUsed must be either "small" or "large"'
      });
    }

    // Submit to Supabase
    const submission = await submitEvaluation({
      userIntent,
      userFeedback: userFeedback || null,
      userPrompt,
      generatedCode,
      modelUsed,
      ragUsed: ragUsed || false,
      ragExamplesCount: ragExamplesCount || 0
    });

    console.log('Evaluation submitted:', {
      id: submission.id,
      modelUsed: submission.model_used,
      ragUsed: submission.rag_used,
      submittedAt: submission.submitted_at
    });

    return res.status(200).json({
      success: true,
      submission: {
        id: submission.id,
        status: submission.status,
        submittedAt: submission.submitted_at
      }
    });
  } catch (error) {
    console.error('Error submitting evaluation:', error);
    return res.status(500).json({
      error: 'Failed to submit evaluation',
      details: error.message
    });
  }
}
