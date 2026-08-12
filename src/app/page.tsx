import Link from "next/link";
import Image from "next/image";
import { LearnMoreButton, PhoneButton, StarRow } from "@/components/PhoneButton";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceCard } from "@/components/ServiceCard";
import { getFeaturedServices } from "@/lib/services";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";

const ABOUT_POINTS = [
  "Servers that can find anyone, anywhere",
  "Assisted by restricted-access investigative technology",
  "Reliability, every single time",
];

const WHY_FEATURES = [
  {
    title: "Ethical Practices",
    items: ["Integrity first", "Compliance guaranteed", "Confidential processes"],
  },
  {
    title: "Reliable Compliance",
    items: [
      "Experienced professionals",
      "Accurate handling",
      "Dependable adherence",
    ],
  },
  {
    title: "Trusted Standards",
    items: ["Proven ethics", "Client-focused", "Upholding due process"],
  },
];

const REVIEWS = [
  {
    name: "Jill Simonetta",
    role: "Paralegal from Florida",
    initial: "J",
    color: "bg-orange-500",
    quote:
      "The law firm I work for (Apex Law Firm) is located in FL, but we needed a subpoena served in NJ. Max with Central Jersey Process Service was amazing! He went above and beyond to try and help us locate the correct entity to serve and maintained flawless communication throughout the process. They also have no hidden fees so what you're quoted is what you're charged. I would HIGHLY recommend Central Jersey Process Service and only wish they were nationwide, instead of just NJ.",
  },
  {
    name: "Vennis Williams",
    role: "Pro se plaintiff from New Jersey",
    initial: "V",
    color: "bg-purple-600",
    quote:
      "Excellent service!! I was hopeless and given the runaround trying to find and serve a defendant. An attorney's office recommended to call any servicing company. I googled and boy, was I in luck to find Central Jersey Process Sevice. Max was very diligent, detailed and thorough. He had an adventure tracking down the scumbag scam artist that stole my money but he got the job DONE!!! FAST TOO!! You definately get your monies worth!!",
  },
];

export default function HomePage() {
  const featured = getFeaturedServices();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        <div className="relative mx-auto flex min-h-[90vh] max-w-[1200px] flex-col justify-center px-5 pb-20 pt-28 lg:px-8">
          <SectionLabel tone="yellow">Fast and Reliable</SectionLabel>
          <h1 className="mb-6 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Your Trusted Process Servers in Central Jersey
          </h1>
          <p className="mb-10 max-w-xl text-base text-white/85 sm:text-lg">
            Central Jersey Process Service delivers fast, accurate, and reliable
            process serving across New Jersey. We combine professionalism with a
            client-friendly approach to make legal support simple and efficient.
            Our clients trust CJPS to get the job done right.
          </p>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <PhoneButton />
            <Link
              href="/services"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-brand-yellow"
            >
              Check All Services
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-white py-20">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <SectionLabel>Services</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                Nationwide Service
              </h2>
            </div>
            <p className="max-w-md lg:ml-auto">
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
      <section className="bg-brand-white py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl">
              We&apos;ve handled every situation imaginable
            </h2>
            <p className="mb-8">
              With comprehensive experience in the industry, our dedicated team
              of professionals has mastered the art of efficient and reliable
              process serving. We pride ourselves on our extensive knowledge of
              legal requirements and our ability to handle even the most complex
              serving assignments with precision and professionalism.
            </p>
            <ul className="mb-10 space-y-4">
              {ABOUT_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-brand-dark">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white"
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <LearnMoreButton href="/services" />
              <a href={SITE.phoneHref} className="group flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    Call us
                  </span>
                  <span className="text-lg font-bold text-brand-dark group-hover:text-brand-blue">
                    {SITE.phone}
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={IMAGES.about}
              alt="Process server at a residence"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative bg-brand-blue pb-32 pt-20 lg:pb-40">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={IMAGES.whyChoose}
                alt="Legal professionals reviewing documents"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:pt-4">
              <SectionLabel tone="yellow">Why Choose Us</SectionLabel>
              <h2 className="mb-5 text-3xl text-white sm:text-4xl lg:text-5xl">
                Upholding ethical standards and reliability
              </h2>
              <p className="mb-8 text-white/85">
                We prioritize legal compliance in every step of our process,
                ensuring that all service attempts adhere to the highest
                standards and regulations, giving you peace of mind and
                minimizing any potential legal risks.
              </p>
              <LearnMoreButton href="/contact" variant="outline-white" />
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 translate-y-1/2 px-5 lg:px-8">
          <div className="mx-auto max-w-[1200px] rounded-3xl bg-brand-yellow px-8 py-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 sm:grid-cols-3">
              {WHY_FEATURES.map((feature) => (
                <div key={feature.title}>
                  <h3 className="mb-4 text-lg font-bold text-brand-dark">
                    {feature.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-brand-dark/80">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-brand-light pb-20 pt-32 lg:pt-40">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <div className="mb-12 text-center">
            <SectionLabel className="justify-center">Customer Reviews</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              See what our clients have to say:
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {REVIEWS.map((review) => (
              <article
                key={review.name}
                className="relative rounded-2xl bg-brand-white p-8 shadow-card"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 48 48"
                  className="absolute right-8 top-8 h-10 w-10 fill-brand-blue/20"
                >
                  <path d="M14 28h8V14H8v8c0 3.3 2.7 6 6 6zm16 0h8V14H24v8c0 3.3 2.7 6 6 6z" />
                </svg>
                <div className="mb-6 flex items-start gap-4">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-2xl font-bold text-white ${review.color}`}
                  >
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">{review.name}</p>
                    <p className="text-sm text-brand-muted">{review.role}</p>
                    <div className="mt-2">
                      <StarRow />
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-brand-muted">
                  {review.quote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Stats Grid */}
      <section className="bg-brand-white pb-20">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <div className="grid gap-0 overflow-hidden rounded-3xl lg:grid-cols-2">
            <div className="bg-brand-blue p-10 text-white lg:p-12">
              <div className="mb-10">
                <h3 className="mb-3 text-lg font-bold text-white">Our Address</h3>
                <p className="whitespace-pre-line text-white/85">{SITE.addressShort}</p>
              </div>
              <div className="mb-10">
                <h3 className="mb-3 text-lg font-bold text-white">Contact us</h3>
                <p className="mb-2">
                  <a href={SITE.emailHref} className="text-white/85 hover:text-brand-yellow">
                    {SITE.email}
                  </a>
                </p>
                <p>
                  <a href={SITE.phoneHref} className="text-white/85 hover:text-brand-yellow">
                    {SITE.phone}
                  </a>
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-bold text-white">Hours</h3>
                <p className="flex items-center gap-3 text-white/85">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-brand-yellow">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
                  </svg>
                  {SITE.hours}
                </p>
              </div>
            </div>

            <div className="grid grid-rows-[1fr_auto]">
              <div className="relative min-h-[220px]">
                <Image
                  src={IMAGES.team}
                  alt="Central Jersey Process Service team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-3 bg-brand-yellow px-6 py-10 text-center">
                {Object.values(SITE.stats).map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl font-bold text-brand-dark lg:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-brand-dark/80 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
