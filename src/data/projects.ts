import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "atlas-design-system",
    title: "Atlas Design System",
    tagline: "One source of truth for 40+ product teams.",
    description:
      "Built a token-driven design system from scratch — components, documentation, and Figma sync. Reduced UI inconsistency across a multi-product SaaS suite and cut feature delivery time by standardizing patterns.",
    year: 2025,
    category: "design-system",
    tags: ["React", "TypeScript", "Storybook", "Tailwind", "Figma Tokens"],
    imageUrl: "https://picsum.photos/seed/atlas-design-system/800/500",
    liveUrl: "https://atlas-ds.example.com",
    githubUrl: "https://github.com/devonprice/atlas-ds",
    featured: true,
    accentColor: "#0057FF",
    caseStudy: {
      challenge:
        "Forty product teams shipping UI in isolation — inconsistent buttons, conflicting spacing, and no shared vocabulary between design and engineering.",
      solution:
        "Architected a token-first system with automated Figma-to-code sync, 60+ documented components, and strict contribution guidelines enforced via CI visual regression tests.",
      outcome:
        "Design-to-dev handoff dropped from days to hours. New feature UIs now compose from existing primitives instead of reinventing the wheel.",
      metrics: [
        "47% ↑ Performance Score",
        "60+ Components",
        "3x Faster Handoff",
      ],
    },
  },
  {
    id: "pulse-analytics",
    title: "Pulse Analytics",
    tagline: "Real-time dashboards that don't melt your browser.",
    description:
      "A B2B analytics platform handling 2M+ data points with sub-100ms chart updates. Built virtualized tables, WebSocket-driven live metrics, and a custom charting layer on top of D3.",
    year: 2024,
    category: "web-app",
    tags: ["Next.js", "D3.js", "WebSockets", "PostgreSQL", "Redis"],
    imageUrl: "https://picsum.photos/seed/pulse-analytics/800/500",
    liveUrl: "https://pulse.example.com",
    githubUrl: "https://github.com/devonprice/pulse-analytics",
    featured: true,
    accentColor: "#FF3B00",
    caseStudy: {
      challenge:
        "Legacy dashboard re-rendered the entire DOM on every WebSocket tick — 200ms lag spikes and angry enterprise customers on support calls.",
      solution:
        "Implemented incremental DOM patching, canvas-based chart rendering for high-frequency data, and a request coalescing layer that batches updates at 60fps.",
      outcome:
        "P95 interaction latency went from 340ms to 38ms. Customer churn in the analytics tier dropped measurably within one quarter.",
      metrics: [
        "89% ↓ Render Time",
        "38ms P95 Latency",
        "2M+ Data Points",
      ],
    },
  },
  {
    id: "meridian-commerce",
    title: "Meridian Commerce",
    tagline: "Headless e-commerce that converts.",
    description:
      "Frontend for a headless Shopify storefront with edge-rendered product pages, optimistic cart updates, and a checkout flow optimized through 12 rounds of A/B testing.",
    year: 2024,
    category: "web-app",
    tags: ["Next.js", "Shopify", "Stripe", "Vercel Edge", "GSAP"],
    imageUrl: "https://picsum.photos/seed/meridian-commerce/800/500",
    liveUrl: "https://meridian-shop.example.com",
    featured: true,
    accentColor: "#00C896",
  },
  {
    id: "brutal-ui",
    title: "Brutal UI",
    tagline: "Neo-brutalist React components — unapologetically sharp.",
    description:
      "Open-source component library embracing hard shadows, zero border-radius, and accessible defaults. 1.2k GitHub stars and used in 30+ side projects.",
    year: 2023,
    category: "open-source",
    tags: ["React", "Radix UI", "Tailwind", "npm", "Vitest"],
    imageUrl: "https://picsum.photos/seed/brutal-ui/800/500",
    githubUrl: "https://github.com/devonprice/brutal-ui",
    featured: true,
    accentColor: "#FF3B00",
  },
  {
    id: "focus-mobile",
    title: "Focus",
    tagline: "A distraction-free writing app for deep work.",
    description:
      "Cross-platform mobile app with offline-first sync, markdown rendering, and a typing experience tuned for flow state. Built with React Native and a custom gesture system for quick capture.",
    year: 2023,
    category: "mobile",
    tags: ["React Native", "Expo", "SQLite", "Reanimated"],
    imageUrl: "https://picsum.photos/seed/focus-mobile/800/500",
    liveUrl: "https://focus-app.example.com",
    featured: false,
    accentColor: "#0057FF",
  },
  {
    id: "shader-playground",
    title: "Shader Playground",
    tagline: "WebGL experiments for the terminally curious.",
    description:
      "Interactive GLSL shader editor with live preview, preset library, and one-click export. A weekend experiment that accidentally became my most forked repo.",
    year: 2022,
    category: "experiment",
    tags: ["WebGL", "GLSL", "Three.js", "Canvas"],
    imageUrl: "https://picsum.photos/seed/shader-playground/800/500",
    githubUrl: "https://github.com/devonprice/shader-playground",
    featured: false,
    accentColor: "#00C896",
  },
];
