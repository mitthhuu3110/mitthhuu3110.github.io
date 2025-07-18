'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center text-center py-16 px-6 sm:px-10 md:px-16 text-[color:var(--base)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl space-y-10"
      >
        <motion.h1
          whileHover={{ scale: 1.02 }}
          className="text-4xl sm:text-5xl font-extrabold font-sans tracking-wide text-brand-orange flex items-center justify-center gap-2"
        >
          Hi, I&apos;m Mithilesh Charan
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            👋
          </motion.span>
        </motion.h1>

        <div className="inline-flex items-center justify-center gap-4 text-base sm:text-lg font-mono px-4 py-2 text-gray-700 dark:text-gray-300 tracking-wide">
          <span>Software Engineer</span>
          <span className="opacity-50">•</span>
          <span>Backend Developer</span>
          <span className="opacity-50">•</span>
          <span>DevOps & Cloud Enthusiast 💭</span>
        </div>

        <div className="relative text-base sm:text-lg leading-relaxed text-left px-6 py-8 rounded-xl border border-zinc-300 dark:border-zinc-700 backdrop-blur-md shadow-xl">
          <div className="absolute -top-3 left-6 px-3 py-1 text-[10px] uppercase tracking-widest text-black bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-md">
            Currently 👨‍💻
          </div>
          <p className="font-medium">
            Building scalable systems that are efficient, secure, and high performance. I love automating boring stuff and (safely) breaking production at Ford 🚀
          </p>
          <p className="mt-3">
            Currently obsessed with{' '}
            <span className="text-brand-orange font-bold font-mono">
              Java - Spring Boot
            </span>,{' '}
            <span className="text-brand-orange font-bold font-mono">
              Python
            </span>,{' '}
            <span className="text-brand-orange font-bold font-mono">
              REST APIs
            </span>,{' '}
            <span className="text-brand-orange font-bold font-mono">
              PostgreSQL
            </span>,{' '}
            <span className="text-brand-orange font-bold font-mono">
              Kubernetes
            </span>{' '}
            &{' '}
            <span className="text-brand-orange font-bold font-mono">
              [AWS, GCP]
            </span>.
          </p>
        </div>
      </motion.div>
    </section>
  );
}