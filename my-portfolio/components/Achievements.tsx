'use client';

import { achievements, Achievement } from '@/data/achievements';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="w-full flex flex-col items-center justify-center py-10 px-6 sm:px-10 md:px-16 text-[color:var(--base)]"
    >
      <div className="max-w-3xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-brand-orange mb-10"
        >
          Achievements & Certifications 🏅
        </motion.h2>

        <div className="space-y-10">
          {achievements.map((item: Achievement, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 space-y-3 hover:shadow-lg transition-all bg-[color:var(--bg)] text-[color:var(--base)]"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="flex items-center gap-3">
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">{item.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic font-mono">{item.date}</p>
              </div>
              <ul className="list-disc list-inside space-y-1 text-left">
                {item.description.map((point: string, idx2: number) => (
                  <li key={idx2} className="text-base leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-brand-orange hover:underline pt-2"
                >
                  View Credential <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}