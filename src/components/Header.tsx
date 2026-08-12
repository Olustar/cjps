"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";

function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${className}`}
      fill="currentColor"
    >
      <rect x="3" y="4" width="14" height="2" rx="0.5" />
      <rect x="3" y="9" width="18" height="2" rx="0.5" />
      <rect x="3" y="14" width="12" height="2" rx="0.5" />
      <rect x="3" y="19" width="16" height="2" rx="0.5" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const textClass = isHome ? "text-white" : "text-brand-dark";
  const mutedClass = isHome ? "text-white/80 hover:text-white" : "text-brand-muted hover:text-brand-dark";
  const orderClass = isHome
    ? "border-white text-white hover:bg-white hover:text-brand-dark"
    : "border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white";

  return (
    <header
      className={`inset-x-0 top-0 z-50 ${
        isHome ? "absolute" : "sticky bg-brand-white/95 shadow-sm backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-5 lg:px-8">
        <Link
          href="/"
          className={`flex items-center gap-2 ${textClass}`}
          aria-label={`${SITE.shortName} home`}
        >
          <span className="text-2xl font-bold italic tracking-tight">
            {SITE.shortName}
          </span>
          <LogoIcon />
        </Link>

        <nav className="flex items-center gap-6 sm:gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${mutedClass}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={SITE.orderServiceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full border px-4 py-2 text-[10px] font-semibold tracking-[0.15em] transition sm:px-5 sm:text-xs ${orderClass}`}
        >
          ORDER SERVICE
        </Link>
      </div>
    </header>
  );
}
