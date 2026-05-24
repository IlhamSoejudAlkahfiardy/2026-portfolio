"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Skills, TechStackItem } from "@/types";

interface TechStackProps {
  skills: Skills;
  techStack: TechStackItem[];
}

function MarqueeRow({
  items,
  direction,
}: {
  items: TechStackItem[];
  direction: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !trackRef.current) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;
    const speed = direction === "left" ? -0.5 : 0.5;
    let x = direction === "right" ? -totalWidth : 0;

    const tick = () => {
      x += speed;
      if (direction === "left" && x <= -totalWidth) x = 0;
      if (direction === "right" && x >= 0) x = -totalWidth;
      gsap.set(track, { x });
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [direction, reducedMotion, items]);

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y-2 border-border py-4">
      <div ref={trackRef} className="flex w-max gap-4">
        {doubled.map((item, index) => (
          <span
            key={`${item.name}-${index}`}
            className={`brutal-tag shrink-0 px-5 py-2 font-ui text-sm ${
              index % 2 === 0
                ? "bg-bg-secondary"
                : "bg-transparent"
            }`}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechStack({ skills, techStack }: TechStackProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const frontendItems = techStack.filter((t) => t.category === "frontend");
  const backendToolingItems = techStack.filter(
    (t) => t.category === "backend" || t.category === "tooling"
  );

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".skill-tag", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.03,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const skillCategories = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Tooling", items: skills.tooling },
    { title: "Design", items: skills.design },
  ] as const;

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="border-b-2 border-border px-4 py-24 md:px-8"
      aria-label="Tech stack"
    >
      <div className="mx-auto max-w-7xl">
        <p className="section-label">The Stack</p>
        <h2 className="mt-2 font-display text-[clamp(3rem,8vw,5rem)] uppercase leading-none">
          Tools I Trust
        </h2>

        <div className="mt-12 space-y-0">
          <MarqueeRow items={frontendItems} direction="left" />
          <MarqueeRow items={backendToolingItems} direction="right" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 font-ui text-sm font-bold uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span key={skill} className="skill-tag brutal-tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-2 border-border bg-accent-tertiary p-6 shadow-brutal">
          <p className="font-ui text-sm font-bold uppercase tracking-wider">
            Currently Learning
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.currently_learning.map((item) => (
              <span key={item} className="brutal-tag bg-bg-secondary text-xs">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
