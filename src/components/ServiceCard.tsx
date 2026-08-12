import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/services";
import { IMAGES } from "@/lib/images";

const SERVICE_IMAGES: Record<string, string> = {
  "service-of-process": IMAGES.services.process,
  "subpoena-domestication": IMAGES.services.subpoena,
  "skip-tracing": IMAGES.services.skip,
};

type Props = {
  service: Service;
  variant?: "overlay" | "card";
};

export function ServiceCard({ service, variant = "card" }: Props) {
  const image = SERVICE_IMAGES[service.slug];

  if (variant === "overlay") {
    return (
      <Link
        href={`/services/${service.slug}`}
        className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-brand-light"
      >
        {image && (
          <Image
            src={image}
            alt={service.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-lg bg-brand-yellow px-4 py-3 text-sm font-bold text-brand-dark transition group-hover:brightness-95">
          {service.title}
          <span aria-hidden className="text-lg leading-none">
            →
          </span>
        </div>
      </Link>
    );
  }

  return (
    <article className="flex flex-col rounded-2xl border border-black/5 bg-brand-white p-6 shadow-card">
      <h2 className="mb-3 text-xl">{service.title}</h2>
      <p className="mb-6 flex-1 text-sm">{service.shortDescription}</p>
      <Link
        href={`/services/${service.slug}`}
        className="text-sm font-semibold text-brand-blue hover:underline"
      >
        READ MORE →
      </Link>
    </article>
  );
}
