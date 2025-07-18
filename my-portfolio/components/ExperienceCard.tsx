'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/data/experience';
import { Briefcase, MapPin } from 'lucide-react';

export default function ExperienceCard({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-2xl p-5 sm:p-8 space-y-4 border border-zinc-300 dark:border-zinc-700 
        backdrop-blur-sm hover:shadow-[0_4px_20px_rgba(255,115,0,0.15)] transition-shadow duration-300"
    >
      {/* Title + Duration */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <h3 className="text-xl sm:text-2xl font-bold font-sans text-[color:var(--base)] flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-brand-orange" />
          {exp.role}
        </h3>
        <span className="text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-400 whitespace-nowrap">
          {exp.duration}
        </span>
      </div>

      {/* Company + Location */}
      <div className="text-left space-y-1 pl-[26px]">
        <p className="text-sm text-gray-500 italic font-mono">{exp.company}</p>
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-brand-orange" />
            {exp.location}
          </span>
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 pt-1">
        {extractTechKeywords(exp.bullets).map((tech, i) => (
          <span
            key={i}
            className="bg-zinc-200 dark:bg-zinc-700/50 text-xs px-3 py-1 rounded-full font-mono text-orange-500 dark:text-orange-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bullet Points */}
      <ul className="list-disc list-outside pl-6 space-y-1 pt-2 text-[color:var(--base)] text-sm sm:text-base leading-relaxed text-left">
        {exp.bullets.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
}

// Utility to extract tech skills
function extractTechKeywords(bullets: string[]): string[] {
  const techSet = new Set<string>();
  const techKeywords = [
    'Java', 'Spring Boot', 'Python', 'Flask', 'React',
    'PostgreSQL', 'REST APIs', 'Kubernetes', 'GKE', 'AWS',
    'Secret Manager', 'Swagger', 'Apigee', 'GPT', 'spaCy',
    'Dialogflow', 'Elasticsearch'
  ];

  bullets.forEach((point) => {
    techKeywords.forEach((keyword) => {
      if (point.includes(keyword)) {
        techSet.add(keyword);
      }
    });
  });

  return Array.from(techSet);
}