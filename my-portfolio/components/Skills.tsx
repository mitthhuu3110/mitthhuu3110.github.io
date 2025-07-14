// components/Skills.tsx
'use client';

import Image from 'next/image';

const icons = [
  'python',
  'java',
  'springboot',
  'react',
  'docker',
  'postgres',
  'gcp',
  'aws',
  'kubernetes',
  'git',
  'c++',
  'nodejs',
  'jira',
  'js',
  'openai',
  'jenkins',
  'linux',
  'postman',
  'database',
  'mongodb',
  'tailwind',
  'vscode',
  'terraform',
  'github'
]; 

export default function Skills() {
  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-2xl sm:text-3xl font-bold font-mono text-center">Skills</h2>
      <div className="overflow-hidden relative w-full py-4">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          {icons.map((icon, idx) => (
            <Image
              key={idx}
              src={`/icons/${icon}.svg`}
              alt={icon}
              width={40}
              height={40}
              className="hover:scale-110 transition-transform duration-300"
            />
          ))}
          {/* Loop again for smooth marquee */}
          {icons.map((icon, idx) => (
            <Image
              key={`repeat-${idx}`}
              src={`/icons/${icon}.svg`}
              alt={icon}
              width={40}
              height={40}
              className="hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}