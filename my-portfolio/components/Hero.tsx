// components/Hero.tsx
export default function Hero() {
  return (
    <section id="about" className="pt-20 space-y-4 text-[color:var(--base)]">
      <h1 className="text-3xl sm:text-3xl font-bold font-sans tracking-wide uppercase">
        Mithilesh Charan Perugu
      </h1>

      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-mono tracking-wide">
        Software Engineer • Backend Developer • DevOps & Cloud Enthusiast
      </p>

      <div className="w-full border-l-4 border-brand-orange pl-4 text-sm sm:text-base leading-relaxed italic">
        Building scalable systems, automating boring stuff, and breaking production (with permission) at Ford.<br />
        Currently obsessed with  <span className="text-brand-orange font-semibold font-mono">Java - Spring Boot</span>, <span className="text-brand-orange font-semibold font-mono">Python</span>, <span className="text-brand-orange font-semibold font-mono">REST APIs</span>, <span className="text-brand-orange font-semibold font-mono">[AWS, GCP]</span>, <span className="text-brand-orange font-semibold font-mono">Kubernetes</span> & <span className="text-brand-orange font-semibold font-mono">Databases</span>.
      </div>
    </section>
  );
}