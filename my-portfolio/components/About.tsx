export default function About() {
  return (
    <section
      className="space-y-4 px-6 py-12 rounded-xl bg-bg text-base text-[color:var(--base)]"
      id="about"
    >
      <h2 className="text-2xl sm:text-3xl font-bold font-mono text-brand-orange">
        About Me
      </h2>
      <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
        I’m Mithilesh Perugu — a Backend engineer with a passion for Microservices and writing code that’s clean, scalable, and fun to debug (yes, really).
      </p>
      <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
        I currently work at <strong>Ford</strong>, where I’ve built automation tools, secured cloud infrastructure, and led full-stack projects that save time, reduce costs.
      </p>
      <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
        Outside work, I’m always experimenting with development, system design, building tools, and dreaming of launching cool products.
      </p>
    </section>
  );
}