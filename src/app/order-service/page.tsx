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
    <section className="bg-brand-white pb-24 pt-28">
      <div className="mx-auto max-w-2xl px-5 lg:px-8">
        <SectionLabel>Order Service</SectionLabel>
        <h1 className="mb-4 text-4xl">Start your order</h1>
        <p className="mb-10">
          Call us now to place an order, or email your documents to{" "}
          <a href={SITE.emailHref} className="text-brand-blue hover:underline">
            {SITE.email}
          </a>
          . Include the documents, subject details, and your preferred timeline
          (routine, rush, or same-day).
        </p>
        <PhoneButton />
        <form className="mt-12 space-y-5" action={`mailto:${SITE.email}`} method="get">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-brand-muted">
              Name
            </label>
            <input
              id="name"
              name="subject"
              required
              className="w-full rounded-lg border border-black/10 bg-brand-light px-4 py-3 text-brand-dark outline-none focus:border-brand-blue"
              placeholder="Your name or firm"
            />
          </div>
          <div>
            <label htmlFor="body" className="mb-2 block text-sm text-brand-muted">
              Job details
            </label>
            <textarea
              id="body"
              name="body"
              rows={5}
              required
              className="w-full rounded-lg border border-black/10 bg-brand-light px-4 py-3 text-brand-dark outline-none focus:border-brand-blue"
              placeholder="Document type, address, deadline, and any notes"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-brand-yellow px-8 py-3 text-sm font-bold tracking-wide text-brand-dark transition hover:brightness-95"
          >
            SEND VIA EMAIL
          </button>
        </form>
      </div>
    </section>
  );
}
