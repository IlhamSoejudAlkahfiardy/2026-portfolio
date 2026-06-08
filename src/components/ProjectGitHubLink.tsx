"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { ProjectGitHub } from "@/types";

interface ProjectGitHubLinkProps {
  github: ProjectGitHub;
  className?: string;
}

function LockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="14"
      height="14"
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

const DEFAULT_INTERNAL_REASON =
  "Proyek internal perusahaan — repositori tidak dibagikan ke publik (NDA / proprietary).";

const DEFAULT_NONE_REASON =
  "Tidak ada repositori publik untuk proyek ini (client work, proprietary stack, atau belum di-open-source).";

export function ProjectGitHubLink({ github, className }: ProjectGitHubLinkProps) {
  if (github.access === "public") {
    return (
      <a
        href={github.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-1.5 font-ui text-sm font-semibold uppercase underline-offset-4 transition-colors hover:text-accent-secondary hover:underline",
          className
        )}
      >
        <GitHubIcon />
        GitHub ↗
      </a>
    );
  }

  const isInternal = github.access === "internal";
  const label = isInternal ? "GitHub — Private" : "GitHub — N/A";
  const tooltipText =
    github.reason ??
    (isInternal ? DEFAULT_INTERNAL_REASON : DEFAULT_NONE_REASON);
  const badgeClass = isInternal
    ? "border-dashed border-accent-primary bg-accent-primary/15 text-text-primary"
    : "border-border bg-bg-primary/50 text-text-secondary/70";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex cursor-help items-center gap-1.5 border-2 px-3 py-1 font-ui text-xs font-semibold uppercase tracking-wide shadow-brutal transition-transform hover:-translate-x-px hover:-translate-y-px",
            badgeClass,
            className
          )}
          aria-label={`${label}. ${tooltipText}`}
        >
          {isInternal ? <LockIcon /> : <GitHubIcon />}
          <span>{label}</span>
          {isInternal && (
            <span className="border border-current px-1 py-0.5 text-[9px] leading-none">
              Restricted
            </span>
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs text-left leading-relaxed">
        {tooltipText}
      </TooltipContent>
    </Tooltip>
  );
}
