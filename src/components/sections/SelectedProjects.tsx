"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Project, ProjectCategory } from "@/types";

const CATEGORIES: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web-app", label: "Web App" },
  { value: "design-system", label: "Design System" },
  { value: "open-source", label: "Open Source" },
  { value: "mobile", label: "Mobile" },
  { value: "experiment", label: "Experiment" },
];

interface SelectedProjectsProps {
  projects: Project[];
}

export function SelectedProjects({ projects }: SelectedProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<
    ProjectCategory | "all"
  >("all");
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    const sorted = [...projects].sort(
      (a, b) => Number(b.featured) - Number(a.featured) || b.year - a.year
    );
    if (activeCategory === "all") return sorted;
    return sorted.filter((project) => project.category === activeCategory);
  }, [projects, activeCategory]);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: (index: number) => (index % 2 === 0 ? -80 : 80),
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion, filteredProjects]);

  const handleCategoryChange = (category: ProjectCategory | "all") => {
    if (reducedMotion || !gridRef.current) {
      setActiveCategory(category);
      return;
    }

    gsap.to(gridRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      onComplete: () => {
        setActiveCategory(category);
        gsap.fromTo(
          gridRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3 }
        );
      },
    });
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="grid-lines border-b-2 border-border px-4 py-24 md:px-8"
      aria-label="Selected projects"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <p className="section-label">Selected Projects</p>
          <Badge>{filteredProjects.length} projects</Badge>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => handleCategoryChange(category.value)}
              className={`brutal-tag transition-colors ${
                activeCategory === category.value
                  ? "bg-accent-secondary text-bg-secondary"
                  : "hover:bg-bg-secondary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="project-card group brutal-card overflow-hidden transition-transform hover:-rotate-1"
            >
              <div
                className="h-1 w-full"
                style={{ backgroundColor: project.accentColor }}
              />
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between font-body text-xs uppercase tracking-wider text-text-secondary">
                  <span>
                    {String(index + 1).padStart(2, "0")} / {project.year}
                  </span>
                  <span>{project.category.replace("-", " ")}</span>
                </div>

                <div className="relative mb-4 aspect-video overflow-hidden border-2 border-border">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <h3 className="font-display text-4xl uppercase leading-none">
                  {project.title}
                </h3>
                <p className="mt-2 font-body text-sm text-text-secondary">
                  {project.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="brutal-tag text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-4 font-body text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-4 font-ui text-sm font-semibold uppercase">
                  {project.caseStudy && (
                    <a
                      href={`#case-study`}
                      className="underline-offset-4 hover:underline"
                    >
                      Case Study →
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      Live ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
