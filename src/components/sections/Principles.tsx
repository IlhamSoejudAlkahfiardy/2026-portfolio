"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Principle } from "@/types";

interface PrinciplesProps {
  principles: Principle[];
}

export function Principles({ principles }: PrinciplesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".principles-headline", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
      });

      gsap.from(".principle-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.2)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="principles"
      ref={sectionRef}
      className="border-b-2 border-border bg-text-primary px-4 py-24 text-bg-secondary md:px-8"
      aria-label="Engineering principles"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="principles-headline font-display text-[clamp(3rem,10vw,7rem)] uppercase leading-none text-bg-secondary">
          How I Build
        </h2>
        <p className="mt-4 max-w-xl font-body text-sm text-bg-secondary/70">
          Engineering principles — opinionated, battle-tested, non-negotiable.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.id}
              className={`principle-card border-2 border-bg-secondary/30 p-6 ${
                principle.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-6xl text-accent-primary">
                  {principle.number}
                </span>
                {principle.icon && (
                  <span className="text-2xl" aria-hidden="true">
                    {principle.icon}
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-ui text-xl font-bold text-bg-secondary">
                {principle.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-bg-secondary/80">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
