import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} in New Brunswick, NJ.`,
};

function ContactCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl bg-brand-white p-6 shadow-card">
      <div className="mb-4 text-brand-blue" aria-hidden>
        {icon}
      </div>
      <h2 className="mb-2 text-xl">{title}</h2>
      <div className="text-brand-muted">{children}</div>
    </article>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-white pb-16 pt-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mb-12 text-4xl sm:text-5xl">Get in touch</h1>
          <div className="grid gap-6 sm:grid-cols-3">
            <ContactCard
              title="Mailing address"
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              }
            >
              <p>{SITE.address}</p>
            </ContactCard>
            <ContactCard
              title="Call us"
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" />
                </svg>
              }
            >
              <p>
                <a href={SITE.phoneHref} className="hover:text-brand-blue">
                  {SITE.phone}
                </a>
              </p>
            </ContactCard>
            <ContactCard
              title="Email us"
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
              }
            >
              <p>
                <a href={SITE.emailHref} className="hover:text-brand-blue">
                  {SITE.email}
                </a>
              </p>
            </ContactCard>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto grid max-w-[1200px] items-stretch gap-8 px-5 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-card">
            <iframe
              title="Central Jersey Process Service office map"
              src="https://www.google.com/maps?q=65+Morrell+St,+New+Brunswick,+NJ+08901&output=embed"
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-brand-white p-10 shadow-card">
            <h2 className="mb-4 text-2xl">Ready to get started?</h2>
            <p className="mb-8">
              Place an order online or call us during business hours. We&apos;re
              here Monday through Friday, {SITE.hours.replace("Mon - Fri, ", "")}.
            </p>
            <Link
              href={SITE.orderServiceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full border border-brand-dark px-8 py-3 text-sm font-semibold tracking-wide text-brand-dark transition hover:bg-brand-yellow hover:border-brand-yellow"
            >
              ORDER SERVICE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
