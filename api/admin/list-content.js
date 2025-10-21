// api/admin/list-content.js - List all content from Pinecone
import { Pinecone } from '@pinecone-database/pinecone';

// Initialize Pinecone
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY
});

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

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Fetching all content from Pinecone...');

    const index = pinecone.index(process.env.PINECONE_INDEX_NAME);

    // Query with a dummy vector to get all results
    // We'll use a zero vector and fetch top 10000 to get everything
    const dummyVector = new Array(1536).fill(0);

    const queryResponse = await index.query({
      vector: dummyVector,
      topK: 10000, // Get everything (adjust if you have more)
      includeMetadata: true,
    });

    console.log(`Found ${queryResponse.matches.length} items in knowledge base`);

    // Format the results
    const items = queryResponse.matches.map(match => ({
      id: match.id,
      score: match.score,
      metadata: match.metadata,
    }));

    // Sort by submission date (newest first)
    items.sort((a, b) => {
      const dateA = new Date(a.metadata.submittedAt || 0);
      const dateB = new Date(b.metadata.submittedAt || 0);
      return dateB.getTime() - dateA.getTime();
    });

    res.status(200).json({
      success: true,
      count: items.length,
      items,
    });

  } catch (error) {
    console.error('List content error:', error);
    res.status(500).json({
      error: 'Failed to list content',
      details: error.message
    });
  }
}
