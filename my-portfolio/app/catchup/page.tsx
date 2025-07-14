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
    <div className="pl-6 pr-4 md:pl-24 md:pr-12 py-12 w-full text-[color:var(--base)]">
      <h1 className="text-3xl font-bold font-mono text-brand-orange mb-2">CatchUp with me!</h1>

      <p className="text-base leading-relaxed">
        If you want to talk about Open roles, Work or anything regarding Tech, feel free to reach out on Email or LinkedIn. Will get back to you in no time. 
      </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <a
                href="mailto:3110mithilesh@gmail.com"
                className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-lg hover:shadow-lg hover:scale-[1.01] transition-all bg-white dark:bg-[color:var(--bg)]"
            >
                <span className="text-xl">📧</span>
                <div>
                <p className="text-sm font-semibold font-mono text-gray-800 dark:text-gray-100">Email Me</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">3110mithilesh@gmail.com</p>
                </div>
            </a>

            <a
                href="https://linkedin.com/in/mithilesh-perugu-5a1726236/"
                target="_blank"
                className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-lg hover:shadow-lg hover:scale-[1.01] transition-all bg-white dark:bg-[color:var(--bg)]"
            >
                <span className="text-xl">🔗</span>
                <div>
                <p className="text-sm font-semibold font-mono text-gray-800 dark:text-gray-100">Connect on LinkedIn</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">linkedin.com/in/mithilesh-perugu</p>
                </div>
            </a>
        </div>

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