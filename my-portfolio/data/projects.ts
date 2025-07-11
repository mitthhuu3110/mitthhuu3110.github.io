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
];