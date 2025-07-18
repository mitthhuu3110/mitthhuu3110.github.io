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
      'Developed Central Shutdown Automation (CSA) using Java - Spring Boot, React, and AWS to manage VM lifecycles during weekends/holidays. Reduced cloud costs by 25%+ through user-configurable scheduling and lifecycle policies.',
      'Designed scalable backend services for Privileged Access Manager (PAM) to enable fine-grained access control across 800+ user roles using Python, REST APIs, and PostgreSQL. Integrated role-based access delegation workflows.',
      'Created CERTMAN (SSL/TLS certificate renewal automation) using Java - Spring Boot, Python, REST APIs, and Secret Manager. Monitored 1000+ .ford.com certificates and automated CSR generation, CA workflows, and multi-channel alerts.',
      'Built PCAS chatbot (Public Cloud AI Support) leveraging GPT, Dialogflow, Elasticsearch, and spaCy to handle 500+ daily support queries using a conversational interface integrated with internal documents.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Ford Motor Company',
    location: 'Chennai, India',
    duration: 'Jan 2024 – June 2024',
    bullets: [
      'Developed a high-throughput REST API using Flask and deployed on GKE (Google Kubernetes Engine), capable of handling over 10,000+ JSON requests/hour. Included versioned rollouts and metrics monitoring.',
      'Built robust unit/integration test suites using JUnit and PyTest, while contributing reusable modules for internal applications.',
      'Integrated API documentation and security measures using Swagger and Apigee; streamlined developer onboarding.',
      'Led a full-stack internal tooling initiative to automate service health checks and reduce manual debug hours across engineering teams.',
    ],
  },
];