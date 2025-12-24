// api/send-email.ts
// Vercel Serverless Function to send emails securely
// API key stays on the server, never exposed to the browser

import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { to, subject, html } = req.body;

    // Validate required fields
    if (!to || !html) {
      return res.status(400).json({ error: 'Missing required fields: to, html' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Get API key from environment variable (server-side only)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    // Initialize Resend
    const resend = new Resend(apiKey);

    // Send email
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Kinetic Email <onboarding@resend.dev>',
      to: [to],
      subject: subject || 'Your Kinetic Email',
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: error.message || 'Failed to send email' });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!'
    });

  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}
