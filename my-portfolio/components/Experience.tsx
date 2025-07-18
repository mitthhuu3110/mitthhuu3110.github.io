// Experience.tsx
import { experiences } from '@/data/experience';
import type { Experience as ExperienceType } from '@/data/experience';
import ExperienceCard from './ExperienceCard';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full py-10 bg-bg text-[color:var(--base)]"
    >
      <h2 className="text-3xl sm:text-4xl font-bold font-sans mb-16 text-center z-10 relative text-brand-orange">
        Experience
      </h2>

      <div className="flex flex-col gap-12 px-6 md:px-24 z-10 relative">
        {experiences.map((exp: ExperienceType, idx: number) => (
          <ExperienceCard key={idx} exp={exp} index={idx} />
        ))}
      </div>
    </section>
  );
}