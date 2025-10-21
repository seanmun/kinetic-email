// api/admin/submit-content.js - Upload content to Pinecone RAG

// Password from environment
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Sheba';

export default async function handler(req, res) {
  console.log('=== SUBMIT CONTENT API CALLED ===');
  console.log('Method:', req.method);
  console.log('Body:', JSON.stringify(req.body).substring(0, 200));

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    console.log('OPTIONS request - returning');
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('Invalid method:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { uploadType, ...data } = req.body;
    console.log('Upload type:', uploadType);

    if (!uploadType || (uploadType !== 'html' && uploadType !== 'blog')) {
      return res.status(400).json({ error: 'Invalid upload type' });
    }

    // Create embedding text based on upload type
    let embeddingText = '';
    let metadata = {};

    if (uploadType === 'html') {
      const {
        htmlContent,
        description,
        technique,
        emailPurpose,
        complexity,
        htmlType,
        keyFeatures,
        bestPracticeTags,
        notes
      } = data;

      if (!htmlContent || !description) {
        return res.status(400).json({ error: 'HTML content and description are required' });
      }

      // Create rich embedding text combining all metadata
      embeddingText = `${description}. ${technique} technique. ${emailPurpose} email. ${complexity} complexity. ${htmlType === 'complete' ? 'Complete email template' : 'Component module'}. Features: ${keyFeatures.join(', ')}. Best practices: ${bestPracticeTags.join(', ')}. ${notes || ''}`;

      metadata = {
        type: 'html',
        html: htmlContent,
        description,
        technique,
        emailPurpose,
        complexity,
        htmlType,
        keyFeatures,
        bestPracticeTags,
        notes: notes || '',
        submittedAt: new Date().toISOString(),
      };
    } else {
      // Blog content
      const {
        blogTitle,
        blogContent,
        blogTopic,
        learningLevel,
        techniquesCovered,
        keyTakeaways
      } = data;

      if (!blogTitle || !blogContent || !keyTakeaways) {
        return res.status(400).json({ error: 'Blog title, content, and key takeaways are required' });
      }

      // Create embedding text from title, takeaways, and techniques
      embeddingText = `${blogTitle}. ${keyTakeaways}. Topic: ${blogTopic}. Level: ${learningLevel}. Covers: ${techniquesCovered.join(', ')}. ${blogContent.substring(0, 500)}`;

      metadata = {
        type: 'blog',
        blogTitle,
        blogContent,
        blogTopic,
        learningLevel,
        techniquesCovered,
        keyTakeaways,
        submittedAt: new Date().toISOString(),
      };
    }

    console.log('Creating embedding for:', embeddingText.substring(0, 100) + '...');

    // Lazy load dependencies
    const { Pinecone } = await import('@pinecone-database/pinecone');
    const OpenAI = (await import('openai')).default;

    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY
    });

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    // Generate embedding using OpenAI
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: embeddingText,
    });

    const embedding = embeddingResponse.data[0].embedding;

    console.log('Embedding created, storing in Pinecone...');

    // Get Pinecone index
    const index = pinecone.index(process.env.PINECONE_INDEX_NAME);

    // Generate unique ID
    const id = `${uploadType}-${Date.now()}-${Math.random().toString(36).substring(7)}`;

    // Upsert to Pinecone
    await index.upsert([{
      id,
      values: embedding,
      metadata
    }]);

    console.log('Successfully stored in Pinecone with ID:', id);

    res.status(200).json({
      success: true,
      id,
      message: `${uploadType === 'html' ? 'Email' : 'Blog post'} successfully added to RAG knowledge base`
    });

  } catch (error) {
    console.error('=== SUBMIT CONTENT ERROR ===');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Full error:', JSON.stringify(error, null, 2));

    res.status(500).json({
      error: 'Failed to submit content',
      details: error.message,
      stack: error.stack
    });
  }
}
