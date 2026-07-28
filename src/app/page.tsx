import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { LearnMoreButton, PhoneButton } from "@/components/PhoneButton";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceCard } from "@/components/ServiceCard";
import { getFeaturedServices } from "@/lib/services";
import { SITE } from "@/lib/site";

const ABOUT_POINTS = [
  "Servers that can find anyone, anywhere",
  "Assisted by restricted-access investigative technology",
  "Reliability, every single time",
];

const WHY_FEATURES = [
  {
    title: "Ethical Practices",
    items: ["Integrity", "Compliance", "Confidentiality"],
  },
  {
    title: "Reliable Compliance",
    items: ["Experience", "Accuracy", "Adherence"],
  },
  {
    title: "Trusted Standards",
    items: ["Ethics", "Client-focused", "Due process"],
  },
];

const REVIEWS = [
  {
    name: "Jill Simonetta",
    role: "Paralegal from Florida",
    quote:
      "CJPS made out-of-state service simple. Fast updates, clean affidavit, and no chasing. Exactly what our firm needed.",
  },
  {
    name: "Vennis Williams",
    role: "Pro se plaintiff from NJ",
    quote:
      "As someone representing myself, I needed clear guidance. They explained the process, served my papers, and followed through.",
  },
];

export default function HomePage() {
  const featured = getFeaturedServices();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #1A1A1A 0%, #1A1A1Acc 42%, #1A1A1A55 70%, transparent 100%), linear-gradient(180deg, #1A1A1A88 0%, #1A1A1A 92%), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 pb-24 pt-28">
          <SectionLabel>Fast and Reliable</SectionLabel>
          <h1 className="mb-6 max-w-2xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Your Trusted Process Servers in Central Jersey
          </h1>
          <p className="mb-10 max-w-xl text-base text-brand-text-muted sm:text-lg">
            Central Jersey Process Service delivers fast, accurate, and reliable
            process serving across New Jersey. We combine professionalism with a
            client-friendly approach to make legal support simple and efficient.
            Our clients trust CJPS to get the job done right.
          </p>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <PhoneButton />
            <Link
              href="/services"
              className="text-sm font-medium text-brand-text-main hover:text-brand-primary"
            >
              Check All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <SectionLabel>Services</SectionLabel>
              <h1 className="text-3xl sm:text-4xl">Nationwide Service</h1>
            </div>
            <p>
              We have partners around the country to ensure that your legal
              documents are served efficiently, no matter where they are going.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service) => (
              <ServiceCard key={service.slug} service={service} variant="overlay" />
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h1 className="mb-5 text-3xl sm:text-4xl">
              We&apos;ve handled every situation imaginable
            </h1>
            <p className="mb-8">
              Our team brings years of field experience and a mastery of
              efficient process serving. From routine jobs to the hardest-to-find
              subjects, we work with professionalism and persistence until the
              job is done.
            </p>
            <ul className="mb-10 space-y-3">
              {ABOUT_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-brand-text-main">
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-brand-bg"
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <LearnMoreButton href="/services" />
              <a href={SITE.phoneHref} className="group">
                <span className="block text-xs uppercase tracking-wider text-brand-text-muted">
                  Call us
                </span>
                <span className="text-lg font-bold text-brand-text-main group-hover:text-brand-primary">
                  {SITE.phone}
                </span>
              </a>
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-600 to-neutral-900">
            <div
              className="h-full w-full bg-cover bg-center opacity-90"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80')",
              }}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-white/10 bg-black/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div
              className="aspect-[4/3] overflow-hidden rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80')",
              }}
            />
            <div>
              <SectionLabel>Why Choose Us</SectionLabel>
              <h1 className="mb-5 text-3xl sm:text-4xl">
                Upholding ethical standards and reliability
              </h1>
              <p className="mb-4">
                We prioritize legal compliance in every step of our process,
                ensuring that all service attempts adhere to the highest
                standards of ethics, accuracy, and due process.
              </p>
              <Link
                href="/services"
                className="text-sm font-semibold text-brand-primary hover:underline"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {WHY_FEATURES.map((feature) => (
              <div key={feature.title}>
                <h2 className="mb-4 text-xl">{feature.title}</h2>
                <ul className="space-y-2 text-brand-text-muted">
                  {feature.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Customer Reviews</SectionLabel>
          <h1 className="mb-10 text-3xl sm:text-4xl">
            See what our clients have to say:
          </h1>
          <div className="grid gap-6 md:grid-cols-2">
            {REVIEWS.map((review) => (
              <blockquote
                key={review.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
              >
                <p className="mb-6 text-brand-text-main">&ldquo;{review.quote}&rdquo;</p>
                <footer>
                  <cite className="not-italic font-semibold text-brand-primary">
                    {review.name}
                  </cite>
                  <p className="text-sm">{review.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Info Grid */}
      <section className="border-t border-white/10 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-3 text-lg">Our Address</h2>
            <p>{SITE.addressShort}</p>
          </div>
          <div>
            <h2 className="mb-3 text-lg">Contact us</h2>
            <p>
              <a href={SITE.emailHref} className="hover:text-brand-primary">
                {SITE.email}
              </a>
            </p>
            <p>
              <a href={SITE.phoneHref} className="hover:text-brand-primary">
                {SITE.phone}
              </a>
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-lg">Opening Hours</h2>
            <p>{SITE.hours}</p>
          </div>
        </div>
      </section>

      {/* Stats / Final Banner */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="mb-10 aspect-[21/9] overflow-hidden rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(26,26,26,0.45), rgba(26,26,26,0.65)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80')",
            }}
            role="img"
            aria-label="NYSPPSA Convention 2024"
          />
          <div className="mb-10 flex flex-wrap gap-10">
            <div>
              <p className="text-4xl font-bold text-brand-primary">10</p>
              <p className="text-sm uppercase tracking-wider">NJ Counties</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-primary">5</p>
              <p className="text-sm uppercase tracking-wider">Dedicated Servers</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
