import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border-2 border-border px-3 py-1 font-ui text-xs font-semibold uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-bg-secondary text-text-primary",
        accent: "bg-accent-tertiary text-text-primary",
        outline: "bg-transparent text-text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
