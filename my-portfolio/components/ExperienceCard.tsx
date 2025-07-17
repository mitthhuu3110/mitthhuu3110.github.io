'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/data/experience';

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
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={`relative w-full md:w-1/2 px-4 md:px-8 py-6 bg-bg text-[color:var(--base)] border border-gray-300 dark:border-gray-700 rounded-xl shadow transition-shadow duration-300 hover:shadow-lg ${
        isLeft
          ? 'self-start md:ml-0 md:mr-auto md:pl-[calc(1rem+16px)]'
          : 'self-end md:ml-auto md:mr-0 md:pr-[calc(1rem+16px)]'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold">{exp.role}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
            {exp.company} – {exp.location}
          </p>
        </div>
        <p className="text-sm text-gray-500 italic pt-2 sm:pt-0 font-mono">{exp.duration}</p>
      </div>
    </motion.div>
  );
}