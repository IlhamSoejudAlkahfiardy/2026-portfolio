"use client";

import { useEffect } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
] as const;

export function useKonamiCode(onActivate: () => void): void {
  useEffect(() => {
    let index = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === KONAMI_SEQUENCE[index]) {
        index += 1;
        if (index === KONAMI_SEQUENCE.length) {
          index = 0;
          onActivate();
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onActivate]);
}
