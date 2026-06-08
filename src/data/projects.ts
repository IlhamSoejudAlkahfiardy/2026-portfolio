import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "creator-up",
    title: "Creator Up",
    tagline:
      "Multi-tenant automated rotating system for fast and scalable content production.",
    description:
      "Creator Up is a rotating video platform that enables users to generate dozens of ready-to-publish content variations from just a few footage quickly and efficiently. The platform helps streamline the editing process through automated workflows, while supporting white-label and multi-tenant configurations, allowing each client to use the platform with their own custom branding.",
    year: 2024,
    category: "web-app",
    tags: ["Next.ts", "Tailwind", "Websocket", "RESTful API", "tanstack"],
    imageUrl: "/assets/images/project/creatorup/1.png",
    additionalImages: [
      {
        url: "/assets/images/project/creatorup/2.png",
        alt: "Creator Up — Transition",
      },
      {
        url: "/assets/images/project/creatorup/3.png",
        alt: "Creator Up — Footage Preview & Trimming",
      },
      {
        url: "/assets/images/project/creatorup/4.png",
        alt: "Creator Up — Content Rotation Workflow",
      },
    ],
    liveUrl: "https://app.creatorup.id/",
    github: {
      access: "internal",
      reason:
        "Creator Up is an internal product — the codebase is maintained in a private company repository and cannot be publicly shared.",
    },
    featured: true,
    accentColor: "#d126ce",
    caseStudy: {
      challenge:
        "Content creator teams are expected to produce dozens of content pieces every day, but are often limited by the number of talents, devices, and editors available, making it difficult to meet production demands efficiently.",
      solution:
        "Developed an automation tool that enables content creators to generate dozens of content variations in a single day using only one person and one device, significantly reducing production effort and resource dependency.",
      outcome:
        "Built Creator Up, a SaaS platform that generates multiple content variations from limited footage by leveraging customizable hooks, features, and call-to-action (CTA) fields, allowing users to create scalable and tailored content for their specific needs.",
      metrics: [
        "47% ↑ Performance Score",
        "60+ Components",
        "3x Faster Handoff",
      ],
    },
  },
  {
    id: "dashboard-creatorup",
    title: "Dashboard Creator Up",
    tagline:
      "Centralized analytics platform for monitoring users, revenue, and rendering workflows.",
    description:
      "This dashboard platform provides real-time analytics for Creator Up, including active user statistics, filtered monthly revenue insights, total content render counts, and user subscription monitoring to support business analysis and decision-making.",
    year: 2025,
    category: "web-app",
    tags: ["Next.ts", "Tailwind", "Recharts", "RESTful API", "tanstack"],
    imageUrl: "/assets/images/project/dashboard-creatorup/1.png",
    additionalImages: [
      {
        url: "/assets/images/project/dashboard-creatorup/2.png",
        alt: "Dashboard Creator Up — Subscription Monitoring",
      },
      {
        url: "/assets/images/project/dashboard-creatorup/3.png",
        alt: "Dashboard Creator Up — Whitelabel",
      },
    ],
    liveUrl: "https://dashboard.creatorup.id/",
    github: {
      access: "internal",
      reason:
        "Dashboard Creator Up is an internal product — the codebase is maintained in a private company repository and cannot be publicly shared.",
    },
    featured: true,
    accentColor: "#00C896",
  },
  {
    id: "dashboard-affiliate-creatorup",
    title: "Dashboard Affiliate Creator Up",
    tagline:
      "Track, analyze, and optimize affiliate performance in one platform.",
    description:
      "This platform serves as an analytics dashboard for monitoring and visualizing the performance of Creator Up affiliates in a structured way. The dashboard provides various data and performance metrics to support monitoring, performance evaluation, and affiliate program effectiveness analysis.",
    year: 2025,
    category: "web-app",
    tags: ["Next.ts", "Tailwind", "RESTful API", "tanstack"],
    imageUrl: "/assets/images/project/dashboard-affiliate-creatorup/1.png",
    additionalImages: [
      {
        url: "/assets/images/project/dashboard-affiliate-creatorup/2.png",
        alt: "Dashboard Affiliate Creator Up — Customizing Whitelabel",
      },
    ],
    github: {
      access: "internal",
      reason:
        "Dashboard Affiliate Creator Up is an internal product — the codebase is maintained in a private company repository and cannot be publicly shared.",
    },
    liveUrl: "https://affiliate.creatorup.id/",
    featured: true,
    accentColor: "#FF3B00",
  },
  {
    id: "influp",
    title: "Influp",
    tagline:
      "Monitor and evaluate social content performance with real-time insights.",
    description:
      "Influp is a web-based platform that helps KOLs and marketing teams analyze the performance of TikTok and Instagram Reels content through a single content link. The platform provides structured analytics data such as engagement, views, comments, and shares within an interactive dashboard to support monitoring, performance evaluation, and digital marketing strategy decisions.",
    year: 2024,
    category: "web-app",
    tags: ["Next.js", "Tailwind", "RESTful API"],
    imageUrl: "/assets/images/project/influp/1.jpg",
    additionalImages: [
      {
        url: "/assets/images/project/influp/2.jpg",
        alt: "Influp — Dashboard",
      },
      {
        url: "/assets/images/project/influp/3.jpg",
        alt: "Influp — Report",
      },
    ],
    liveUrl: "https://pulse.example.com",
    github: {
      access: "internal",
      reason:
        "Dashboard enterprise dengan akses terbatas — repo internal tim, tidak dijadikan open source.",
    },
    featured: true,
    accentColor: "#FF3B00",
    caseStudy: {
      challenge:
        "KOL teams are required to track and consolidate engagement performance across dozens of influencers and hundreds of content pieces every day. Relying on manual scraping and spreadsheet-based reporting makes it nearly impossible to manage this process efficiently and at scale.",
      solution:
        "Developed an automated content analytics tool that scrapes TikTok and Instagram content data using only the content URL, collecting key engagement metrics such as views, likes, comments, and shares in a centralized system.",
      outcome:
        "Built Influp, a platform that automatically aggregates engagement data (views, likes, comments, and shares) from content links while also providing features for influencer management, campaign tracking, and budget monitoring, enabling marketing teams to streamline reporting and make data-driven decisions more effectively.",
      metrics: ["89% ↓ Render Time", "38ms P95 Latency", "2M+ Data Points"],
    },
  },
  // {
  //   id: "focus-mobile",
  //   title: "Focus",
  //   tagline: "A distraction-free writing app for deep work.",
  //   description:
  //     "Cross-platform mobile app with offline-first sync, markdown rendering, and a typing experience tuned for flow state. Built with React Native and a custom gesture system for quick capture.",
  //   year: 2023,
  //   category: "mobile",
  //   tags: ["React Native", "Expo", "SQLite", "Reanimated"],
  //   imageUrl: "https://picsum.photos/seed/focus-mobile/800/500",
  //   additionalImages: [
  //     {
  //       url: "https://picsum.photos/seed/focus-mobile-2/400/400",
  //       alt: "Focus — writing editor screen",
  //     },
  //     {
  //       url: "https://picsum.photos/seed/focus-mobile-3/400/400",
  //       alt: "Focus — quick capture gesture",
  //     },
  //   ],
  //   liveUrl: "https://focus-app.example.com",
  //   github: {
  //     access: "none",
  //     reason: "Aplikasi mobile proprietary — source tidak dipublikasikan.",
  //   },
  //   featured: false,
  //   accentColor: "#0057FF",
  // },
  // {
  //   id: "shader-playground",
  //   title: "Shader Playground",
  //   tagline: "WebGL experiments for the terminally curious.",
  //   description:
  //     "Interactive GLSL shader editor with live preview, preset library, and one-click export. A weekend experiment that accidentally became my most forked repo.",
  //   year: 2022,
  //   category: "experiment",
  //   tags: ["WebGL", "GLSL", "Three.js", "Canvas"],
  //   imageUrl: "https://picsum.photos/seed/shader-playground/800/500",
  //   additionalImages: [
  //     {
  //       url: "https://picsum.photos/seed/shader-playground-2/400/400",
  //       alt: "Shader Playground — live GLSL editor",
  //     },
  //     {
  //       url: "https://picsum.photos/seed/shader-playground-3/400/400",
  //       alt: "Shader Playground — preset gallery",
  //     },
  //   ],
  //   github: {
  //     access: "public",
  //     url: "https://github.com/devonprice/shader-playground",
  //   },
  //   featured: false,
  //   accentColor: "#00C896",
  // },
];
