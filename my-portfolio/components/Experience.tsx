import { experiences } from '@/data/experience';
import type { Experience as ExperienceType } from '@/data/experience';
import ExperienceCard from './ExperienceCard';
import MiniBulletCard from './MiniBulletCard';
import Image from 'next/image';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full py-20 bg-bg text-[color:var(--base)]"
    >
      <h2 className="text-3xl sm:text-4xl font-bold font-sans mb-16 text-center z-10 relative">
        Experience
      </h2>

      {/* Vertical Line */}
      <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 h-[calc(100%-160px)] w-[2px] bg-black-400 dark:bg-white-600 z-0" />

      {/* Ford Logo at center of line */}
      <div className="absolute left-1/2 top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Image src="/images/ford-logo.png" alt="Ford" width={44} height={59} />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-12 z-10 relative">
        {experiences.map((exp: ExperienceType, idx: number) => (
          <div key={idx} className="space-y-6">
            {/* Main Summary Card */}
            <ExperienceCard exp={exp} index={idx} />

            {/* Bullet Points as Mini Cards */}
            {exp.bullets.map((point, i) => (
              <MiniBulletCard
                key={i}
                text={point}
                side={idx % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}