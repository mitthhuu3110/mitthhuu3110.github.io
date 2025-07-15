import { achievements, Achievement } from '@/data/achievements';
import { ExternalLink } from 'lucide-react';

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="space-y-8 rounded-xl bg-bg text-base text-[color:var(--base)]"
    >
      <h2 className="text-2xl sm:text-3xl font-bold font-mono text-brand-orange">
        Achievements & Certifications
      </h2>
      <div className="space-y-10">
        {achievements.map((item: Achievement, idx: number) => (
          <div
            key={idx}
            className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 space-y-3 hover:shadow-md transition-shadow bg-bg text-[color:var(--base)]"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold font-mono">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.issuer}</p>
              </div>
              <p className="text-sm text-gray-500 italic pt-2 sm:pt-0">{item.date}</p>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {item.description.map((point: string, idx2: number) => (
                <li key={idx2} className="text-base leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-brand-orange hover:underline pt-2"
              >
                View Credential <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}