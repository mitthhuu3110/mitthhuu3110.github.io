'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    emoji: '💼',
    title: 'Where I work ?',
    content:
      'I work at Ford as a Software Engineer. Continuously learning and shipping products that are crucial for Enterprise Technology.',
  },
  {
    emoji: '🎓',
    title: 'Where I Graduated ?',
    content:
      'Graduated from NIT (National Institute of Technology), Raipur in 2024 with a CGPA of 8.5 in Computer Science & Engineering.',
  },
  {
    emoji: '🛠️',
    title: 'What I Work With ?',
    content:
      'Java - Spring Boot, Python, PostgreSQL, Kubernetes, AWS, Docker, GitHub Actions, and Terraform, AI Agents — all in my toolkit for Backend & DevOps.',
  },
  {
    emoji: '🧠',
    title: 'What I’m Great At ?',
    content:
      'Designing scalable APIs, building robust backend systems, and shipping clean, production-grade code with performance in mind.',
  },
  {
    emoji: '🚀',
    title: 'How I Build ?',
    content:
      'I start with clarity, design with simplicity, and ship fast. I believe great backend systems should be invisible and reliable.',
  },
  {
    emoji: '🧩',
    title: 'Outside of Code ?',
    content:
      'I write, tour, play sports, solve puzzles, and ideate side projects with a sip of coffee ☕️ — it’s my reset button.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center py-10 px-4 sm:px-10 md:px-16 text-[color:var(--base)]"
    >
      <div className="max-w-6xl w-full flex flex-col items-center text-center space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-brand-orange"
        >
          About me
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl p-5 sm:p-6 space-y-3 border border-zinc-300 dark:border-zinc-700 
                backdrop-blur-sm hover:shadow-[0_4px_20px_rgba(255,115,0,0.15)] transition-shadow duration-300 text-left"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-brand-orange flex items-center gap-2">
                <span>{card.emoji}</span>
                {card.title}
              </h3>
              <p className="text-sm sm:text-base font-sans leading-relaxed text-[color:var(--base)]">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Quote */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-xl italic font-mono pt-8 sm:pt-10 border-t border-dashed border-gray-600 w-full max-w-3xl mx-auto text-center"
        >
          “Behind every great product is a backend that quietly holds the chaos together.”
        </motion.p>
      </div>
    </section>
  );
}