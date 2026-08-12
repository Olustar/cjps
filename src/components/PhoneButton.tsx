import Link from "next/link";
import { SITE } from "@/lib/site";

type Props = {
  href?: string;
  className?: string;
};

export function PhoneButton({ href = SITE.phoneHref, className = "" }: Props) {
  return (
    <a
      href={href}
      className={`inline-flex min-w-[200px] flex-col items-center justify-center rounded-full bg-brand-yellow px-8 py-3 text-center text-brand-dark transition hover:brightness-95 ${className}`}
    >
      <span className="text-lg font-bold leading-tight sm:text-xl">
        {SITE.phone}
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">
        Available NOW
      </span>
    </a>
  );
}

export function LearnMoreButton({
  href = "/services",
  label = "LEARN MORE",
  variant = "yellow",
}: {
  href?: string;
  label?: string;
  variant?: "yellow" | "outline-white";
}) {
  if (variant === "outline-white") {
    return (
      <Link
        href={href}
        className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-brand-blue"
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-brand-yellow px-8 py-3 text-sm font-bold uppercase tracking-wide text-brand-dark transition hover:brightness-95"
    >
      {label}
    </Link>
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          aria-hidden
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-brand-yellow"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export { StarRow };
