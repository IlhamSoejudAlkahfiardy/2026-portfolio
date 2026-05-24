"use client";

import { useCallback, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { scrollToSection } from "@/lib/gsap";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Contact as ContactData } from "@/types";

interface ContactProps {
  contact: ContactData;
  linkedinUrl: string;
}

function MagneticButton({
  children,
  className,
  href,
  external,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  external?: boolean;
}) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !btnRef.current) return;

    const btn = btnRef.current;

    const handleMove = (event: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3 });
    };

    const handleLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    };

    btn.addEventListener("mousemove", handleMove);
    btn.addEventListener("mouseleave", handleLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMove);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, [reducedMotion]);

  return (
    <a
      ref={btnRef}
      href={href}
      className={className}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

export function Contact({ contact, linkedinUrl }: ContactProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const triggerEasterEgg = useCallback(() => {
    if (reducedMotion) return;

    gsap.to("body", {
      backgroundColor: "#FF3B00",
      duration: 0.1,
      yoyo: true,
      repeat: 3,
      onComplete: () => {
        gsap.set("body", { backgroundColor: "#F5F0E8" });
      },
    });

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: ${["#FF3B00", "#0057FF", "#00C896"][i % 3]};
        border: 2px solid #0A0A0A;
        left: ${Math.random() * 100}vw;
        top: -10px;
        z-index: 9999;
        pointer-events: none;
      `;
      document.body.appendChild(particle);

      gsap.to(particle, {
        y: window.innerHeight + 20,
        rotation: Math.random() * 720,
        duration: 1 + Math.random() * 2,
        ease: "power2.in",
        onComplete: () => particle.remove(),
      });
    }
  }, [reducedMotion]);

  useKonamiCode(triggerEasterEgg);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-letter", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.4,
        stagger: 0.02,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const headlineLetters = contact.headline.split("");

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-[100svh] border-b-2 border-border bg-accent-primary px-4 py-24 md:px-8"
      aria-label="Contact"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] uppercase leading-[0.9] text-text-primary">
            {headlineLetters.map((char, i) => (
              <span
                key={`${char}-${i}`}
                className="contact-letter inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-lg font-body text-sm text-text-primary/80">
            {contact.subtext}
          </p>
          <p className="mt-2 font-body text-xs uppercase tracking-wider text-text-primary/60">
            {contact.availability}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton
              href={`mailto:${contact.email}`}
              className="brutal-btn bg-bg-secondary text-text-primary"
            >
              Send an Email
            </MagneticButton>
            <MagneticButton
              href={linkedinUrl}
              external
              className="brutal-btn border-text-primary bg-text-primary text-bg-secondary"
            >
              Connect on LinkedIn
            </MagneticButton>
          </div>
        </div>

        <div className="border-2 border-text-primary bg-bg-secondary p-8 shadow-brutal-lg lg:w-80">
          <p className="section-label text-text-secondary">Contact Details</p>
          <p className="mt-4 font-body text-sm">{contact.email}</p>
          <p className="mt-2 font-body text-xs text-text-secondary">
            {contact.responseTime}
          </p>
          <p className="mt-4 font-ui text-xs font-semibold uppercase">
            Preferred: {contact.preferredContact}
          </p>
        </div>
      </div>

      <footer className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-4 border-t-2 border-text-primary pt-8 font-ui text-xs uppercase md:flex-row">
        <p className="text-text-primary/70">
          © {new Date().getFullYear()} Devon Price. All rights reserved.
        </p>
        <div className="flex gap-6">
          <button
            type="button"
            onClick={() => scrollToSection("work")}
            className="hover:underline"
          >
            Work
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("experience")}
            className="hover:underline"
          >
            Experience
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="hover:underline"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </section>
  );
}
