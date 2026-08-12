import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Service of process, subpoena domestication, skip tracing, mobile notary, stakeouts, and court filing across New Jersey.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-white pb-16 pt-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <SectionLabel>Services</SectionLabel>
          <h1 className="mb-12 text-4xl sm:text-5xl">What we offer</h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="mb-10 max-w-2xl text-3xl sm:text-4xl">
            We&apos;ve handled every situation imaginable
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-brand-white p-8 shadow-card">
              <h3 className="mb-3 text-2xl">Comprehensive Digital Tools</h3>
              <p>
                From electronic filing pathways to investigative databases, we
                use modern tools that keep jobs moving and clients informed.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-white p-8 shadow-card">
              <h3 className="mb-3 text-2xl">Real World Experience</h3>
              <p>
                Field-tested servers who know how to locate subjects, navigate
                difficult properties, and complete service the right way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
