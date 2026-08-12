type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: "blue" | "yellow" | "white";
};

export function SectionLabel({
  children,
  className = "",
  tone = "blue",
}: Props) {
  const colors = {
    blue: "text-brand-blue before:bg-brand-blue",
    yellow: "text-brand-yellow before:bg-brand-yellow",
    white: "text-white before:bg-white",
  };

  return (
    <p
      className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] before:inline-block before:h-px before:w-5 ${colors[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
