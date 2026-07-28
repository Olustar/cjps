import type { Metadata } from "next";
import { PhoneButton } from "@/components/PhoneButton";
import { SectionLabel } from "@/components/SectionLabel";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order Service",
  description: `Order process service from ${SITE.name}.`,
};

export default function OrderServicePage() {
  return (
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-2xl px-6">
        <SectionLabel>Order Service</SectionLabel>
        <h1 className="mb-4 text-4xl">Start your order</h1>
        <p className="mb-10">
          Call us now to place an order, or email your documents to{" "}
          <a href={SITE.emailHref} className="text-brand-primary hover:underline">
            {SITE.email}
          </a>
          . Include the documents, subject details, and your preferred timeline
          (routine, rush, or same-day).
        </p>
        <PhoneButton />
        <form className="mt-12 space-y-5" action={`mailto:${SITE.email}`} method="get">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-brand-text-muted">
              Name
            </label>
            <input
              id="name"
              name="subject"
              required
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-brand-text-main outline-none focus:border-brand-primary"
              placeholder="Your name or firm"
            />
          </div>
          <div>
            <label htmlFor="body" className="mb-2 block text-sm text-brand-text-muted">
              Job details
            </label>
            <textarea
              id="body"
              name="body"
              rows={5}
              required
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-brand-text-main outline-none focus:border-brand-primary"
              placeholder="Document type, address, deadline, and any notes"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-brand-primary px-8 py-3 text-sm font-bold tracking-wide text-brand-bg transition hover:brightness-95"
          >
            SEND VIA EMAIL
          </button>
        </form>
      </div>
    </section>
  );
}
