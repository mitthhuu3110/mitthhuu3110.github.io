// components/ExperienceCard.tsx
import { Experience } from '@/data/experience';

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 space-y-3 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold font-mono">{exp.role}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {exp.company} – {exp.location}
          </p>
        </div>
        <p className="text-sm text-gray-500 italic pt-2 sm:pt-0">{exp.duration}</p>
      </div>
      <ul className="list-disc list-inside space-y-1">
        {exp.bullets.map((point, idx) => (
          <li key={idx} className="text-base leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}