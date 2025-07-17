export default function About() {
  return (
    <section
      className="space-y-4 rounded-xl bg-bg text-base text-[color:var(--base)]"
      id="about"
    >
      <h2 className="text-2xl sm:text-3xl font-bold font-sans text-brand-orange">
        About Me
      </h2>

      <p className="text-base sm:text-lg leading-relaxed w-full">
        I’m a Software Engineer with a deep interest in building robust, efficient, and scalable backend systems. My favorite kind of work? The kind that lives behind the scenes — APIs that just work, automation tools that save hours, and infrastructure that can handle whatever comes its way.
      </p>

      <p className="text-base sm:text-lg leading-relaxed w-full">
        Currently, I work at <strong>Ford</strong>, where I contribute to backend service development, internal tooling & cloud automation. My day-to-day involves working across system design, DevOps pipelines, and backend logic — mostly with Java (Spring Boot), Python, REST APIs, GCP, and Kubernetes. 
      </p>

      <p className="text-base sm:text-lg leading-relaxed w-full">
        I enjoy working on cross-functional teams where I'm not just writing code, but actively shaping architecture, debugging tricky edge cases, and streamlining developer workflows. Whether it’s deploying a microservice, automating a manual process, or writing clean APIs — I’m all in.
      </p>

      <p className="text-base sm:text-lg leading-relaxed w-full">
        What I value most in engineering is clarity — both in communication and in code. I believe good backend systems are not just performant, but maintainable, observable, and built with care for the devs who come next.
      </p>

      <div className="border-t border-dashed border-gray-400 my-2 w-2/12" />

      <p className="text-base sm:text-lg leading-relaxed w-full">
        I graduated with a B.Tech in <span className="text-brand-orange font-semibold font-mono">Computer Science & Engineering</span> from <span className="text-brand-orange font-semibold font-mono">National Institute of Technology, Raipur</span> in 2024, achieving a CGPA of <span className="text-brand-orange font-semibold font-mono">8.5</span>.
      </p>

      <div className="border-t border-dashed border-gray-400 my-2 w-2/12" />

      <p className="text-base sm:text-lg leading-relaxed w-full">
        Outside of work, I enjoy writing, typing at 130+ WPM for fun, and exploring motorcycling and new creative hobbies. My portfolio is a curated space — a blend of who I am as an engineer, and who I am outside of code.
      </p>
    </section>
  );
}