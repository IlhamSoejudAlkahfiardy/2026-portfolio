import type { Principle } from "@/types";

export const principles: Principle[] = [
  {
    id: "performance-is-ux",
    number: "01",
    title: "Performance Is UX",
    description:
      "A 300ms delay isn't a metric — it's a user deciding your app feels broken. I treat Core Web Vitals like feature requirements, not afterthoughts. Every kilobyte and every re-render gets a justification.",
    icon: "⚡",
    featured: true,
  },
  {
    id: "design-systems-scale",
    number: "02",
    title: "Systems Over Screens",
    description:
      "Individual screens are disposable. Systems are investments. I'd rather spend a week building a primitive that saves a month of one-off components. Consistency isn't boring — inconsistency is expensive.",
    icon: "🧱",
  },
  {
    id: "accessibility-default",
    number: "03",
    title: "Accessibility by Default",
    description:
      "If it doesn't work with a keyboard, a screen reader, or at 200% zoom, it's not done. Accessibility isn't a phase-two ticket — it's the baseline that makes everything else actually usable.",
    icon: "♿",
  },
  {
    id: "ship-then-polish",
    number: "04",
    title: "Ship, Then Polish",
    description:
      "Perfect is the enemy of deployed. I bias toward getting real feedback fast, then iterating with data. But 'ship fast' doesn't mean 'ship sloppy' — it means knowing what's essential in v1.",
    icon: "🚀",
  },
  {
    id: "code-is-communication",
    number: "05",
    title: "Code Is Communication",
    description:
      "The next person reading your code is you in 6 months at 2am during an outage. I write for clarity over cleverness, name things honestly, and delete code with the same enthusiasm I write it.",
    icon: "💬",
  },
  {
    id: "motion-with-purpose",
    number: "06",
    title: "Motion With Purpose",
    description:
      "Animation should explain, not decorate. Every transition needs a reason — spatial continuity, feedback, or hierarchy. If removing it doesn't hurt comprehension, it shouldn't be there.",
    icon: "✨",
  },
];
