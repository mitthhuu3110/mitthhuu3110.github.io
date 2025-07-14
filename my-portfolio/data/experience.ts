export type Experience = {
  role: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Software Engineer – Backend Development',
    company: 'Ford Motor Company',
    location: 'Chennai, India',
    duration: 'July 2024 – Present',
    bullets: [
      'Developed Central Shutdown Automation (CSA) using Python, GCP Cloud Tasks & Scheduler, reducing cloud costs by 25%+.',
      'Built scalable backend services for Privileged Access Manager (PAM) using Spring Boot, REST APIs, PostgreSQL.',
      'Automated SSL/TLS certificate renewals (CERTMAN) with Python, Secret Manager, REST APIs, and notification workflows.',
      'Created PCAS chatbot using GPT-4.0 + spaCy + Elasticsearch to automate 500+ daily support queries.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Ford Motor Company',
    location: 'Chennai, India',
    duration: 'Jan 2024 – June 2024',
    bullets: [
      'Built a high-throughput REST API with Flask on GKE handling 10,000+ JSON requests/hour.',
      'Led a full-stack internal tooling initiative automating service health checks and saving 100+ debug hours.',
      'Wrote robust test suites and integrated API docs + security with Swagger, Apigee.',
    ],
  },
];