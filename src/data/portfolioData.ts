// src/data/portfolioData.ts

export interface WorkExperience {
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  responsibilities: string[];
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  demo?: string;
  source?: string;
}

export interface Skills {
  [category: string]: string[];
}

export const workExperience: WorkExperience[] = [
  {
    company: "Evance Services",
    companyUrl: "https://evanshservices.com/",
    role: "MERN Developer Intern",
    duration: "Jun 2025 - Jul 2025",
    responsibilities: [
      "Developed full-stack applications using the MERN stack",
      "Created internal tools to automate workflows",
      "Designed RESTful APIs and integrated UI components",
    ],
    tech: ["React", "Node.js", "MongoDB", "JavaScript"],
  },
  {
    company: "Rattamaar",
    companyUrl: "https://rattamaar.com",
    role: "Frontend Developer Intern",
    duration: "Feb 2024 - May 2024",
    responsibilities: [
      "Built responsive UI using React and Next.js",
      "Improved user flows and experience",
      "Collaborated on frontend design with the UI/UX team",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    company: "Evance Services",
    companyUrl: "https://evanshservices.com/",
    role: "Software Developer Intern",
    duration: "May 2023 - Aug 2023",
    responsibilities: [
      "Developed utility tools to improve developer productivity",
      "Built and maintained client web modules",
    ],
    tech: ["Node.js", "JavaScript", "Git"],
  },
];

export const projects: Project[] = [
  {
    name: "Paaniwale CRM",
    description:
      "CRM for water suppliers including sales tracking, inventory, order automation, and WhatsApp invoice generation.",
    tech: ["React", "Node.js", "MongoDB", "Docker", "NGINX", "Jenkins"],
    demo: "https://paaniwale.tech",
  },
  {
    name: "Bitwise",
    description:
      "AI-based coding assistant with a VSCode extension. Reads, writes and modifies code with semantic understanding.",
    tech: ["Python", "JavaScript", "VSCode API", "Gemini API"],
    source: "https://github.com/HetSolanki/botly-slow",
  },
  {
    name: "Mood",
    description:
      "AI-powered journaling web app with real-time sentiment analysis. Built as a PWA with offline mode.",
    tech: ["Next.js", "React", "SQLite", "Prisma", "Gemini API"],
    source: "https://github.com/HetSolanki/mood-pro",
  },
];

export const skills: Skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  "Database & DevOps": [
    "MongoDB",
    "MySQL",
    "Docker",
    "AWS",
    "Git",
    "Github Actions",
  ],
};
