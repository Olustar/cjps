import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/SectionLabel";
import { getService, SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-brand-blue pb-16 pt-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <SectionLabel tone="yellow">Services</SectionLabel>
          <h1 className="mb-4 max-w-3xl text-4xl text-white sm:text-5xl">{service.title}</h1>
          <p className="max-w-2xl text-lg text-white/85">{service.heroSubheading}</p>
        </div>
      </section>

      <section className="bg-brand-white py-16">
        <div className="mx-auto max-w-3xl space-y-14 px-5 lg:px-8">
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
                    <ul className="space-y-2 text-brand-muted">
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

      <section className="bg-brand-light py-16">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:grid-cols-2 lg:px-8">
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

      <section className="bg-brand-white py-16">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <h2 className="mb-4 text-3xl">Contact Us</h2>
          <p>
            Phone:{" "}
            <a href={SITE.phoneHref} className="text-brand-blue hover:underline">
              {SITE.phone}
            </a>
          </p>
          <p>
            Email:{" "}
            <a href={SITE.emailHref} className="text-brand-blue hover:underline">
              {SITE.email}
            </a>
          </p>
          <p className="mt-4">
            <Link
              href={SITE.orderServiceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-blue hover:underline"
            >
              Order Service →
            </Link>
          </p>
        </div>
      </section>

      {service.testimonials ? (
        <section className="bg-brand-light py-16">
          <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
            <h2 className="mb-8 text-3xl">Testimonials</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {service.testimonials.map((t) => (
                <blockquote
                  key={t.author}
                  className="rounded-2xl bg-brand-white p-6 shadow-card"
                >
                  <p className="mb-4 text-brand-dark">&ldquo;{t.quote}&rdquo;</p>
                  <cite className="not-italic text-sm text-brand-blue">
                    — {t.author}
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
