// components/Experience.tsx
import { experiences } from '@/data/experience';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
  return (
    <section className="space-y-8" id="experience">
      <h2 className="text-2xl sm:text-3xl font-bold font-mono">Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} />
        ))}
      </div>
    </section>
  );
}