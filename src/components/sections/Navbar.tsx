"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/gsap";
import type { Personal } from "@/types";

const NAV_LINKS = [
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Stack", id: "stack" },
  { label: "Principles", id: "principles" },
  { label: "Case Study", id: "case-study" },
  { label: "Contact", id: "contact" },
] as const;

interface NavbarProps {
  personal: Personal;
}

export function Navbar({ personal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b-2 border-border bg-bg-primary/90 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8"
          aria-label="Main navigation"
        >
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="font-display text-2xl uppercase tracking-wide text-text-primary"
          >
            {personal.name}
          </button>

          <ul className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className="group relative font-ui text-sm font-medium uppercase tracking-wide text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-primary transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            {personal.availableForWork && (
              <Badge variant="accent" className="gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-text-primary" />
                Available for work
              </Badge>
            )}
            <Button asChild size="sm">
              <a href={personal.resumeUrl} download>
                Download CV
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="border-2 border-border bg-bg-secondary p-2 shadow-brutal md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg-primary md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className="font-display text-4xl uppercase tracking-wide"
            >
              {link.label}
            </button>
          ))}
          {personal.availableForWork && (
            <Badge variant="accent" className="gap-2">
              <span className="h-2 w-2 rounded-full bg-text-primary" />
              Available for work
            </Badge>
          )}
          <Button asChild>
            <a href={personal.resumeUrl} download>
              Download CV
            </a>
          </Button>
        </div>
      )}
    </>
  );
}
