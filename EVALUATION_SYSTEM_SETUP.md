# Kinetic Email Evaluation System - Setup Guide

## Overview

This evaluation system allows you to:
1. **Collect** playground email builds with user feedback
2. **Evaluate** them using an AI agent with structured scoring
3. **Track** model performance (small vs large) over time
4. **Improve** prompts based on aggregate feedback

---

## Setup Instructions

### Step 1: Run the Supabase Schema

You've already added your Supabase credentials to `.env`. Now you need to create the database tables.

1. **Go to your Supabase Dashboard**: [https://app.supabase.com](https://app.supabase.com)
2. **Select your project**: `kinetic-email` (or whatever you named it)
3. **Navigate to**: SQL Editor (in the left sidebar)
4. **Copy the contents** of [`supabase-schema.sql`](./supabase-schema.sql)
5. **Paste into the SQL Editor** and click "Run"

This will create 4 tables:
- `evaluation_submissions` - Stores playground submissions
- `evaluations` - Stores AI evaluation results
- `prompt_versions` - Tracks prompt versions over time
- `expert_analyses` - Stores recommendations from Prompting Expert AI (Phase 3)

### Step 2: Update Initial Prompt Versions (Optional)

The schema includes placeholder prompt versions. You should update them with your actual prompts:

```sql
-- Update small model prompt
UPDATE prompt_versions
SET prompt_text = 'YOUR ACTUAL SMALL MODEL PROMPT FROM generate.js'
WHERE model_type = 'small' AND version = 'v1.0';

-- Update large model prompt
UPDATE prompt_versions
SET prompt_text = 'YOUR ACTUAL LARGE MODEL PROMPT FROM generate.js'
WHERE model_type = 'large' AND version = 'v1.0';
```

Or just leave the placeholders for now - they're not critical for Phase 1.

### Step 3: Restart Your Dev Server

```bash
npm run dev
```

---

## How to Use the System

### 1. **Playground Submission** (User Side)

1. Go to the **Playground** page
2. Generate an email with a prompt
3. Click **"Submit for Evaluation"** button (replaces "Was this helpful?")
4. Fill out the modal:
   - **User Intent**: What you were trying to achieve (required)
   - **User Feedback**: Any issues or comments (optional)
5. Click **Submit**

This saves the submission to the `evaluation_submissions` table with status `'pending'`.

### 2. **Review Submissions** (Admin Side)

1. Go to **Admin Portal** (`/admin`)
2. Log in with password: `Sheba`
3. Click the **"Evaluations"** tab
4. You'll see all submissions with filters:
   - **Pending** - Not yet evaluated
   - **Evaluated** - Already processed
   - **All** - Everything

### 3. **Run Evaluation AI**

For each pending submission:

1. Click **"View"** to see full details (code, user intent, feedback)
2. Click **"Run Eval AI"** to trigger evaluation
3. The AI will:
   - Analyze the code on 6 dimensions
   - Provide scores (0-100 for each)
   - Give detailed feedback
   - List top issues and strengths

Results are saved to the `evaluations` table and linked to the submission.

### 4. **View Results**

- Overall score is displayed in the submission card
- Click **"View"** to see full breakdown:
  - Code Quality
  - Kinetic Integration
  - Functionality
  - Fallback Quality
  - User Intent Match
  - Creativity & Design

---

## System Architecture

```
PLAYGROUND
  ↓ User submits email build
evaluation_submissions (status: 'pending')
  ↓ Admin clicks "Run Eval AI"
/api/admin/run-evaluation
  ↓ Claude analyzes code
evaluations (linked to submission)
  ↓ Status updated to 'evaluated'
Admin views detailed results
```

---

## API Endpoints

### POST `/api/admin/submit-evaluation`
Submits a playground build for evaluation.

**Body:**
```json
{
  "userIntent": "Create a product showcase with tabs",
  "userFeedback": "Tabs worked but fallback could be better",
  "userPrompt": "Make a tabbed email for shoes",
  "generatedCode": "<!DOCTYPE html>...",
  "modelUsed": "small",
  "ragUsed": true,
  "ragExamplesCount": 3
}
```

**Response:**
```json
{
  "success": true,
  "submission": {
    "id": "uuid",
    "status": "pending",
    "submittedAt": "2025-12-21T..."
  }
}
```

### GET `/api/admin/list-evaluations`
Lists evaluation submissions with optional filters.

**Query Params:**
- `status` - `pending`, `evaluated`, `evaluating`, `skipped`
- `modelUsed` - `small`, `large`
- `limit` - Number of results (default: 50)
- `offset` - Pagination offset (default: 0)

**Response:**
```json
{
  "success": true,
  "submissions": [...],
  "count": 12
}
```

### POST `/api/admin/run-evaluation`
Runs the Eval AI agent on a submission.

**Body:**
```json
{
  "submissionId": "uuid"
}
```

**Response:**
```json
{
  "success": true,
  "evaluation": {
    "id": "uuid",
    "score_overall": 85.5,
    "scores": {
      "codeQuality": 90,
      "kineticIntegration": 85,
      "functionality": 95,
      "fallbackQuality": 75,
      "userIntentMatch": 88,
      "creativityDesign": 80
    },
    "overallAssessment": "Strong implementation...",
    "topIssues": [...],
    "strengths": [...]
  }
}
```

---

## Evaluation Criteria

The Eval AI scores each submission on 6 dimensions (0-100 each):

### 1. Code Quality
- Syntax correctness (valid HTML, CSS)
- Code structure and organization
- Best practices (table structure, inline styles)
- Clean, readable code

### 2. Kinetic Integration
- Correct use of CSS :checked pseudo-classes
- Proper lightswitch implementation
- Interactive elements work as intended
- Follows kinetic email patterns

### 3. Functionality
- Code is syntactically valid (no errors)
- Interactive features would work in supported clients
- No broken logic or missing elements
- Email structure is complete

### 4. Fallback Quality
- Static fallback content exists
- Fallback covers all dynamic content
- Properly implemented
- Maintains design intent without interactivity

### 5. User Intent Match
- How well does this fulfill the user's stated intent?
- Does it address what they asked for?
- Are the requirements met?

### 6. Creativity & Design
- Visual appeal and layout
- Innovation in approach
- Professional appearance
- Attention to detail

**Overall Score** = Average of all 6 dimensions

---

## Next Steps (Future Phases)

### Phase 2: Analytics Dashboard
- Track performance trends over time
- Compare small vs large model scores
- Identify common failure patterns
- A/B test prompt variations

### Phase 3: Prompting Expert AI
- Aggregate evaluation feedback
- Analyze patterns across many evaluations
- Generate recommendations for prompt improvements
- Track which changes improve scores

### Phase 4: Public Progress Dashboard
- Show model improvement over time on "How It Works" page
- Build transparency and trust with users
- Demonstrate value of fine-tuning

---

## Database Schema

### evaluation_submissions
- `id` (UUID, PK)
- `user_intent` (TEXT) - What user wanted to achieve
- `user_feedback` (TEXT) - Optional user comments
- `user_prompt` (TEXT) - The prompt entered
- `generated_code` (TEXT) - The email HTML generated
- `model_used` (TEXT) - 'small' or 'large'
- `rag_used` (BOOLEAN)
- `rag_examples_count` (INTEGER)
- `status` (TEXT) - 'pending', 'evaluating', 'evaluated', 'skipped'
- `created_at`, `updated_at`

### evaluations
- `id` (UUID, PK)
- `submission_id` (UUID, FK)
- `evaluator_version` (TEXT) - e.g., 'v1.0'
- `score_code_quality` (INTEGER 0-100)
- `score_kinetic_integration` (INTEGER 0-100)
- `score_functionality` (INTEGER 0-100)
- `score_fallback_quality` (INTEGER 0-100)
- `score_user_intent_match` (INTEGER 0-100)
- `score_creativity_design` (INTEGER 0-100)
- `score_overall` (DECIMAL) - Average
- `detailed_feedback` (JSONB)
- `overall_assessment` (TEXT)
- `top_issues` (TEXT[])
- `strengths` (TEXT[])
- `evaluated_at`

### prompt_versions
- `id` (UUID, PK)
- `version` (TEXT) - e.g., 'v1.0', 'v1.1'
- `model_type` (TEXT) - 'small' or 'large'
- `prompt_text` (TEXT)
- `description` (TEXT) - What changed
- `deployed_at`
- `is_active` (BOOLEAN)
- `avg_score_overall` (DECIMAL)
- `total_evaluations` (INTEGER)

### expert_analyses
- `id` (UUID, PK)
- `model_type` (TEXT) - 'small', 'large', or 'both'
- `evaluation_count` (INTEGER)
- `date_range_start`, `date_range_end`
- `issues_detected` (TEXT[])
- `recommended_changes` (TEXT)
- `expected_impact` (TEXT)
- `rollback_plan` (TEXT)
- `implemented` (BOOLEAN)
- `implemented_in_version` (UUID, FK to prompt_versions)

---

## Troubleshooting

### "Failed to load evaluations"
- Check Supabase credentials in `.env`
- Verify tables were created (run schema.sql)
- Check Supabase dashboard for any RLS policies blocking access

### "Failed to run evaluation"
- Check `CLAUDE_API_KEY` in `.env`
- Verify submission exists and is in 'pending' status
- Check API logs for detailed error messages

### Empty evaluations tab
- Make sure you've submitted at least one email from the playground
- Check the filter (try "All" to see everything)
- Verify data exists in Supabase dashboard

---

## Files Created

- `supabase-schema.sql` - Database schema
- `src/utils/supabase.js` - Supabase client and helper functions
- `api/admin/submit-evaluation.js` - Submit playground builds
- `api/admin/list-evaluations.js` - Fetch submissions
- `api/admin/run-evaluation.js` - Run Eval AI agent
- `src/pages/playground/PlaygroundPage.tsx` - Updated UI with submission modal
- `src/pages/admin/AdminPortal.tsx` - Added Evaluations tab

---

## Questions?

This is Phase 1 (MVP). You can now:
✅ Collect playground submissions
✅ Run AI evaluations
✅ Track model performance
✅ View detailed feedback

Next we can build Phase 2 (analytics) and Phase 3 (prompting expert AI) when you're ready!
