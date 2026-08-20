import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const properties = [
  {
    image: "/images/client-1.jpg",
    title: "As-Is Purchase",
    location: "Whittier, CA",
    description: "Property purchased in current condition, helping the family avoid costly repairs and multiple showings.",
  },
  {
    image: "/images/client-2.jpg",
    title: "Probate Sale",
    location: "Commerce, CA",
    description: "Successfully navigated the legal process to help heirs settle the estate with transparency and care.",
  },
  {
    image: "/images/client-3.jpg",
    title: "Foreclosure Help",
    location: "Pico Rivera, CA",
    description: "Fast closing to prevent foreclosure, providing the homeowner with a fresh start and real value.",
  },
] as const;

export function ClientImages() {
  return (
    <section id="work" className="relative bg-forest">
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="flex items-start justify-between text-[12px] tracking-[0.22em] text-white/45 uppercase">
          <span>Recent Work</span>
          <span className="tabular-nums">03</span>
        </div>

        <div className="mt-10">
          <Reveal>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.05] text-white">
              Properties we've helped transition.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((prop, index) => (
            <Reveal key={prop.location} delay={index * 100}>
              <article className="group overflow-hidden bg-forest-deep shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-medium tracking-[0.18em] text-gold uppercase">
                    {prop.title}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-white">
                    {prop.location}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-white/60">
                    {prop.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
