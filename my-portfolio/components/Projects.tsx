// components/Projects.tsx
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="space-y-8" id="projects">
      <h2 className="text-2xl sm:text-3xl font-bold font-mono">Projects</h2>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}