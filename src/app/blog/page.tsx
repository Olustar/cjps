import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionLabel>Blog</SectionLabel>
        <h1 className="mb-4 text-4xl">Updates & insights</h1>
        <p>
          Blog posts coming soon. Check back for process serving tips, New Jersey
          procedure notes, and firm updates.
        </p>
      </div>
    </section>
  );
}
