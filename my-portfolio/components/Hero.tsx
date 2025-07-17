'use client';

import { motion } from 'framer-motion';

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
        className="max-w-3xl space-y-6"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-wide text-brand-orange">
          Hi, I'm Mithilesh Charan 👋
        </h1>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-mono tracking-wide">
          Software Engineer • Backend Developer • DevOps & Cloud Enthusiast
        </p>

        <div className="border-l-4 border-brand-orange pl-4 text-sm sm:text-base leading-relaxed italic text-left mx-auto">
          Building scalable systems, automating boring stuff, and breaking production (with permission) at Ford.<br />
          Currently obsessed with{' '}
          <span className="text-brand-orange font-semibold font-mono">Java - Spring Boot</span>,{' '}
          <span className="text-brand-orange font-semibold font-mono">Python</span>,{' '}
          <span className="text-brand-orange font-semibold font-mono">REST APIs</span>,{' '}
          <span className="text-brand-orange font-semibold font-mono">[AWS, GCP]</span>,{' '}
          <span className="text-brand-orange font-semibold font-mono">Kubernetes</span> &{' '}
          <span className="text-brand-orange font-semibold font-mono">Databases</span>.
        </div>
      </motion.div>
    </section>
  );
}