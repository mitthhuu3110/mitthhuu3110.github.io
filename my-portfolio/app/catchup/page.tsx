import Footer from "@/components/Footer";

export default function CatchUp() {
  return (
    <div className="px-8 md:pl-20 md:pr-10 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold font-mono text-brand-orange mb-2"> CatchUp with me! </h1>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
        int you = Want to talk about tech || work || life ? Ping me directly here : Ping me in LinkedIn;
      </p>

      

      <section className="flex flex-col gap-4 pt-12">
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

      <p className="text-sm text-gray-500 italic mt-8">
        
      </p>
      <Footer />
    </div>
  );
}