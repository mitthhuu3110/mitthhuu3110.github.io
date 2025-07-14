'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

export default function CatchUp() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('https://formspree.io/f/mblkrbvv', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(e.currentTarget),
    });

    if (res.ok) {
      setSubmitted(true);
      setMessage('');
    } else {
      alert('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <div className="px-8 md:pl-20 md:pr-10 py-12 max-w-3xl text-[color:var(--base)]">
      <h1 className="text-3xl font-bold font-mono text-brand-orange mb-2">CatchUp with me!</h1>

      <p className="text-lg leading-relaxed mt-4">
        <code className="text-sm text-gray-500">int you = Want to talk about tech || work || life ?</code> <br />
        Ping me directly here or on LinkedIn!
      </p>

      {/* Contact Links */}
      <section className="flex flex-col gap-4 pt-12">
        <div className="flex gap-4 pt-2">
          <a href="mailto:3110mithilesh@gmail.com" className="text-sm underline hover:text-blue-600">📧 Email</a>
          <a href="https://github.com/mitthhuu3110" target="_blank" className="text-sm underline hover:text-blue-600">🐙 GitHub</a>
          <a href="https://linkedin.com/in/mithilesh-perugu-5a1726236/" target="_blank" className="text-sm underline hover:text-blue-600">🔗 LinkedIn</a>
        </div>
      </section>

      <p className="text-sm text-gray-500 mt-6">
        Or just send me a message below 👇 — I’ll read it over coffee.
      </p>

      {submitted ? (
        <p className="mt-8 text-sm text-green-600 font-mono">✅ Message sent successfully! Thanks 🙌</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
          <label htmlFor="message" className="font-mono text-sm text-brand-orange">📨 Send me a message</label>

          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-transparent border border-gray-400 dark:border-gray-600 rounded-md p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
            placeholder="Type your message here..."
          />

          <button
            type="submit"
            className="self-start bg-brand-orange text-white px-4 py-2 rounded-md hover:opacity-90 font-mono text-sm"
          >
            Send Message
          </button>
        </form>
      )}

      <Footer />
    </div>
  );
}