import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className, hover = false, glow = false }: CardProps) {
  return (
    <div
      className={clsx(
        "bg-surface border border-border rounded-lg p-6",
        hover && "transition-all duration-200 hover:border-cyan-dim hover:bg-surface-2 hover:-translate-y-0.5",
        glow && "hover:shadow-[0_0_20px_rgba(103,196,196,0.06)]",
        className
      )}
    >
      {children}
    </div>
  );
}