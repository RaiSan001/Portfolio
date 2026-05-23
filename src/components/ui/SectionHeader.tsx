interface SectionHeaderProps {
  label: string;       // e.g. "01"
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <span className="text-xs font-mono text-cyan-muted tracking-widest uppercase">
        {label}
      </span>
      <h2 className="mt-1 text-3xl font-bold text-text-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-16 h-px bg-gradient-to-r from-cyan-dim to-transparent" />
    </div>
  );
}