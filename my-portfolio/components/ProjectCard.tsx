// components/ProjectCard.tsx
import { Project } from '@/data/projects';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow bg-bg text-left"
    >
      <h3 className="text-xl sm:text-2xl font-bold font-sans">{project.title}</h3>
      <p className="text-sm text-gray-500 italic font-mono">{project.techStack}</p>
      <ul className="list-disc list-inside space-y-2 pt-2">
        {project.description.map((point, index) => (
          <li key={index} className="text-base leading-relaxed text-[color:var(--base)]">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}