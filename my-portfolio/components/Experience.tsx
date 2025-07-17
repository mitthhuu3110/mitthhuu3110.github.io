import { experiences } from '@/data/experience';
import type { Experience as ExperienceType } from '@/data/experience';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-20 bg-bg text-[color:var(--base)]"
    >
      <h2 className="text-3xl sm:text-4xl font-bold font-sans mb-16 text-center z-10 relative">
        Experience
      </h2>

      {/* Dotted Timeline Line */}
      <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 h-[calc(100%-160px)] w-[2px] bg-gradient-to-b from-transparent via-gray-500 to-transparent z-0 border-dotted border-l-2 border-gray-400 dark:border-gray-600" />

      <div className="flex flex-col gap-16 z-10 relative">
        {experiences.map((exp: ExperienceType, idx: number) => (
          <ExperienceCard key={idx} exp={exp} index={idx} />
        ))}
      </div>
    </section>
  );
}