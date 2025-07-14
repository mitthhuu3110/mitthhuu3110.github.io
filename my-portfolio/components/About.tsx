export default function About() {
  return (
    <section
      className="space-y-4 rounded-xl bg-bg text-base text-[color:var(--base)]"
      id="about"
    >
      <h2 className="text-2xl sm:text-3xl font-bold font-mono text-brand-orange">
        About Me
      </h2>
      <p className="text-base sm:text-lg leading-relaxed w-full">
        I’m a Software Engineer with a passion for developing scalable backends by writing code that’s clean, scalable, and fun to debug (yes, really). 
        I currently work at <strong>Ford</strong>, where I’ve built automation tools, led full-stack projects that save time, reduce costs and secure cloud infrastructure.
        Outside work, I’m always experimenting with development, system design, building tools, and dreaming of launching cool products.
      </p>
    </section>
  );
}