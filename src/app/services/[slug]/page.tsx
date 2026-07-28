import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionLabel } from "@/components/SectionLabel";
import { getService, SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-brand-bg to-brand-bg" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionLabel>Services</SectionLabel>
          <h1 className="mb-4 max-w-3xl text-4xl sm:text-5xl">{service.title}</h1>
          <p className="max-w-2xl text-lg">{service.heroSubheading}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-14 px-6">
          <div>
            <h1 className="mb-4 text-3xl">{service.whatIs.heading}</h1>
            <p>{service.whatIs.body}</p>
          </div>
          <div>
            <h1 className="mb-4 text-3xl">{service.whyChoose.heading}</h1>
            <p>{service.whyChoose.body}</p>
          </div>
          <div>
            <h1 className="mb-8 text-3xl">{service.offeringsHeading}</h1>
            <div className="space-y-8">
              {service.offerings.map((block) => (
                <div key={block.heading}>
                  <h2 className="mb-3 text-xl">{block.heading}</h2>
                  {block.body ? <p className="mb-3">{block.body}</p> : null}
                  {block.bullets ? (
                    <ul className="space-y-2 text-brand-text-muted">
                      {block.bullets.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/30 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-3xl">{service.benefitsHeading}</h1>
            <ol className="space-y-5">
              {service.benefits.map((b, i) => (
                <li key={b.title}>
                  <h2 className="text-lg">
                    {i + 1}. {b.title}
                  </h2>
                  <p className="mt-1 text-sm">{b.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h1 className="mb-6 text-3xl">How It Works</h1>
            <ol className="space-y-5">
              {service.howItWorks.map((step, i) => (
                <li key={step.title}>
                  <h2 className="text-lg">
                    {i + 1}. {step.title}
                  </h2>
                  <p className="mt-1 text-sm">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-4 text-3xl">Contact Us</h1>
          <p>
            Phone:{" "}
            <a href={SITE.phoneHref} className="text-brand-primary hover:underline">
              {SITE.phone}
            </a>
          </p>
          <p>
            Email:{" "}
            <a href={SITE.emailHref} className="text-brand-primary hover:underline">
              {SITE.email}
            </a>
          </p>
          <p className="mt-4">
            <Link href="/order-service" className="font-semibold text-brand-primary hover:underline">
              Order Service →
            </Link>
          </p>
        </div>
      </section>

      {service.testimonials ? (
        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="mb-8 text-3xl">Testimonials</h1>
            <div className="grid gap-6 md:grid-cols-2">
              {service.testimonials.map((t) => (
                <blockquote
                  key={t.author}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="mb-4 text-brand-text-main">&ldquo;{t.quote}&rdquo;</p>
                  <cite className="not-italic text-sm text-brand-primary">
                    — {t.author}
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBanner />
    </>
  );
}
