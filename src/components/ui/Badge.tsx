import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "teal" | "blue" | "purple" | "default";
  className?: string;
}

const variantStyles = {
  cyan:    "bg-cyan-dim border-cyan-muted    text-cyan-DEFAULT",
  teal:    "bg-teal-dim border-teal-muted   text-teal-DEFAULT",
  blue:    "bg-blue-dim border-blue-muted   text-blue-deep",
  purple:  "bg-purple-dim border-purple-muted text-purple-soft",
  default: "bg-surface-3 border-border       text-text-secondary",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-mono font-medium border rounded-full",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}