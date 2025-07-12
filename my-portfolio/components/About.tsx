// components/About.tsx
export default function About() {
  return (
    <section className="space-y-4" id="about">
      <h2 className="text-2xl sm:text-3xl font-bold font-mono">About Me</h2>
      <p className="text-base sm:text-lg leading-relaxed max-w-3xl text-gray-700 dark:text-gray-300">
        I’m Mithilesh Perugu — a Backend engineer with a passion for Microservices and writing code that’s clean, scalable, and fun to debug (yes, really).
      </p>
      <p className="text-base sm:text-lg leading-relaxed max-w-3xl text-gray-700 dark:text-gray-300">
        I currently work at <strong>Ford</strong>, where I’ve built automation tools, secured cloud infrastructure, and led full-stack projects that save time, reduce costs. I’ve worked with Spring Boot, Python, Flask, GCP, Kubernetes, and even a bit of OpenAI APIs.
      </p>
      <p className="text-base sm:text-lg leading-relaxed max-w-3xl text-gray-700 dark:text-gray-300">
        Outside work, I’m always experimenting with development, system design, building tools, and dreaming of launching cool products.
      </p>
    </section>
  );
}