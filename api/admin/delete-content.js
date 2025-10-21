// api/admin/delete-content.js - Delete content from Pinecone

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

  // Only allow DELETE or POST requests
  if (req.method !== 'DELETE' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }

    console.log('Deleting content from Pinecone with ID:', id);

    // Lazy load Pinecone
    const { Pinecone } = await import('@pinecone-database/pinecone');

    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY
    });

    const index = pinecone.index(process.env.PINECONE_INDEX_NAME);

    // Delete the vector by ID
    await index.deleteOne(id);

    console.log('Successfully deleted:', id);

    res.status(200).json({
      success: true,
      message: 'Content deleted successfully',
      id,
    });

  } catch (error) {
    console.error('Delete content error:', error);
    res.status(500).json({
      error: 'Failed to delete content',
      details: error.message
    });
  }
}
