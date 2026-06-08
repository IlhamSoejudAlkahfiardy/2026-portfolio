"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { ProjectImage } from "@/types";

interface ProjectImageLightboxProps {
  image: ProjectImage;
  projectTitle: string;
  onClose: () => void;
}

export function ProjectImageLightbox({
  image,
  projectTitle,
  onClose,
}: ProjectImageLightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  const reducedMotion = useReducedMotion();

  onCloseRef.current = onClose;

  useEffect(() => {
    if (!reducedMotion && overlayRef.current && panelRef.current) {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25 });
      gsap.fromTo(
        panelRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.4)" }
      );
    }
  }, [reducedMotion]);

  const finishClose = useCallback(() => {
    onCloseRef.current();
  }, []);

  const handleClose = useCallback(() => {
    if (reducedMotion || !overlayRef.current || !panelRef.current) {
      finishClose();
      return;
    }

    gsap.to(panelRef.current, {
      scale: 0.92,
      opacity: 0,
      duration: 0.2,
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: finishClose,
    });
  }, [finishClose, reducedMotion]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-text-primary/90 p-4 md:p-8"
      role="dialog"
      aria-label={`${projectTitle} — ${image.alt}`}
    >
      <div
        ref={panelRef}
        className="pointer-events-auto relative max-h-[90vh] w-full max-w-5xl border-2 border-border bg-bg-secondary shadow-brutal-lg"
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 border-2 border-border bg-bg-secondary p-2 shadow-brutal transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-hover"
          aria-label="Close image preview"
        >
          <X size={20} />
        </button>

        <div className="relative aspect-video w-full md:aspect-[16/10]">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        <p className="border-t-2 border-border px-4 py-3 font-body text-xs text-text-secondary">
          {image.alt}
        </p>
      </div>
    </div>
  );
}
