// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import HighlightOval from './HighlightOval';

export default function Hero() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center text-center py-32 px-6 sm:px-10 md:px-16 text-[color:var(--base)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl space-y-8"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold font-sans tracking-wide text-brand-orange">
          Hi, I&apos;m Mithilesh Charan 👋
        </h1>

        <div className="inline-flex items-center justify-center gap-3 text-base sm:text-lg font-mono px-4 py-2 text-gray-700 dark:text-gray-300">
          <span>Software Engineer</span>
          <span className="opacity-50">•</span>
          <span>Backend Developer</span>
          <span className="opacity-50">•</span>
          <span>DevOps & Cloud Enthusiast</span>
        </div>

        <div className="relative text-base sm:text-lg leading-relaxed text-left px-6 py-6 bg-gradient-to-br border border-zinc-300 dark:border-zinc-700 rounded-md shadow-inner">
          <div className="absolute -top-3 left-6 px-2 bg-[color:var(--bg)] text-[10px] uppercase tracking-widest font-bold text-brand-orange">
            CURRENTLY BUILDING
          </div>
          <p>
            Building scalable systems that are efficient, secure along with high performance, automating boring stuff,
            and breaking production (with permission) at Ford.
          </p>
          <p className="mt-4 relative inline-block font-semibold">
            Currently obsessed with ::: {' '}
            <HighlightOval>
              Problem Solving & Backend Systems
            </HighlightOval>
          </p>
        </div>
      </motion.div>
    </section>
  );
}