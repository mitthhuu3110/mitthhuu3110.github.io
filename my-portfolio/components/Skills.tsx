// components/Skills.tsx
'use client';

import Image from 'next/image';

const skills = [
  {
    category: 'Languages',
    items: ['python', 'java', 'c++', 'js', 'go']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['springboot', 'react', 'nodejs', 'tailwind', 'nextjs', 'vite', 'flask', 'fastapi']
  },
  {
    category: 'Databases',
    items: ['postgres', 'mongodb', 'database', 'redis']
  },
  {
    category: 'DevOps & Cloud',
    items: ['docker', 'terraform', 'jenkins', 'gcp', 'aws', 'kubernetes']
  },
  {
    category: 'Tools & Others',
    items: ['postman', 'github', 'git', 'vscode', 'jira', 'openai', 'linux']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-brand-orange font-mono">Skills</h2>

      <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
        Here's a snapshot of the tools, tech, and languages I work with. 👇
      </p>

      <div className="space-y-6">
        {skills.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold font-mono mb-2 text-gray-800 dark:text-gray-200">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {group.items.map((icon, i) => (
                <Image
                  key={i}
                  src={`/icons/${icon}.svg`}
                  alt={icon}
                  width={36}
                  height={36}
                  className="hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}