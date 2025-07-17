'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/data/experience';
import { Briefcase, MapPin, CalendarDays } from 'lucide-react';

export default function ExperienceCard({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={`relative w-full md:w-[46%] px-6 py-6 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm bg-[color:var(--bg)] ${
        isLeft ? 'self-start ml-0 mr-auto' : 'self-end mr-0 ml-auto'
      }`}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">{exp.role}</h3>

        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-mono">
          <Briefcase size={16} /> {exp.company}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-mono">
          <MapPin size={16} /> {exp.location}
        </div>

        <div className="flex items-center gap-2 text-sm italic text-gray-400 font-mono">
          <CalendarDays size={16} /> {exp.duration}
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {extractTechFromBullets(exp.bullets).map((tech, i) => (
            <span
              key={i}
              className="bg-brand-orange/10 text-brand-orange text-xs font-mono px-2 py-1 rounded-md border border-brand-orange/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bullet Points */}
        <ul className="list-disc pl-4 mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          {exp.bullets.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// Extracts unique tech stack keywords from bullet points
function extractTechFromBullets(bullets: string[]): string[] {
  const techRegex = /\b[A-Z][a-zA-Z0-9\+\#\.\-]*(?:\s[A-Z][a-z]+)?\b/g;
  const keywords = new Set<string>();

  bullets.forEach((point) => {
    const matches = point.match(techRegex);
    matches?.forEach((word) => {
      if (
        word.length > 1 &&
        !['Using', 'Built', 'Over', 'With', 'Used'].includes(word)
      ) {
        keywords.add(word);
      }
    });
  });

  return Array.from(keywords).slice(0, 6); // limit to top 6 badges
}