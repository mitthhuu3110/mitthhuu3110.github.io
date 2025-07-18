'use client';

import { achievements } from '@/data/achievements';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="w-full flex flex-col items-center justify-center py-10 px-6 sm:px-10 md:px-16 text-[color:var(--base)]"
    >
      <div className="max-w-6xl w-full flex flex-col items-center text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold font-sans text-brand-orange"
        >
          Achievements & Certifications 🏅
        </motion.h2>

        <div className="w-full flex flex-col gap-6 md:gap-10">
          {achievements.map((item, idx) => {
            const isGCP = item.issuer.includes('Google Cloud');

            const highlightedTitle = item.title.includes('Associate Cloud Engineer')
              ? item.title.replace(
                  'Associate Cloud Engineer',
                  `<span class='text-brand-orange'>Associate Cloud Engineer</span>`
                )
              : item.title;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 sm:p-8 space-y-4 border border-zinc-300 dark:border-zinc-700 
                  backdrop-blur-sm hover:shadow-[0_4px_20px_rgba(255,115,0,0.15)] transition-shadow duration-300 text-left"
              >
                {/* Title + Date */}
                <div className="flex justify-between items-start">
                  <h3
                    className="text-xl sm:text-2xl font-bold font-sans text-[color:var(--base)]"
                    dangerouslySetInnerHTML={{ __html: highlightedTitle }}
                  />
                  <p className="text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-400 mt-1 whitespace-nowrap">
                    {item.date}
                  </p>
                </div>

                {/* Issuer with optional logo */}
                <div className="flex items-center gap-2 text-sm text-gray-500 italic font-mono">
                  {item.issuer}
                  {isGCP && (
                    <Image
                      src="/icons/gcp.svg"
                      alt="GCP logo"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  )}
                </div>

                {/* Bullet Points */}
                <ul className="list-disc list-outside pl-6 space-y-1 pt-1 text-[color:var(--base)] text-sm sm:text-base leading-relaxed">
                  {item.description.map((point, idx2) => (
                    <li key={idx2}>{point}</li>
                  ))}
                </ul>

                {/* Credential Link */}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}