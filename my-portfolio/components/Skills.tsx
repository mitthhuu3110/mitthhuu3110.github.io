'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'C++', icon: 'c++' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'Go', icon: 'go' }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'Spring Boot', icon: 'springboot' },
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Flask', icon: 'flask' }
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'SQL', icon: 'database' },
      { name: 'Redis', icon: 'redis' }
    ]
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'GCP', icon: 'gcp' },
      { name: 'AWS', icon: 'aws' },
      { name: 'Kubernetes', icon: 'kubernetes' }
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Postman', icon: 'postman' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Git', icon: 'git' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Jira', icon: 'jira' },
      { name: 'OpenAI', icon: 'openai' },
      { name: 'Linux', icon: 'linux' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-brand-orange font-sans">Skills</h2>

      <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
        Here’s a blend of tools, technologies, and platforms I love working with. 👨‍💻⚙️
      </p>

      <div className="space-y-6">
        {skills.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md border border-zinc-200 dark:border-zinc-700 transition-transform hover:scale-[1.05]"
                >
                  <Image
                    src={`/icons/${item.icon}.svg`}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200 font-sans">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}