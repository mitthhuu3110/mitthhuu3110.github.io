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
  const isHighlightedTitle =
    exp.bullets.some(b =>
      b.includes('Privileged Access Manager') || b.includes('Central Shutdown Automation')
    );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full px-6 py-6 bg-[color:var(--bg)] text-[color:var(--base)] border border-gray-300 dark:border-gray-700 rounded-xl shadow transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="flex flex-col gap-2 mb-2">
        <h3
          className={`text-lg font-semibold flex items-center gap-2 ${
            isHighlightedTitle ? 'text-brand-orange' : ''
          }`}
        >
          <Briefcase className="w-4 h-4 text-brand-orange" /> {exp.role}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">{exp.company}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-brand-orange" /> {exp.location}
          </span>
          <span className="flex items-center gap-1 italic">
            <CalendarDays className="w-4 h-4 text-brand-orange" /> {exp.duration}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {extractTechKeywords(exp.bullets).map((keyword, i) => (
          <span
            key={i}
            className="text-xs font-mono bg-brand-orange/90 text-white rounded-md px-2 py-[2px]"
          >
            {keyword}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-2 pl-4 list-disc marker:text-brand-orange text-sm leading-relaxed">
        {exp.bullets.map((point, i) => (
          <li key={i} className="text-[color:var(--base)]">{point}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function extractTechKeywords(bullets: string[]): string[] {
  const techSet = new Set<string>();
  const keywords = [
    'Java - Spring Boot',
    'Python',
    'REST APIs',
    'PostgreSQL',
    'Secret Manager',
    'Kubernetes',
    'Flask',
    'Apigee',
    'Swagger',
    'Dialogflow',
    'spaCy',
    'GPT',
    'Elasticsearch',
    'AWS',
    'GKE',
    'React',
    'JUnit',
    'PyTest',
  ];
  bullets.forEach((point) => {
    keywords.forEach((tech) => {
      if (point.includes(tech)) techSet.add(tech);
    });
  });
  return Array.from(techSet);
}