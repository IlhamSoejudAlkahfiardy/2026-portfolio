"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Project } from "@/types";

interface CaseStudyProps {
  projects: Project[];
}

function MetricCounter({
  metric,
  reducedMotion,
}: {
  metric: string;
  reducedMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion || !ref.current) return;

    const match = metric.match(/^(\d+)/);
    if (!match) return;

    const target = parseInt(match[1], 10);
    const suffix = metric.slice(match[1].length);
    const obj = { value: 0 };

    gsap.to(obj, {
      value: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(obj.value)}${suffix}`;
        }
      },
    });
  }, [metric, reducedMotion]);

  return (
    <div ref={ref} className="font-display text-4xl text-accent-primary md:text-5xl">
      {metric}
    </div>
  );
}

export function CaseStudy({ projects }: CaseStudyProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const caseStudies = projects.filter((p) => p.caseStudy);

  if (caseStudies.length === 0) return null;

  return (
    <section
      id="case-study"
      ref={sectionRef}
      className="grid-lines border-b-2 border-border px-4 py-24 md:px-8"
      aria-label="Case studies"
    >
      <div className="mx-auto max-w-7xl">
        <p className="section-label">Deep Dives</p>
        <h2 className="mt-2 font-display text-[clamp(3rem,8vw,5rem)] uppercase leading-none">
          Case Studies
        </h2>

        <div className="mt-12 space-y-16">
          {caseStudies.map((project) => (
            <article
              key={project.id}
              className="border-2 border-border bg-bg-secondary shadow-brutal-lg"
            >
              <div className="border-b-2 border-border p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-4xl uppercase md:text-5xl">
                    {project.title}
                  </h3>
                  <Badge>{project.year}</Badge>
                  <Badge variant="outline">
                    {project.category.replace("-", " ")}
                  </Badge>
                </div>
              </div>

              {project.caseStudy && (
                <>
                  <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
                    {(
                      [
                        ["Challenge", project.caseStudy.challenge],
                        ["Solution", project.caseStudy.solution],
                        ["Outcome", project.caseStudy.outcome],
                      ] as const
                    ).map(([label, text], i) => (
                      <div
                        key={label}
                        className={`border-border p-6 md:p-8 ${
                          i < 2 ? "md:border-r-2" : ""
                        } ${i > 0 ? "border-t-2 md:border-t-0" : ""}`}
                      >
                        <p className="section-label mb-3">{label}</p>
                        <p className="font-body text-sm leading-relaxed text-text-secondary">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t-2 border-border p-6 md:p-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                      {project.caseStudy.metrics.map((metric) => (
                        <div key={metric}>
                          <MetricCounter
                            metric={metric}
                            reducedMotion={reducedMotion}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div className="relative aspect-[16/7] border-t-2 border-border">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <div className="flex flex-wrap gap-6 border-t-2 border-border p-6 font-ui text-sm font-semibold uppercase md:p-8">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Live Site ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
