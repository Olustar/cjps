type Props = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: Props) {
  return (
    <p
      className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary ${className}`}
    >
      <span aria-hidden className="inline-block h-px w-4 bg-brand-primary" />
      {children}
    </p>
  );
}
