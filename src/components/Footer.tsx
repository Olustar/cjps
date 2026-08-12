import Link from "next/link";
import Image from "next/image";
import { PhoneButton } from "@/components/PhoneButton";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";

function FooterIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow/15 text-brand-yellow">
      {children}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-8 px-5 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <h2 className="max-w-md text-3xl font-bold text-white sm:text-4xl">
            Our service makes the difference.
          </h2>
          <PhoneButton />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 lg:grid-cols-4 lg:gap-8 lg:px-8">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-2">
            <span className="text-2xl font-bold italic">{SITE.shortName}</span>
            <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-white">
              <rect x="3" y="4" width="14" height="2" rx="0.5" />
              <rect x="3" y="9" width="18" height="2" rx="0.5" />
              <rect x="3" y="14" width="12" height="2" rx="0.5" />
            </svg>
          </Link>
          <p className="text-sm leading-relaxed text-white/60">{SITE.tagline}</p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Links
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/services" className="hover:text-brand-yellow">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand-yellow">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-yellow">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Info
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <FooterIcon>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </FooterIcon>
              <span className="whitespace-pre-line">{SITE.addressShort}</span>
            </li>
            <li className="flex items-center gap-3">
              <FooterIcon>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
              </FooterIcon>
              <a href={SITE.phoneHref} className="hover:text-brand-yellow">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FooterIcon>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </FooterIcon>
              <a href={SITE.emailHref} className="hover:text-brand-yellow">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <Image
            src={IMAGES.badges.napps}
            alt="NAPPS member"
            width={155}
            height={60}
            className="h-auto w-[140px] object-contain"
          />
          <Image
            src={IMAGES.badges.nysppsa}
            alt="NYSPPSA member"
            width={80}
            height={80}
            className="h-16 w-16 object-contain"
          />
          <Image
            src={IMAGES.badges.servenow}
            alt="ServeNow trusted member"
            width={120}
            height={50}
            className="h-auto w-[120px] object-contain"
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>{SITE.copyright}</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-brand-yellow">
              Privacy Policy
            </Link>
            <span aria-hidden>|</span>
            <Link href="/terms-of-use" className="hover:text-brand-yellow">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
