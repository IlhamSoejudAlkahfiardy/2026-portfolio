"use client";

import { Fragment, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { scrollToSection } from "@/lib/gsap";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Contact as ContactData } from "@/types";

interface ContactProps {
  contact: ContactData;
  linkedinUrl: string;
  name: string;
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

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 3.77 5.07 5.07 0 0 0 17.91 1S16.73.65 12 3.1 6.27 1 6.27 1 5.09.65 4.09 3.77A5.44 5.44 0 0 0 2 9.24c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 19.13V22" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    key: "instagram",
    label: "Instagram",
    icon: InstagramIcon,
    getHref: (contact: ContactData) => contact.socialMedia.instagram,
  },
  {
    key: "github",
    label: "GitHub",
    icon: GithubIcon,
    getHref: (contact: ContactData) => contact.socialMedia.github,
  },
] as const;

export function Contact({ contact, linkedinUrl, name }: ContactProps) {
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

      gsap.from(".contact-about", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        x: 0,
        duration: 0.6,
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const headlineWords = contact.headline.split(" ");

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-[100svh] border-b-2 border-border bg-accent-primary px-4 py-24 md:px-8"
      aria-label="Contact"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1 lg:max-w-2xl">
            <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] uppercase leading-[0.9] text-text-primary">
              {headlineWords.map((word, wordIndex) => (
                <Fragment key={`${word}-${wordIndex}`}>
                  <span className="inline-block whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className="contact-letter inline-block"
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                  {wordIndex < headlineWords.length - 1 && (
                    <span className="contact-letter inline-block">
                      {"\u00A0"}
                    </span>
                  )}
                </Fragment>
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

          <aside className="contact-about flex w-full flex-col gap-6 lg:w-[340px] xl:w-[380px]">
            <article className="border-2 border-text-primary bg-bg-secondary shadow-brutal-lg">
              <p className="border-b-2 border-text-primary bg-text-primary px-4 py-2 font-ui text-xs font-bold uppercase tracking-wider text-bg-secondary">
                About Me
              </p>
              <div className="relative aspect-[4/5] w-full border-b-2 border-text-primary">
                <Image
                  src={contact.aboutMe.photoUrl}
                  alt={contact.aboutMe.photoAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 380px"
                  priority={false}
                />
              </div>
              <p className="p-5 font-body text-sm leading-relaxed text-text-secondary">
                {contact.aboutMe.description}
              </p>
            </article>

            <div className="border-2 border-text-primary bg-bg-secondary p-6 shadow-brutal-lg">
              <p className="section-label text-text-secondary">Contact Details</p>
              <p className="mt-4 font-body text-sm">{contact.email}</p>
              <p className="mt-2 font-body text-xs text-text-secondary">
                {contact.responseTime}
              </p>
              <p className="mt-4 font-ui text-xs font-semibold uppercase">
                Preferred: {contact.preferredContact}
              </p>

              <p className="mt-6 font-ui text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Social Media
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {SOCIAL_LINKS.map(({ key, label, icon: SocialIcon, getHref }) => (
                  <a
                    key={key}
                    href={getHref(contact)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn flex items-center justify-between bg-bg-primary px-4 py-3 text-sm normal-case tracking-normal hover:-rotate-1"
                  >
                    <span className="flex items-center gap-2 font-ui font-semibold uppercase">
                      <SocialIcon />
                      {label}
                    </span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t-2 border-text-primary pt-8 font-ui text-xs uppercase md:flex-row">
          <p className="text-text-primary/70">
            © {new Date().getFullYear()} {name}. All rights reserved.
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
      </div>
    </section>
  );
}
