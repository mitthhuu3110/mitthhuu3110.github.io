// data/achievements.ts

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string[];
  link?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Ford Ideathon Winner 2025',
    issuer: 'Ford Motor Company',
    date: 'April 2025',
    description: [
      'Built automated code review system using Python, GitHub Actions, and OpenAI GPT-4.0.',
      'Integrated static analysis, security scanning, and custom linting rules.',
      'Reduced manual code review time by 60% while maintaining quality.',
    ],
  },
  {
    title: 'Google Cloud Platform – Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: 'February 2025',
    description: [
      'Configured VMs, Kubernetes clusters, IAM roles, and VPCs using GCP CLI & tools.',
      'Demonstrated infrastructure automation, CI/CD, and production-grade deployment skills.',
    ],
    link: 'https://www.credly.com/badges/c7f3e5ea-819f-4103-9cbf-ceff36383c5c/public_url',
  },
];