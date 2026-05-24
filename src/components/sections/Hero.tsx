"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "@/lib/gsap";
import { scrollToSection } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Personal } from "@/types";

interface HeroProps {
  personal: Personal;
}

export function Hero({ personal }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        y: 120,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hero-tagline", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.5,
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.7,
      });

      gsap.from(".hero-shape", {
        scale: 0,
        rotation: -45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.3,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const tickerText = `FRONTEND ENGINEER ✦ OPEN TO WORK ✦ BASED IN ${personal.location.toUpperCase()} ✦ `;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col border-b-2 border-border pt-20"
      aria-label="Hero"
    >
      <div className="mx-auto flex flex-1 w-full max-w-7xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:px-8">
        <div className="flex w-full flex-col justify-center md:w-[60%]">
          <h1 className="font-display uppercase leading-[0.85] tracking-tight text-text-primary">
            <span className="hero-word block text-[clamp(3.5rem,12vw,10rem)]">
              FRONTEND
            </span>
            <span className="hero-word block text-[clamp(3.5rem,12vw,10rem)] text-accent-primary">
              ENGINEER
            </span>
          </h1>

          <p className="hero-tagline mt-6 max-w-md font-body text-base text-text-secondary blink-cursor">
            {personal.tagline}
          </p>

          <div className="hero-cta mt-8 flex flex-wrap gap-4">
            <Button onClick={() => scrollToSection("work")}>
              View My Work ↓
            </Button>
            <Button variant="ghost" asChild>
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </Button>
          </div>
        </div>

        <div className="relative flex h-64 w-full items-center justify-center md:h-auto md:w-[40%] md:min-h-[400px]">
          <div
            className="hero-shape absolute left-[10%] top-[20%] h-32 w-32 border-2 border-border bg-accent-secondary shadow-brutal-lg md:h-40 md:w-40"
            aria-hidden="true"
          />
          <div
            className="hero-shape absolute right-[15%] top-[10%] h-24 w-24 rotate-12 border-2 border-border bg-accent-primary shadow-brutal md:h-28 md:w-28"
            aria-hidden="true"
          />
          <div
            className="hero-shape absolute bottom-[15%] left-[25%] h-20 w-20 rounded-full border-2 border-border bg-accent-tertiary shadow-brutal md:h-24 md:w-24"
            aria-hidden="true"
          />
          <div
            className="hero-shape absolute bottom-[25%] right-[20%] h-16 w-36 -rotate-6 border-2 border-border bg-bg-secondary shadow-brutal md:h-20 md:w-44"
            aria-hidden="true"
          />
        </div>
      </div>

      <div
        className="mt-auto overflow-hidden border-t-2 border-border bg-accent-primary py-3"
        aria-hidden="true"
      >
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="mx-4 font-display text-lg uppercase tracking-widest text-text-primary md:text-xl"
            >
              {tickerText}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
