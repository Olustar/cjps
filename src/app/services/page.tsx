import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
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
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Services</SectionLabel>
          <h1 className="mb-12 text-4xl sm:text-5xl">What we offer</h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h1 className="mb-10 max-w-2xl text-3xl sm:text-4xl">
            We&apos;ve handled every situation imaginable
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="mb-3 text-2xl">Comprehensive Digital Tools</h2>
              <p>
                From electronic filing pathways to investigative databases, we
                use modern tools that keep jobs moving and clients informed.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="mb-3 text-2xl">Real World Experience</h2>
              <p>
                Field-tested servers who know how to locate subjects, navigate
                difficult properties, and complete service the right way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
