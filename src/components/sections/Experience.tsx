"use client";

import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Experience as ExperienceItem } from "@/types";

interface ExperienceProps {
  experience: ExperienceItem[];
}

export function Experience({ experience }: ExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".experience-entry", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="border-b-2 border-border px-4 py-24 md:px-8"
      aria-label="Work experience"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row">
        <div className="flex shrink-0 items-start lg:w-32">
          <h2 className="font-display text-[clamp(3rem,8vw,5rem)] uppercase leading-none lg:-rotate-90 lg:origin-top-left lg:translate-y-32 lg:whitespace-nowrap">
            Experience
          </h2>
        </div>

        <div className="flex-1 space-y-0">
          {experience.map((item, index) => (
            <article
              key={item.id}
              className="experience-entry group border-l-4 border-transparent py-8 pl-6 transition-colors hover:border-accent-primary hover:bg-bg-secondary/50"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-4xl uppercase hover:text-accent-primary"
                    >
                      {item.company}
                    </a>
                  ) : (
                    <h3 className="font-display text-4xl uppercase">
                      {item.company}
                    </h3>
                  )}
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline">{item.role}</Badge>
                    <Badge>{item.type}</Badge>
                  </div>
                </div>
                <div className="text-right font-body text-sm text-text-secondary">
                  <p>{item.period}</p>
                  <p>{item.duration}</p>
                </div>
              </div>

              <p className="mt-4 max-w-3xl font-body text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>

              <ol className="mt-4 space-y-2">
                {item.highlights.map((highlight, i) => (
                  <li
                    key={highlight}
                    className="flex gap-3 font-body text-sm text-text-primary"
                  >
                    <span className="font-semibold text-accent-primary">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {highlight}
                  </li>
                ))}
              </ol>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.techUsed.map((tech) => (
                  <span key={tech} className="brutal-tag text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>

              {index < experience.length - 1 && (
                <hr className="mt-8 border-t-2 border-dashed border-border" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
