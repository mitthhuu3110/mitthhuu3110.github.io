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
        {/* Name */}
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

        {/* Role tags */}
        <div className="inline-flex items-center justify-center gap-4 text-base sm:text-lg font-mono px-4 py-2 text-gray-700 dark:text-gray-300 tracking-wide">
          <span>Software Engineer</span>
          <span className="opacity-50">•</span>
          <span>Backend Developer</span>
          <span className="opacity-50">•</span>
          <span>DevOps & Cloud Enthusiast 💭</span>
        </div>

        {/* "Currently" section with card and tech badges */}
        <div className="relative text-base sm:text-lg leading-relaxed text-left px-6 py-8 rounded-xl border border-zinc-300 dark:border-zinc-700 backdrop-blur-md shadow-xl transition-all duration-300">
          <div className="absolute -top-3 left-6 px-3 py-1 text-[10px] uppercase tracking-widest text-black bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-md">
            Currently 👨‍💻
          </div>
          <p className="font-medium mb-4">
            Building scalable systems that are efficient, secure, and built for performance. Passionate about automating the manual efforts so teams can focus on what matters at Ford 🚀
          </p>

          <p className="mb-2">Currently obsessed with 👇</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              'Java - Spring Boot',
              'Python',
              'REST APIs',
              'PostgreSQL',
              'Kubernetes',
              'AWS',
              'GCP',
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-zinc-200 dark:bg-zinc-700/50 text-xs px-3 py-1 rounded-full font-mono text-orange-500 dark:text-orange-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}