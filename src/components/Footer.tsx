import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-text-main">
            Links
          </h2>
          <ul className="space-y-2 text-brand-text-muted">
            <li>
              <Link href="/services" className="hover:text-brand-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-text-main">
            Info
          </h2>
          <ul className="space-y-2 text-brand-text-muted">
            <li>{SITE.address}</li>
            <li>
              <a href={SITE.phoneHref} className="hover:text-brand-primary">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={SITE.emailHref} className="hover:text-brand-primary">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-brand-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="!text-brand-text-muted">{SITE.copyright}</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-brand-primary">
              Privacy Policy
            </Link>
            <span aria-hidden>|</span>
            <Link href="/terms-of-use" className="hover:text-brand-primary">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
