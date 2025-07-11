// components/About.tsx
export default function About() {
  return (
    <section className="space-y-4" id="about">
      <h2 className="text-2xl sm:text-3xl font-bold font-mono">About Me</h2>
      <p className="text-base sm:text-lg leading-relaxed max-w-3xl text-gray-700 dark:text-gray-300">
        I’m Mithilesh (but everyone calls me Mithu) — a backend engineer with a passion for DevOps, cloud infrastructure, and writing code that’s clean, scalable, and fun to debug (yes, really).
      </p>
      <p className="text-base sm:text-lg leading-relaxed max-w-3xl text-gray-700 dark:text-gray-300">
        I currently work at <strong>Ford Motor Company</strong>, where I’ve built automation tools, secured cloud infrastructure, and led full-stack projects that save time, reduce costs, and make people go “whoa.” I’ve worked with Spring Boot, Flask, GCP, Kubernetes, and even a bit of GPT-4 magic.
      </p>
      <p className="text-base sm:text-lg leading-relaxed max-w-3xl text-gray-700 dark:text-gray-300">
        Outside work, I’m always experimenting with system design, building tools, and dreaming of launching cool products. If you’re into tech, motorcycles, or Naruto references — we’ll probably vibe.
      </p>
    </section>
  );
}