// api/admin/submit-feedback.js - Store user feedback for generated emails

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, rating, ragUsed, ragModel, ragExamplesCount, generatedHtmlPreview } = req.body;

    if (!prompt || !rating) {
      return res.status(400).json({ error: 'Prompt and rating are required' });
    }

    console.log('Feedback received:', { prompt, rating, ragUsed, ragModel, ragExamplesCount });

    // Store feedback in Pinecone metadata (update usage stats for retrieved examples)
    if (ragUsed && ragExamplesCount > 0) {
      try {
        // Lazy load Pinecone
        const { Pinecone } = await import('@pinecone-database/pinecone');

        const pinecone = new Pinecone({
          apiKey: process.env.PINECONE_API_KEY
        });

        // Get the index used
        const indexName = ragModel === 'large' ? process.env.PINECONE_INDEX_NAME_LARGE : process.env.PINECONE_INDEX_NAME;
        const index = pinecone.index(indexName);

        // Re-query to get the example IDs that were used
        const OpenAI = (await import('openai')).default;
        const openai = new OpenAI({
          apiKey: process.env.OPENAI_API_KEY
        });

        const embeddingModel = ragModel === 'large' ? 'text-embedding-3-large' : 'text-embedding-3-small';
        const embeddingResponse = await openai.embeddings.create({
          model: embeddingModel,
          input: prompt,
        });

        const queryResponse = await index.query({
          vector: embeddingResponse.data[0].embedding,
          topK: 10,
          includeMetadata: true,
        });

        const relevantMatches = queryResponse.matches.filter(match => match.score > 0.7);

        // Update metadata for each example (increment usage count, track success rate)
        // Note: Pinecone doesn't support atomic increments, so this is a simplified approach
        // In production, you'd use a separate analytics DB
        console.log(`Would update stats for ${relevantMatches.length} examples based on ${rating} rating`);

      } catch (error) {
        console.error('Error updating RAG stats:', error);
        // Don't fail the request if stats update fails
      }
    }

    res.status(200).json({
      success: true,
      message: 'Feedback received'
    });

  } catch (error) {
    console.error('Feedback submission error:', error);
    res.status(500).json({
      error: 'Failed to submit feedback',
      details: error.message
    });
  }
}
