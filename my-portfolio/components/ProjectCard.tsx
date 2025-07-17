// components/ProjectCard.tsx
import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold font-sans">{project.title}</h3>
      <p className="text-sm text-gray-500 italic font-mono">{project.techStack}</p>
      <ul className="list-disc list-inside space-y-1">
        {project.description.map((point, index) => (
          <li key={index} className="text-base leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}