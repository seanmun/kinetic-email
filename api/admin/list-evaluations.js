// api/admin/list-evaluations.js
import { getEvaluationSubmissions } from '../../src/utils/supabase.js';

export default async function handler(req, res) {
  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse query parameters
    const {
      status = null,
      modelUsed = null,
      limit = 50,
      offset = 0
    } = req.query;

    // Validate status if provided
    if (status && !['pending', 'evaluating', 'evaluated', 'skipped'].includes(status)) {
      return res.status(400).json({
        error: 'Invalid status. Must be one of: pending, evaluating, evaluated, skipped'
      });
    }

    // Validate modelUsed if provided
    if (modelUsed && !['small', 'large'].includes(modelUsed)) {
      return res.status(400).json({
        error: 'Invalid modelUsed. Must be either "small" or "large"'
      });
    }

    // Fetch submissions
    const submissions = await getEvaluationSubmissions({
      status,
      modelUsed,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });

    return res.status(200).json({
      success: true,
      submissions,
      count: submissions.length,
      filters: {
        status,
        modelUsed,
        limit: parseInt(limit),
        offset: parseInt(offset)
      }
    });
  } catch (error) {
    console.error('Error listing evaluations:', error);
    return res.status(500).json({
      error: 'Failed to list evaluations',
      details: error.message
    });
  }
}
