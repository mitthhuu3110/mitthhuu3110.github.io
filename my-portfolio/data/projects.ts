// data/projects.ts
export interface Project {
  title: string;
  techStack: string;
  description: string[];
}

export const projects: Project[] = [
  {
    title: "ClarityLedger – Personal Budgeting & Forecasting System",
    techStack: "Spring Boot, PostgreSQL, React, Docker, GCP",
    description: [
      "Designed backend architecture for user authentication, expense tracking, and budget goal management using Spring Boot, JWT, PostgreSQL.",
      "Built REST APIs for CRUD operations, recurring transactions, and category-wise analytics; containerized via Docker and deployed on GCP.",
      "Implemented modular code structure with separation of concerns and planned CI/CD pipeline using GitHub Actions.",
    ],
  },
  {
    title: "CERTMAN – SSL Certificate Renewal Automation",
    techStack: "Python, REST APIs, AWS Secret Manager, React",
    description: [
      "Automated SSL/TLS cert expiration monitoring for 1000+ .ford.com domains with daily scans, email/text alerts, and dashboard tracking.",
      "Enabled CSR generation, CA approval workflows and delivery of certificates + private keys for Certman-based apps.",
      "Supported onboarding for internal and external certs, reducing manual effort and outages by 60%+ across teams.",
    ],
  },
  {
    title: "CSA – Central Shutdown Automation",
    techStack: "Java Spring Boot, React, AWS",
    description: [
      "Developed automation for managing VM lifecycle during weekends/holidays, integrated user scheduling for shutdown/startup.",
      "Reduced cloud infrastructure costs by 25%+ with centralized, rule-based scheduling logic and intuitive web UI.",
      "Built dashboards to visualize real-time VM states and historical activity logs for audit and optimization insights."
    ]
  },
  {
    title: "PAM – Privileged Access Manager",
    techStack: "Python, PostgreSQL, REST APIs",
    description: [
      "Designed secure backend services enabling fine-grained access control across 800+ user roles and application scopes.",
      "Implemented access delegation workflows and RBAC using custom policy engine; integrated audit logging for compliance.",
      "Built internal tooling for user onboarding/offboarding with detailed access rule propagation."
    ]
  },
  {
    title: "PCAS – Public Cloud AI Services",
    techStack: "Python, GPT-4, DialogFlow, Elasticsearch, spaCy",
    description: [
      "Built an intelligent AI-powered support chatbot that serves 500+ daily cloud queries across teams via natural language chat UI.",
      "Indexed internal documentation using Elasticsearch and integrated GPT-4 via OpenAI API with contextual prompt templates.",
      "Used DialogFlow + spaCy to support multi-intent flows, entity recognition and feedback-based fine-tuning workflows."
    ]
  }
];