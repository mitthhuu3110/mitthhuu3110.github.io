'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    emoji: '🧠',
    title: 'What I’m Great At',
    content:
      'Designing scalable APIs, building robust backend systems, and shipping clean, production-grade code with performance in mind.',
  },
  {
    emoji: '🛠️',
    title: 'What I Work With',
    content:
      'Java, Spring Boot, Docker, GCP, Kubernetes, Python, GitHub Actions, and Terraform — all in my toolkit for backend & DevOps.',
  },
  {
    emoji: '🚀',
    title: 'How I Build',
    content:
      'I start with clarity, design with simplicity, and ship fast. I believe great backend systems should be invisible and reliable.',
  },
  {
    emoji: '🎓',
    title: 'Where I Graduated',
    content:
      'Graduated from NIT Raipur in 2024 with a CGPA of 8.5 in Computer Science & Engineering. Always learning, always building.',
  },
  {
    emoji: '🧩',
    title: 'Outside of Code',
    content:
      'I write, explore bikes, type at 130+ WPM, and ideate side projects over cold coffee ☕️ — it’s my reset button.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center py-24 px-6 sm:px-10 md:px-16 text-[color:var(--base)]"
    >
      <div className="max-w-5xl w-full flex flex-col items-center text-center space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-brand-orange"
        >
          Who I Am, What I Build
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-2 bg-zinc-900/20 dark:bg-zinc-800/30 p-6 rounded-xl border border-zinc-700 hover:shadow-md transition-shadow backdrop-blur-sm hover:scale-[1.01]"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-brand-orange flex items-center gap-2">
                <span>{card.emoji}</span>
                {card.title}
              </h3>
              <p className="text-left text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
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
          className="text-xl sm:text-2xl italic text-gray-400 pt-12 border-t border-dashed border-gray-600 w-full text-center max-w-3xl"
        >
          “Behind every great product is a backend that quietly holds the chaos together.”
        </motion.p>
      </div>
    </section>
  );
}