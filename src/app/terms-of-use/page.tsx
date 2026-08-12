import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsOfUsePage() {
  return (
    <section className="bg-brand-white pb-24 pt-28">
      <div className="mx-auto max-w-3xl space-y-6 px-5 lg:px-8">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="text-4xl">Terms of Use</h1>
        <p>
          By using the {SITE.name} website, you agree to use the information
          provided for lawful purposes. Content on this site is for general
          information about our services and does not constitute legal advice.
        </p>
        <p>
          Service engagements are governed by the terms communicated at the time
          of order. Fees, timelines, and scope are confirmed before work begins.
        </p>
        <p>
          Contact:{" "}
          <a href={SITE.emailHref} className="text-brand-blue hover:underline">
            {SITE.email}
          </a>{" "}
          ·{" "}
          <a href={SITE.phoneHref} className="text-brand-blue hover:underline">
            {SITE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
