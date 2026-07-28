import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-3xl space-y-6 px-6">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="text-4xl">Privacy Policy</h1>
        <p>
          {SITE.name} respects your privacy. Information you share when
          requesting service — including contact details and case-related
          documents — is used solely to fulfill your order and communicate about
          your matter.
        </p>
        <p>
          We do not sell personal information. Documents and contact data are
          handled with confidentiality consistent with professional process
          serving standards.
        </p>
        <p>
          Questions about this policy:{" "}
          <a href={SITE.emailHref} className="text-brand-primary hover:underline">
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
