export const jobs = [
  {
    slug: "software-engineer",
    title: "Software Engineer",
    location: "Remote / United States",
    type: "Full-time",
    department: "Software Development",
    experience: "3+ years",
    salary: "$90k - $130k",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    summary:
      "Join a growing product engineering team to build scalable web applications using modern JavaScript technologies.",
    responsibilities: [
      "Build and maintain scalable frontend and backend features.",
      "Work with product and design teams to deliver clean user experiences.",
      "Write reliable, maintainable, and well-tested code.",
      "Collaborate with cloud and DevOps teams for deployment.",
    ],
    requirements: [
      "3+ years of software engineering experience.",
      "Strong experience with React, Node.js, and TypeScript.",
      "Understanding of REST APIs, databases, and cloud deployment.",
      "Good communication and problem-solving skills.",
    ],
  },
  {
    slug: "cloud-engineer",
    title: "Cloud Engineer",
    location: "Hybrid",
    type: "Contract",
    department: "Cloud Infrastructure",
    experience: "4+ years",
    salary: "$70 - $95/hr",
    skills: ["AWS", "Azure", "Terraform", "DevOps"],
    summary:
      "Support cloud infrastructure, automation, and deployment pipelines for enterprise technology teams.",
    responsibilities: [
      "Design and manage cloud infrastructure across AWS or Azure.",
      "Build Infrastructure-as-Code using Terraform.",
      "Improve CI/CD pipelines and deployment reliability.",
      "Monitor performance, availability, and cloud security.",
    ],
    requirements: [
      "4+ years of cloud engineering or DevOps experience.",
      "Strong knowledge of AWS, Azure, or similar platforms.",
      "Hands-on experience with Terraform and CI/CD tooling.",
      "Ability to work with distributed engineering teams.",
    ],
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    location: "Remote",
    type: "Full-time",
    department: "Data & Analytics",
    experience: "2+ years",
    salary: "$70k - $95k",
    skills: ["SQL", "Power BI", "Python", "Excel"],
    summary:
      "Help business teams make better decisions through dashboards, reporting, and data-driven insights.",
    responsibilities: [
      "Create dashboards and reports for business stakeholders.",
      "Analyse operational, customer, and performance data.",
      "Use SQL and BI tools to generate actionable insights.",
      "Maintain data accuracy and reporting consistency.",
    ],
    requirements: [
      "2+ years of experience in data analysis or BI reporting.",
      "Strong SQL and Excel skills.",
      "Experience with Power BI, Tableau, or similar tools.",
      "Ability to explain insights clearly to non-technical teams.",
    ],
  },
];

export type Job = (typeof jobs)[number];