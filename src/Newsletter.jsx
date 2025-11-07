import React, { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Using Formspree for newsletter signup
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_NEWSLETTER_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, _subject: 'Newsletter Signup' })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="newsletter-signup">
      <h3>Stay Updated</h3>
      <p>Get notified about new blog posts and cybersecurity insights</p>
      <form onSubmit={handleSubmit}>
        <div className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            required
            disabled={status === 'sending'}
          />
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {status === 'success' && (
          <div className="newsletter-status success">Thanks for subscribing!</div>
        )}
        {status === 'error' && (
          <div className="newsletter-status error">Subscription failed. Please try again.</div>
        )}
      </form>
    </div>
  );
}
