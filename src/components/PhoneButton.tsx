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
      className={`inline-flex flex-col items-center justify-center rounded-full bg-brand-primary px-8 py-3 text-center text-brand-bg transition hover:brightness-95 ${className}`}
    >
      <span className="text-lg font-bold leading-tight sm:text-xl">
        {SITE.phone}
      </span>
      <span className="text-xs font-medium tracking-wide">AVAILABLE NOW</span>
    </a>
  );
}

export function LearnMoreButton({
  href = "/services",
  label = "LEARN MORE",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-3 text-sm font-bold tracking-wide text-brand-bg transition hover:brightness-95"
    >
      {label}
    </Link>
  );
}
