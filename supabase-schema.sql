-- Kinetic Email Evaluation System Schema
-- Run this in Supabase SQL Editor to create all necessary tables

-- ============================================
-- 1. EVALUATION SUBMISSIONS TABLE
-- ============================================
-- Stores submissions from the playground for evaluation
CREATE TABLE IF NOT EXISTS evaluation_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Submission metadata
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'evaluating', 'evaluated', 'skipped')),

  -- User context
  user_email TEXT, -- Optional: for tracking who submitted (future use)
  user_intent TEXT NOT NULL, -- What the user was trying to achieve
  user_feedback TEXT, -- Optional feedback from user

  -- Generation details
  user_prompt TEXT NOT NULL, -- The prompt user entered
  generated_code TEXT NOT NULL, -- The email code generated
  model_used TEXT NOT NULL CHECK (model_used IN ('small', 'large')), -- Which RAG model was used

  -- RAG context
  rag_used BOOLEAN DEFAULT false,
  rag_examples_count INTEGER DEFAULT 0,

  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster querying
CREATE INDEX IF NOT EXISTS idx_submissions_status ON evaluation_submissions(status);
CREATE INDEX IF NOT EXISTS idx_submissions_model ON evaluation_submissions(model_used);
CREATE INDEX IF NOT EXISTS idx_submissions_created ON evaluation_submissions(created_at DESC);

-- ============================================
-- 2. EVALUATIONS TABLE
-- ============================================
-- Stores AI evaluation results for each submission
CREATE TABLE IF NOT EXISTS evaluations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Foreign key to submission
  submission_id UUID NOT NULL REFERENCES evaluation_submissions(id) ON DELETE CASCADE,

  -- Evaluation metadata
  evaluated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  evaluator_version TEXT DEFAULT 'v1.0', -- Track which eval prompt version was used

  -- Scores (0-100 for each dimension)
  score_code_quality INTEGER CHECK (score_code_quality >= 0 AND score_code_quality <= 100),
  score_kinetic_integration INTEGER CHECK (score_kinetic_integration >= 0 AND score_kinetic_integration <= 100),
  score_functionality INTEGER CHECK (score_functionality >= 0 AND score_functionality <= 100),
  score_fallback_quality INTEGER CHECK (score_fallback_quality >= 0 AND score_fallback_quality <= 100),
  score_user_intent_match INTEGER CHECK (score_user_intent_match >= 0 AND score_user_intent_match <= 100),
  score_creativity_design INTEGER CHECK (score_creativity_design >= 0 AND score_creativity_design <= 100),

  -- Overall score (average of all dimensions)
  score_overall DECIMAL(5,2),

  -- Detailed feedback (JSON structure)
  detailed_feedback JSONB, -- { dimension: { score, reasoning, issues: [] } }

  -- Summary
  overall_assessment TEXT,
  top_issues TEXT[], -- Array of top 3 issues
  strengths TEXT[], -- Array of what was done well

  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster querying
CREATE INDEX IF NOT EXISTS idx_evaluations_submission ON evaluations(submission_id);
CREATE INDEX IF NOT EXISTS idx_evaluations_overall_score ON evaluations(score_overall DESC);

-- ============================================
-- 3. PROMPT VERSIONS TABLE
-- ============================================
-- Tracks different versions of prompts for small and large models
CREATE TABLE IF NOT EXISTS prompt_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Version info
  version TEXT NOT NULL,
  model_type TEXT NOT NULL CHECK (model_type IN ('small', 'large')),

  -- Prompt content
  prompt_text TEXT NOT NULL,

  -- Metadata
  description TEXT, -- What changed in this version
  deployed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT false, -- Only one active version per model_type

  -- Performance metrics (calculated from evaluations)
  avg_score_overall DECIMAL(5,2),
  total_evaluations INTEGER DEFAULT 0,

  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster querying
CREATE INDEX IF NOT EXISTS idx_prompt_versions_active ON prompt_versions(model_type, is_active);

-- Create a partial unique index to ensure only one active version per model type
CREATE UNIQUE INDEX IF NOT EXISTS idx_prompt_versions_unique_active
  ON prompt_versions(model_type)
  WHERE is_active = true;

-- ============================================
-- 4. EXPERT ANALYSES TABLE
-- ============================================
-- Stores recommendations from the Prompting Expert AI
CREATE TABLE IF NOT EXISTS expert_analyses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Analysis metadata
  analyzed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  model_type TEXT NOT NULL CHECK (model_type IN ('small', 'large', 'both')),

  -- Input: Which evaluations were analyzed
  evaluation_count INTEGER, -- How many evaluations were reviewed
  date_range_start TIMESTAMP WITH TIME ZONE,
  date_range_end TIMESTAMP WITH TIME ZONE,

  -- Output: Expert recommendations
  issues_detected TEXT[], -- Array of common issues found
  recommended_changes TEXT, -- Specific prompt modifications suggested
  expected_impact TEXT, -- Which scores should improve
  rollback_plan TEXT, -- How to revert if changes hurt performance

  -- Implementation tracking
  implemented BOOLEAN DEFAULT false,
  implemented_at TIMESTAMP WITH TIME ZONE,
  implemented_in_version UUID REFERENCES prompt_versions(id),

  -- Results after implementation
  results_notes TEXT, -- Did the changes work as expected?

  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster querying
CREATE INDEX IF NOT EXISTS idx_expert_analyses_model ON expert_analyses(model_type);
CREATE INDEX IF NOT EXISTS idx_expert_analyses_implemented ON expert_analyses(implemented);

-- ============================================
-- 5. UPDATED_AT TRIGGER
-- ============================================
-- Automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_evaluation_submissions_updated_at
  BEFORE UPDATE ON evaluation_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 6. INITIAL PROMPT VERSIONS
-- ============================================
-- Insert current prompts as v1.0 (baseline)
-- Note: You'll need to update the prompt_text with your actual prompts

INSERT INTO prompt_versions (version, model_type, prompt_text, description, is_active)
VALUES
  ('v1.0', 'small', 'PLACEHOLDER - Update this with your current small model prompt from generate.js', 'Initial baseline prompt', true),
  ('v1.0', 'large', 'PLACEHOLDER - Update this with your current large model prompt from generate.js', 'Initial baseline prompt', true)
ON CONFLICT DO NOTHING;

-- ============================================
-- COMPLETED!
-- ============================================
-- All tables created successfully
-- Next steps:
-- 1. Update the prompt_versions table with your actual prompts
-- 2. Set up Row Level Security (RLS) if needed
-- 3. Create the Supabase client utility in your app
