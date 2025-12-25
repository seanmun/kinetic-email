-- ============================================
-- Enable RLS and Create Policies for Admin Tables
-- ============================================
-- These tables should only be accessible via service role key (server-side API endpoints)
-- Client-side access should be completely blocked

-- 1. Enable RLS on all tables
ALTER TABLE public.evaluation_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.evaluations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prompt_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expert_analyses ENABLE ROW LEVEL SECURITY;

-- 2. Drop existing policies if any (in case you're re-running this)
DROP POLICY IF EXISTS "Service role only" ON public.evaluation_submissions;
DROP POLICY IF EXISTS "Service role only" ON public.evaluations;
DROP POLICY IF EXISTS "Service role only" ON public.prompt_versions;
DROP POLICY IF EXISTS "Service role only" ON public.expert_analyses;

-- 3. Create restrictive policies (no public access)
-- These policies effectively block all client access while allowing service role access

-- Policy for evaluation_submissions
CREATE POLICY "Service role only" ON public.evaluation_submissions
  FOR ALL
  USING (false);  -- Block all client access

-- Policy for evaluations
CREATE POLICY "Service role only" ON public.evaluations
  FOR ALL
  USING (false);  -- Block all client access

-- Policy for prompt_versions
CREATE POLICY "Service role only" ON public.prompt_versions
  FOR ALL
  USING (false);  -- Block all client access

-- Policy for expert_analyses
CREATE POLICY "Service role only" ON public.expert_analyses
  FOR ALL
  USING (false);  -- Block all client access

-- ============================================
-- Verification Queries
-- ============================================
-- Run these to confirm RLS is enabled:

-- Check RLS status
SELECT
  schemaname,
  tablename,
  rowsecurity as "RLS Enabled"
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('evaluation_submissions', 'evaluations', 'prompt_versions', 'expert_analyses')
ORDER BY tablename;

-- Check policies
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename IN ('evaluation_submissions', 'evaluations', 'prompt_versions', 'expert_analyses')
ORDER BY tablename, policyname;
