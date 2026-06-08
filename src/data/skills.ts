import type { Skills, TechStackItem } from "@/types";

export const skills: Skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML/CSS",
    "Framer Motion",
    "GSAP",
  ],
  backend: [
    "PHP",
    "Laravel",
    "REST APIs",
    "PostgreSQL",
    "MySQL",
    "CodeIgniter",
    "Supabase",
  ],
  tooling: [
    "Git",
    "Vite",
    "Figma",
  ],
  design: [
    "UI Design",
    "Design Systems",
    "Prototyping",
    "Figma",
    "Typography",
  ],
  currently_learning: [
    "GSAP",
    "Framer Motion",
    "Node.js",
    "Docker",
  ],
};

export const techStack: TechStackItem[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Supabase", category: "backend" },
  { name: "Git", category: "tooling" },
  { name: "Vercel", category: "tooling" },
  { name: "Figma", category: "tooling" },
  { name: "Vitest", category: "tooling" },
];
