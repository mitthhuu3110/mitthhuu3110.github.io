// ExperienceCard.tsx
'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/data/experience';
import { Briefcase, MapPin, CalendarDays } from 'lucide-react';

export default function ExperienceCard({
  exp
}: {
  exp: Experience;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative w-full px-6 py-6 bg-bg text-[color:var(--base)] border border-gray-300 dark:border-gray-700 rounded-xl shadow transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="flex flex-col gap-2 mb-2">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-brand-orange" /> {exp.role}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
          {exp.company}
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-brand-orange" /> {exp.location}
          </span>
          <span className="flex items-center gap-1 italic">
            <CalendarDays className="w-4 h-4 text-brand-orange" /> {exp.duration}
          </span>
        </div>
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mt-2">
        {extractTechKeywords(exp.bullets).map((keyword, i) => (
          <span
            key={i}
            className="text-xs font-mono bg-brand-orange/90 text-white rounded-md px-2 py-[2px]"
          >
            {keyword}
          </span>
        ))}
      </div>

      <ul className="list-disc ml-4 mt-4 space-y-2">
        {exp.bullets.map((point, i) => (
          <li
            key={i}
            className="text-sm leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function extractTechKeywords(bullets: string[]): string[] {
  const techSet = new Set<string>();
  const regex = /\b[A-Z][a-z]+|[A-Z]{2,}|[a-z]+\b/g;
  bullets.forEach((point) => {
    const matches = point.match(regex);
    matches?.forEach((word) => {
      if (
        ['Java', 'Python', 'AWS', 'Spring', 'Boot', 'React', 'Flask', 'GKE', 'Kubernetes', 'REST', 'API', 'PostgreSQL', 'GPT', 'Dialogflow', 'spaCy', 'Elasticsearch', 'Secret', 'Manager', 'Swagger', 'Apigee'].includes(word)
      ) {
        techSet.add(word);
      }
    });
  });
  return Array.from(techSet);
}