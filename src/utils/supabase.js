import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
// This client is safe to use in the browser (uses anon key)
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Server-side client with elevated permissions
// ONLY use this in API routes, NEVER in client-side code
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Helper functions for common operations

/**
 * Submit a new evaluation from the playground
 */
export async function submitEvaluation({
  userIntent,
  userFeedback,
  userPrompt,
  generatedCode,
  modelUsed,
  ragUsed,
  ragExamplesCount
}) {
  const { data, error } = await supabaseAdmin
    .from('evaluation_submissions')
    .insert([
      {
        user_intent: userIntent,
        user_feedback: userFeedback,
        user_prompt: userPrompt,
        generated_code: generatedCode,
        model_used: modelUsed,
        rag_used: ragUsed,
        rag_examples_count: ragExamplesCount,
        status: 'pending'
      }
    ])
    .select()
    .single();

  if (error) {
    console.error('Error submitting evaluation:', error);
    throw error;
  }

  return data;
}

/**
 * Get all evaluation submissions with optional filtering
 */
export async function getEvaluationSubmissions({
  status = null,
  modelUsed = null,
  limit = 50,
  offset = 0
} = {}) {
  let query = supabaseAdmin
    .from('evaluation_submissions')
    .select(`
      *,
      evaluations (
        id,
        score_overall,
        evaluated_at
      )
    `)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (status) {
    query = query.eq('status', status);
  }

  if (modelUsed) {
    query = query.eq('model_used', modelUsed);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching submissions:', error);
    throw error;
  }

  return data;
}

/**
 * Get a single submission with its evaluation
 */
export async function getSubmissionById(id) {
  const { data, error } = await supabaseAdmin
    .from('evaluation_submissions')
    .select(`
      *,
      evaluations (*)
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching submission:', error);
    throw error;
  }

  return data;
}

/**
 * Update submission status
 */
export async function updateSubmissionStatus(id, status) {
  const { data, error } = await supabaseAdmin
    .from('evaluation_submissions')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating submission status:', error);
    throw error;
  }

  return data;
}

/**
 * Save evaluation results
 */
export async function saveEvaluation({
  submissionId,
  evaluatorVersion,
  scores,
  detailedFeedback,
  overallAssessment,
  topIssues,
  strengths
}) {
  // Calculate overall score
  const scoreValues = Object.values(scores);
  const scoreOverall = scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length;

  const { data, error } = await supabaseAdmin
    .from('evaluations')
    .insert([
      {
        submission_id: submissionId,
        evaluator_version: evaluatorVersion,
        score_code_quality: scores.codeQuality,
        score_kinetic_integration: scores.kineticIntegration,
        score_functionality: scores.functionality,
        score_fallback_quality: scores.fallbackQuality,
        score_user_intent_match: scores.userIntentMatch,
        score_creativity_design: scores.creativityDesign,
        score_overall: scoreOverall,
        detailed_feedback: detailedFeedback,
        overall_assessment: overallAssessment,
        top_issues: topIssues,
        strengths: strengths
      }
    ])
    .select()
    .single();

  if (error) {
    console.error('Error saving evaluation:', error);
    throw error;
  }

  // Update submission status to 'evaluated'
  await updateSubmissionStatus(submissionId, 'evaluated');

  return data;
}

/**
 * Get performance metrics by model type
 */
export async function getModelPerformanceMetrics(modelType) {
  const { data, error } = await supabaseAdmin
    .from('evaluation_submissions')
    .select(`
      id,
      model_used,
      created_at,
      evaluations (
        score_overall,
        score_code_quality,
        score_kinetic_integration,
        score_functionality,
        score_fallback_quality,
        score_user_intent_match,
        score_creativity_design
      )
    `)
    .eq('model_used', modelType)
    .eq('status', 'evaluated');

  if (error) {
    console.error('Error fetching performance metrics:', error);
    throw error;
  }

  // Calculate aggregate metrics
  const evaluations = data.map(d => d.evaluations[0]).filter(Boolean);

  if (evaluations.length === 0) {
    return {
      modelType,
      totalEvaluations: 0,
      avgScores: null
    };
  }

  const avgScores = {
    overall: average(evaluations.map(e => e.score_overall)),
    codeQuality: average(evaluations.map(e => e.score_code_quality)),
    kineticIntegration: average(evaluations.map(e => e.score_kinetic_integration)),
    functionality: average(evaluations.map(e => e.score_functionality)),
    fallbackQuality: average(evaluations.map(e => e.score_fallback_quality)),
    userIntentMatch: average(evaluations.map(e => e.score_user_intent_match)),
    creativityDesign: average(evaluations.map(e => e.score_creativity_design))
  };

  return {
    modelType,
    totalEvaluations: evaluations.length,
    avgScores
  };
}

/**
 * Get active prompt version for a model type
 */
export async function getActivePrompt(modelType) {
  const { data, error } = await supabaseAdmin
    .from('prompt_versions')
    .select('*')
    .eq('model_type', modelType)
    .eq('is_active', true)
    .single();

  if (error) {
    console.error('Error fetching active prompt:', error);
    throw error;
  }

  return data;
}

/**
 * Create a new prompt version
 */
export async function createPromptVersion({
  modelType,
  version,
  promptText,
  description,
  setActive = false
}) {
  // If setting as active, deactivate all other versions first
  if (setActive) {
    await supabaseAdmin
      .from('prompt_versions')
      .update({ is_active: false })
      .eq('model_type', modelType);
  }

  const { data, error } = await supabaseAdmin
    .from('prompt_versions')
    .insert([
      {
        version,
        model_type: modelType,
        prompt_text: promptText,
        description,
        is_active: setActive
      }
    ])
    .select()
    .single();

  if (error) {
    console.error('Error creating prompt version:', error);
    throw error;
  }

  return data;
}

/**
 * Save expert analysis
 */
export async function saveExpertAnalysis({
  modelType,
  evaluationCount,
  dateRangeStart,
  dateRangeEnd,
  issuesDetected,
  recommendedChanges,
  expectedImpact,
  rollbackPlan
}) {
  const { data, error } = await supabaseAdmin
    .from('expert_analyses')
    .insert([
      {
        model_type: modelType,
        evaluation_count: evaluationCount,
        date_range_start: dateRangeStart,
        date_range_end: dateRangeEnd,
        issues_detected: issuesDetected,
        recommended_changes: recommendedChanges,
        expected_impact: expectedImpact,
        rollback_plan: rollbackPlan
      }
    ])
    .select()
    .single();

  if (error) {
    console.error('Error saving expert analysis:', error);
    throw error;
  }

  return data;
}

// Helper function
function average(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
