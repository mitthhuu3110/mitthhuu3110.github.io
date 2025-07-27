// data/projects.ts
export interface Project {
  title: string;
  techStack: string;
  description: string[];
}

export const projects: Project[] = [
  {
    title: "Webhook Replay & Debugging System",
    techStack: "Spring Boot, PostgreSQL, REST APIs, Docker, AWS",
    description: [
      "Tailored a backend tool to capture, log, and replay webhook payloads, enabling 80% better visibility into external service callbacks for debugging.",
      "Enabled replay of 900+ simulated webhook events with custom headers, delays, and payloads to mimic real-world integrations and test failure scenarios.",
    ],
  },
  {
    title: "CSA – Central Shutdown Automation",
    techStack: "Java Spring Boot, React, AWS",
    description: [
      "Developed automation for managing VM lifecycle during weekends/holidays, integrated user scheduling for shutdown/startup.",
      "Reduced cloud infrastructure costs by 25%+ with centralized, rule-based scheduling logic and intuitive web UI.",
      "Built dashboards to visualize real-time VM states and historical activity logs for audit and optimization insights.",
    ],
  },
  {
    title: "CERTMAN – SSL Certificate Renewal Automation",
    techStack: "Java Spring Boot, Python, REST APIs, AWS Secret Manager",
    description: [
      "Automated SSL/TLS cert expiration monitoring for 1000+ .ford.com domains with daily scans, email/text alerts, and dashboard tracking.",
      "Enabled CSR generation, CA approval workflows, and delivery of certificates + private keys for CERTMAN-based apps.",
      "Supported onboarding for internal and external certs, reducing manual effort and outages by 60%+ across teams.",
    ],
  },
  {
    title: "PAM – Privileged Access Manager",
    techStack: "Python, PostgreSQL, REST APIs, Kubernetes, Terraform",
    description: [
      "Implemented scalable backend services for PAM enabling fine-grained access control across 800+ user roles with modular policy enforcement.",
      "Integrated Just-In-Time (JIT) access workflows to auto-provision time-bound privileges, reducing standing access exposure by 85%.",
      "Managed RBAC delegation, onboarding/offboarding tooling, and infrastructure provisioning using Terraform on Kubernetes clusters.",
    ],
  },
  {
    title: "PCAS – Public Cloud AI Services",
    techStack: "Python, GPT-4, DialogFlow, Elasticsearch, spaCy",
    description: [
      "Built an intelligent AI-powered support chatbot that serves 500+ daily cloud queries across teams via natural language chat UI.",
      "Indexed internal documentation using Elasticsearch and integrated GPT-4 via OpenAI API with contextual prompt templates.",
      "Used DialogFlow + spaCy to support multi-intent flows, entity recognition, and feedback-based fine-tuning workflows.",
    ],
  },
];