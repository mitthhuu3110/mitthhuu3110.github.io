'use client';

import { experiences } from '@/data/experience';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
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
          Experience
        </motion.h2>

        <div className="w-full flex flex-col gap-6 md:gap-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}