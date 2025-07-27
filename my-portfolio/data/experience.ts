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
      'Developed Central Shutdown Automation (CSA) using Java Spring Boot, PostgreSQL, and AWS to manage VM lifecycles during weekends/holidays, reducing cloud costs by 25%+ through user-configurable scheduling.',
      'Created SSL/TLS certificate renewal automation (CERTMAN) using Java Spring Boot, Python, and AWS Secret Manager, monitoring 1000+ .ford.com certificates and automating CSR generation, CA approval, and multi-channel alerts.',
      'Built Public Cloud AI Support (PCAS) chatbot using GPT-4.0, Dialogflow, Elasticsearch, and spaCy for NLP, handling 500+ daily support queries through a conversational interface integrated with internal documentation.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Ford Motor Company',
    location: 'Chennai, India',
    duration: 'Jan 2024 – June 2024',
    bullets: [
      'Engineered a high-throughput Flask-based REST API deployed on AWS, efficiently processing 10K+ JSON requests/hour with versioned rollouts, autoscaling, and metrics monitoring.',
      'Led a full-stack internal tooling initiative to automate service health checks and integrated robust test suites (JUnit, PyTest) with Swagger and Apigee, saving 100+ debugging hours and improving incident response reliability.',
    ],
  },
];