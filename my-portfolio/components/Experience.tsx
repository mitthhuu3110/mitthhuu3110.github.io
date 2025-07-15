import { experiences } from '@/data/experience';
import type { Experience as ExperienceType } from '@/data/experience';
import ExperienceCard from './ExperienceCard';

export default function ExperienceSection() {
  return (
    <section
      className="space-y-8 rounded-xl bg-bg text-base text-[color:var(--base)]"
      id="experience"
    >
      <h2 className="text-2xl sm:text-3xl font-bold font-mono">
        Experience
      </h2>
      <div className="space-y-10">
        {experiences.map((exp: ExperienceType, idx: number) => (
          <ExperienceCard key={idx} exp={exp} />
        ))}
      </div>
    </section>
  );
}