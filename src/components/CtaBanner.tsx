import { PhoneButton } from "@/components/PhoneButton";

type Props = {
  description?: string;
};

export function CtaBanner({
  description = "Ready to experience reliable and efficient process service? Call us today and let Central Jersey Process Service handle the details.",
}: Props) {
  return (
    <section className="border-t border-white/10 bg-black/30 py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h1 className="mb-4 text-3xl sm:text-4xl">
            Our service makes the difference.
          </h1>
          <p>{description}</p>
        </div>
        <PhoneButton />
      </div>
    </section>
  );
}
