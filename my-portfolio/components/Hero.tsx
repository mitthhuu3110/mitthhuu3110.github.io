// components/Hero.tsx
export default function Hero() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold font-mono leading-tight">
        Mithilesh Charan Perugu
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-light w-full">
        Software Engineer • Backend Development • DevOps/Cloud Enthusiast  
      </p>
      <p className="w-full text-base sm:text-lg">
        Building scalable systems, automating boring stuff, and breaking production (with permission) at Ford. Currently obsessed with Spring Boot, Python, AWS, GCP, Kubernetes, Docker.
      </p>
    </section>
  );
}