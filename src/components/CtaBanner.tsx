import { PhoneButton } from "@/components/PhoneButton";

type Props = {
  description?: string;
  className?: string;
};

export function CtaBanner({
  description = "Ready to experience reliable and efficient process service? Contact us today to discuss how we meet your service of process needs.",
  className = "",
}: Props) {
  return (
    <section className={`bg-brand-dark py-12 lg:py-16 ${className}`}>
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-8 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-lg text-3xl font-bold text-white sm:text-4xl">
          Our service makes the difference.
        </h2>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <PhoneButton />
          <p className="max-w-xs text-sm text-white/70">{description}</p>
        </div>
      </div>
    </section>
  );
}
