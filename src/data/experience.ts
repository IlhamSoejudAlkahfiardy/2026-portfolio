import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "flowstack",
    company: "Flowstack",
    role: "Senior Frontend Engineer",
    period: "Jan 2024 — Present",
    duration: "1 yr 5 mo",
    type: "full-time",
    description:
      "Leading frontend architecture for a workflow automation platform serving 12k+ teams. Own the design system, performance budget, and developer experience for the web client.",
    highlights: [
      "Reduced initial bundle size by 38% through route-level code splitting and dynamic imports",
      "Shipped Atlas Design System adopted by 40+ internal product teams",
      "Established Core Web Vitals monitoring with automated regression alerts in CI",
      "Mentored 3 mid-level engineers through structured code review and pairing sessions",
    ],
    techUsed: ["React", "TypeScript", "Next.js", "Tailwind", "Storybook", "Playwright"],
    companyUrl: "https://flowstack.example.com",
  },
  {
    id: "pixelcraft",
    company: "Pixelcraft Studio",
    role: "Frontend Developer",
    period: "Mar 2022 — Dec 2023",
    duration: "1 yr 10 mo",
    type: "full-time",
    description:
      "Built client-facing web applications for startups and agencies. Worked directly with designers to translate Figma specs into production-ready, accessible interfaces.",
    highlights: [
      "Delivered 8 client projects on time with zero critical accessibility violations",
      "Built Pulse Analytics dashboard handling 2M+ real-time data points",
      "Introduced component-driven development workflow reducing bug rate by 25%",
      "Led frontend performance audits that improved average Lighthouse scores from 62 to 94",
    ],
    techUsed: ["React", "Next.js", "D3.js", "GraphQL", "Framer Motion"],
    companyUrl: "https://pixelcraft.example.com",
  },
  {
    id: "freelance",
    company: "Independent",
    role: "Freelance Frontend Developer",
    period: "Jun 2021 — Feb 2022",
    duration: "9 mo",
    type: "freelance",
    description:
      "Contracted with early-stage startups to build MVPs, landing pages, and internal tools. Learned to ship fast without shipping garbage.",
    highlights: [
      "Launched Meridian Commerce headless storefront — 23% conversion lift in first month",
      "Built Brutal UI open-source library — 1.2k GitHub stars in 6 months",
      "Maintained 100% on-time delivery across all client contracts",
    ],
    techUsed: ["React", "Shopify", "Tailwind", "Vercel", "Stripe"],
  },
  {
    id: "devlaunch",
    company: "DevLaunch Academy",
    role: "Frontend Intern",
    period: "Jan 2021 — May 2021",
    duration: "5 mo",
    type: "internship",
    description:
      "First professional role — maintained internal tools, fixed bugs, and learned that git blame is a learning tool, not a weapon.",
    highlights: [
      "Refactored legacy jQuery components to React, reducing maintenance overhead by 40%",
      "Implemented responsive layouts for 15+ admin dashboard pages",
      "Wrote first unit tests — discovered the joy of green checkmarks",
    ],
    techUsed: ["React", "JavaScript", "CSS", "Jest", "Git"],
    companyUrl: "https://devlaunch.example.com",
  },
];
