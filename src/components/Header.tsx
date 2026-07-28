import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 rounded bg-black/40 px-3 py-2"
          aria-label={`${SITE.shortName} home`}
        >
          <span className="text-xl font-bold italic tracking-tight text-brand-text-main">
            {SITE.shortName}
          </span>
          <span aria-hidden className="flex flex-col gap-0.5">
            <span className="h-0.5 w-4 bg-brand-text-main" />
            <span className="h-0.5 w-5 bg-brand-text-main" />
            <span className="h-0.5 w-3 bg-brand-text-main" />
          </span>
        </Link>

        <nav className="flex items-center gap-5 sm:gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-text-muted transition hover:text-brand-text-main"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/order-service"
          className="rounded-full border border-brand-text-main px-3 py-2 text-[10px] font-semibold tracking-wide text-brand-text-main transition hover:bg-brand-text-main hover:text-brand-bg sm:px-5 sm:text-xs"
        >
          ORDER SERVICE
        </Link>
      </div>
    </header>
  );
}
