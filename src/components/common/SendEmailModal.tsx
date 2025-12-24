import { useState } from 'react';
import { FaPaperPlane, FaTimes, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

interface SendEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  emailHTML: string;
  defaultSubject: string;
  emailType: 'portfolio' | 'playground' | 'learning';
  projectName?: string;
}

export default function SendEmailModal({
  isOpen,
  onClose,
  emailHTML,
  defaultSubject,
  emailType,
  projectName
}: SendEmailModalProps) {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [customSubject, setCustomSubject] = useState(defaultSubject);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSend = async () => {
    // Validate email
    if (!recipientEmail.trim()) {
      setErrorMessage('Please enter your email address');
      setSendStatus('error');
      return;
    }

    if (!validateEmail(recipientEmail)) {
      setErrorMessage('Please enter a valid email address');
      setSendStatus('error');
      return;
    }

    setIsSending(true);
    setSendStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('https://www.kinetic.email/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: recipientEmail,
          subject: customSubject || defaultSubject,
          html: emailHTML,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSendStatus('success');
        // Auto-close after 3 seconds on success
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        setSendStatus('error');
        setErrorMessage(data.error || 'Failed to send email. Please try again.');
      }
    } catch (error) {
      setSendStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      console.error('Send email error:', error);
    } finally {
      setIsSending(false);
    }
  };

  const handleClose = () => {
    setRecipientEmail('');
    setCustomSubject(defaultSubject);
    setSendStatus('idle');
    setErrorMessage('');
    onClose();
  };

  const getTypeDescription = () => {
    switch (emailType) {
      case 'portfolio':
        return `Send this ${projectName || ''} email to your inbox to experience the kinetic interactivity in your real email client.`;
      case 'playground':
        return 'Send your AI-generated kinetic email to test it in your real email client (Apple Mail, iOS Mail, etc.).';
      case 'learning':
        return 'Receive this educational example in your inbox to learn by interacting with it directly.';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <FaPaperPlane className="text-blue-600" size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Send to Your Inbox</h2>
            <p className="text-sm text-gray-500">Test this kinetic email</p>
          </div>
        </div>

        {/* Success State */}
        {sendStatus === 'success' && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <FaCheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-green-800 font-medium">Email sent successfully!</p>
              <p className="text-green-700 text-sm mt-1">
                Check your inbox at <span className="font-mono">{recipientEmail}</span>
              </p>
            </div>
          </div>
        )}

        {/* Error State */}
        {sendStatus === 'error' && errorMessage && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <FaExclamationCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-red-800 font-medium">Failed to send</p>
              <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{getTypeDescription()}</p>

        {/* Form */}
        <div className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="recipient-email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email Address
            </label>
            <input
              id="recipient-email"
              type="email"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isSending || sendStatus === 'success'}
            />
          </div>

          {/* Subject Input */}
          <div>
            <label htmlFor="email-subject" className="block text-sm font-medium text-gray-700 mb-1">
              Email Subject
            </label>
            <input
              id="email-subject"
              type="text"
              value={customSubject}
              onChange={(e) => setCustomSubject(e.target.value)}
              placeholder="Email subject line"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isSending || sendStatus === 'success'}
            />
          </div>

          {/* Privacy Note */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
            <p className="text-xs text-gray-600">
              <strong>Privacy:</strong> Your email is only used to send this test. We do not store or share your email address.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              disabled={isSending}
            >
              Cancel
            </button>
            <button
              onClick={handleSend}
              disabled={isSending || sendStatus === 'success'}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : sendStatus === 'success' ? (
                <>
                  <FaCheckCircle />
                  Sent!
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Email
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
