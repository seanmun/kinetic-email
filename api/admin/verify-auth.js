// api/admin/verify-auth.js - Verify admin credentials

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
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Verify credentials against environment variables
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
      console.error('ADMIN_EMAIL or ADMIN_PASSWORD not set in environment variables');
      console.error('ADMIN_EMAIL exists:', !!ADMIN_EMAIL);
      console.error('ADMIN_PASSWORD exists:', !!ADMIN_PASSWORD);
      return res.status(500).json({
        error: 'Server configuration error',
        details: 'ADMIN_EMAIL or ADMIN_PASSWORD not configured in Vercel environment variables'
      });
    }

    // Simple comparison (consider using bcrypt for production)
    const authenticated = email === ADMIN_EMAIL && password === ADMIN_PASSWORD;

    if (authenticated) {
      return res.status(200).json({ authenticated: true });
    } else {
      return res.status(401).json({ authenticated: false, error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Auth verification error:', error);
    return res.status(500).json({ error: 'Authentication failed' });
  }
}
