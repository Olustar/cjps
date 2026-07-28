import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionLabel } from "@/components/SectionLabel";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} in New Brunswick, NJ.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mb-12 text-4xl sm:text-5xl">Get in touch</h1>
          <div className="grid gap-6 sm:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 text-brand-primary" aria-hidden>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <h2 className="mb-2 text-xl">Mailing address</h2>
              <p>{SITE.address}</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 text-brand-primary" aria-hidden>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" />
                </svg>
              </div>
              <h2 className="mb-2 text-xl">Call us</h2>
              <p>
                <a href={SITE.phoneHref} className="hover:text-brand-primary">
                  {SITE.phone}
                </a>
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 text-brand-primary" aria-hidden>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
              </div>
              <h2 className="mb-2 text-xl">Email us</h2>
              <p>
                <a href={SITE.emailHref} className="hover:text-brand-primary">
                  {SITE.email}
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Central Jersey Process Service office map"
              src="https://www.google.com/maps?q=65+Morrell+St,+New+Brunswick,+NJ+08901&output=embed"
              className="h-[360px] w-full border-0 grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-10">
            <h2 className="mb-4 text-2xl">Ready to get started?</h2>
            <p className="mb-8">
              Place an order online or call us during business hours. We&apos;re
              here Monday through Friday, {SITE.hours.replace("Mon – Fri, ", "")}.
            </p>
            <Link
              href="/order-service"
              className="inline-flex w-fit items-center justify-center rounded-full border border-brand-text-main px-8 py-3 text-sm font-semibold tracking-wide text-brand-text-main transition hover:bg-brand-primary hover:text-brand-bg hover:border-brand-primary"
            >
              ORDER SERVICE
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
