// components/Hero.tsx
export default function Hero() {
  return (
    <section className="flex flex-col gap-4 pt-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold font-mono leading-tight">
        Mithilesh Charan Perugu
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl">
        Backend Engineer • DevOps Enthusiast 
      </p>
      <p className="max-w-xl text-base sm:text-lg">
        Building scalable systems, automating boring stuff, and breaking production (with permission) at Ford. Currently obsessed with Spring Boot, Python, AWS, GCP, Kubernetes, Docker.
      </p>

      <div className="flex gap-4 pt-2">
        <a
          href="mailto:3110mithilesh@gmail.com"
          className="text-sm underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400"
        >
          📧 Email
        </a>
        <a
          href="https://github.com/mitthhuu3110"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400"
        >
          🐙 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mithilesh-perugu-5a1726236/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
}