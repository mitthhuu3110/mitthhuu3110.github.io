'use client';

import { Project } from '@/data/projects';
import { motion } from 'framer-motion';

export default function ProjectCard({
  project,
  index,
  isFeatured = false,
}: {
  project: Project;
  index: number;
  isFeatured?: boolean;
}) {
  const isOrangeTitle =
    project.title.includes('MAP') || project.title.includes('ASC');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`rounded-2xl p-6 sm:p-8 space-y-4 border border-zinc-300 dark:border-zinc-700 
        backdrop-blur-sm hover:shadow-[0_4px_20px_rgba(255,115,0,0.15)] transition-shadow duration-300
        ${isFeatured ? 'sm:col-span-2' : ''}`}
    >
      {/* Title */}
      <h3
        className={`text-xl sm:text-2xl font-bold font-sans ${
          isOrangeTitle ? 'text-brand-orange' : 'text-[color:var(--base)]'
        }`}
      >
        {project.title}
      </h3>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.split(',').map((tech, idx) => (
          <span
            key={idx}
            className="bg-zinc-200 dark:bg-zinc-700/50 text-xs px-3 py-1 rounded-full font-mono text-orange-500 dark:text-orange-300"
          >
            {tech.trim()}
          </span>
        ))}
      </div>

      {/* Bullet Points - updated to unordered */}
      <ul className="list-disc list-outside pl-6 space-y-2 pt-2 text-[color:var(--base)] text-sm sm:text-base leading-relaxed text-left">
        {project.description.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
}