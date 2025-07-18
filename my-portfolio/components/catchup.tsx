'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <motion.section
      id="catchup"
      className="w-full flex flex-col items-center justify-center py-10 px-6 sm:px-10 md:px-16 text-[color:var(--base)]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-orange mb-6">CatchUp with me!</h1>

        {/* Contact Cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
          <motion.a
            whileHover={{ scale: 1.03 }}
            href="mailto:3110mithilesh@gmail.com"
            className="flex items-center gap-4 w-full sm:w-[320px] border border-gray-300 dark:border-gray-700 px-5 py-4 rounded-lg hover:shadow-lg transition-all dark:bg-[color:var(--bg)]"
          >
            <span className="text-2xl">📧</span>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">Email Me</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">3110mithilesh@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            href="https://www.linkedin.com/in/mithilesh-charan-perugu-5a1726236/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full sm:w-[320px] border border-gray-300 dark:border-gray-700 px-5 py-4 rounded-lg hover:shadow-lg transition-all dark:bg-[color:var(--bg)]"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={22}
              height={22}
              className="object-contain"
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">Connect on LinkedIn</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">linkedin.com/in/mithilesh-perugu</p>
            </div>
          </motion.a>
        </div>

        <p className="text-sm text-gray-500 font-mono mb-6">
          Or just send me a message below 👇 — I’ll read it over coffee.
        </p>

        {/* Message Form */}
        {submitted ? (
          <p className="mt-8 text-sm text-green-600 font-mono">✅ Message sent successfully! Thanks 🙌</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
            <label htmlFor="message" className="text-sm font-semibold self-start sm:self-center">📨 Send me a message</label>

            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full sm:w-[450px] bg-transparent border border-gray-400 dark:border-gray-600 rounded-md p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
              placeholder="Type your message here..."
            />

            <button
              type="submit"
              className="bg-brand-orange text-white px-5 py-2 rounded-md hover:opacity-90 font-mono text-sm transition-transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </motion.section>
  );
}