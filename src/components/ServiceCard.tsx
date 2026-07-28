import Link from "next/link";
import type { Service } from "@/lib/services";

type Props = {
  service: Service;
  variant?: "overlay" | "card";
};

export function ServiceCard({ service, variant = "card" }: Props) {
  if (variant === "overlay") {
    return (
      <Link
        href={`/services/${service.slug}`}
        className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-700 to-neutral-900"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,208,63,0.15),_transparent_50%)]" />
        <div className="absolute bottom-4 left-4 rounded bg-brand-primary px-4 py-2 text-sm font-bold text-brand-bg transition group-hover:brightness-95">
          {service.title} →
        </div>
      </Link>
    );
  }

  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="mb-3 text-xl">{service.title}</h2>
      <p className="mb-6 flex-1 text-sm">{service.shortDescription}</p>
      <Link
        href={`/services/${service.slug}`}
        className="text-sm font-semibold text-brand-primary hover:underline"
      >
        READ MORE →
      </Link>
    </article>
  );
}
